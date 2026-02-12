const body = document.body;
const timestampNode = document.querySelector('#timestamp');
const yearNode = document.querySelector('#year');
const menuToggle = document.querySelector('.menu-toggle');
const navNode = document.querySelector('#main-nav');
const listNode = document.querySelector('#news-list');
const templateNode = document.querySelector('#news-item-template');
const metaNode = document.querySelector('#news-meta');
const filterButtons = Array.from(document.querySelectorAll('.filter'));
const categoryFiltersNode = document.querySelector('#category-filters');
const promptListNode = document.querySelector('#prompt-list');
const promptTemplateNode = document.querySelector('#prompt-item-template');
const promptMetaNode = document.querySelector('#prompt-meta');
const scrollyStory = document.querySelector('#scrollytelling');
const scrollySteps = Array.from(document.querySelectorAll('.scrolly-step'));
const scrollyMedia = document.querySelector('.scrolly-media');
const scrollyKicker = document.querySelector('#scrolly-kicker');
const scrollyTitle = document.querySelector('#scrolly-title');
const scrollyBody = document.querySelector('#scrolly-body');
const scrollyCaption = document.querySelector('#scrolly-caption');
const scrollyCounter = document.querySelector('#scrolly-counter');
const scrollyAudioToggle = document.querySelector('#scrolly-audio-toggle');
const scrollyVolumeSlider = document.querySelector('#scrolly-volume');
const scrollyAudioStatus = document.querySelector('#scrolly-audio-status');
const scrollyVideoLayers = Array.from(document.querySelectorAll('.scrolly-video-layer'));
const scrollySceneVideos = scrollyVideoLayers
  .map((layer) => layer.querySelector('.scrolly-scene-video'))
  .filter((videoNode) => videoNode instanceof HTMLVideoElement);
const seriesHeroProgress = document.querySelector('#series-hero-progress');
const seriesStartLink = document.querySelector('#series-start-link');
const seriesResumeButton = document.querySelector('#series-resume-button');
const videoModal = document.querySelector('#video-modal');
const videoModalTitle = document.querySelector('#video-modal-title');
const videoModalPlayer = document.querySelector('#video-modal-player');
const videoModalClose = document.querySelector('#video-modal-close');
const videoModalBackdrop = document.querySelector('[data-close-video-modal]');

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
  category: 'all',
  categories: [],
  generatedAt: null,
  totalItems: 0,
};

let modalTriggerNode = null;
let scrollyActiveIndex = 0;
let scrollySectionInView = true;
let scrollySoundEnabled = false;
let scrollyVolume = 0.8;

const SCROLLY_PROGRESS_KEY = 'ip_scrolly_last_scene';

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function getStoredScrollyIndex() {
  try {
    if (!window.localStorage) return 0;
    const raw = Number(window.localStorage.getItem(SCROLLY_PROGRESS_KEY) || '0');
    if (!Number.isFinite(raw)) return 0;
    return clamp(Math.round(raw), 0, Math.max(0, scrollySteps.length - 1));
  } catch {
    return 0;
  }
}

function storeScrollyIndex(index) {
  try {
    if (!window.localStorage) return;
    window.localStorage.setItem(SCROLLY_PROGRESS_KEY, String(index));
  } catch {
    // Ignore storage write failures.
  }
}

function updateSeriesHeroProgress() {
  if (seriesHeroProgress) {
    seriesHeroProgress.textContent = `Scene ${scrollyActiveIndex + 1} av ${scrollySteps.length}`;
  }

  const storedIndex = getStoredScrollyIndex();
  const shouldShowResume = storedIndex > 0;
  if (seriesResumeButton) {
    seriesResumeButton.hidden = !shouldShowResume;
    seriesResumeButton.textContent = shouldShowResume
      ? `Fortsett der du slapp (scene ${storedIndex + 1})`
      : 'Fortsett der du slapp';
  }
}

function jumpToScrollyScene(index) {
  if (!scrollySteps.length) return;
  const safeIndex = clamp(index, 0, scrollySteps.length - 1);
  const step = scrollySteps[safeIndex];
  if (!(step instanceof HTMLElement)) return;
  step.scrollIntoView({ behavior: 'smooth', block: 'center' });
  applyScrollyStep(step);
}

