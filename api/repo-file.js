const { getSessionFromRequest } = require('./_auth');
const { hasRepoEnv, githubGetFile, githubPutFile } = require('./_github');

const EDITABLE_PREFIXES = ['assets/', 'admin/'];
const EDITABLE_EXACT = new Set(['index.html', 'README.md', 'scripts/crawl_ai_jobs_news.py']);
const BLOCKED_PATHS = new Set(['.admin/auth-config.json']);

function sendJson(res, status, payload) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.end(JSON.stringify(payload));
}

function isEditablePath(path) {
  if (!path || path.includes('..') || path.startsWith('/')) {
    return false;
  }
  if (BLOCKED_PATHS.has(path)) {
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

module.exports = async (req, res) => {
  if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    res.end();
    return;
  }

  if (!hasRepoEnv()) {
    sendJson(res, 500, { error: 'GITHUB_TOKEN/GITHUB_OWNER/GITHUB_REPO mangler.' });
    return;
  }

  const session = getSessionFromRequest(req);
  if (!session.ok) {
    sendJson(res, 401, { error: 'Ikke autentisert. Logg inn i adminpanelet.' });
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
    const body = parseBody(req);
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
