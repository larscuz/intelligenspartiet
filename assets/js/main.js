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
const videoModalDialog = document.querySelector('.video-modal-dialog');
const videoModalStory = document.querySelector('#video-modal-story');
const videoStoryKicker = document.querySelector('#video-story-kicker');
const videoStoryProgress = document.querySelector('#video-story-progress');
const videoStoryPlayer = document.querySelector('#video-story-player');
const videoStoryCaption = document.querySelector('#video-story-caption');
const videoStoryScroll = document.querySelector('#video-story-scroll');
const videoStoryStepTemplate = document.querySelector('#video-story-step-template');
const videoStoryAudioToggle = document.querySelector('#video-story-audio-toggle');
const videoStoryVolumeSlider = document.querySelector('#video-story-volume');
const videoStoryAudioStatus = document.querySelector('#video-story-audio-status');

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

const VIDEO_STORIES = {
  'kontorjobber-under-ai-press': {
    id: 'kontorjobber-under-ai-press',
    title: 'Kontorjobber under AI-press',
    kicker: 'Scrollytelling',
    scenes: [
      {
        kicker: 'Scene 1',
        title: 'Kontorarbeid er i frontlinjen',
        body: 'IMF anslår at rundt 60 prosent av jobbene i avanserte økonomier er eksponert for AI. Kontor- og analysearbeid ligger ofte høyest fordi oppgavene er tekst- og datadrevne.',
        caption: 'Første tegn er ofte ikke masseoppsigelser, men færre nyansettelser og omfordeling av oppgaver.',
        video: 'https://larscuzner.com/static/Luddites.mp4',
        links: [
          { href: '/fakta/kontorjobber-ai-press.html', label: 'Faktaside: Kontorjobber' },
          { href: '#wire', label: 'Se AI-jobbwire' },
        ],
      },
      {
        kicker: 'Scene 2',
        title: 'Mest transformasjon, ikke ren erstatning',
        body: 'ILO og NASK viser at omtrent en fjerdedel av jobber globalt er eksponert for generativ AI, men hovedbildet er oppgaveendring. Yrker med rutinepreget administrasjon påvirkes først.',
        caption: 'Mange roller blir ikke borte over natten, men innholdet i jobben blir annerledes.',
        video: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        links: [
          { href: '/fakta/kontorjobber-ai-press.html#ilo', label: 'Kildepunkt: ILO 2025' },
          { href: '/fakta/index.html', label: 'Åpne faktabibliotek' },
        ],
      },
      {
        kicker: 'Scene 3',
        title: 'Bedrifter planlegger både kutt og opplæring',
        body: 'WEFs Future of Jobs 2025 finner at 41 prosent av arbeidsgivere forventer mindre bemanning i enkelte roller på grunn av AI, samtidig som 77 prosent satser på oppkvalifisering.',
        caption: 'Dobbel bevegelse: noen funksjoner krymper, nye oppgaver vokser.',
        video: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
        links: [
          { href: '/fakta/kontorjobber-ai-press.html#wef', label: 'Kildepunkt: WEF 2025' },
          { href: '#plattform', label: 'Politisk respons' },
        ],
      },
      {
        kicker: 'Scene 4',
        title: 'Hva betyr dette for trygghet',
        body: 'Hvis gevinsten tas ut raskere enn omskoleringen bygges, øker erstatningsangsten. Derfor trengs forutsigbare overgangsløp, etter- og videreutdanning og innsyn i AI-beslutninger.',
        caption: 'Malen for video 4: vis overgangen fra usikkerhet til konkret handlingsrom.',
        video: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
        links: [
          { href: '#plattform', label: 'Les overgangsfondet' },
          { href: '/fakta/kontorjobber-ai-press.html#kilder', label: 'Alle kilder' },
        ],
      },
    ],
  },
  'omstilling-i-offentlig-sektor': {
    id: 'omstilling-i-offentlig-sektor',
    title: 'Omstilling i offentlig sektor',
    kicker: 'Live-desk',
    scenes: [
      {
        kicker: 'Scene 1',
        title: 'Fra pilot til tjeneste',
        body: 'Offentlig sektor tester AI i saksflyt, veiledning og analyse. Utfordringen er å flytte fra enkeltpiloter til trygg drift med sporbarhet og ansvar.',
        caption: 'Startscenen etablerer tempoet: forventninger om bedre tjenester, men strenge krav til tillit.',
        video: 'https://larscuzner.com/static/statsvitenskap.mp4',
        links: [
          { href: '/fakta/offentlig-sektor-omstilling.html', label: 'Faktaside: Offentlig sektor' },
          { href: '#wire', label: 'Se siste saker' },
        ],
      },
      {
        kicker: 'Scene 2',
        title: 'Bruk er fortsatt ujevn',
        body: 'Digdir peker på at KI-bruk i offentlig sektor fortsatt er begrenset, men med tydelig utvikling. I kartleggingen sank andelen virksomheter med svært liten bruk fra 55,4 prosent i 2021 til 35,5 prosent i 2023.',
        caption: 'Omstilling handler ofte om kapasitet, innkjøp og kompetanse - ikke bare teknologi.',
        video: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
        links: [
          { href: '/fakta/offentlig-sektor-omstilling.html#digdir', label: 'Kildepunkt: Digdir' },
          { href: '/fakta/index.html', label: 'Åpne faktabibliotek' },
        ],
      },
      {
        kicker: 'Scene 3',
        title: 'Nasjonale mål styrer retningen',
        body: 'Regjeringen har varslet et mål om at 80 prosent av offentlige virksomheter skal ta i bruk AI innen 2025, og 100 prosent innen 2030. Tempo krever samtidig styring, standarder og kompetanse.',
        caption: 'Hurtig utrulling uten governance gir høy risiko for feil i tjenestene.',
        video: 'https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
        links: [
          { href: '/fakta/offentlig-sektor-omstilling.html#regjeringen', label: 'Kildepunkt: Regjeringen' },
          { href: '#plattform', label: 'Politisk retning' },
        ],
      },
      {
        kicker: 'Scene 4',
        title: 'Tillit som infrastruktur',
        body: 'Datatilsynet fremhever at personvern, etterprøvbarhet og klar rollefordeling må på plass når AI brukes i offentlige beslutninger. Uten dette blir gevinstene skjøre.',
        caption: 'Malen for video 4: vis hvordan kontrollmekanismer beskytter innbyggere i praksis.',
        video: 'https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
        links: [
          { href: '/fakta/offentlig-sektor-omstilling.html#datatilsynet', label: 'Kildepunkt: Datatilsynet' },
          { href: '/fakta/offentlig-sektor-omstilling.html#kilder', label: 'Alle kilder' },
        ],
      },
    ],
  },
  'hvem-baerer-risikoen-ai-skalerer': {
    id: 'hvem-baerer-risikoen-ai-skalerer',
    title: 'Hvem bærer risikoen når AI skalerer?',
    kicker: 'Analyse',
    scenes: [
      {
        kicker: 'Scene 1',
        title: 'Produktivitet og sårbarhet øker samtidig',
        body: 'IMF peker på at AI kan løfte produktivitet og inntekt, men også forsterke ulikhet dersom gevinster og omstilling fordeles skjevt mellom grupper.',
        caption: 'Spørsmålet er ikke bare hva AI kan gjøre, men hvem som får trygghet i overgangen.',
        video: 'https://larscuzner.com/static/KontorjobberPressureAI.mp4',
        links: [
          { href: '/fakta/risiko-nar-ai-skalerer.html', label: 'Faktaside: Risiko og fordeling' },
          { href: '#plattform', label: 'Se fordelingsgrep' },
        ],
      },
      {
        kicker: 'Scene 2',
        title: 'Eksponering treffer ulikt',
        body: 'ILO finner at eksponering for generativ AI varierer med kjønn, yrke og inntektsnivå. Særlig kontorintensive roller i høyinntektsland peker seg ut som utsatte for stor oppgaveendring.',
        caption: 'Risikoen ligger ofte i oppgaver, ikke i hele yrkestitler.',
        video: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
        links: [
          { href: '/fakta/risiko-nar-ai-skalerer.html#ilo', label: 'Kildepunkt: ILO 2025' },
          { href: '/fakta/index.html', label: 'Åpne faktabibliotek' },
        ],
      },
      {
        kicker: 'Scene 3',
        title: 'Geografi betyr mer enn vi tror',
        body: 'OECD advarer om at generativ AI kan forsterke regionale forskjeller. Deres analyser viser større eksponering i urbane regioner enn i rurale områder, noe som flytter risiko mellom steder.',
        caption: 'Når AI skalerer, må distrikts- og bypolitikk sees i sammenheng med arbeidsmarkedspolitikk.',
        video: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        links: [
          { href: '/fakta/risiko-nar-ai-skalerer.html#oecd', label: 'Kildepunkt: OECD' },
          { href: '#wire', label: 'Saker om jobbtap/omstilling' },
        ],
      },
      {
        kicker: 'Scene 4',
        title: 'Rettferdig skalering kan bygges',
        body: 'WEF rapporterer at virksomheter planlegger intern overgang av ansatte fra fallende til voksende roller. Politikken må sikre at overgangen faktisk blir tilgjengelig for vanlige arbeidstakere.',
        caption: 'Malen for video 4: vis hvordan folk flyttes fra risikosone til ny rolle med trygg inntekt underveis.',
        video: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
        links: [
          { href: '/fakta/risiko-nar-ai-skalerer.html#wef', label: 'Kildepunkt: WEF 2025' },
          { href: '/fakta/risiko-nar-ai-skalerer.html#kilder', label: 'Alle kilder' },
        ],
      },
    ],
  },
};

