const body = document.body;
const timestampNode = document.querySelector('#timestamp');
const yearNode = document.querySelector('#year');
const menuToggle = document.querySelector('.menu-toggle');
const navNode = document.querySelector('#main-nav');
const listNode = document.querySelector('#news-list');
const templateNode = document.querySelector('#news-item-template');
const metaNode = document.querySelector('#news-meta');
const filterButtons = Array.from(document.querySelectorAll('.filter'));

const IMAGE_POOL = [
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1551281044-8f1d7f4b84d6?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80',
];

const VIDEO_POOL = [
  'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
  'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
  'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
  'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
  'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
  'https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
  'https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
];

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

function hashString(input) {
  let hash = 0;
  for (let i = 0; i < input.length; i += 1) {
    hash = (hash << 5) - hash + input.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

function mediaForItem(item, index) {
  const seed = hashString(`${item.title || ''}|${item.source || ''}|${index}`);
  const image = IMAGE_POOL[seed % IMAGE_POOL.length];
  const hasVideo = seed % 3 === 0;
  const video = hasVideo ? VIDEO_POOL[seed % VIDEO_POOL.length] : '';
  return { image, video };
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

  items.forEach((item, index) => {
    const clone = templateNode.content.cloneNode(true);
    const card = clone.querySelector('.news-item');
    const mediaLink = clone.querySelector('.news-media-link');
    const mediaImage = clone.querySelector('.news-image');
    const mediaVideo = clone.querySelector('.news-video');
    const tone = clone.querySelector('.tone');
    const source = clone.querySelector('.source');
    const title = clone.querySelector('.title');
    const snippet = clone.querySelector('.snippet');
    const published = clone.querySelector('.published');
    const readMore = clone.querySelector('.read-more');
    const media = mediaForItem(item, index);

    if (card) card.dataset.tone = item.tone || 'neutral';
    if (tone) tone.textContent = toneLabel(item.tone);
    if (source) source.textContent = item.source || 'Ukjent kilde';
    if (title) title.textContent = item.title || 'Uten tittel';
    if (snippet) snippet.textContent = cleanSnippet(item.snippet) || 'Ingen ingress tilgjengelig.';

    if (mediaImage) {
      mediaImage.src = media.image;
      mediaImage.alt = item.title ? `Illustrasjon til: ${item.title}` : 'Illustrasjon til nyhet';
    }

    if (mediaLink) {
      mediaLink.href = item.url || '#';
      mediaLink.setAttribute('aria-label', `Åpne sak: ${item.title || 'uten tittel'}`);
    }

    if (mediaVideo) {
      if (media.video) {
        mediaVideo.src = media.video;
        mediaVideo.autoplay = true;
        mediaVideo.muted = true;
        mediaVideo.loop = true;
        mediaVideo.playsInline = true;
        if (card) card.classList.add('has-video');
      } else {
        mediaVideo.remove();
      }
    }

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
