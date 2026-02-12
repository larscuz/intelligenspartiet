function pickEnv(candidates) {
  for (const candidate of candidates) {
    const value = String(candidate.value || '').trim();
    if (value) {
      return {
        value,
        source: candidate.name,
      };
    }
  }
  return {
    value: '',
    source: '',
  };
}

function parseOwnerRepo(repositoryValue) {
  const value = String(repositoryValue || '').trim();
  if (!value) {
    return { owner: '', repo: '' };
  }

  const parts = value.split('/').filter(Boolean);
  if (parts.length < 2) {
    return { owner: '', repo: '' };
  }

  return {
    owner: parts[0],
    repo: parts[1],
  };
}

function normalizeBranch(branch) {
  const value = String(branch || '').trim();
  if (!value) {
    return '';
  }

  if (value.startsWith('refs/heads/')) {
    return value.slice('refs/heads/'.length);
  }

  return value;
}

function resolveRepoEnv() {
  const repoFromPair = parseOwnerRepo(process.env.GITHUB_REPOSITORY);

  const token = pickEnv([
    { name: 'GITHUB_TOKEN', value: process.env.GITHUB_TOKEN },
    { name: 'GH_TOKEN', value: process.env.GH_TOKEN },
    { name: 'GITHUB_PAT', value: process.env.GITHUB_PAT },
  ]);

  const owner = pickEnv([
    { name: 'GITHUB_OWNER', value: process.env.GITHUB_OWNER },
    { name: 'GH_OWNER', value: process.env.GH_OWNER },
    { name: 'GITHUB_ORG', value: process.env.GITHUB_ORG },
    { name: 'GITHUB_REPOSITORY(owner)', value: repoFromPair.owner },
    { name: 'VERCEL_GIT_REPO_OWNER', value: process.env.VERCEL_GIT_REPO_OWNER },
  ]);

  const repo = pickEnv([
    { name: 'GITHUB_REPO', value: process.env.GITHUB_REPO },
    { name: 'GH_REPO', value: process.env.GH_REPO },
    { name: 'GITHUB_REPOSITORY(repo)', value: repoFromPair.repo },
    { name: 'VERCEL_GIT_REPO_SLUG', value: process.env.VERCEL_GIT_REPO_SLUG },
  ]);

  const branch = pickEnv([
    { name: 'GITHUB_BRANCH', value: process.env.GITHUB_BRANCH },
    { name: 'VERCEL_GIT_COMMIT_REF', value: normalizeBranch(process.env.VERCEL_GIT_COMMIT_REF) },
    { name: 'default', value: 'main' },
  ]);

  return {
    token: token.value,
    owner: owner.value,
    repo: repo.value,
    branch: branch.value || 'main',
    sources: {
      token: token.source || null,
      owner: owner.source || null,
      repo: repo.source || null,
      branch: branch.source || null,
    },
  };
}

function getRepoEnvStatus() {
  const resolved = resolveRepoEnv();
  const missing = [];
  if (!resolved.token) missing.push('GITHUB_TOKEN');
  if (!resolved.owner) missing.push('GITHUB_OWNER');
  if (!resolved.repo) missing.push('GITHUB_REPO');

  return {
    ok: missing.length === 0,
    missing,
    resolved: {
      owner: resolved.owner || null,
      repo: resolved.repo || null,
      branch: resolved.branch || 'main',
    },
    sources: resolved.sources,
  };
}

function hasRepoEnv() {
  return getRepoEnvStatus().ok;
}

function getBranch() {
  return resolveRepoEnv().branch || 'main';
}

function encodeRepoPath(path) {
  return path
    .split('/')
    .filter(Boolean)
    .map((segment) => encodeURIComponent(segment))
    .join('/');
}

function requestHeaders(token) {
  return {
    Authorization: `Bearer ${token}`,
    Accept: 'application/vnd.github+json',
    'User-Agent': 'intelligenspartiet-admin',
  };
}

async function githubGetFile(path, options = {}) {
  const resolved = resolveRepoEnv();
  const owner = resolved.owner;
  const repo = resolved.repo;
  const branch = resolved.branch;
  const encodedPath = encodeRepoPath(path);
  const url = `https://api.github.com/repos/${owner}/${repo}/contents/${encodedPath}?ref=${encodeURIComponent(branch)}`;

  const response = await fetch(url, {
    headers: requestHeaders(resolved.token),
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
  const resolved = resolveRepoEnv();
  const owner = resolved.owner;
  const repo = resolved.repo;
  const branch = resolved.branch;
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
      ...requestHeaders(resolved.token),
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
  getRepoEnvStatus,
  getBranch,
  githubGetFile,
  githubPutFile,
};
