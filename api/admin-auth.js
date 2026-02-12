const crypto = require('crypto');
const {
  createSessionToken,
  getSessionFromRequest,
  createSessionCookie,
  clearSessionCookie,
} = require('./_auth');
const { getRepoEnvStatus, githubGetFile, githubPutFile } = require('./_github');

const AUTH_CONFIG_PATH = '.admin/auth-config.json';

function sendJson(res, status, payload) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.end(JSON.stringify(payload));
}

function normalizeEmail(input) {
  return String(input || '').trim().toLowerCase();
}

function safeEqualHex(a, b) {
  const left = Buffer.from(String(a || ''), 'hex');
  const right = Buffer.from(String(b || ''), 'hex');
  if (left.length !== right.length || left.length === 0) {
    return false;
  }
  return crypto.timingSafeEqual(left, right);
}

function hashPassword(password, salt, pepper) {
  return crypto.scryptSync(`${password}${pepper}`, salt, 64).toString('hex');
}

function validatePassword(password) {
  if (typeof password !== 'string' || password.length < 12) {
    return 'Passord må være minst 12 tegn.';
  }
  return '';
}

function parseBody(req) {
  if (!req.body) return {};
  if (typeof req.body === 'string') {
    try {
      return JSON.parse(req.body || '{}');
    } catch {
      return {};
    }
  }
  return req.body;
}

async function loadAuthConfig() {
  const file = await githubGetFile(AUTH_CONFIG_PATH, { allowMissing: true });
  if (!file) {
    return null;
  }

  let data;
  try {
    data = JSON.parse(file.content || '{}');
  } catch {
    throw new Error('auth-config er ugyldig JSON.');
  }

  return {
    sha: file.sha,
    data,
  };
}

async function saveAuthConfig(content, sha, message) {
  return githubPutFile({
    path: AUTH_CONFIG_PATH,
    content: JSON.stringify(content, null, 2),
    sha,
    message,
  });
}

module.exports = async (req, res) => {
  if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    res.end();
    return;
  }

  const repoEnvStatus = getRepoEnvStatus();
  if (!repoEnvStatus.ok) {
    sendJson(res, 500, {
      error: `GITHUB_TOKEN/GITHUB_OWNER/GITHUB_REPO mangler. Mangler: ${repoEnvStatus.missing.join(', ')}`,
      missing: repoEnvStatus.missing,
      resolved: repoEnvStatus.resolved,
      sources: repoEnvStatus.sources,
    });
    return;
  }

  const adminEmailEnv = normalizeEmail(process.env.ADMIN_EMAIL);
  const pepper = process.env.ADMIN_PEPPER || '';
  const setupKey = process.env.ADMIN_SETUP_KEY || process.env.ADMIN_API_KEY || '';

  if (!pepper) {
    sendJson(res, 500, { error: 'ADMIN_PEPPER mangler i environment variables.' });
    return;
  }

  let authConfig = null;
  try {
    authConfig = await loadAuthConfig();
  } catch (error) {
    sendJson(res, 502, { error: String(error.message || error) });
    return;
  }

  const configured = Boolean(authConfig && authConfig.data && authConfig.data.password_hash);
  const configEmail = configured ? normalizeEmail(authConfig.data.email) : '';
  const session = getSessionFromRequest(req);

  if (req.method === 'GET') {
    sendJson(res, 200, {
      ok: true,
      configured,
      admin_email: adminEmailEnv || configEmail || '',
      authenticated: session.ok,
      session_email: session.ok ? session.email : '',
    });
    return;
  }

  if (req.method !== 'POST') {
    sendJson(res, 405, { error: 'Method not allowed. Use GET or POST.' });
    return;
  }

  const body = parseBody(req);
  const action = String(body.action || '').trim();

  if (action === 'logout') {
    res.setHeader('Set-Cookie', clearSessionCookie(req));
    sendJson(res, 200, { ok: true, message: 'Logget ut.' });
    return;
  }

  if (action === 'setup') {
    if (configured) {
      sendJson(res, 409, { error: 'Passord er allerede satt.' });
      return;
    }

    if (!setupKey) {
      sendJson(res, 500, { error: 'ADMIN_SETUP_KEY mangler. Kan ikke fullføre setup.' });
      return;
    }

    const email = normalizeEmail(body.email);
    const password = String(body.password || '');
    const bootstrapKey = String(body.bootstrap_key || '');

    if (!adminEmailEnv) {
      sendJson(res, 500, { error: 'ADMIN_EMAIL mangler i environment variables.' });
      return;
    }

    if (email !== adminEmailEnv) {
      sendJson(res, 400, { error: 'E-post må være admin e-post.' });
      return;
    }

    if (bootstrapKey !== setupKey) {
      sendJson(res, 401, { error: 'Ugyldig setup-nokkel.' });
      return;
    }

    const passwordError = validatePassword(password);
    if (passwordError) {
      sendJson(res, 400, { error: passwordError });
      return;
    }

    const salt = crypto.randomBytes(16).toString('hex');
    const passwordHash = hashPassword(password, salt, pepper);

    try {
      await saveAuthConfig(
        {
          email: adminEmailEnv,
          password_salt: salt,
          password_hash: passwordHash,
          version: 1,
          updated_at: new Date().toISOString(),
        },
        null,
        'Initialize admin password'
      );
    } catch (error) {
      sendJson(res, 502, { error: String(error.message || error) });
      return;
    }

    const token = createSessionToken(adminEmailEnv);
    res.setHeader('Set-Cookie', createSessionCookie(req, token));

    sendJson(res, 200, {
      ok: true,
      configured: true,
      authenticated: true,
      admin_email: adminEmailEnv,
    });
    return;
  }

  if (action === 'login') {
    if (!configured) {
      sendJson(res, 409, { error: 'Passord er ikke satt enda. Kjør setup først.' });
      return;
    }

    const email = normalizeEmail(body.email);
    const password = String(body.password || '');

    if (!email || !password) {
      sendJson(res, 400, { error: 'E-post og passord er paakrevd.' });
      return;
    }

    const expectedEmail = configEmail || adminEmailEnv;
    if (!expectedEmail || email !== expectedEmail) {
      sendJson(res, 401, { error: 'Ugyldig e-post eller passord.' });
      return;
    }

    const salt = String(authConfig.data.password_salt || '');
    const storedHash = String(authConfig.data.password_hash || '');

    const candidateHash = hashPassword(password, salt, pepper);
    const ok = safeEqualHex(candidateHash, storedHash);

    if (!ok) {
      sendJson(res, 401, { error: 'Ugyldig e-post eller passord.' });
      return;
    }

    const token = createSessionToken(expectedEmail);
    res.setHeader('Set-Cookie', createSessionCookie(req, token));

    sendJson(res, 200, {
      ok: true,
      configured: true,
      authenticated: true,
      admin_email: expectedEmail,
    });
    return;
  }

  sendJson(res, 400, { error: 'Ukjent action. Bruk setup, login eller logout.' });
};
