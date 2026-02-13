const FILE_OPTIONS = [
  'assets/data/scrollytelling-welhaven-wergeland-cuzner.json',
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
const STORY_PATH = 'assets/data/scrollytelling-welhaven-wergeland-cuzner.json';
const STORY_DEFAULT_TITLE = 'INTELLIGENSPARTIET - Welhaven, Wergeland og Cuzner';
const STORY_DEFAULT_META = 'Historiske strider, nåtidens arbeidsliv og et surrealistisk frampek';
const PROMPT_PATH = 'assets/data/kling3-prompts.json';
const PROMPT_DEFAULT_MODEL = 'Kling 3.0';

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
  story: {
    loaded: false,
    sha: '',
    branch: 'main',
    updatedAt: null,
    sectionTitle: STORY_DEFAULT_TITLE,
    sectionMeta: STORY_DEFAULT_META,
    scenes: [],
    dirty: false,
  },
  prompt: {
    loaded: false,
    sha: '',
    branch: 'main',
    updatedAt: null,
    model: PROMPT_DEFAULT_MODEL,
    prompts: [],
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

const storyLoadButton = document.querySelector('#story-load');
const storyAddButton = document.querySelector('#story-add');
const storySaveButton = document.querySelector('#story-save');
const storyCommitMessageInput = document.querySelector('#story-commit-message');
const storyTitleInput = document.querySelector('#story-title');
const storyMetaInput = document.querySelector('#story-meta-input');
const storyListNode = document.querySelector('#story-list');
const storyMetaNode = document.querySelector('#story-meta');
const storyStatusNode = document.querySelector('#story-status');

const promptLoadButton = document.querySelector('#prompt-load');
const promptAddButton = document.querySelector('#prompt-add');
const promptSaveButton = document.querySelector('#prompt-save');
const promptCommitMessageInput = document.querySelector('#prompt-commit-message');
const promptModelInput = document.querySelector('#prompt-model');
const promptListNode = document.querySelector('#prompt-cms-list');
const promptMetaNode = document.querySelector('#prompt-cms-meta');
const promptStatusNode = document.querySelector('#prompt-cms-status');

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

function normalizeStoryScene(scene, index = 0) {
  const sceneNumber = index + 1;
  return {
    kicker: String(scene && scene.kicker ? scene.kicker : `Scene ${sceneNumber}`).trim() || `Scene ${sceneNumber}`,
    step_title: String(scene && scene.step_title ? scene.step_title : '').trim(),
    step_text: String(scene && scene.step_text ? scene.step_text : '').trim(),
    title: String(scene && scene.title ? scene.title : '').trim(),
    body: String(scene && scene.body ? scene.body : '').trim(),
    caption: String(scene && scene.caption ? scene.caption : '').trim(),
    video: String(scene && scene.video ? scene.video : '').trim(),
    poster: String(scene && scene.poster ? scene.poster : '').trim(),
  };
}

function createEmptyStoryScene(index = 0) {
  const sceneNumber = index + 1;
  return {
    kicker: `Scene ${sceneNumber}`,
    step_title: `Ny scene ${sceneNumber}`,
    step_text: '',
    title: '',
    body: '',
    caption: '',
    video: '',
    poster: '',
  };
}

function normalizePromptItem(item, index = 0) {
  const promptNumber = index + 1;
  const rawDuration = Number(item && item.duration_sec);
  const durationSec = Number.isFinite(rawDuration)
    ? Math.max(1, Math.round(rawDuration))
    : 8;

  return {
    id: String(item && item.id ? item.id : `prompt-${String(promptNumber).padStart(2, '0')}`).trim(),
    placement: String(item && item.placement ? item.placement : `Plassering ${promptNumber}`).trim(),
    title: String(item && item.title ? item.title : '').trim(),
    model: String(item && item.model ? item.model : state.prompt.model || PROMPT_DEFAULT_MODEL).trim() || PROMPT_DEFAULT_MODEL,
    duration_sec: durationSec,
    aspect_ratio: String(item && item.aspect_ratio ? item.aspect_ratio : '16:9').trim() || '16:9',
    prompt: String(item && item.prompt ? item.prompt : '').trim(),
    negative_prompt: String(item && item.negative_prompt ? item.negative_prompt : '').trim(),
  };
}

function createEmptyPromptItem(index = 0) {
  const promptNumber = index + 1;
  return {
    id: `prompt-${String(promptNumber).padStart(2, '0')}`,
    placement: `Plassering ${promptNumber}`,
    title: '',
    model: state.prompt.model || PROMPT_DEFAULT_MODEL,
    duration_sec: 8,
    aspect_ratio: '16:9',
    prompt: '',
    negative_prompt: '',
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

async function requestR2UploadUrl({ filename, contentType, folder }) {
  return apiRequest('POST', '/api/r2-upload-url', {
    filename,
    content_type: contentType || '',
    folder,
    expires_in: 900,
  });
}

async function uploadFileToR2(file, folder) {
  if (!(file instanceof File)) {
    throw new Error('Mangler fil å laste opp.');
  }

  const uploadTarget = await requestR2UploadUrl({
    filename: file.name || 'file',
    contentType: file.type || 'application/octet-stream',
    folder,
  });

  const response = await fetch(uploadTarget.upload_url, {
    method: 'PUT',
    headers: {
      'Content-Type': file.type || 'application/octet-stream',
    },
    body: file,
  });

  if (!response.ok) {
    const payload = await response.text().catch(() => '');
    throw new Error(`R2 upload feilet (${response.status}): ${payload || 'ukjent feil'}`);
  }

  return uploadTarget;
}

function updateCmsActionState() {
  const loggedIn = state.authenticated;
  const cmsLoaded = loggedIn && state.cms.loaded;
  const storyLoaded = loggedIn && state.story.loaded;
  const promptLoaded = loggedIn && state.prompt.loaded;

  if (cmsLoadButton) cmsLoadButton.disabled = !loggedIn;
  if (cmsCommitMessageInput) cmsCommitMessageInput.disabled = !loggedIn;
  if (cmsAddButton) cmsAddButton.disabled = !cmsLoaded;
  if (cmsPublishAllButton) cmsPublishAllButton.disabled = !cmsLoaded;
  if (cmsAssignNorskButton) cmsAssignNorskButton.disabled = !cmsLoaded;
  if (cmsSaveButton) cmsSaveButton.disabled = !cmsLoaded || !state.cms.dirty;

  if (storyLoadButton) storyLoadButton.disabled = !loggedIn;
  if (storyCommitMessageInput) storyCommitMessageInput.disabled = !loggedIn;
  if (storyTitleInput) storyTitleInput.disabled = !storyLoaded;
  if (storyMetaInput) storyMetaInput.disabled = !storyLoaded;
  if (storyAddButton) storyAddButton.disabled = !storyLoaded;
  if (storySaveButton) storySaveButton.disabled = !storyLoaded || !state.story.dirty;

  if (promptLoadButton) promptLoadButton.disabled = !loggedIn;
  if (promptCommitMessageInput) promptCommitMessageInput.disabled = !loggedIn;
  if (promptModelInput) promptModelInput.disabled = !promptLoaded;
  if (promptAddButton) promptAddButton.disabled = !promptLoaded;
  if (promptSaveButton) promptSaveButton.disabled = !promptLoaded || !state.prompt.dirty;
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

function resetStoryState() {
  state.story = {
    loaded: false,
    sha: '',
    branch: 'main',
    updatedAt: null,
    sectionTitle: STORY_DEFAULT_TITLE,
    sectionMeta: STORY_DEFAULT_META,
    scenes: [],
    dirty: false,
  };

  if (storyTitleInput) storyTitleInput.value = '';
  if (storyMetaInput) storyMetaInput.value = '';
  if (storyListNode) storyListNode.innerHTML = '';
  setStatus(storyMetaNode, 'Logg inn for å laste scrollytelling-CMS.');
  setStatus(storyStatusNode, '');
  updateCmsActionState();
}

function resetPromptState() {
  state.prompt = {
    loaded: false,
    sha: '',
    branch: 'main',
    updatedAt: null,
    model: PROMPT_DEFAULT_MODEL,
    prompts: [],
    dirty: false,
  };

  if (promptModelInput) promptModelInput.value = '';
  if (promptListNode) promptListNode.innerHTML = '';
  setStatus(promptMetaNode, 'Logg inn for å laste promptbank-CMS.');
  setStatus(promptStatusNode, '');
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
    resetStoryState();
    resetPromptState();
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

function markPromptDirty(message = 'Ulagrede prompt-endringer.') {
  state.prompt.dirty = true;
  setStatus(promptStatusNode, message);
  updatePromptMeta();
  updateCmsActionState();
}

function updatePromptMeta() {
  if (!promptMetaNode) return;

  if (!state.prompt.loaded) {
    setStatus(promptMetaNode, 'Logg inn for å laste promptbank-CMS.');
    return;
  }

  const total = state.prompt.prompts.length;
  const updated = formatNorwegianDate(state.prompt.updatedAt);
  const dirtyNote = state.prompt.dirty ? ' Ulagrede endringer.' : '';
  setStatus(promptMetaNode, `Prompter: ${total}. Sist oppdatert: ${updated}.${dirtyNote}`);
}

function renderPromptList() {
  if (!promptListNode) return;
  promptListNode.innerHTML = '';

  if (!state.prompt.loaded) {
    const placeholder = document.createElement('p');
    placeholder.className = 'empty-state small';
    placeholder.textContent = 'Logg inn og trykk "Last promptbank" for visuell redigering.';
    promptListNode.appendChild(placeholder);
    return;
  }

  if (!state.prompt.prompts.length) {
    const empty = document.createElement('p');
    empty.className = 'empty-state small';
    empty.textContent = 'Ingen prompter tilgjengelig. Legg til ny prompt.';
    promptListNode.appendChild(empty);
    return;
  }

  state.prompt.prompts.forEach((rawPrompt, index) => {
    const prompt = normalizePromptItem(rawPrompt, index);
    state.prompt.prompts[index] = prompt;

    const card = document.createElement('article');
    card.className = 'cms-item';

    const head = document.createElement('div');
    head.className = 'cms-item-head';

    const label = document.createElement('p');
    label.className = 'cms-item-label';
    label.textContent = `Prompt ${index + 1} · ${prompt.id || 'uten id'}`;

    const actions = document.createElement('div');
    actions.className = 'cms-actions';

    const moveUpButton = document.createElement('button');
    moveUpButton.type = 'button';
    moveUpButton.textContent = 'Flytt opp';
    moveUpButton.disabled = index === 0;
    moveUpButton.addEventListener('click', () => {
      const previous = state.prompt.prompts[index - 1];
      state.prompt.prompts[index - 1] = state.prompt.prompts[index];
      state.prompt.prompts[index] = previous;
      renderPromptList();
      markPromptDirty('Prompt flyttet opp.');
    });

    const moveDownButton = document.createElement('button');
    moveDownButton.type = 'button';
    moveDownButton.textContent = 'Flytt ned';
    moveDownButton.disabled = index === state.prompt.prompts.length - 1;
    moveDownButton.addEventListener('click', () => {
      const next = state.prompt.prompts[index + 1];
      state.prompt.prompts[index + 1] = state.prompt.prompts[index];
      state.prompt.prompts[index] = next;
      renderPromptList();
      markPromptDirty('Prompt flyttet ned.');
    });

    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.textContent = 'Slett';
    deleteButton.disabled = state.prompt.prompts.length === 1;
    deleteButton.addEventListener('click', () => {
      state.prompt.prompts.splice(index, 1);
      renderPromptList();
      markPromptDirty('Prompt slettet.');
    });

    actions.appendChild(moveUpButton);
    actions.appendChild(moveDownButton);
    actions.appendChild(deleteButton);
    head.appendChild(label);
    head.appendChild(actions);

    const grid = document.createElement('div');
    grid.className = 'cms-item-grid';

    const idInput = document.createElement('input');
    idInput.type = 'text';
    idInput.value = prompt.id;
    idInput.addEventListener('input', () => {
      state.prompt.prompts[index].id = idInput.value.trim();
      label.textContent = `Prompt ${index + 1} · ${state.prompt.prompts[index].id || 'uten id'}`;
      markPromptDirty();
    });
    grid.appendChild(createField('ID', idInput));

    const placementInput = document.createElement('input');
    placementInput.type = 'text';
    placementInput.value = prompt.placement;
    placementInput.addEventListener('input', () => {
      state.prompt.prompts[index].placement = placementInput.value;
      markPromptDirty();
    });
    grid.appendChild(createField('Plassering', placementInput));

    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.value = prompt.title;
    titleInput.addEventListener('input', () => {
      state.prompt.prompts[index].title = titleInput.value;
      markPromptDirty();
    });
    grid.appendChild(createField('Tittel', titleInput));

    const modelInput = document.createElement('input');
    modelInput.type = 'text';
    modelInput.value = prompt.model;
    modelInput.addEventListener('input', () => {
      state.prompt.prompts[index].model = modelInput.value;
      markPromptDirty();
    });
    grid.appendChild(createField('Modell', modelInput));

    const durationInput = document.createElement('input');
    durationInput.type = 'number';
    durationInput.min = '1';
    durationInput.step = '1';
    durationInput.value = String(prompt.duration_sec);
    durationInput.addEventListener('input', () => {
      const parsed = Number(durationInput.value);
      state.prompt.prompts[index].duration_sec = Number.isFinite(parsed)
        ? Math.max(1, Math.round(parsed))
        : 1;
      markPromptDirty();
    });
    grid.appendChild(createField('Varighet (sek)', durationInput));

    const ratioInput = document.createElement('input');
    ratioInput.type = 'text';
    ratioInput.value = prompt.aspect_ratio;
    ratioInput.addEventListener('input', () => {
      state.prompt.prompts[index].aspect_ratio = ratioInput.value;
      markPromptDirty();
    });
    grid.appendChild(createField('Aspect ratio', ratioInput));

    const promptArea = document.createElement('textarea');
    promptArea.value = prompt.prompt;
    promptArea.addEventListener('input', () => {
      state.prompt.prompts[index].prompt = promptArea.value;
      markPromptDirty();
    });
    grid.appendChild(createField('Prompt', promptArea, true));

    const negativeArea = document.createElement('textarea');
    negativeArea.value = prompt.negative_prompt;
    negativeArea.addEventListener('input', () => {
      state.prompt.prompts[index].negative_prompt = negativeArea.value;
      markPromptDirty();
    });
    grid.appendChild(createField('Negative prompt', negativeArea, true));

    card.appendChild(head);
    card.appendChild(grid);
    promptListNode.appendChild(card);
  });
}

async function loadPromptCms() {
  if (!state.authenticated) return;

  setStatus(promptStatusNode, 'Laster promptbank ...');
  try {
    const file = await apiRequest('GET', `/api/repo-file?path=${encodeURIComponent(PROMPT_PATH)}`);
    const parsed = JSON.parse(file.content || '{}');
    const prompts = Array.isArray(parsed.prompts)
      ? parsed.prompts.map((item, index) => normalizePromptItem(item, index))
      : [];

    state.prompt.loaded = true;
    state.prompt.sha = file.sha || '';
    state.prompt.branch = file.branch || 'main';
    state.prompt.updatedAt = parsed.updated_at || null;
    state.prompt.model = String(parsed.model || PROMPT_DEFAULT_MODEL).trim() || PROMPT_DEFAULT_MODEL;
    state.prompt.prompts = prompts.length ? prompts : [createEmptyPromptItem(0)];
    state.prompt.dirty = false;

    if (promptModelInput) promptModelInput.value = state.prompt.model;

    renderPromptList();
    updatePromptMeta();
    updateCmsActionState();
    setStatus(promptStatusNode, 'Promptbank lastet.', 'ok');
  } catch (error) {
    setStatus(promptStatusNode, `Kunne ikke laste promptbank: ${parseError(error)}`, 'error');
  }
}

function buildPromptPayload() {
  const cleanedPrompts = state.prompt.prompts.map((item, index) => normalizePromptItem(item, index));
  const model = String(state.prompt.model || PROMPT_DEFAULT_MODEL).trim() || PROMPT_DEFAULT_MODEL;

  return {
    updated_at: new Date().toISOString(),
    model,
    prompts: cleanedPrompts.map((item) => ({
      id: item.id,
      placement: item.placement,
      title: item.title,
      model: item.model || model,
      duration_sec: item.duration_sec,
      aspect_ratio: item.aspect_ratio,
      prompt: item.prompt,
      negative_prompt: item.negative_prompt,
    })),
  };
}

async function savePromptCms() {
  if (!state.authenticated || !state.prompt.loaded) return;
  if (!state.prompt.sha) {
    setStatus(promptStatusNode, 'Mangler SHA. Last promptbank på nytt før lagring.', 'error');
    return;
  }

  const message = (promptCommitMessageInput && promptCommitMessageInput.value.trim())
    || 'Admin CMS update: Kling promptbank';

  setStatus(promptStatusNode, 'Lagrer promptbank til GitHub ...');

  try {
    const payload = buildPromptPayload();
    const response = await apiRequest('PUT', '/api/repo-file', {
      path: PROMPT_PATH,
      content: JSON.stringify(payload, null, 2),
      sha: state.prompt.sha,
      message,
    });

    state.prompt.sha = response.sha || '';
    state.prompt.branch = response.branch || 'main';
    state.prompt.updatedAt = payload.updated_at;
    state.prompt.model = payload.model;
    state.prompt.prompts = payload.prompts;
    state.prompt.dirty = false;
    updatePromptMeta();
    updateCmsActionState();

    if (state.currentPath === PROMPT_PATH && fileEditor) {
      fileEditor.value = JSON.stringify(payload, null, 2);
      state.sha = response.sha || state.sha;
      setStatus(fileMeta, `Fil: ${PROMPT_PATH} | SHA: ${String(state.sha || '').slice(0, 10)} | Branch: ${state.prompt.branch}`);
    }

    const commitNote = response.commit_url ? ` Commit: ${response.commit_url}` : '';
    setStatus(promptStatusNode, `Promptbank lagret.${commitNote}`, 'ok');
  } catch (error) {
    setStatus(promptStatusNode, `Promptbank-lagring feilet: ${parseError(error)}`, 'error');
  }
}

function addPromptItem() {
  if (!state.prompt.loaded) return;
  state.prompt.prompts.push(createEmptyPromptItem(state.prompt.prompts.length));
  renderPromptList();
  markPromptDirty('Ny prompt lagt til.');
}

function markStoryDirty(message = 'Ulagrede scrollytelling-endringer.') {
  state.story.dirty = true;
  setStatus(storyStatusNode, message);
  updateStoryMeta();
  updateCmsActionState();
}

function updateStoryMeta() {
  if (!storyMetaNode) return;

  if (!state.story.loaded) {
    setStatus(storyMetaNode, 'Logg inn for å laste scrollytelling-CMS.');
    return;
  }

  const total = state.story.scenes.length;
  const updated = formatNorwegianDate(state.story.updatedAt);
  const dirtyNote = state.story.dirty ? ' Ulagrede endringer.' : '';
  setStatus(storyMetaNode, `Scener: ${total}. Sist oppdatert: ${updated}.${dirtyNote}`);
}

function renderStoryList() {
  if (!storyListNode) return;
  storyListNode.innerHTML = '';

  if (!state.story.loaded) {
    const placeholder = document.createElement('p');
    placeholder.className = 'empty-state small';
    placeholder.textContent = 'Logg inn og trykk "Last scrollytelling" for visuell redigering.';
    storyListNode.appendChild(placeholder);
    return;
  }

  if (!state.story.scenes.length) {
    const empty = document.createElement('p');
    empty.className = 'empty-state small';
    empty.textContent = 'Ingen scener tilgjengelig. Legg til ny scene.';
    storyListNode.appendChild(empty);
    return;
  }

  state.story.scenes.forEach((rawScene, index) => {
    const scene = normalizeStoryScene(rawScene, index);
    state.story.scenes[index] = scene;

    const card = document.createElement('article');
    card.className = 'story-item';

    const head = document.createElement('div');
    head.className = 'story-item-head';

    const label = document.createElement('p');
    label.className = 'story-item-label';
    label.textContent = `Scene ${index + 1}`;

    const actions = document.createElement('div');
    actions.className = 'cms-actions';

    const moveUpButton = document.createElement('button');
    moveUpButton.type = 'button';
    moveUpButton.textContent = 'Flytt opp';
    moveUpButton.disabled = index === 0;
    moveUpButton.addEventListener('click', () => {
      const previous = state.story.scenes[index - 1];
      state.story.scenes[index - 1] = state.story.scenes[index];
      state.story.scenes[index] = previous;
      renderStoryList();
      markStoryDirty('Scene flyttet opp.');
    });

    const moveDownButton = document.createElement('button');
    moveDownButton.type = 'button';
    moveDownButton.textContent = 'Flytt ned';
    moveDownButton.disabled = index === state.story.scenes.length - 1;
    moveDownButton.addEventListener('click', () => {
      const next = state.story.scenes[index + 1];
      state.story.scenes[index + 1] = state.story.scenes[index];
      state.story.scenes[index] = next;
      renderStoryList();
      markStoryDirty('Scene flyttet ned.');
    });

    const addAfterButton = document.createElement('button');
    addAfterButton.type = 'button';
    addAfterButton.textContent = 'Ny scene etter';
    addAfterButton.addEventListener('click', () => {
      state.story.scenes.splice(index + 1, 0, createEmptyStoryScene(index + 1));
      renderStoryList();
      markStoryDirty('Ny scene lagt til.');
    });

    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.textContent = 'Slett';
    deleteButton.disabled = state.story.scenes.length === 1;
    deleteButton.addEventListener('click', () => {
      state.story.scenes.splice(index, 1);
      renderStoryList();
      markStoryDirty('Scene slettet.');
    });

    actions.appendChild(moveUpButton);
    actions.appendChild(moveDownButton);
    actions.appendChild(addAfterButton);
    actions.appendChild(deleteButton);
    head.appendChild(label);
    head.appendChild(actions);

    const preview = document.createElement('figure');
    preview.className = 'story-preview';

    const previewVideo = document.createElement('video');
    previewVideo.autoplay = true;
    previewVideo.muted = true;
    previewVideo.loop = true;
    previewVideo.playsInline = true;
    previewVideo.poster = scene.poster || '';
    if (scene.video) previewVideo.src = scene.video;

    const overlay = document.createElement('figcaption');
    overlay.className = 'story-preview-overlay';

    const overlayKicker = document.createElement('p');
    overlayKicker.className = 'mini-kicker';
    overlayKicker.textContent = scene.kicker || `Scene ${index + 1}`;

    const overlayTitle = document.createElement('h3');
    overlayTitle.textContent = scene.step_title || scene.title || `Scene ${index + 1}`;

    const overlayText = document.createElement('p');
    overlayText.textContent = scene.step_text || scene.body || 'Ingen tekst ennå.';

    overlay.appendChild(overlayKicker);
    overlay.appendChild(overlayTitle);
    overlay.appendChild(overlayText);
    preview.appendChild(previewVideo);
    preview.appendChild(overlay);

    const grid = document.createElement('div');
    grid.className = 'cms-item-grid';

    const kickerInput = document.createElement('input');
    kickerInput.type = 'text';
    kickerInput.value = scene.kicker;
    kickerInput.addEventListener('input', () => {
      state.story.scenes[index].kicker = kickerInput.value;
      overlayKicker.textContent = kickerInput.value || `Scene ${index + 1}`;
      markStoryDirty();
    });
    grid.appendChild(createField('Kicker (scene-label)', kickerInput));

    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.value = scene.step_title;
    titleInput.addEventListener('input', () => {
      state.story.scenes[index].step_title = titleInput.value;
      overlayTitle.textContent = titleInput.value || state.story.scenes[index].title || `Scene ${index + 1}`;
      markStoryDirty();
    });
    grid.appendChild(createField('Kort tittel i kortet', titleInput));

    const teaserArea = document.createElement('textarea');
    teaserArea.value = scene.step_text;
    teaserArea.addEventListener('input', () => {
      state.story.scenes[index].step_text = teaserArea.value;
      overlayText.textContent = teaserArea.value || state.story.scenes[index].body || 'Ingen tekst ennå.';
      markStoryDirty();
    });
    grid.appendChild(createField('Kort tekst i kortet', teaserArea, true));

    const dataTitleInput = document.createElement('input');
    dataTitleInput.type = 'text';
    dataTitleInput.value = scene.title;
    dataTitleInput.addEventListener('input', () => {
      state.story.scenes[index].title = dataTitleInput.value;
      if (!state.story.scenes[index].step_title) {
        overlayTitle.textContent = dataTitleInput.value || `Scene ${index + 1}`;
      }
      markStoryDirty();
    });
    grid.appendChild(createField('Scene-tittel (data-title)', dataTitleInput));

    const bodyArea = document.createElement('textarea');
    bodyArea.value = scene.body;
    bodyArea.addEventListener('input', () => {
      state.story.scenes[index].body = bodyArea.value;
      if (!state.story.scenes[index].step_text) {
        overlayText.textContent = bodyArea.value || 'Ingen tekst ennå.';
      }
      markStoryDirty();
    });
    grid.appendChild(createField('Scene-tekst (data-body)', bodyArea, true));

    const captionArea = document.createElement('textarea');
    captionArea.value = scene.caption;
    captionArea.addEventListener('input', () => {
      state.story.scenes[index].caption = captionArea.value;
      markStoryDirty();
    });
    grid.appendChild(createField('Caption under video', captionArea, true));

    const videoInput = document.createElement('input');
    videoInput.type = 'url';
    videoInput.placeholder = 'https://...mp4';
    videoInput.value = scene.video;
    videoInput.addEventListener('input', () => {
      state.story.scenes[index].video = videoInput.value;
      previewVideo.src = videoInput.value || '';
      markStoryDirty();
    });
    grid.appendChild(createField('Video URL', videoInput, true));

    const videoUploadInput = document.createElement('input');
    videoUploadInput.type = 'file';
    videoUploadInput.accept = 'video/*';
    videoUploadInput.className = 'story-file-input';

    const videoUploadButton = document.createElement('button');
    videoUploadButton.type = 'button';
    videoUploadButton.textContent = 'Last opp video til R2';

    const videoUploadStatus = document.createElement('p');
    videoUploadStatus.className = 'status';

    const videoUploadRow = document.createElement('div');
    videoUploadRow.className = 'story-upload-row';
    videoUploadRow.appendChild(videoUploadInput);
    videoUploadRow.appendChild(videoUploadButton);

    const videoUploadField = document.createElement('div');
    videoUploadField.className = 'cms-field is-wide';
    const videoUploadLabel = document.createElement('span');
    videoUploadLabel.textContent = 'Direkte opplasting video';
    videoUploadField.appendChild(videoUploadLabel);
    videoUploadField.appendChild(videoUploadRow);
    videoUploadField.appendChild(videoUploadStatus);
    grid.appendChild(videoUploadField);

    videoUploadButton.addEventListener('click', async () => {
      const file = videoUploadInput.files && videoUploadInput.files[0];
      if (!file) {
        setStatus(videoUploadStatus, 'Velg en videofil først.', 'error');
        return;
      }

      videoUploadButton.disabled = true;
      setStatus(videoUploadStatus, 'Laster opp video til R2 ...');
      try {
        const uploaded = await uploadFileToR2(file, 'scrollytelling/videos');
        state.story.scenes[index].video = uploaded.public_url;
        videoInput.value = uploaded.public_url;
        previewVideo.src = uploaded.public_url;
        markStoryDirty('Video lastet opp til R2.');
        setStatus(videoUploadStatus, `Video lastet opp: ${uploaded.public_url}`, 'ok');
      } catch (error) {
        setStatus(videoUploadStatus, `Video-upload feilet: ${parseError(error)}`, 'error');
      } finally {
        videoUploadButton.disabled = false;
      }
    });

    const posterInput = document.createElement('input');
    posterInput.type = 'url';
    posterInput.placeholder = 'https://...jpg/png';
    posterInput.value = scene.poster;
    posterInput.addEventListener('input', () => {
      state.story.scenes[index].poster = posterInput.value;
      previewVideo.poster = posterInput.value || '';
      markStoryDirty();
    });
    grid.appendChild(createField('Fallback-bilde (poster)', posterInput, true));

    const posterUploadInput = document.createElement('input');
    posterUploadInput.type = 'file';
    posterUploadInput.accept = 'image/*';
    posterUploadInput.className = 'story-file-input';

    const posterUploadButton = document.createElement('button');
    posterUploadButton.type = 'button';
    posterUploadButton.textContent = 'Last opp fallback-bilde til R2';

    const posterUploadStatus = document.createElement('p');
    posterUploadStatus.className = 'status';

    const posterUploadRow = document.createElement('div');
    posterUploadRow.className = 'story-upload-row';
    posterUploadRow.appendChild(posterUploadInput);
    posterUploadRow.appendChild(posterUploadButton);

    const posterUploadField = document.createElement('div');
    posterUploadField.className = 'cms-field is-wide';
    const posterUploadLabel = document.createElement('span');
    posterUploadLabel.textContent = 'Direkte opplasting fallback-bilde';
    posterUploadField.appendChild(posterUploadLabel);
    posterUploadField.appendChild(posterUploadRow);
    posterUploadField.appendChild(posterUploadStatus);
    grid.appendChild(posterUploadField);

    posterUploadButton.addEventListener('click', async () => {
      const file = posterUploadInput.files && posterUploadInput.files[0];
      if (!file) {
        setStatus(posterUploadStatus, 'Velg et bilde først.', 'error');
        return;
      }

      posterUploadButton.disabled = true;
      setStatus(posterUploadStatus, 'Laster opp fallback-bilde til R2 ...');
      try {
        const uploaded = await uploadFileToR2(file, 'scrollytelling/posters');
        state.story.scenes[index].poster = uploaded.public_url;
        posterInput.value = uploaded.public_url;
        previewVideo.poster = uploaded.public_url;
        markStoryDirty('Fallback-bilde lastet opp til R2.');
        setStatus(posterUploadStatus, `Bilde lastet opp: ${uploaded.public_url}`, 'ok');
      } catch (error) {
        setStatus(posterUploadStatus, `Bilde-upload feilet: ${parseError(error)}`, 'error');
      } finally {
        posterUploadButton.disabled = false;
      }
    });

    card.appendChild(head);
    card.appendChild(preview);
    card.appendChild(grid);
    storyListNode.appendChild(card);
  });
}

async function loadStoryCms() {
  if (!state.authenticated) return;

  setStatus(storyStatusNode, 'Laster scrollytelling ...');
  try {
    const file = await apiRequest('GET', `/api/repo-file?path=${encodeURIComponent(STORY_PATH)}`);
    const parsed = JSON.parse(file.content || '{}');
    const scenes = Array.isArray(parsed.scenes) ? parsed.scenes.map((scene, index) => normalizeStoryScene(scene, index)) : [];

    state.story.loaded = true;
    state.story.sha = file.sha || '';
    state.story.branch = file.branch || 'main';
    state.story.updatedAt = parsed.updated_at || null;
    state.story.sectionTitle = String(parsed.section_title || STORY_DEFAULT_TITLE).trim() || STORY_DEFAULT_TITLE;
    state.story.sectionMeta = String(parsed.section_meta || STORY_DEFAULT_META).trim() || STORY_DEFAULT_META;
    state.story.scenes = scenes.length ? scenes : [createEmptyStoryScene(0)];
    state.story.dirty = false;

    if (storyTitleInput) storyTitleInput.value = state.story.sectionTitle;
    if (storyMetaInput) storyMetaInput.value = state.story.sectionMeta;

    renderStoryList();
    updateStoryMeta();
    updateCmsActionState();
    setStatus(storyStatusNode, 'Scrollytelling lastet.', 'ok');
  } catch (error) {
    setStatus(storyStatusNode, `Kunne ikke laste scrollytelling: ${parseError(error)}`, 'error');
  }
}

function buildStoryPayload() {
  const scenes = state.story.scenes
    .map((scene, index) => normalizeStoryScene(scene, index))
    .filter((scene) => scene.video || scene.poster || scene.step_title || scene.title || scene.body || scene.step_text);

  if (!scenes.length) {
    scenes.push(createEmptyStoryScene(0));
  }

  return {
    updated_at: new Date().toISOString(),
    section_title: String(state.story.sectionTitle || STORY_DEFAULT_TITLE).trim() || STORY_DEFAULT_TITLE,
    section_meta: String(state.story.sectionMeta || STORY_DEFAULT_META).trim() || STORY_DEFAULT_META,
    scenes,
  };
}

async function saveStoryCms() {
  if (!state.authenticated || !state.story.loaded) return;
  if (!state.story.sha) {
    setStatus(storyStatusNode, 'Mangler SHA. Last scrollytelling på nytt før lagring.', 'error');
    return;
  }

  const message = (storyCommitMessageInput && storyCommitMessageInput.value.trim())
    || 'Admin CMS update: Scrollytelling';

  setStatus(storyStatusNode, 'Lagrer scrollytelling til GitHub ...');

  try {
    const payload = buildStoryPayload();
    const response = await apiRequest('PUT', '/api/repo-file', {
      path: STORY_PATH,
      content: JSON.stringify(payload, null, 2),
      sha: state.story.sha,
      message,
    });

    state.story.sha = response.sha || '';
    state.story.branch = response.branch || 'main';
    state.story.updatedAt = payload.updated_at;
    state.story.sectionTitle = payload.section_title;
    state.story.sectionMeta = payload.section_meta;
    state.story.scenes = payload.scenes;
    state.story.dirty = false;
    updateStoryMeta();
    updateCmsActionState();

    if (state.currentPath === STORY_PATH && fileEditor) {
      fileEditor.value = JSON.stringify(payload, null, 2);
      state.sha = response.sha || state.sha;
      setStatus(fileMeta, `Fil: ${STORY_PATH} | SHA: ${String(state.sha || '').slice(0, 10)} | Branch: ${state.story.branch}`);
    }

    const commitNote = response.commit_url ? ` Commit: ${response.commit_url}` : '';
    setStatus(storyStatusNode, `Scrollytelling lagret.${commitNote}`, 'ok');
  } catch (error) {
    setStatus(storyStatusNode, `Scrollytelling-lagring feilet: ${parseError(error)}`, 'error');
  }
}

function addStoryScene() {
  if (!state.story.loaded) return;
  state.story.scenes.push(createEmptyStoryScene(state.story.scenes.length));
  renderStoryList();
  markStoryDirty('Ny scene lagt til.');
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
      await loadStoryCms();
      await loadPromptCms();
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
    const insideStoryCms = Boolean(target && target.closest('#story-cms'));
    const insidePromptCms = Boolean(target && target.closest('#prompt-cms'));
    const insideCms = Boolean(target && target.closest('#cms'));
    if (insideStoryCms && state.story.loaded) {
      saveStoryCms();
      return;
    }
    if (insidePromptCms && state.prompt.loaded) {
      savePromptCms();
      return;
    }
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

  if (storyLoadButton) storyLoadButton.addEventListener('click', loadStoryCms);
  if (storyAddButton) storyAddButton.addEventListener('click', addStoryScene);
  if (storySaveButton) storySaveButton.addEventListener('click', saveStoryCms);
  if (storyTitleInput) {
    storyTitleInput.addEventListener('input', () => {
      state.story.sectionTitle = String(storyTitleInput.value || '').trim();
      markStoryDirty();
    });
  }
  if (storyMetaInput) {
    storyMetaInput.addEventListener('input', () => {
      state.story.sectionMeta = String(storyMetaInput.value || '').trim();
      markStoryDirty();
    });
  }

  if (promptLoadButton) promptLoadButton.addEventListener('click', loadPromptCms);
  if (promptAddButton) promptAddButton.addEventListener('click', addPromptItem);
  if (promptSaveButton) promptSaveButton.addEventListener('click', savePromptCms);
  if (promptModelInput) {
    promptModelInput.addEventListener('input', () => {
      state.prompt.model = String(promptModelInput.value || '').trim() || PROMPT_DEFAULT_MODEL;
      markPromptDirty();
    });
  }

  setEditorEnabled(false);
  refreshAuthStatus();
}

init();