function getSourceFromVideo(videoNode) {
  if (!(videoNode instanceof HTMLVideoElement)) return '';
  const sourceNode = videoNode.querySelector('source');
  return (
    String(videoNode.currentSrc || '').trim()
    || String(videoNode.getAttribute('src') || '').trim()
    || String(sourceNode && sourceNode.getAttribute('src') || '').trim()
    || ''
  );
}

function deriveVideoTitle(node, fallback = 'Video') {
  if (!(node instanceof Element)) return fallback;
  const explicit = String(node.getAttribute('data-video-title') || '').trim();
  if (explicit) return explicit;

  const heading = node.querySelector('h1, h2, h3')
    || node.closest('article, section, aside, div')?.querySelector('h1, h2, h3');
  const headingText = String(heading && heading.textContent || '').trim();
  if (headingText) return headingText;

  return fallback;
}

function markVideoTriggers(rootNode = document) {
  if (!(rootNode instanceof Document || rootNode instanceof Element)) return;

  rootNode.querySelectorAll('.js-video-launch').forEach((tile) => {
    if (!tile.hasAttribute('role')) tile.setAttribute('role', 'button');
    if (!tile.hasAttribute('tabindex')) tile.setAttribute('tabindex', '0');
    if (!tile.hasAttribute('data-video-popup')) tile.setAttribute('data-video-popup', 'true');
    if (!tile.getAttribute('aria-label')) {
      tile.setAttribute('aria-label', `Spill av video: ${deriveVideoTitle(tile)}`);
    }
  });

  rootNode.querySelectorAll('video').forEach((videoNode) => {
    if (!(videoNode instanceof HTMLVideoElement)) return;
    if (videoNode.id === 'video-modal-player') return;
    if (videoNode.dataset.popupDisabled === 'true') return;
    if (!getSourceFromVideo(videoNode)) return;

    videoNode.classList.add('video-popup-trigger');
    videoNode.setAttribute('data-video-popup', 'true');
    if (!videoNode.hasAttribute('tabindex')) videoNode.setAttribute('tabindex', '0');
    if (!videoNode.hasAttribute('role')) videoNode.setAttribute('role', 'button');
    if (!videoNode.getAttribute('aria-label')) {
      videoNode.setAttribute('aria-label', `Spill av video: ${deriveVideoTitle(videoNode.closest('article, section, aside, div') || videoNode)}`);
    }
  });
}

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

function normalizeCategory(value) {
  const cleaned = String(value || '').trim();
  return cleaned || 'Uten kategori';
}

function normalizeTone(value) {
  const tone = String(value || '').trim();
  if (tone === 'replacement_anxiety' || tone === 'reskilling' || tone === 'neutral') {
    return tone;
  }
  return 'neutral';
}

function normalizeNewsItem(item) {
  return {
    ...item,
    tone: normalizeTone(item && item.tone),
    category: normalizeCategory(item && item.category),
    published: item && item.published !== false,
  };
}

function collectCategories(payload, items) {
  const categories = new Set();

  if (payload && Array.isArray(payload.categories)) {
    payload.categories.forEach((name) => {
      const normalized = normalizeCategory(name);
      if (normalized !== 'Uten kategori') {
        categories.add(normalized);
      }
    });
  }

  items.forEach((item) => {
    categories.add(normalizeCategory(item.category));
  });

  const ordered = Array.from(categories).sort((a, b) => a.localeCompare(b, 'nb-NO'));
  const norwayIndex = ordered.indexOf('Norsk arbeidsmarked');
  if (norwayIndex > 0) {
    ordered.splice(norwayIndex, 1);
    ordered.unshift('Norsk arbeidsmarked');
  }

  return ordered;
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
  return state.items
    .filter((item) => item.published !== false)
    .filter((item) => state.category === 'all' || normalizeCategory(item.category) === state.category)
    .filter((item) => state.filter === 'all' || item.tone === state.filter);
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
    const category = clone.querySelector('.category');
    const source = clone.querySelector('.source');
    const title = clone.querySelector('.title');
    const snippet = clone.querySelector('.snippet');
    const published = clone.querySelector('.published');
    const readMore = clone.querySelector('.read-more');
    const media = mediaForItem(item, index);

    if (card) card.dataset.tone = item.tone || 'neutral';
    if (tone) tone.textContent = toneLabel(item.tone);
    if (category) category.textContent = normalizeCategory(item.category);
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
  markVideoTriggers(listNode);
}

