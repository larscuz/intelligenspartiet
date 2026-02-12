const crypto = require('crypto');

const SESSION_COOKIE = 'ip_admin_session';
const SESSION_TTL_SECONDS = 60 * 60 * 24 * 7;

function parseCookies(req) {
  const header = req.headers.cookie || '';
  const output = {};

  header.split(';').forEach((pair) => {
    const index = pair.indexOf('=');
    if (index <= 0) return;
    const key = pair.slice(0, index).trim();
    const value = pair.slice(index + 1).trim();
    if (!key) return;
    output[key] = decodeURIComponent(value);
  });

  return output;
}

function base64UrlEncode(input) {
  return Buffer.from(input, 'utf8').toString('base64url');
}

function base64UrlDecode(input) {
  return Buffer.from(input, 'base64url').toString('utf8');
}

function getSessionSecret() {
  return process.env.ADMIN_SESSION_SECRET || '';
}

function signPayload(payload) {
  const secret = getSessionSecret();
  if (!secret) {
    throw new Error('ADMIN_SESSION_SECRET mangler.');
  }
  return crypto
    .createHmac('sha256', secret)
    .update(payload)
    .digest('base64url');
}

function createSessionToken(email) {
  const exp = Math.floor(Date.now() / 1000) + SESSION_TTL_SECONDS;
  const nonce = crypto.randomBytes(10).toString('hex');
  const payloadObject = { email, exp, nonce };
  const payload = base64UrlEncode(JSON.stringify(payloadObject));
  const signature = signPayload(payload);
  return `${payload}.${signature}`;
}

function verifySessionToken(token) {
  if (!token) {
    return { ok: false, reason: 'missing' };
  }

  const parts = token.split('.');
  if (parts.length !== 2) {
    return { ok: false, reason: 'format' };
  }

  const [payload, signature] = parts;

  let expected;
  try {
    expected = signPayload(payload);
  } catch (error) {
    return { ok: false, reason: String(error.message || error) };
  }

  const left = Buffer.from(signature);
  const right = Buffer.from(expected);

  if (left.length !== right.length || !crypto.timingSafeEqual(left, right)) {
    return { ok: false, reason: 'signature' };
  }

  try {
    const decoded = JSON.parse(base64UrlDecode(payload));
    const now = Math.floor(Date.now() / 1000);

    if (!decoded || typeof decoded.email !== 'string' || typeof decoded.exp !== 'number') {
      return { ok: false, reason: 'payload' };
    }

    if (decoded.exp < now) {
      return { ok: false, reason: 'expired' };
    }

    return { ok: true, email: decoded.email, exp: decoded.exp };
  } catch {
    return { ok: false, reason: 'decode' };
  }
}

function getSessionFromRequest(req) {
  const cookies = parseCookies(req);
  const token = cookies[SESSION_COOKIE] || '';
  return verifySessionToken(token);
}

function isSecureRequest(req) {
  const proto = req.headers['x-forwarded-proto'];
  if (typeof proto === 'string') {
    return proto.includes('https');
  }
  return false;
}

function createSessionCookie(req, token) {
  const cookie = [
    `${SESSION_COOKIE}=${encodeURIComponent(token)}`,
    'Path=/',
    `Max-Age=${SESSION_TTL_SECONDS}`,
    'HttpOnly',
    'SameSite=Lax',
  ];

  if (isSecureRequest(req)) {
    cookie.push('Secure');
  }

  return cookie.join('; ');
}

function clearSessionCookie(req) {
  const cookie = [`${SESSION_COOKIE}=`, 'Path=/', 'Max-Age=0', 'HttpOnly', 'SameSite=Lax'];
  if (isSecureRequest(req)) {
    cookie.push('Secure');
  }
  return cookie.join('; ');
}

module.exports = {
  createSessionToken,
  getSessionFromRequest,
  createSessionCookie,
  clearSessionCookie,
};
