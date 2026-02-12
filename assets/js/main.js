const body = document.body;
const timestampNode = document.querySelector('#timestamp');
const yearNode = document.querySelector('#year');
const menuToggle = document.querySelector('.menu-toggle');
const navNode = document.querySelector('#main-nav');
const listNode = document.querySelector('#news-list');
const templateNode = document.querySelector('#news-item-template');
const metaNode = document.querySelector('#news-meta');
const filterButtons = Array.from(document.querySelectorAll('.filter'));

const state = {
  items: [],
  filter: 'all',
};

function formatNow() {
  return new Intl.DateTimeFormat('nb-NO', {
    dateStyle: 'full',
    timeStyle: 'short',
  }).format(new Date());
}

function formatPublished(value) {
  if (!value) return 'Ukjent tidspunkt';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return 'Ukjent tidspunkt';
  return new Intl.DateTimeFormat('nb-NO', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(date);
}

function setTopClock() {
  if (!timestampNode) return;
  timestampNode.textContent = formatNow();
}

function toneLabel(tone) {
  if (tone === 'replacement_anxiety') return 'Erstatningsangst';
  if (tone === 'reskilling') return 'Omskolering';
  return 'Nøytral';
}

function cleanSnippet(input) {
  if (!input) return '';
  return input
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function visibleItems() {
  if (state.filter === 'all') return state.items;
  return state.items.filter((item) => item.tone === state.filter);
}

function renderNews() {
  if (!listNode || !templateNode) return;
  listNode.innerHTML = '';

  const items = visibleItems();
  if (!items.length) {
    const empty = document.createElement('div');
    empty.className = 'empty-state';
    empty.textContent = 'Ingen saker i valgt filter akkurat nå.';
    listNode.appendChild(empty);
    return;
  }

  const fragment = document.createDocumentFragment();

  items.forEach((item) => {
    const clone = templateNode.content.cloneNode(true);
    const card = clone.querySelector('.news-item');
    const tone = clone.querySelector('.tone');
    const source = clone.querySelector('.source');
    const title = clone.querySelector('.title');
    const snippet = clone.querySelector('.snippet');
    const published = clone.querySelector('.published');
    const readMore = clone.querySelector('.read-more');

    if (card) card.dataset.tone = item.tone || 'neutral';
    if (tone) tone.textContent = toneLabel(item.tone);
    if (source) source.textContent = item.source || 'Ukjent kilde';
    if (title) title.textContent = item.title || 'Uten tittel';
    if (snippet) snippet.textContent = cleanSnippet(item.snippet) || 'Ingen ingress tilgjengelig.';
    if (published) {
      const iso = item.published_at || '';
      published.dateTime = iso;
      published.textContent = formatPublished(iso);
    }
    if (readMore) {
      readMore.href = item.url || '#';
      readMore.setAttribute('aria-label', `Les sak: ${item.title || 'uten tittel'}`);
    }

    fragment.appendChild(clone);
  });

  listNode.appendChild(fragment);
}

function setFilter(name) {
  state.filter = name;
  filterButtons.forEach((button) => {
    const active = button.dataset.filter === name;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-selected', String(active));
  });
  renderNews();
}

function updateMeta(data) {
  if (!metaNode) return;
  const generated = data.generated_at ? formatPublished(data.generated_at) : 'ukjent';
  const count = Array.isArray(data.items) ? data.items.length : 0;
  metaNode.textContent = `Sist oppdatert: ${generated}. Totalt ${count} saker.`;
}

async function loadNews() {
  const fallback = {
    generated_at: null,
    items: [
      {
        title: 'Kjør crawleren for å hente nye saker',
        source: 'Lokal status',
        url: '#',
        published_at: new Date().toISOString(),
        tone: 'neutral',
        snippet: 'Bruk scripts/crawl_ai_jobs_news.py for å oppdatere wire med ferske nyheter.',
      },
    ],
  };

  try {
    const response = await fetch('assets/data/ai-jobs-news.json', { cache: 'no-store' });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    state.items = Array.isArray(data.items) ? data.items : [];
    updateMeta(data);
    renderNews();
  } catch (error) {
    state.items = fallback.items;
    updateMeta(fallback);
    renderNews();
    if (metaNode) {
      metaNode.textContent = `Kunne ikke laste crawl-data (${String(error)}). Viser fallback.`;
    }
  }
}

if (menuToggle && navNode) {
  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    body.classList.toggle('nav-open', !expanded);
  });

  navNode.addEventListener('click', (event) => {
    if (!(event.target instanceof HTMLAnchorElement)) return;
    menuToggle.setAttribute('aria-expanded', 'false');
    body.classList.remove('nav-open');
  });
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const target = button.dataset.filter || 'all';
    setFilter(target);
  });
});

if (yearNode) {
  yearNode.textContent = String(new Date().getFullYear());
}

setTopClock();
window.setInterval(setTopClock, 30_000);
loadNews();