function setFilter(name) {
  state.filter = name;
  filterButtons.forEach((button) => {
    const active = button.dataset.filter === name;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-selected', String(active));
  });
  renderNews();
  updateMeta();
}

function setCategory(name) {
  state.category = name;
  renderCategoryFilters();
  renderNews();
  updateMeta();
}

function renderCategoryFilters() {
  if (!categoryFiltersNode) return;

  categoryFiltersNode.innerHTML = '';
  const categories = ['all', ...state.categories];

  categories.forEach((name) => {
    const button = document.createElement('button');
    const active = state.category === name;
    button.type = 'button';
    button.className = 'category-filter';
    button.dataset.category = name;
    button.setAttribute('role', 'tab');
    button.setAttribute('aria-selected', String(active));
    button.classList.toggle('is-active', active);
    button.textContent = name === 'all' ? 'Alle kategorier' : name;
    button.addEventListener('click', () => setCategory(name));
    categoryFiltersNode.appendChild(button);
  });
}

function updateMeta() {
  if (!metaNode) return;
  const generated = state.generatedAt ? formatPublished(state.generatedAt) : 'ukjent';
  const total = state.totalItems || state.items.length;
  const published = state.items.filter((item) => item.published !== false).length;
  const visible = visibleItems().length;
  const category = state.category === 'all' ? 'Alle kategorier' : state.category;
  metaNode.textContent = `Sist oppdatert: ${generated}. Viser ${visible} av ${published} publiserte saker (${category}). Totalt registrert: ${total}.`;
}

function scrollyAutoplayAllowed() {
  return scrollySectionInView && !document.hidden;
}

function getActiveScrollyVideo() {
  const activeVideo = scrollySceneVideos[scrollyActiveIndex];
  return activeVideo instanceof HTMLVideoElement ? activeVideo : null;
}

function videoLikelyHasAudio(videoNode) {
  if (!(videoNode instanceof HTMLVideoElement)) return false;

  if (videoNode.audioTracks && typeof videoNode.audioTracks.length === 'number') {
    return videoNode.audioTracks.length > 0;
  }

  if (typeof videoNode.mozHasAudio === 'boolean') {
    return videoNode.mozHasAudio;
  }

  if (
    typeof videoNode.webkitAudioDecodedByteCount === 'number'
    && videoNode.currentTime > 0.05
  ) {
    return videoNode.webkitAudioDecodedByteCount > 0;
  }

  return true;
}

function setScrollyAudioStatus(message) {
  if (!(scrollyAudioStatus instanceof HTMLElement)) return;
  scrollyAudioStatus.textContent = message;
}

function updateScrollyAudioToggle() {
  const volumePercent = Math.round(scrollyVolume * 100);

  if (scrollyAudioToggle instanceof HTMLButtonElement) {
    scrollyAudioToggle.setAttribute('aria-pressed', String(scrollySoundEnabled));
    scrollyAudioToggle.textContent = scrollySoundEnabled ? 'Lyd: På' : 'Lyd: Av';
  }

  if (scrollyVolumeSlider instanceof HTMLInputElement) {
    scrollyVolumeSlider.value = String(volumePercent);
    scrollyVolumeSlider.setAttribute('aria-valuetext', `${volumePercent} prosent`);
  }
}

