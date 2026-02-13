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

const CMS_PATH = 'assets/data/ai-jobs-news.json';
const CMS_DEFAULT_CATEGORY = 'Norsk arbeidsmarked';
const CMS_TONE_OPTIONS = ['replacement_anxiety', 'reskilling', 'neutral'];

const state = {
  currentPath: FILE_OPTIONS[0],
  sha: '',
  authenticated: false,
  configured: true,
  adminEmail: '',
  cms: {
    loaded: false,
    sha: '',
    branch: 'main',
    generatedAt: null,
    queries: [],
    items: [],
    dirty: false,
  },
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

const cmsLoadButton = document.querySelector('#cms-load');
const cmsAddButton = document.querySelector('#cms-add');
const cmsPublishAllButton = document.querySelector('#cms-publish-all');
const cmsAssignNorskButton = document.querySelector('#cms-assign-norsk');
const cmsSaveButton = document.querySelector('#cms-save');
const cmsCommitMessageInput = document.querySelector('#cms-commit-message');
const cmsListNode = document.querySelector('#cms-list');
const cmsMetaNode = document.querySelector('#cms-meta');
const cmsStatusNode = document.querySelector('#cms-status');

function setStatus(node, message, kind = '') {
  if (!node) return;
  node.textContent = message;
  node.classList.remove('ok', 'error');
  if (kind) node.classList.add(kind);
}

function parseError(error) {
  return String(error && error.message ? error.message : error || 'Ukjent feil');
}

function formatNorwegianDate(iso) {
  if (!iso) return 'ukjent';
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return 'ukjent';
  return new Intl.DateTimeFormat('nb-NO', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(date);
}

function isoToDateTimeLocal(iso) {
  if (!iso) return '';
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return '';

  const year = String(date.getFullYear());
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${year}-${month}-${day}T${hours}:${minutes}`;
}

function dateTimeLocalToIso(value) {
  if (!value) return '';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '';
  return date.toISOString();
}

function normalizeTone(value) {
  if (CMS_TONE_OPTIONS.includes(value)) return value;
  return 'neutral';
}

function normalizeCategory(value) {
  const cleaned = String(value || '').trim();
  return cleaned || CMS_DEFAULT_CATEGORY;
}

function normalizeCmsItem(item) {
  return {
    ...item,
    title: String(item && item.title ? item.title : '').trim(),
    source: String(item && item.source ? item.source : '').trim(),
    url: String(item && item.url ? item.url : '').trim(),
    snippet: String(item && item.snippet ? item.snippet : '').trim(),
    tone: normalizeTone(item && item.tone),
    category: normalizeCategory(item && item.category),
    published_at: String(item && item.published_at ? item.published_at : '').trim(),
    published: item && item.published !== false,
  };
}

function createEmptyCmsItem() {
  return {
    title: '',
    source: '',
    url: '',
    snippet: '',
    published_at: new Date().toISOString(),
    tone: 'neutral',
    category: CMS_DEFAULT_CATEGORY,
    published: true,
  };
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

function updateCmsActionState() {
  const loggedIn = state.authenticated;
  const loaded = loggedIn && state.cms.loaded;

  if (cmsLoadButton) cmsLoadButton.disabled = !loggedIn;
  if (cmsCommitMessageInput) cmsCommitMessageInput.disabled = !loggedIn;
  if (cmsAddButton) cmsAddButton.disabled = !loaded;
  if (cmsPublishAllButton) cmsPublishAllButton.disabled = !loaded;
  if (cmsAssignNorskButton) cmsAssignNorskButton.disabled = !loaded;
  if (cmsSaveButton) cmsSaveButton.disabled = !loaded || !state.cms.dirty;
}

function resetCmsState() {
  state.cms = {
    loaded: false,
    sha: '',
    branch: 'main',
    generatedAt: null,
    queries: [],
    items: [],
    dirty: false,
  };
  renderCmsList();
  setStatus(cmsMetaNode, 'Logg inn for å laste CMS.');
  setStatus(cmsStatusNode, '');
  updateCmsActionState();
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

  updateCmsActionState();

  if (!enabled) {
    setStatus(fileMeta, 'Logg inn for å laste/redigere filer.');
    setStatus(saveStatus, '');
    resetCmsState();
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

function markCmsDirty(message = 'Ulagrede CMS-endringer.') {
  state.cms.dirty = true;
  setStatus(cmsStatusNode, message);
  updateCmsMeta();
  updateCmsActionState();
}

function cmsToneLabel(tone) {
  if (tone === 'replacement_anxiety') return 'Erstatningsangst';
  if (tone === 'reskilling') return 'Omskolering';
  return 'Nøytral';
}

function updateCmsMeta() {
  if (!cmsMetaNode) return;

  if (!state.cms.loaded) {
    setStatus(cmsMetaNode, 'Logg inn for å laste CMS.');
    return;
  }

  const total = state.cms.items.length;
  const published = state.cms.items.filter((item) => item.published !== false).length;
  const norsk = state.cms.items.filter((item) => normalizeCategory(item.category) === CMS_DEFAULT_CATEGORY).length;
  const generated = formatNorwegianDate(state.cms.generatedAt);
  const dirtyNote = state.cms.dirty ? ' Ulagrede endringer.' : '';
  setStatus(cmsMetaNode, `Saker: ${total}. Publisert: ${published}. ${CMS_DEFAULT_CATEGORY}: ${norsk}. Sist generert: ${generated}.${dirtyNote}`);
}

function createField(labelText, control, wide = false) {
  const wrapper = document.createElement('label');
  wrapper.className = 'cms-field';
  if (wide) wrapper.classList.add('is-wide');

  const label = document.createElement('span');
  label.textContent = labelText;
  wrapper.appendChild(label);
  wrapper.appendChild(control);
  return wrapper;
}

function renderCmsList() {
  if (!cmsListNode) return;
  cmsListNode.innerHTML = '';

  if (!state.cms.loaded) {
    const placeholder = document.createElement('p');
    placeholder.className = 'empty-state small';
    placeholder.textContent = 'Logg inn og trykk "Last nyhetsdata" for å redigere saker visuelt.';
    cmsListNode.appendChild(placeholder);
    return;
  }

  if (!state.cms.items.length) {
    const empty = document.createElement('p');
    empty.className = 'empty-state small';
    empty.textContent = 'Ingen saker i listen ennå. Legg til en ny sak.';
    cmsListNode.appendChild(empty);
    return;
  }

  state.cms.items.forEach((item, index) => {
    const card = document.createElement('article');
    card.className = 'cms-item';

    const head = document.createElement('div');
    head.className = 'cms-item-head';

    const label = document.createElement('p');
    label.className = 'cms-item-label';
    label.textContent = `Sak ${index + 1} · ${normalizeCategory(item.category)} · ${cmsToneLabel(item.tone)}`;

    const actions = document.createElement('div');
    actions.className = 'cms-actions';

    const moveUpButton = document.createElement('button');
    moveUpButton.type = 'button';
    moveUpButton.textContent = 'Flytt opp';
    moveUpButton.disabled = index === 0;
    moveUpButton.addEventListener('click', () => {
      const previous = state.cms.items[index - 1];
      state.cms.items[index - 1] = state.cms.items[index];
      state.cms.items[index] = previous;
      renderCmsList();
      markCmsDirty('Sak flyttet opp.');
    });

    const moveDownButton = document.createElement('button');
    moveDownButton.type = 'button';
    moveDownButton.textContent = 'Flytt ned';
    moveDownButton.disabled = index === state.cms.items.length - 1;
    moveDownButton.addEventListener('click', () => {
      const next = state.cms.items[index + 1];
      state.cms.items[index + 1] = state.cms.items[index];
      state.cms.items[index] = next;
      renderCmsList();
      markCmsDirty('Sak flyttet ned.');
    });

    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.textContent = 'Slett';
    deleteButton.addEventListener('click', () => {
      state.cms.items.splice(index, 1);
      renderCmsList();
      markCmsDirty('Sak slettet.');
    });

    actions.appendChild(moveUpButton);
    actions.appendChild(moveDownButton);
    actions.appendChild(deleteButton);
    head.appendChild(label);
    head.appendChild(actions);

    const grid = document.createElement('div');
    grid.className = 'cms-item-grid';

    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.value = item.title || '';
    titleInput.placeholder = 'Tittel';
    titleInput.addEventListener('input', () => {
      state.cms.items[index].title = titleInput.value;
      markCmsDirty();
    });
    grid.appendChild(createField('Tittel', titleInput, true));

    const sourceInput = document.createElement('input');
    sourceInput.type = 'text';
    sourceInput.value = item.source || '';
    sourceInput.placeholder = 'Kilde';
    sourceInput.addEventListener('input', () => {
      state.cms.items[index].source = sourceInput.value;
      markCmsDirty();
    });
    grid.appendChild(createField('Kilde', sourceInput));

    const toneSelect = document.createElement('select');
    CMS_TONE_OPTIONS.forEach((tone) => {
      const option = document.createElement('option');
      option.value = tone;
      option.textContent = cmsToneLabel(tone);
      toneSelect.appendChild(option);
    });
    toneSelect.value = normalizeTone(item.tone);
    toneSelect.addEventListener('change', () => {
      state.cms.items[index].tone = normalizeTone(toneSelect.value);
      markCmsDirty();
      renderCmsList();
    });
    grid.appendChild(createField('Tone', toneSelect));

    const categoryInput = document.createElement('input');
    categoryInput.type = 'text';
    categoryInput.value = normalizeCategory(item.category);
    categoryInput.addEventListener('input', () => {
      state.cms.items[index].category = normalizeCategory(categoryInput.value);
      markCmsDirty();
    });
    grid.appendChild(createField('Kategori', categoryInput));

    const dateInput = document.createElement('input');
    dateInput.type = 'datetime-local';
    dateInput.value = isoToDateTimeLocal(item.published_at);
    dateInput.addEventListener('change', () => {
      state.cms.items[index].published_at = dateTimeLocalToIso(dateInput.value);
      markCmsDirty();
    });
    grid.appendChild(createField('Publisert tidspunkt', dateInput));

    const urlInput = document.createElement('input');
    urlInput.type = 'url';
    urlInput.value = item.url || '';
    urlInput.placeholder = 'https://...';
    urlInput.addEventListener('input', () => {
      state.cms.items[index].url = urlInput.value;
      markCmsDirty();
    });
    grid.appendChild(createField('Lenke', urlInput));

    const snippetArea = document.createElement('textarea');
    snippetArea.value = item.snippet || '';
    snippetArea.placeholder = 'Kort ingress/utdrag';
    snippetArea.addEventListener('input', () => {
      state.cms.items[index].snippet = snippetArea.value;
      markCmsDirty();
    });
    grid.appendChild(createField('Ingress', snippetArea, true));

    const publishWrap = document.createElement('label');
    publishWrap.className = 'cms-switch';
    const publishCheckbox = document.createElement('input');
    publishCheckbox.type = 'checkbox';
    publishCheckbox.checked = item.published !== false;
    publishCheckbox.addEventListener('change', () => {
      state.cms.items[index].published = publishCheckbox.checked;
      markCmsDirty();
      updateCmsMeta();
    });
    const publishText = document.createElement('span');
    publishText.textContent = 'Publisert';
    publishWrap.appendChild(publishCheckbox);
    publishWrap.appendChild(publishText);

    const publishField = document.createElement('div');
    publishField.className = 'cms-field is-wide';
    publishField.appendChild(publishWrap);
    grid.appendChild(publishField);

    card.appendChild(head);
    card.appendChild(grid);
    cmsListNode.appendChild(card);
  });
}

async function loadCms() {
  if (!state.authenticated) return;

  setStatus(cmsStatusNode, 'Laster nyhetsdata ...');
  try {
    const file = await apiRequest('GET', `/api/repo-file?path=${encodeURIComponent(CMS_PATH)}`);
    const parsed = JSON.parse(file.content || '{}');

    state.cms.loaded = true;
    state.cms.sha = file.sha || '';
    state.cms.branch = file.branch || 'main';
    state.cms.generatedAt = parsed.generated_at || null;
    state.cms.queries = Array.isArray(parsed.queries) ? parsed.queries : [];
    state.cms.items = Array.isArray(parsed.items) ? parsed.items.map(normalizeCmsItem) : [];
    state.cms.dirty = false;

    renderCmsList();
    updateCmsMeta();
    updateCmsActionState();
    setStatus(cmsStatusNode, 'Nyhetsdata lastet.', 'ok');
  } catch (error) {
    setStatus(cmsStatusNode, `Kunne ikke laste CMS: ${parseError(error)}`, 'error');
  }
}

function buildCmsPayload() {
  const cleanedItems = state.cms.items.map((raw) => {
    const item = normalizeCmsItem(raw);
    return {
      ...item,
      title: item.title,
      source: item.source,
      url: item.url,
      snippet: item.snippet,
      published_at: item.published_at,
      tone: item.tone,
      category: normalizeCategory(item.category),
      published: item.published !== false,
    };
  });

  const categories = Array.from(
    new Set(cleanedItems.map((item) => normalizeCategory(item.category)))
  ).sort((a, b) => a.localeCompare(b, 'nb-NO'));

  const toneCounts = {
    replacement_anxiety: cleanedItems.filter((item) => item.tone === 'replacement_anxiety').length,
    reskilling: cleanedItems.filter((item) => item.tone === 'reskilling').length,
    neutral: cleanedItems.filter((item) => item.tone === 'neutral').length,
  };

  return {
    generated_at: new Date().toISOString(),
    total_items: cleanedItems.length,
    categories,
    queries: state.cms.queries,
    tone_counts: toneCounts,
    items: cleanedItems,
  };
}

async function saveCms() {
  if (!state.authenticated || !state.cms.loaded) return;
  if (!state.cms.sha) {
    setStatus(cmsStatusNode, 'Mangler SHA. Last nyhetsdata på nytt før lagring.', 'error');
    return;
  }

  const message = (cmsCommitMessageInput && cmsCommitMessageInput.value.trim())
    || 'Admin CMS update: Norsk arbeidsmarked';

  setStatus(cmsStatusNode, 'Lagrer CMS til GitHub ...');

  try {
    const payload = buildCmsPayload();
    const response = await apiRequest('PUT', '/api/repo-file', {
      path: CMS_PATH,
      content: JSON.stringify(payload, null, 2),
      sha: state.cms.sha,
      message,
    });

    state.cms.sha = response.sha || '';
    state.cms.branch = response.branch || 'main';
    state.cms.generatedAt = payload.generated_at;
    state.cms.dirty = false;
    updateCmsMeta();
    updateCmsActionState();

    if (state.currentPath === CMS_PATH && fileEditor) {
      fileEditor.value = JSON.stringify(payload, null, 2);
      state.sha = response.sha || state.sha;
      setStatus(fileMeta, `Fil: ${CMS_PATH} | SHA: ${String(state.sha || '').slice(0, 10)} | Branch: ${state.cms.branch}`);
    }

    const commitNote = response.commit_url ? ` Commit: ${response.commit_url}` : '';
    setStatus(cmsStatusNode, `CMS lagret.${commitNote}`, 'ok');
  } catch (error) {
    setStatus(cmsStatusNode, `CMS-lagring feilet: ${parseError(error)}`, 'error');
  }
}

function addCmsItem() {
  if (!state.cms.loaded) return;
  state.cms.items.unshift(createEmptyCmsItem());
  renderCmsList();
  markCmsDirty('Ny sak lagt til.');
}

function publishAllCmsItems() {
  if (!state.cms.loaded) return;
  state.cms.items = state.cms.items.map((item) => ({
    ...item,
    published: true,
  }));
  renderCmsList();
  markCmsDirty('Alle saker er markert som publisert.');
}

function assignNorskCategoryToAll() {
  if (!state.cms.loaded) return;
  state.cms.items = state.cms.items.map((item) => ({
    ...item,
    category: CMS_DEFAULT_CATEGORY,
  }));
  renderCmsList();
  markCmsDirty(`Alle saker er flyttet til kategorien "${CMS_DEFAULT_CATEGORY}".`);
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
      await loadCms();
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

    const target = event.target instanceof Element ? event.target : null;
    const insideCms = Boolean(target && target.closest('#cms'));
    if (insideCms && state.cms.loaded) {
      saveCms();
      return;
    }
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

  if (cmsLoadButton) cmsLoadButton.addEventListener('click', loadCms);
  if (cmsAddButton) cmsAddButton.addEventListener('click', addCmsItem);
  if (cmsPublishAllButton) cmsPublishAllButton.addEventListener('click', publishAllCmsItems);
  if (cmsAssignNorskButton) cmsAssignNorskButton.addEventListener('click', assignNorskCategoryToAll);
  if (cmsSaveButton) cmsSaveButton.addEventListener('click', saveCms);

  setEditorEnabled(false);
  refreshAuthStatus();
}

init();