const VIDEO_STORY_TITLE_ALIASES = {
  'kontorjobber under ai-press': 'kontorjobber-under-ai-press',
  'omstilling i offentlig sektor': 'omstilling-i-offentlig-sektor',
  'hvem baerer risikoen nar ai skalerer?': 'hvem-baerer-risikoen-ai-skalerer',
  'hvem bærer risikoen når ai skalerer?': 'hvem-baerer-risikoen-ai-skalerer',
};

const state = {
  items: [],
  filter: 'all',
  category: 'all',
  categories: [],
  generatedAt: null,
  totalItems: 0,
};

let modalTriggerNode = null;
let videoStoryActiveIndex = 0;
let videoStoryMode = false;
let videoStoryObserver = null;
let videoStoryScenes = [];
let videoStorySwapToken = 0;
const videoStoryPreloaded = new Set();
let videoStorySoundEnabled = false;
let videoStoryVolume = 0.8;
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

  const attachContainerTrigger = (containerNode, videoNode) => {
    if (!(containerNode instanceof Element)) return;
    if (!(videoNode instanceof HTMLVideoElement)) return;

    const source = getSourceFromVideo(videoNode);
    if (!source) return;

    containerNode.setAttribute('data-video-popup', 'true');
    if (!containerNode.getAttribute('data-video-src')) {
      containerNode.setAttribute('data-video-src', source);
    }
    if (!containerNode.getAttribute('data-video-title')) {
      const title = deriveVideoTitle(containerNode, deriveVideoTitle(videoNode.closest('article, section, aside, div') || videoNode));
      containerNode.setAttribute('data-video-title', title);
    }
    if (!(containerNode instanceof HTMLAnchorElement)) {
      if (!containerNode.hasAttribute('tabindex')) containerNode.setAttribute('tabindex', '0');
      if (!containerNode.hasAttribute('role')) containerNode.setAttribute('role', 'button');
    }
    if (!containerNode.getAttribute('aria-label')) {
      containerNode.setAttribute('aria-label', `Spill av video: ${deriveVideoTitle(containerNode)}`);
    }
  };

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

    attachContainerTrigger(videoNode.closest('.media-tile'), videoNode);
    attachContainerTrigger(videoNode.closest('.video-card'), videoNode);
    attachContainerTrigger(videoNode.closest('.news-media-link'), videoNode);
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

