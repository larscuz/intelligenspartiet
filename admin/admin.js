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
  currentPath: FILE_OPTIONS[0],
  sha: '',
  authenticated: false,
  configured: true,
  adminEmail: '',
};

const loginPanel = document.querySelector('#login-panel');
const setupPanel = document.querySelector('#setup-panel');
const authMode = document.querySelector('#auth-mode');
const authStatus = document.querySelector('#auth-status');

const loginEmailInput = document.querySelector('#login-email');
const loginPasswordInput = document.querySelector('#login-password');
const loginButton = document.querySelector('#login-button');
const logoutButton = document.querySelector('#logout-button');
const refreshStatusButton = document.querySelector('#refresh-status');

const setupEmailInput = document.querySelector('#setup-email');
const setupPasswordInput = document.querySelector('#setup-password');
const setupPasswordConfirmInput = document.querySelector('#setup-password-confirm');
const setupKeyInput = document.querySelector('#setup-key');
const setupButton = document.querySelector('#setup-button');

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
  if (kind) node.classList.add(kind);
}

function parseError(error) {
  return String(error && error.message ? error.message : error || 'Ukjent feil');
}

async function apiRequest(method, path, payload) {
  const options = {
    method,
    credentials: 'same-origin',
    headers: {},
  };

  if (payload) {
    options.headers['Content-Type'] = 'application/json';
    options.body = JSON.stringify(payload);
  }

  const response = await fetch(path, options);
  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.error || `HTTP ${response.status}`);
  }

  return data;
}

function setEditorEnabled(enabled) {
  state.authenticated = enabled;

  if (fileEditor) fileEditor.disabled = !enabled;
  if (saveFileButton) saveFileButton.disabled = !enabled;
  if (loadFileButton) loadFileButton.disabled = !enabled;
  if (formatJsonButton) formatJsonButton.disabled = !enabled;
  if (fileSelect) fileSelect.disabled = !enabled;
  if (commitMessageInput) commitMessageInput.disabled = !enabled;

  quickOpenButtons.forEach((button) => {
    button.disabled = !enabled;
  });

  if (!enabled) {
    setStatus(fileMeta, 'Logg inn for å laste/redigere filer.');
    setStatus(saveStatus, '');
  }
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

function syncAuthInputs() {
  if (state.adminEmail) {
    if (loginEmailInput && !loginEmailInput.value) loginEmailInput.value = state.adminEmail;
    if (setupEmailInput) setupEmailInput.value = state.adminEmail;
  }
}

function applyModeUI() {
  const setupVisible = !state.configured;

  if (setupPanel) setupPanel.classList.toggle('hidden', !setupVisible);
  if (loginPanel) loginPanel.classList.remove('hidden');

  if (setupVisible) {
    setStatus(authMode, 'Første gangs oppsett: sett passord med setup-nøkkel.');
  } else if (state.authenticated) {
    setStatus(authMode, `Innlogget som ${state.adminEmail}.`, 'ok');
  } else {
    setStatus(authMode, 'Passord satt. Logg inn for å redigere.');
  }
}

async function refreshAuthStatus() {
  try {
    const data = await apiRequest('GET', '/api/admin-auth');
    state.configured = Boolean(data.configured);
    state.authenticated = Boolean(data.authenticated);
    state.adminEmail = String(data.admin_email || '').trim();

    syncAuthInputs();
    applyModeUI();
    setEditorEnabled(state.authenticated);

    if (state.authenticated) {
      setStatus(authStatus, 'Innlogging aktiv.', 'ok');
      await loadFile(state.currentPath);
    } else {
      setStatus(authStatus, '');
    }
  } catch (error) {
    setEditorEnabled(false);
    setStatus(authStatus, `Auth-feil: ${parseError(error)}`, 'error');
  }
}

async function login() {
  const email = loginEmailInput ? loginEmailInput.value.trim() : '';
  const password = loginPasswordInput ? loginPasswordInput.value : '';

  if (!email || !password) {
    setStatus(authStatus, 'E-post og passord er påkrevd.', 'error');
    return;
  }

  setStatus(authStatus, 'Logger inn ...');

  try {
    await apiRequest('POST', '/api/admin-auth', {
      action: 'login',
      email,
      password,
    });

    if (loginPasswordInput) loginPasswordInput.value = '';
    setStatus(authStatus, 'Innlogging OK.', 'ok');
    await refreshAuthStatus();
  } catch (error) {
    setStatus(authStatus, `Innlogging feilet: ${parseError(error)}`, 'error');
  }
}

async function setupPassword() {
  const email = setupEmailInput ? setupEmailInput.value.trim() : '';
  const password = setupPasswordInput ? setupPasswordInput.value : '';
  const confirm = setupPasswordConfirmInput ? setupPasswordConfirmInput.value : '';
  const bootstrapKey = setupKeyInput ? setupKeyInput.value.trim() : '';

  if (!email || !password || !confirm || !bootstrapKey) {
    setStatus(authStatus, 'Alle setup-felter må fylles ut.', 'error');
    return;
  }

  if (password !== confirm) {
    setStatus(authStatus, 'Passordene er ikke like.', 'error');
    return;
  }

  setStatus(authStatus, 'Setter passord ...');

  try {
    await apiRequest('POST', '/api/admin-auth', {
      action: 'setup',
      email,
      password,
      bootstrap_key: bootstrapKey,
    });

    if (setupPasswordInput) setupPasswordInput.value = '';
    if (setupPasswordConfirmInput) setupPasswordConfirmInput.value = '';
    if (setupKeyInput) setupKeyInput.value = '';

    setStatus(authStatus, 'Passord satt. Innlogget.', 'ok');
    await refreshAuthStatus();
  } catch (error) {
    setStatus(authStatus, `Setup feilet: ${parseError(error)}`, 'error');
  }
}

async function logout() {
  setStatus(authStatus, 'Logger ut ...');

  try {
    await apiRequest('POST', '/api/admin-auth', { action: 'logout' });
    setStatus(authStatus, 'Logget ut.', 'ok');
    await refreshAuthStatus();
  } catch (error) {
    setStatus(authStatus, `Logout feilet: ${parseError(error)}`, 'error');
  }
}

async function loadFile(path) {
  if (!state.authenticated) return;
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
    setStatus(saveStatus, `Kunne ikke laste fil: ${parseError(error)}`, 'error');
  }
}

