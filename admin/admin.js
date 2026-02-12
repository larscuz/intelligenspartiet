const STORAGE_KEY = 'ip_admin_api_key';

const FILE_OPTIONS = [
  'assets/data/kling3-prompts.json',
  'assets/data/ai-jobs-news.json',
  'index.html',
  'assets/css/style.css',
  'assets/js/main.js',
  'README.md',
  'scripts/crawl_ai_jobs_news.py',
  'admin/index.html',
  'admin/admin.css',
  'admin/admin.js',
];

const state = {
  token: '',
  currentPath: FILE_OPTIONS[0],
  sha: '',
};

const apiKeyInput = document.querySelector('#api-key');
const authStatus = document.querySelector('#auth-status');
const saveKeyButton = document.querySelector('#save-key');
const testKeyButton = document.querySelector('#test-key');
const fileSelect = document.querySelector('#file-select');
const loadFileButton = document.querySelector('#load-file');
const formatJsonButton = document.querySelector('#format-json');
const commitMessageInput = document.querySelector('#commit-message');
const fileEditor = document.querySelector('#file-editor');
const saveFileButton = document.querySelector('#save-file');
const fileMeta = document.querySelector('#file-meta');
const saveStatus = document.querySelector('#save-status');
const quickOpenButtons = Array.from(document.querySelectorAll('.quick-open'));

function setStatus(node, message, kind = '') {
  if (!node) return;
  node.textContent = message;
  node.classList.remove('ok', 'error');
  if (kind) {
    node.classList.add(kind);
  }
}

function requireToken() {
  if (state.token) return true;
  setStatus(authStatus, 'Mangler API key. Lim inn og lagre først.', 'error');
  return false;
}

function populateFileSelect() {
  if (!fileSelect) return;
  fileSelect.innerHTML = '';

  FILE_OPTIONS.forEach((path) => {
    const option = document.createElement('option');
    option.value = path;
    option.textContent = path;
    fileSelect.appendChild(option);
  });

  fileSelect.value = state.currentPath;
}

async function apiRequest(method, path, payload) {
  const headers = {
    Authorization: `Bearer ${state.token}`,
  };

  const options = {
    method,
    headers,
  };

  if (payload) {
    headers['Content-Type'] = 'application/json';
    options.body = JSON.stringify(payload);
  }

  const response = await fetch(path, options);
  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.error || `HTTP ${response.status}`);
  }

  return data;
}

async function loadFile(path) {
  if (!requireToken()) return;
  setStatus(saveStatus, 'Laster fil ...');

  try {
    const data = await apiRequest('GET', `/api/repo-file?path=${encodeURIComponent(path)}`);
    state.currentPath = data.path;
    state.sha = data.sha || '';

    if (fileSelect) fileSelect.value = state.currentPath;
    if (fileEditor) fileEditor.value = data.content || '';

    setStatus(fileMeta, `Fil: ${data.path} | SHA: ${String(data.sha || '').slice(0, 10)} | Branch: ${data.branch || 'main'}`);
    setStatus(saveStatus, 'Fil lastet.', 'ok');
  } catch (error) {
    setStatus(saveStatus, `Kunne ikke laste fil: ${String(error.message || error)}`, 'error');
  }
}

async function saveFile() {
  if (!requireToken()) return;
  if (!fileEditor) return;

  const message = (commitMessageInput && commitMessageInput.value.trim()) || `Admin update: ${state.currentPath}`;

  if (!state.sha) {
    setStatus(saveStatus, 'Mangler SHA. Last filen pa nytt før lagring.', 'error');
    return;
  }

  setStatus(saveStatus, 'Lagrer til GitHub ...');

  try {
    const data = await apiRequest('PUT', '/api/repo-file', {
      path: state.currentPath,
      content: fileEditor.value,
      sha: state.sha,
      message,
    });

    state.sha = data.sha || '';
    setStatus(fileMeta, `Fil: ${data.path} | SHA: ${String(data.sha || '').slice(0, 10)} | Branch: ${data.branch || 'main'}`);
    const commitNote = data.commit_url ? ` Commit: ${data.commit_url}` : '';
    setStatus(saveStatus, `Lagret.${commitNote}`, 'ok');
  } catch (error) {
    setStatus(saveStatus, `Lagring feilet: ${String(error.message || error)}`, 'error');
  }
}

function saveToken() {
  const token = apiKeyInput ? apiKeyInput.value.trim() : '';
  state.token = token;

  if (!token) {
    localStorage.removeItem(STORAGE_KEY);
    setStatus(authStatus, 'Nøkkel fjernet.', 'error');
    return;
  }

  localStorage.setItem(STORAGE_KEY, token);
  setStatus(authStatus, 'Nøkkel lagret lokalt i nettleseren.', 'ok');
}

async function testConnection() {
  if (!requireToken()) return;
  setStatus(authStatus, 'Tester API ...');

  try {
    await apiRequest('GET', '/api/repo-file?path=README.md');
    setStatus(authStatus, 'Tilkobling OK.', 'ok');
  } catch (error) {
    setStatus(authStatus, `Tilkobling feilet: ${String(error.message || error)}`, 'error');
  }
}

function formatIfJson() {
  if (!fileEditor) return;
  const path = state.currentPath || '';
  if (!path.endsWith('.json')) {
    setStatus(saveStatus, 'Format JSON fungerer kun pa .json-filer.');
    return;
  }

  try {
    const parsed = JSON.parse(fileEditor.value);
    fileEditor.value = JSON.stringify(parsed, null, 2);
    setStatus(saveStatus, 'JSON formatert.', 'ok');
  } catch (error) {
    setStatus(saveStatus, `Ugyldig JSON: ${String(error.message || error)}`, 'error');
  }
}

function initQuickButtons() {
  quickOpenButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const path = button.dataset.path;
      if (!path) return;
      state.currentPath = path;
      if (fileSelect) fileSelect.value = path;
      loadFile(path);
    });
  });
}

function initKeyboardShortcut() {
  window.addEventListener('keydown', (event) => {
    const isSaveCombo = (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 's';
    if (!isSaveCombo) return;

    event.preventDefault();
    saveFile();
  });
}

function init() {
  const saved = localStorage.getItem(STORAGE_KEY) || '';
  state.token = saved;
  if (apiKeyInput) apiKeyInput.value = saved;

  populateFileSelect();
  initQuickButtons();
  initKeyboardShortcut();

  if (saveKeyButton) saveKeyButton.addEventListener('click', saveToken);
  if (testKeyButton) testKeyButton.addEventListener('click', testConnection);

  if (fileSelect) {
    fileSelect.addEventListener('change', () => {
      state.currentPath = fileSelect.value;
    });
  }

  if (loadFileButton) {
    loadFileButton.addEventListener('click', () => {
      loadFile(state.currentPath);
    });
  }

  if (formatJsonButton) {
    formatJsonButton.addEventListener('click', formatIfJson);
  }

  if (saveFileButton) {
    saveFileButton.addEventListener('click', saveFile);
  }

  if (state.token) {
    setStatus(authStatus, 'Nøkkel funnet i nettleseren.', 'ok');
  }

  setStatus(fileMeta, `Klar. Velg fil og trykk "Last fil".`);
}

init();