function updateScrollyAudioStatusFromActiveVideo() {
  const volumePercent = Math.round(scrollyVolume * 100);

  if (!scrollySoundEnabled) {
    setScrollyAudioStatus('Lyd er av.');
    return;
  }

  if (!scrollyAutoplayAllowed()) {
    setScrollyAudioStatus(`Lyd klar (${volumePercent}%).`);
    return;
  }

  const activeVideo = getActiveScrollyVideo();
  if (!(activeVideo instanceof HTMLVideoElement)) {
    setScrollyAudioStatus(`Lyd klar (${volumePercent}%).`);
    return;
  }

  if (!videoLikelyHasAudio(activeVideo)) {
    setScrollyAudioStatus('Lyd på, men aktiv video ser ut til å mangle lydspor.');
    return;
  }

  setScrollyAudioStatus(`Lyd på (${volumePercent}%).`);
}

function setVideoMutedState(videoNode, shouldMute) {
  if (!(videoNode instanceof HTMLVideoElement)) return;
  videoNode.muted = shouldMute;
  videoNode.defaultMuted = shouldMute;
  videoNode.volume = shouldMute ? 0 : 1;
  if (shouldMute) {
    videoNode.setAttribute('muted', '');
  } else {
    videoNode.removeAttribute('muted');
  }
}

function syncScrollyPlayback() {
  if (!scrollySceneVideos.length) return;

  const autoplay = scrollyAutoplayAllowed();

  if (scrollyMedia) {
    scrollyMedia.classList.toggle('is-poster-mode', !autoplay);
  }

  scrollyVideoLayers.forEach((layer, idx) => {
    layer.classList.toggle('is-active', idx === scrollyActiveIndex);
  });

  scrollySceneVideos.forEach((videoNode, idx) => {
    const distance = Math.abs(idx - scrollyActiveIndex);
    videoNode.preload = distance <= 1 ? 'auto' : 'metadata';

    if (!autoplay) {
      videoNode.pause();
      setVideoMutedState(videoNode, true);
      if (videoNode.currentTime > 0.01) {
        try {
          videoNode.currentTime = 0;
        } catch {
          // Ignore seek errors on unloaded media.
        }
      }
      return;
    }

    if (idx === scrollyActiveIndex) {
      const shouldMute = !scrollySoundEnabled;
      setVideoMutedState(videoNode, shouldMute);
      videoNode.volume = shouldMute ? 0 : scrollyVolume;
      videoNode.autoplay = true;
      videoNode.playsInline = true;
      if (videoNode.readyState < 2) {
        videoNode.load();
      }
      const playback = videoNode.play();
      if (playback) {
        playback.catch(() => {
          if (scrollySoundEnabled) {
            setScrollyAudioStatus('Trykk Lyd: På for å aktivere lyd i denne scenen.');
          }
        });
      }
      return;
    }

    videoNode.pause();
    setVideoMutedState(videoNode, true);
    if (videoNode.currentTime > 0.01) {
      try {
        videoNode.currentTime = 0;
      } catch {
        // Ignore seek errors on unloaded media.
      }
    }
  });

  updateScrollyAudioStatusFromActiveVideo();
}

function attemptScrollyAudioStart({ userInitiated = false } = {}) {
  if (!scrollySoundEnabled) {
    updateScrollyAudioStatusFromActiveVideo();
    return;
  }

  const activeVideo = getActiveScrollyVideo();
  if (!(activeVideo instanceof HTMLVideoElement)) {
    updateScrollyAudioStatusFromActiveVideo();
    return;
  }

  setVideoMutedState(activeVideo, false);
  activeVideo.volume = scrollyVolume;
  if (activeVideo.readyState < 2) {
    activeVideo.load();
  }

  const playback = activeVideo.play();
  if (!playback) {
    updateScrollyAudioStatusFromActiveVideo();
    return;
  }

  playback
    .then(() => {
      updateScrollyAudioStatusFromActiveVideo();
    })
    .catch(() => {
      if (userInitiated) {
        scrollySoundEnabled = false;
        updateScrollyAudioToggle();
        syncScrollyPlayback();
        setScrollyAudioStatus('Nettleseren blokkerte lyd. Trykk Lyd: På igjen.');
        return;
      }
      setScrollyAudioStatus('Lyd krever ny brukerklikk i denne scenen.');
    });
}

