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

function requestHeaders() {
  return {
    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    Accept: 'application/vnd.github+json',
    'User-Agent': 'intelligenspartiet-admin',
  };
}

async function githubGetFile(path, options = {}) {
  const owner = process.env.GITHUB_OWNER;
  const repo = process.env.GITHUB_REPO;
  const branch = getBranch();
  const encodedPath = encodeRepoPath(path);
  const url = `https://api.github.com/repos/${owner}/${repo}/contents/${encodedPath}?ref=${encodeURIComponent(branch)}`;

  const response = await fetch(url, {
    headers: requestHeaders(),
  });

  const payload = await response.json();

  if (!response.ok) {
    if (options.allowMissing && response.status === 404) {
      return null;
    }
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

  const payload = {
    message,
    content: Buffer.from(content, 'utf8').toString('base64'),
    branch,
  };

  if (sha) {
    payload.sha = sha;
  }

  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      ...requestHeaders(),
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.message || `GitHub PUT failed (${response.status})`);
  }

  return {
    sha: result.content?.sha || null,
    commit_url: result.commit?.html_url || null,
    branch,
  };
}

module.exports = {
  hasRepoEnv,
  getBranch,
  githubGetFile,
  githubPutFile,
};