function normalizeStoryLookup(value) {
  return String(value || '').trim().toLowerCase();
}

function resolveVideoStory(triggerNode, title = '') {
  if (!(triggerNode instanceof Element)) return null;

  let storyId = String(triggerNode.getAttribute('data-story-id') || '').trim();
  if (!storyId) {
    const owner = triggerNode.closest('[data-story-id]');
    storyId = String(owner && owner.getAttribute('data-story-id') || '').trim();
  }

  if (!storyId) {
    const inferred = VIDEO_STORY_TITLE_ALIASES[normalizeStoryLookup(title)];
    if (inferred) storyId = inferred;
  }

  if (!storyId) {
    const derivedTitle = deriveVideoTitle(triggerNode, '');
    const inferred = VIDEO_STORY_TITLE_ALIASES[normalizeStoryLookup(derivedTitle)];
    if (inferred) storyId = inferred;
  }

  return VIDEO_STORIES[storyId] || null;
}

function buildVideoStoryScenes(story, openingVideo = '') {
  if (!story || !Array.isArray(story.scenes)) return [];

  const scenes = story.scenes.map((scene) => ({
    kicker: scene.kicker || '',
    title: scene.title || '',
    body: scene.body || '',
    caption: scene.caption || '',
    video: scene.video || '',
    links: Array.isArray(scene.links)
      ? scene.links.map((link) => ({
        href: String(link && link.href || '').trim(),
        label: String(link && link.label || '').trim(),
      })).filter((link) => link.href && link.label)
      : [],
  }));

  if (scenes[0] && openingVideo) {
    scenes[0].video = openingVideo;
  }

  return scenes;
}