function initScrollySeriesActions() {
  if (seriesStartLink instanceof HTMLAnchorElement) {
    seriesStartLink.addEventListener('click', (event) => {
      event.preventDefault();
      jumpToScrollyScene(0);
    });
  }

  if (seriesResumeButton instanceof HTMLButtonElement) {
    seriesResumeButton.addEventListener('click', () => {
      jumpToScrollyScene(getStoredScrollyIndex());
    });
  }
}

function applyScrollyStep(step) {
  if (!(step instanceof HTMLElement)) return;

  const rawIndex = Number(step.dataset.sceneIndex);
  const fallbackIndex = scrollySteps.indexOf(step);
  const safeIndex = Number.isFinite(rawIndex) ? rawIndex : fallbackIndex;
  scrollyActiveIndex = clamp(safeIndex, 0, Math.max(0, scrollySteps.length - 1));

  const kicker = step.dataset.kicker || '';
  const title = step.dataset.title || '';
  const bodyText = step.dataset.body || '';
  const caption = step.dataset.caption || '';

  if (scrollyKicker) scrollyKicker.textContent = kicker;
  if (scrollyTitle) scrollyTitle.textContent = title;
  if (scrollyBody) scrollyBody.textContent = bodyText;
  if (scrollyCaption) scrollyCaption.textContent = caption;
  if (scrollyCounter) scrollyCounter.textContent = `Scene ${scrollyActiveIndex + 1} / ${scrollySteps.length}`;

  scrollySteps.forEach((entry) => {
    entry.classList.toggle('is-active', entry === step);
  });

  storeScrollyIndex(scrollyActiveIndex);
  updateSeriesHeroProgress();
  syncScrollyPlayback();
}

function initScrollytelling() {
  if (!scrollySteps.length) return;

  if (scrollyVolumeSlider instanceof HTMLInputElement) {
    const initialVolume = Number(scrollyVolumeSlider.value);
    if (Number.isFinite(initialVolume)) {
      scrollyVolume = clamp(initialVolume, 0, 100) / 100;
    }
  }

  updateScrollyAudioToggle();
  updateScrollyAudioStatusFromActiveVideo();

  if (scrollyAudioToggle instanceof HTMLButtonElement) {
    scrollyAudioToggle.addEventListener('click', () => {
      scrollySoundEnabled = !scrollySoundEnabled;
      updateScrollyAudioToggle();
      syncScrollyPlayback();
      if (scrollySoundEnabled) {
        attemptScrollyAudioStart({ userInitiated: true });
      } else {
        updateScrollyAudioStatusFromActiveVideo();
      }
    });
  }

  if (scrollyVolumeSlider instanceof HTMLInputElement) {
    scrollyVolumeSlider.addEventListener('input', () => {
      const nextVolume = clamp(Number(scrollyVolumeSlider.value), 0, 100) / 100;
      scrollyVolume = nextVolume;
      scrollySoundEnabled = nextVolume > 0;
      updateScrollyAudioToggle();
      syncScrollyPlayback();
      if (scrollySoundEnabled) {
        attemptScrollyAudioStart({ userInitiated: true });
      } else {
        updateScrollyAudioStatusFromActiveVideo();
      }
    });
  }

  scrollySceneVideos.forEach((videoNode) => {
    videoNode.addEventListener('canplay', () => {
      syncScrollyPlayback();
    });
    videoNode.addEventListener('loadedmetadata', () => {
      updateScrollyAudioStatusFromActiveVideo();
    });
    videoNode.addEventListener('playing', () => {
      updateScrollyAudioStatusFromActiveVideo();
    });
  });

  document.addEventListener('visibilitychange', () => {
    syncScrollyPlayback();
  });

  const updateScrollyInView = () => {
    if (!scrollyStory) {
      scrollySectionInView = true;
      syncScrollyPlayback();
      return;
    }

    const rect = scrollyStory.getBoundingClientRect();
    scrollySectionInView = rect.bottom > 0 && rect.top < window.innerHeight;
    syncScrollyPlayback();
  };

  updateScrollyInView();
  window.addEventListener('scroll', updateScrollyInView, { passive: true });
  window.addEventListener('resize', updateScrollyInView);

  const initialIndex = getStoredScrollyIndex();
  applyScrollyStep(scrollySteps[initialIndex] || scrollySteps[0]);

  const stepObserver = new IntersectionObserver(
    (entries) => {
      const visibleSteps = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (!visibleSteps.length) return;
      applyScrollyStep(visibleSteps[0].target);
    },
    {
      threshold: [0.25, 0.45, 0.65, 0.85],
      rootMargin: '-15% 0px -35% 0px',
    }
  );

  scrollySteps.forEach((step) => stepObserver.observe(step));
}