async function saveFile() {
  if (!state.authenticated || !fileEditor) return;

  if (!state.sha) {
    setStatus(saveStatus, 'Mangler SHA. Last filen på nytt før lagring.', 'error');
    return;
  }

  const message = (commitMessageInput && commitMessageInput.value.trim()) || `Admin update: ${state.currentPath}`;
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
    setStatus(saveStatus, `Lagring feilet: ${parseError(error)}`, 'error');
  }
}

function formatIfJson() {
  if (!fileEditor) return;

  if (!state.currentPath.endsWith('.json')) {
    setStatus(saveStatus, 'Format JSON gjelder kun .json-filer.');
    return;
  }

  try {
    const parsed = JSON.parse(fileEditor.value);
    fileEditor.value = JSON.stringify(parsed, null, 2);
    setStatus(saveStatus, 'JSON formatert.', 'ok');
  } catch (error) {
    setStatus(saveStatus, `Ugyldig JSON: ${parseError(error)}`, 'error');
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
  populateFileSelect();
  initQuickButtons();
  initKeyboardShortcut();

  if (loginButton) loginButton.addEventListener('click', login);
  if (logoutButton) logoutButton.addEventListener('click', logout);
  if (refreshStatusButton) refreshStatusButton.addEventListener('click', refreshAuthStatus);
  if (setupButton) setupButton.addEventListener('click', setupPassword);

  if (fileSelect) {
    fileSelect.addEventListener('change', () => {
      state.currentPath = fileSelect.value;
    });
  }

  if (loadFileButton) {
    loadFileButton.addEventListener('click', () => loadFile(state.currentPath));
  }

  if (formatJsonButton) {
    formatJsonButton.addEventListener('click', formatIfJson);
  }

  if (saveFileButton) {
    saveFileButton.addEventListener('click', saveFile);
  }

  setEditorEnabled(false);
  refreshAuthStatus();
}

init();