function setVideoModalMode(storyModeEnabled) {
  if (videoModalDialog) {
    videoModalDialog.classList.toggle('is-story-mode', Boolean(storyModeEnabled));
  }
  if (videoModalPlayer) {
    videoModalPlayer.hidden = Boolean(storyModeEnabled);
  }
  if (videoModalStory) {
    videoModalStory.hidden = !storyModeEnabled;
  }
}

function preloadVideoStoryScene(index) {
  const scene = videoStoryScenes[index];
  if (!scene) return;

  const source = String(scene.video || '').trim();
  if (!source || videoStoryPreloaded.has(source)) return;

  videoStoryPreloaded.add(source);
  const probe = document.createElement('video');
  probe.preload = 'metadata';
  probe.src = source;
  probe.load();
}

function setVideoStoryAudioStatus(message) {
  if (!(videoStoryAudioStatus instanceof HTMLElement)) return;
  videoStoryAudioStatus.textContent = message;
}

function updateVideoStoryAudioToggle() {
  const volumePercent = Math.round(videoStoryVolume * 100);

  if (videoStoryAudioToggle instanceof HTMLButtonElement) {
    videoStoryAudioToggle.setAttribute('aria-pressed', String(videoStorySoundEnabled));
    videoStoryAudioToggle.textContent = videoStorySoundEnabled ? 'Lyd: På' : 'Lyd: Av';
  }

  if (videoStoryVolumeSlider instanceof HTMLInputElement) {
    videoStoryVolumeSlider.value = String(volumePercent);
    videoStoryVolumeSlider.setAttribute('aria-valuetext', `${volumePercent} prosent`);
  }
}

function updateVideoStoryAudioStatusFromPlayer() {
  const volumePercent = Math.round(videoStoryVolume * 100);

  if (!videoStorySoundEnabled) {
    setVideoStoryAudioStatus('Lyd er av.');
    return;
  }

  if (!(videoStoryPlayer instanceof HTMLVideoElement)) {
    setVideoStoryAudioStatus(`Lyd klar (${volumePercent}%).`);
    return;
  }

  if (document.hidden) {
    setVideoStoryAudioStatus(`Lyd klar (${volumePercent}%).`);
    return;
  }

  if (!videoLikelyHasAudio(videoStoryPlayer)) {
    setVideoStoryAudioStatus('Lyd på, men aktiv video ser ut til å mangle lydspor.');
    return;
  }

  setVideoStoryAudioStatus(`Lyd på (${volumePercent}%).`);
}

function syncVideoStoryAudioState() {
  if (!(videoStoryPlayer instanceof HTMLVideoElement)) return;

  const shouldMute = !videoStorySoundEnabled;
  setVideoMutedState(videoStoryPlayer, shouldMute);
  videoStoryPlayer.volume = shouldMute ? 0 : videoStoryVolume;
  updateVideoStoryAudioStatusFromPlayer();
}