function closeVideoModal() {
  if (!videoModal || videoModal.hidden) return;

  videoModal.hidden = true;
  videoModal.setAttribute('aria-hidden', 'true');
  body.classList.remove('modal-open');

  if (videoModalPlayer) {
    videoModalPlayer.pause();
    videoModalPlayer.removeAttribute('src');
    videoModalPlayer.load();
  }

  if (modalTriggerNode) {
    modalTriggerNode.focus();
    modalTriggerNode = null;
  }
}

function openVideoModal(source, title, triggerNode) {
  if (!videoModal || !videoModalPlayer || !source) return;

  modalTriggerNode = triggerNode || null;
  videoModal.hidden = false;
  videoModal.setAttribute('aria-hidden', 'false');
  body.classList.add('modal-open');

  if (videoModalTitle) {
    videoModalTitle.textContent = title || 'Video';
  }

  videoModalPlayer.src = source;
  videoModalPlayer.load();
  videoModalPlayer.play().catch(() => {});
}

function initVideoModal() {
  if (!videoModal) return;

  markVideoTriggers(document);

  const openFromTrigger = (triggerNode, event = null) => {
    if (!(triggerNode instanceof Element)) return;

    const videoNode = triggerNode instanceof HTMLVideoElement
      ? triggerNode
      : triggerNode.querySelector('video');

    if (!(videoNode instanceof HTMLVideoElement)) return;

    const source = String(triggerNode.getAttribute('data-video-src') || '').trim()
      || getSourceFromVideo(videoNode);
    const title = deriveVideoTitle(triggerNode, deriveVideoTitle(videoNode.closest('article, section, aside, div') || videoNode));

    if (!source) return;

    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    openVideoModal(source, title, triggerNode);
  };

  document.addEventListener('click', (event) => {
    const target = event.target instanceof Element ? event.target : null;
    if (!target) return;
    if (videoModal.contains(target)) return;

    const triggerNode = target.closest('[data-video-popup="true"]');
    if (!triggerNode) return;
    openFromTrigger(triggerNode, event);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && videoModal && !videoModal.hidden) {
      closeVideoModal();
      return;
    }

    if (event.key !== 'Enter' && event.key !== ' ') return;
    const target = event.target instanceof Element ? event.target : null;
    if (!target) return;

    const triggerNode = target.closest('[data-video-popup="true"]');
    if (!triggerNode) return;
    openFromTrigger(triggerNode, event);
  });

  if (videoModalClose) {
    videoModalClose.addEventListener('click', closeVideoModal);
  }

  if (videoModalBackdrop) {
    videoModalBackdrop.addEventListener('click', closeVideoModal);
  }
}

