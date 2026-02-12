const EDITABLE_PREFIXES = ['assets/', 'admin/'];
const EDITABLE_EXACT = new Set(['index.html', 'README.md', 'scripts/crawl_ai_jobs_news.py']);

function sendJson(res, status, payload) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.end(JSON.stringify(payload));
}

function getToken(req) {
  const authHeader = req.headers.authorization || '';
  if (authHeader.startsWith('Bearer ')) {
    return authHeader.slice(7).trim();
  }
  const keyHeader = req.headers['x-admin-key'];
  if (typeof keyHeader === 'string') {
    return keyHeader.trim();
  }
  return '';
}

function hasRepoEnv() {
  return (
    Boolean(process.env.GITHUB_TOKEN) &&
    Boolean(process.env.GITHUB_OWNER) &&
    Boolean(process.env.GITHUB_REPO)
  );
}

function getBranch() {
  return process.env.GITHUB_BRANCH || 'main';
}

function encodeRepoPath(path) {
  return path
    .split('/')
    .filter(Boolean)
    .map((segment) => encodeURIComponent(segment))
    .join('/');
}

function isEditablePath(path) {
  if (!path || path.includes('..') || path.startsWith('/')) {
    return false;
  }
  if (EDITABLE_EXACT.has(path)) {
    return true;
  }
  return EDITABLE_PREFIXES.some((prefix) => path.startsWith(prefix));
}

function getQueryParam(req, name) {
  if (req.query && req.query[name]) {
    const value = req.query[name];
    return Array.isArray(value) ? value[0] : value;
  }
  try {
    const url = new URL(req.url || '/', 'http://localhost');
    return url.searchParams.get(name);
  } catch {
    return null;
  }
}

async function githubGetFile(path) {
  const owner = process.env.GITHUB_OWNER;
  const repo = process.env.GITHUB_REPO;
  const branch = getBranch();
  const encodedPath = encodeRepoPath(path);
  const url = `https://api.github.com/repos/${owner}/${repo}/contents/${encodedPath}?ref=${encodeURIComponent(branch)}`;

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      Accept: 'application/vnd.github+json',
      'User-Agent': 'intelligenspartiet-admin',
    },
  });

  const payload = await response.json();
  if (!response.ok) {
    throw new Error(payload.message || `GitHub GET failed (${response.status})`);
  }

  const content = Buffer.from(payload.content || '', 'base64').toString('utf8');

  return {
    sha: payload.sha,
    content,
    html_url: payload.html_url || null,
    branch,
  };
}

async function githubPutFile({ path, content, sha, message }) {
  const owner = process.env.GITHUB_OWNER;
  const repo = process.env.GITHUB_REPO;
  const branch = getBranch();
  const encodedPath = encodeRepoPath(path);
  const url = `https://api.github.com/repos/${owner}/${repo}/contents/${encodedPath}`;

  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      Accept: 'application/vnd.github+json',
      'User-Agent': 'intelligenspartiet-admin',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message,
      content: Buffer.from(content, 'utf8').toString('base64'),
      sha,
      branch,
    }),
  });

  const payload = await response.json();
  if (!response.ok) {
    throw new Error(payload.message || `GitHub PUT failed (${response.status})`);
  }

  return {
    sha: payload.content?.sha || null,
    commit_url: payload.commit?.html_url || null,
    branch,
  };
}

module.exports = async (req, res) => {
  if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    res.end();
    return;
  }

  const expectedKey = process.env.ADMIN_API_KEY;
  if (!expectedKey) {
    sendJson(res, 500, { error: 'ADMIN_API_KEY mangler i environment variables.' });
    return;
  }

  if (!hasRepoEnv()) {
    sendJson(res, 500, { error: 'GITHUB_TOKEN/GITHUB_OWNER/GITHUB_REPO mangler i environment variables.' });
    return;
  }

  const provided = getToken(req);
  if (provided !== expectedKey) {
    sendJson(res, 401, { error: 'Ugyldig admin-nokkel.' });
    return;
  }

  if (req.method === 'GET') {
    const path = String(getQueryParam(req, 'path') || '');

    if (!isEditablePath(path)) {
      sendJson(res, 400, { error: 'Path er ikke tillatt.', path });
      return;
    }

    try {
      const file = await githubGetFile(path);
      sendJson(res, 200, {
        ok: true,
        path,
        sha: file.sha,
        branch: file.branch,
        html_url: file.html_url,
        content: file.content,
      });
    } catch (error) {
      sendJson(res, 502, { error: String(error.message || error) });
    }
    return;
  }

  if (req.method === 'PUT') {
    const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body || {};
    const path = String(body.path || '');
    const content = typeof body.content === 'string' ? body.content : null;
    const sha = typeof body.sha === 'string' ? body.sha : null;
    const message = typeof body.message === 'string' && body.message.trim()
      ? body.message.trim()
      : `Admin update: ${path}`;

    if (!isEditablePath(path)) {
      sendJson(res, 400, { error: 'Path er ikke tillatt.', path });
      return;
    }

    if (content === null) {
      sendJson(res, 400, { error: 'content må være en tekststreng.' });
      return;
    }

    if (!sha) {
      sendJson(res, 400, { error: 'sha mangler. Last filen pa nytt før lagring.' });
      return;
    }

    try {
      const result = await githubPutFile({ path, content, sha, message });
      sendJson(res, 200, {
        ok: true,
        path,
        sha: result.sha,
        branch: result.branch,
        commit_url: result.commit_url,
      });
    } catch (error) {
      sendJson(res, 502, { error: String(error.message || error) });
    }
    return;
  }

  sendJson(res, 405, { error: 'Method not allowed. Use GET or PUT.' });
};