function attemptVideoStoryAudioStart({ userInitiated = false } = {}) {
  if (!videoStorySoundEnabled) {
    updateVideoStoryAudioStatusFromPlayer();
    return;
  }

  if (!(videoStoryPlayer instanceof HTMLVideoElement)) {
    updateVideoStoryAudioStatusFromPlayer();
    return;
  }

  setVideoMutedState(videoStoryPlayer, false);
  videoStoryPlayer.volume = videoStoryVolume;
  if (videoStoryPlayer.readyState < 2) {
    videoStoryPlayer.load();
  }

  const playback = videoStoryPlayer.play();
  if (!playback) {
    updateVideoStoryAudioStatusFromPlayer();
    return;
  }

  playback
    .then(() => {
      updateVideoStoryAudioStatusFromPlayer();
    })
    .catch(() => {
      if (userInitiated) {
        videoStorySoundEnabled = false;
        updateVideoStoryAudioToggle();
        syncVideoStoryAudioState();
        setVideoStoryAudioStatus('Nettleseren blokkerte lyd. Trykk Lyd: På igjen.');
        return;
      }
      setVideoStoryAudioStatus('Lyd krever ny brukerklikk i denne scenen.');
    });
}

function swapVideoStorySource(nextSource, shouldAutoplay = true) {
  if (!videoStoryPlayer) return;

  const targetSource = String(nextSource || '').trim();
  if (!targetSource) return;

  const activeSource = String(videoStoryPlayer.dataset.activeSrc || '').trim();
  if (targetSource === activeSource) {
    syncVideoStoryAudioState();
    if (shouldAutoplay) {
      videoStoryPlayer.play().catch(() => {});
    }
    return;
  }

  const token = videoStorySwapToken + 1;
  videoStorySwapToken = token;
  videoStoryPlayer.classList.add('is-transitioning');

  const clearTransition = () => {
    if (videoStorySwapToken !== token) return;
    videoStoryPlayer.classList.remove('is-transitioning');
  };

  window.setTimeout(() => {
    if (videoStorySwapToken !== token) return;
    videoStoryPlayer.src = targetSource;
    videoStoryPlayer.dataset.activeSrc = targetSource;
    videoStoryPlayer.load();
    syncVideoStoryAudioState();
    if (shouldAutoplay) {
      videoStoryPlayer.play().catch(() => {
        if (!videoStorySoundEnabled) return;
        videoStorySoundEnabled = false;
        updateVideoStoryAudioToggle();
        syncVideoStoryAudioState();
        setVideoStoryAudioStatus('Nettleseren blokkerte lyd. Trykk Lyd: På igjen.');
      });
    }
  }, 120);

  videoStoryPlayer.addEventListener('loadeddata', () => {
    window.setTimeout(clearTransition, 120);
  }, { once: true });

  window.setTimeout(clearTransition, 900);
}

function activateVideoStoryScene(index, options = {}) {
  if (!videoStoryScenes.length) return;

  const shouldAutoplay = options.autoplay !== false;
  const safeIndex = clamp(index, 0, videoStoryScenes.length - 1);
  videoStoryActiveIndex = safeIndex;
  const scene = videoStoryScenes[safeIndex];
  if (!scene) return;

  if (videoStoryKicker) {
    videoStoryKicker.textContent = scene.kicker || 'Scene';
  }
  if (videoStoryProgress) {
    videoStoryProgress.textContent = `Scene ${safeIndex + 1} av ${videoStoryScenes.length}`;
  }
  if (videoStoryCaption) {
    videoStoryCaption.textContent = scene.caption || '';
  }

  if (videoStoryPlayer) {
    const nextSource = String(scene.video || '').trim();
    swapVideoStorySource(nextSource, shouldAutoplay);
  }

  if (videoStoryScroll) {
    const stepNodes = Array.from(videoStoryScroll.querySelectorAll('.video-story-step'));
    stepNodes.forEach((stepNode, stepIndex) => {
      stepNode.classList.toggle('is-active', stepIndex === safeIndex);
      stepNode.setAttribute('aria-current', stepIndex === safeIndex ? 'step' : 'false');
    });
  }

  preloadVideoStoryScene(safeIndex);
  preloadVideoStoryScene(safeIndex + 1);
}