function renderPrompts(prompts, meta) {
  if (!promptListNode || !promptTemplateNode) return;
  promptListNode.innerHTML = '';

  if (!Array.isArray(prompts) || !prompts.length) {
    const empty = document.createElement('div');
    empty.className = 'empty-state';
    empty.textContent = 'Ingen Kling-prompter tilgjengelig.';
    promptListNode.appendChild(empty);
    if (promptMetaNode) promptMetaNode.textContent = 'Ingen prompts funnet';
    return;
  }

  const fragment = document.createDocumentFragment();

  prompts.forEach((item) => {
    const clone = promptTemplateNode.content.cloneNode(true);
    const slot = clone.querySelector('.prompt-slot');
    const title = clone.querySelector('.prompt-title');
    const button = clone.querySelector('.copy-prompt');
    const model = clone.querySelector('.prompt-model');
    const duration = clone.querySelector('.prompt-duration');
    const ratio = clone.querySelector('.prompt-ratio');
    const text = clone.querySelector('.prompt-text');
    const negative = clone.querySelector('.prompt-negative');

    if (slot) slot.textContent = item.placement || 'Ukjent plassering';
    if (title) title.textContent = item.title || 'Uten tittel';
    if (model) model.textContent = item.model || 'Kling 3.0';
    if (duration) duration.textContent = `${item.duration_sec || '?'} sek`; 
    if (ratio) ratio.textContent = item.aspect_ratio || '16:9';
    if (text) text.textContent = item.prompt || '';
    if (negative) negative.textContent = item.negative_prompt || 'Ingen';

    if (button) {
      button.dataset.prompt = item.prompt || '';
      button.dataset.defaultLabel = 'Kopier prompt';
      button.addEventListener('click', async () => {
        const payload = button.dataset.prompt || '';
        if (!payload) return;
        try {
          await navigator.clipboard.writeText(payload);
          button.textContent = 'Kopiert';
          button.classList.add('copied');
          window.setTimeout(() => {
            button.textContent = button.dataset.defaultLabel || 'Kopier prompt';
            button.classList.remove('copied');
          }, 1200);
        } catch {
          button.textContent = 'Kunne ikke kopiere';
        }
      });
    }

    fragment.appendChild(clone);
  });

  promptListNode.appendChild(fragment);

  if (promptMetaNode) {
    const updated = meta && meta.updated_at ? formatPublished(meta.updated_at) : 'ukjent';
    promptMetaNode.textContent = `${prompts.length} prompter. Oppdatert: ${updated}`;
  }
}

async function loadNews() {
  const fallback = {
    generated_at: null,
    categories: ['Norsk arbeidsmarked'],
    items: [
      {
        title: 'Kjør crawleren for å hente nye saker',
        source: 'Lokal status',
        url: '#',
        published_at: new Date().toISOString(),
        tone: 'neutral',
        category: 'Norsk arbeidsmarked',
        published: true,
        snippet: 'Bruk scripts/crawl_ai_jobs_news.py for å oppdatere wire med ferske nyheter.',
      },
    ],
  };

  try {
    const response = await fetch('assets/data/ai-jobs-news.json', { cache: 'no-store' });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    state.generatedAt = data.generated_at || null;
    state.totalItems = Number(data.total_items) || (Array.isArray(data.items) ? data.items.length : 0);
    state.items = Array.isArray(data.items) ? data.items.map(normalizeNewsItem) : [];
    state.categories = collectCategories(data, state.items);
    const available = new Set(['all', ...state.categories]);
    if (!available.has(state.category) || state.category === 'all') {
      state.category = state.categories.includes('Norsk arbeidsmarked') ? 'Norsk arbeidsmarked' : 'all';
    }
    renderCategoryFilters();
    updateMeta();
    renderNews();
  } catch (error) {
    state.generatedAt = fallback.generated_at || null;
    state.totalItems = fallback.items.length;
    state.items = fallback.items.map(normalizeNewsItem);
    state.categories = collectCategories(fallback, state.items);
    state.category = state.categories.includes('Norsk arbeidsmarked') ? 'Norsk arbeidsmarked' : 'all';
    renderCategoryFilters();
    updateMeta();
    renderNews();
    if (metaNode) {
      metaNode.textContent = `Kunne ikke laste crawl-data (${String(error)}). Viser fallback.`;
    }
  }
}

async function loadPrompts() {
  try {
    const response = await fetch('assets/data/kling3-prompts.json', { cache: 'no-store' });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    renderPrompts(data.prompts || [], data);
  } catch (error) {
    renderPrompts([], {});
    if (promptMetaNode) {
      promptMetaNode.textContent = `Kunne ikke laste prompts (${String(error)})`;
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
initScrollytelling();
initScrollySeriesActions();
initVideoModal();
loadNews();
loadPrompts();