function renderVideoStorySteps() {
  if (!videoStoryScroll) return;
  videoStoryScroll.innerHTML = '';
  if (!videoStoryScenes.length || !videoStoryStepTemplate) return;

  const fragment = document.createDocumentFragment();

  videoStoryScenes.forEach((scene, index) => {
    const clone = videoStoryStepTemplate.content.cloneNode(true);
    const stepNode = clone.querySelector('.video-story-step');
    const kickerNode = clone.querySelector('.video-story-step-kicker');
    const titleNode = clone.querySelector('.video-story-step-title');
    const bodyNode = clone.querySelector('.video-story-step-body');
    const linksNode = clone.querySelector('.video-story-links');

    if (stepNode) {
      stepNode.dataset.sceneIndex = String(index);
      stepNode.dataset.video = scene.video || '';
      stepNode.classList.toggle('is-active', index === 0);
      stepNode.setAttribute('aria-current', index === 0 ? 'step' : 'false');
    }
    if (kickerNode) kickerNode.textContent = scene.kicker || `Scene ${index + 1}`;
    if (titleNode) titleNode.textContent = scene.title || 'Uten tittel';
    if (bodyNode) bodyNode.textContent = scene.body || '';

    if (linksNode) {
      if (!scene.links || !scene.links.length) {
        linksNode.remove();
      } else {
        scene.links.forEach((link) => {
          const anchor = document.createElement('a');
          anchor.href = link.href;
          anchor.textContent = link.label;
          if (anchor.hostname && anchor.hostname !== window.location.hostname) {
            anchor.target = '_blank';
            anchor.rel = 'noopener noreferrer';
          }
          linksNode.appendChild(anchor);
        });
      }
    }

    fragment.appendChild(clone);
  });

  videoStoryScroll.appendChild(fragment);
}

function initVideoStoryObserver() {
  if (!videoStoryScroll) return;

  const steps = Array.from(videoStoryScroll.querySelectorAll('.video-story-step'));
  if (!steps.length) return;

  if (videoStoryObserver) {
    videoStoryObserver.disconnect();
  }

  videoStoryObserver = new IntersectionObserver(
    (entries) => {
      const visibleSteps = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (!visibleSteps.length) return;
      const rawIndex = Number(visibleSteps[0].target.dataset.sceneIndex);
      if (!Number.isFinite(rawIndex)) return;
      activateVideoStoryScene(rawIndex, { autoplay: true });
    },
    {
      root: videoStoryScroll,
      threshold: [0.35, 0.55, 0.75],
      rootMargin: '-18% 0px -32% 0px',
    }
  );

  steps.forEach((stepNode) => videoStoryObserver.observe(stepNode));
}

function teardownVideoStory(clearMarkup = true) {
  if (videoStoryObserver) {
    videoStoryObserver.disconnect();
    videoStoryObserver = null;
  }

  if (videoStoryPlayer) {
    videoStoryPlayer.pause();
    videoStoryPlayer.removeAttribute('src');
    delete videoStoryPlayer.dataset.activeSrc;
    videoStoryPlayer.classList.remove('is-transitioning');
    videoStoryPlayer.load();
  }

  if (clearMarkup && videoStoryScroll) {
    videoStoryScroll.innerHTML = '';
  }

  if (videoStoryCaption) videoStoryCaption.textContent = '';
  if (videoStoryProgress) videoStoryProgress.textContent = '';

  videoStoryScenes = [];
  videoStoryActiveIndex = 0;
  videoStorySwapToken = 0;
  videoStoryPreloaded.clear();
  videoStoryMode = false;
  setVideoModalMode(false);
}

function openVideoStoryModal(story, openingVideo, triggerNode) {
  if (!videoModal || !story || !videoStoryPlayer || !videoStoryScroll || !videoStoryStepTemplate) {
    const fallbackSource = String(openingVideo || '').trim();
    if (!fallbackSource) return;
    openVideoModal(fallbackSource, story && story.title ? story.title : 'Video', triggerNode);
    return;
  }

  teardownVideoStory(false);

  modalTriggerNode = triggerNode || null;
  videoModal.hidden = false;
  videoModal.setAttribute('aria-hidden', 'false');
  body.classList.add('modal-open');

  setVideoModalMode(true);
  videoStoryMode = true;
  videoStoryScenes = buildVideoStoryScenes(story, openingVideo);
  updateVideoStoryAudioToggle();
  updateVideoStoryAudioStatusFromPlayer();

  if (videoModalTitle) {
    videoModalTitle.textContent = story.title || 'Scrollytelling';
  }

  if (!videoStoryScenes.length) {
    const fallbackSource = String(openingVideo || '').trim();
    if (!fallbackSource) return;
    openVideoModal(fallbackSource, story.title || 'Video', triggerNode);
    return;
  }

  renderVideoStorySteps();
  activateVideoStoryScene(0, { autoplay: true });
  if (videoStoryScroll) {
    videoStoryScroll.scrollTop = 0;
  }
  initVideoStoryObserver();
}

function closeVideoModal() {
  if (!videoModal || videoModal.hidden) return;

  teardownVideoStory(true);

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

  teardownVideoStory(true);

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

  if (videoStoryVolumeSlider instanceof HTMLInputElement) {
    const initialVolume = Number(videoStoryVolumeSlider.value);
    if (Number.isFinite(initialVolume)) {
      videoStoryVolume = clamp(initialVolume, 0, 100) / 100;
    }
  }

  updateVideoStoryAudioToggle();
  updateVideoStoryAudioStatusFromPlayer();

  if (videoStoryAudioToggle instanceof HTMLButtonElement) {
    videoStoryAudioToggle.addEventListener('click', () => {
      videoStorySoundEnabled = !videoStorySoundEnabled;
      updateVideoStoryAudioToggle();
      syncVideoStoryAudioState();
      if (videoStorySoundEnabled) {
        attemptVideoStoryAudioStart({ userInitiated: true });
      } else {
        updateVideoStoryAudioStatusFromPlayer();
      }
    });
  }

  if (videoStoryVolumeSlider instanceof HTMLInputElement) {
    videoStoryVolumeSlider.addEventListener('input', () => {
      const nextVolume = clamp(Number(videoStoryVolumeSlider.value), 0, 100) / 100;
      videoStoryVolume = nextVolume;
      videoStorySoundEnabled = nextVolume > 0;
      updateVideoStoryAudioToggle();
      syncVideoStoryAudioState();
      if (videoStorySoundEnabled) {
        attemptVideoStoryAudioStart({ userInitiated: true });
      } else {
        updateVideoStoryAudioStatusFromPlayer();
      }
    });
  }

  if (videoStoryPlayer instanceof HTMLVideoElement) {
    videoStoryPlayer.addEventListener('loadedmetadata', () => {
      syncVideoStoryAudioState();
    });
    videoStoryPlayer.addEventListener('canplay', () => {
      syncVideoStoryAudioState();
    });
    videoStoryPlayer.addEventListener('playing', () => {
      updateVideoStoryAudioStatusFromPlayer();
    });
    videoStoryPlayer.addEventListener('pause', () => {
      updateVideoStoryAudioStatusFromPlayer();
    });
  }

  if (videoStoryScroll) {
    const activateFromStepNode = (stepNode, shouldScroll = false) => {
      if (!(stepNode instanceof HTMLElement)) return;
      const rawIndex = Number(stepNode.dataset.sceneIndex);
      if (!Number.isFinite(rawIndex)) return;
      activateVideoStoryScene(rawIndex, { autoplay: true });
      if (shouldScroll) {
        stepNode.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    };

    videoStoryScroll.addEventListener('click', (event) => {
      const target = event.target instanceof Element ? event.target : null;
      if (!target) return;
      if (target.closest('a')) return;
      const stepNode = target.closest('.video-story-step');
      if (!stepNode) return;
      activateFromStepNode(stepNode, false);
    });

    videoStoryScroll.addEventListener('keydown', (event) => {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      const target = event.target instanceof Element ? event.target : null;
      if (!target) return;
      const stepNode = target.closest('.video-story-step');
      if (!stepNode) return;
      event.preventDefault();
      activateFromStepNode(stepNode, true);
    });
  }

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

    const story = resolveVideoStory(triggerNode, title);
    if (story) {
      openVideoStoryModal(story, source, triggerNode);
      return;
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
