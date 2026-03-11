import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { drawCanonicalGlyphToContext } from "@/lib/radarLanguageGlyph";

type PanelKind = "text" | "image" | "video";

type PanelInstallation = {
  mount_type: "led_screen" | "framed" | "vinyl_flush" | "freestanding" | "continuous_led_wall" | "jutting_half_wall";
  placement_t: number;
  side: "left" | "right" | "center";
  physical_size: [number, number];
  wall_offset: number;
  vertical_offset: number;
};

type PanelShadingReaction = {
  material: {
    emissive_base: number;
    roughness: number;
    metalness: number;
  };
  lighting: {
    cast_environment_light: boolean;
    light_color?: string;
    light_distance?: number;
    flicker_sync?: boolean;
  };
  movement_reaction: {
    type: "none" | "viewing_angle_fade" | "parallax_tilt";
    cone_angle_degrees?: number;
  };
};

type TunnelPanel = {
  id: string;
  type: PanelKind;
  source?: string;
  poster?: string;
  content: {
    title: string;
    description: string;
    cta?: string;
  };
  installation: PanelInstallation;
  shading_and_reaction: PanelShadingReaction;
};

// Add backward compatibility for UI which expects kind, title, body, video, image
type UiPanel = TunnelPanel & {
  kind: PanelKind;
  title: string;
  body: string;
  image?: string;
  video?: string;
  cta?: string;
};

type GlyphLanguageItem = {
  id: string;
  label?: string;
  panel_id: string;
  canonical: string;
  enabled?: boolean;
  note?: string;
};

type RuntimePanel = {
  meta: UiPanel;
  progress: number;
};

type LedBounceUserData = {
  bounceLights?: THREE.PointLight[];
  bounceSampleCtx?: CanvasRenderingContext2D;
  bounceSampleCanvas?: HTMLCanvasElement;
  bounceTargetColor?: THREE.Color;
  bounceCurrentColor?: THREE.Color;
  bounceTargetIntensity?: number;
  bounceCurrentIntensity?: number;
  bounceBaseIntensity?: number;
  bounceNextSampleAt?: number;
};

type SurfaceMapConfig = {
  width: number;
  height: number;
  seed: number;
  baseColor: THREE.ColorRepresentation;
  macroFreq: number;
  midFreq: number;
  microFreq: number;
  bandFreq: number;
  bandInfluence: number;
  seamAxis: "none" | "x" | "y";
  seamFreq: number;
  seamDepth: number;
  seamWidth: number;
  roughnessBase: number;
  roughnessRange: number;
  normalStrength: number;
  aoStrength: number;
};

type SurfaceMaps = {
  albedo: THREE.CanvasTexture;
  normal: THREE.CanvasTexture;
  roughness: THREE.CanvasTexture;
  ao: THREE.CanvasTexture;
};

type GlyphRune = {
  mesh: THREE.Mesh;
  card: THREE.Group;
  panel: UiPanel;
  progress: number;
  baseY: number;
  expanded: boolean;
  expandT: number;
};

const DEFAULT_PANEL_SHADING: PanelShadingReaction = {
  material: {
    emissive_base: 0,
    roughness: 0.62,
    metalness: 0.02,
  },
  lighting: {
    cast_environment_light: false,
  },
  movement_reaction: {
    type: "none",
  },
};

const makeFallbackPanel = (
  id: string,
  title: string,
  description: string,
  side: "left" | "right",
  placementT: number,
): UiPanel => ({
  id,
  type: "text",
  kind: "text",
  content: {
    title,
    description,
  },
  title,
  body: description,
  installation: {
    mount_type: "vinyl_flush",
    placement_t: placementT,
    side,
    physical_size: [8.4, 4.9],
    wall_offset: 0.15,
    vertical_offset: -0.3,
  },
  shading_and_reaction: DEFAULT_PANEL_SHADING,
});

const FALLBACK_PANELS: UiPanel[] = [
  makeFallbackPanel(
    "fallback-01",
    "INTELLIGENSPARTIET",
    "Politisk AI-kapasitet for et samfunn i rask omforming.",
    "right",
    0.1,
  ),
  makeFallbackPanel(
    "fallback-02",
    "FORSTÅ SKIFTET",
    "Kartlegg effekt, risiko og styringsbehov før beslutninger låses.",
    "left",
    0.42,
  ),
  makeFallbackPanel(
    "fallback-03",
    "BYGG INSTITUSJONER",
    "Tilsyn, standarder og ansvar som faktisk kan håndheves.",
    "right",
    0.74,
  ),
];

const normalizeGlyphLanguageItem = (raw: any, index: number): GlyphLanguageItem => ({
  id: String(raw?.id ?? `glyph-${index + 1}`).trim() || `glyph-${index + 1}`,
  label: String(raw?.label ?? "").trim(),
  panel_id: String(raw?.panel_id ?? "").trim(),
  canonical: String(raw?.canonical ?? "").trim().toUpperCase(),
  enabled: raw?.enabled !== false,
  note: String(raw?.note ?? "").trim(),
});

const wrap01 = (value: number) => {
  let result = value % 1;
  if (result < 0) result += 1;
  return result;
};

const circularDamp = (current: number, target: number, smooth: number, dt: number) => {
  let delta = target - current;
  if (delta > 0.5) delta -= 1;
  if (delta < -0.5) delta += 1;
  return wrap01(current + delta * (1 - Math.exp(-smooth * dt)));
};

const ROOM_WIDTH = 12;
const ROOM_HEIGHT = 9;
const CAMERA_START_PROGRESS = 0.12;
// const WALL_THICKNESS = 0.24;
// const FLOOR_THICKNESS = 0.32;

const GLYPH_SIZE = 2.4;
const GLYPH_BOB_AMPLITUDE = 0.3;
const GLYPH_BOB_SPEED = 1.2;
const GLYPH_SPIN_SPEED = 0.3;
const GLYPH_GLOW_COLOR = 0x66ddff;
const CARD_WIDTH = 5.0;
const CARD_HEIGHT = 3.2;
const CARD_EXPAND_DURATION = 0.35;

// Exit glyph – camera leaves tunnel and views it from space
const EXIT_GLYPH_PLACEMENT_T = 0.25;
const EXIT_CAMERA_DISTANCE = 400;
const EXIT_TRANSITION_DURATION = 2.5; // seconds
const EXIT_GLYPH_COLOR = 0xffaa33; // gold/amber
const EXIT_GLYPH_SIZE = 3.0;

const getCurvePoints = (THREE: any) => {
  const base = [
    [-220, -1.2, -60],
    [-160, -0.2, -180],
    [-40, 0.6, -230],
    [110, 0.2, -190],
    [220, 0.8, -90],
    [250, -0.2, 30],
    [190, 0.6, 145],
    [70, -0.3, 205],
    [-75, 0.5, 185],
    [-190, 0.2, 95],
    [-235, -1.0, -30],
  ];

  return base.map(([x, y, z]) => new THREE.Vector3(x, y, z));
};

const drawWrappedText = (
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  lineHeight: number,
) => {
  const words = text.split(" ");
  let line = "";
  let cursorY = y;

  for (let i = 0; i < words.length; i += 1) {
    const testLine = `${line}${words[i]} `;
    if (ctx.measureText(testLine).width > maxWidth && line.length > 0) {
      ctx.fillText(line.trim(), x, cursorY);
      line = `${words[i]} `;
      cursorY += lineHeight;
    } else {
      line = testLine;
    }
  }

  if (line.trim()) {
    ctx.fillText(line.trim(), x, cursorY);
  }
};

const TWO_PI = Math.PI * 2;

const clamp01 = (value: number) => Math.min(1, Math.max(0, value));

const periodicNoise = (u: number, v: number, freq: number, phaseA: number, phaseB: number) => {
  const x = TWO_PI * (u * freq + phaseA);
  const y = TWO_PI * (v * freq + phaseB);
  const a = Math.sin(x) * Math.cos(y);
  const b = 0.5 * Math.sin((x + y) * 0.65 + phaseA * 6.37);
  return a + b;
};

const buildCanvasTexture = (pixels: Uint8ClampedArray, width: number, height: number) => {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (ctx) {
    ctx.putImageData(new ImageData(new Uint8ClampedArray(pixels), width, height), 0, 0);
  }
  return new THREE.CanvasTexture(canvas);
};

const configureTiledTexture = (
  texture: THREE.Texture,
  repeatX: number,
  repeatY: number,
  anisotropy: number,
  srgb = false,
) => {
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(repeatX, repeatY);
  texture.anisotropy = anisotropy;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  texture.magFilter = THREE.LinearFilter;
  if (srgb) texture.colorSpace = THREE.SRGBColorSpace;
  texture.needsUpdate = true;
};

const createSurfaceMaps = (config: SurfaceMapConfig): SurfaceMaps => {
  const {
    width,
    height,
    seed,
    baseColor,
    macroFreq,
    midFreq,
    microFreq,
    bandFreq,
    bandInfluence,
    seamAxis,
    seamFreq,
    seamDepth,
    seamWidth,
    roughnessBase,
    roughnessRange,
    normalStrength,
    aoStrength,
  } = config;

  const size = width * height;
  const base = new THREE.Color(baseColor);
  const rawHeight = new Float32Array(size);
  let minHeight = Number.POSITIVE_INFINITY;
  let maxHeight = Number.NEGATIVE_INFINITY;

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const idx = y * width + x;
      const u = x / width;
      const v = y / height;

      const macro = periodicNoise(u, v, macroFreq, seed * 0.11, seed * 0.23);
      const mid = periodicNoise(u, v, midFreq, seed * 0.41 + 0.18, seed * 0.29 + 0.07);
      const micro = periodicNoise(u, v, microFreq, seed * 0.71 + 0.43, seed * 0.53 + 0.31);
      const striation = Math.sin(TWO_PI * ((u + v * 0.33) * bandFreq + seed * 0.17));

      let seam = 0;
      if (seamAxis !== "none" && seamFreq > 0) {
        const seamCoord = seamAxis === "x" ? u : v;
        const seamPhase = (seamCoord * seamFreq) % 1;
        const seamDistance = Math.min(seamPhase, 1 - seamPhase);
        seam = Math.exp(-Math.pow(seamDistance / Math.max(0.0001, seamWidth), 2));
      }

      const value =
        macro * 0.6 +
        mid * 0.28 +
        micro * 0.12 +
        striation * bandInfluence -
        seam * seamDepth;

      rawHeight[idx] = value;
      if (value < minHeight) minHeight = value;
      if (value > maxHeight) maxHeight = value;
    }
  }

  const normalizedHeight = new Float32Array(size);
  const heightRange = Math.max(0.0001, maxHeight - minHeight);
  const albedoPixels = new Uint8ClampedArray(size * 4);
  const roughnessPixels = new Uint8ClampedArray(size * 4);
  const aoPixels = new Uint8ClampedArray(size * 4);

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const idx = y * width + x;
      const pixelIndex = idx * 4;
      const u = x / width;
      const v = y / height;

      const h = clamp01((rawHeight[idx] - minHeight) / heightRange);
      normalizedHeight[idx] = h;

      const tonalNoise =
        periodicNoise(u, v, midFreq * 0.6, seed * 0.19 + 0.62, seed * 0.73 + 0.14) * 0.5 + 0.5;
      const colorLift = clamp01(0.78 + (h - 0.5) * 0.24 + (tonalNoise - 0.5) * 0.12);
      const tintNoise = periodicNoise(u, v, macroFreq * 0.5, seed * 0.37 + 0.89, seed * 0.13 + 0.44);
      const tintR = 1 + tintNoise * 0.017;
      const tintG = 1 + tintNoise * 0.007;
      const tintB = 1 - tintNoise * 0.013;

      const roughness = clamp01(
        roughnessBase + (1 - h) * roughnessRange + (tonalNoise - 0.5) * 0.14,
      );
      const ao = clamp01(0.94 - (1 - h) * aoStrength);

      albedoPixels[pixelIndex] = Math.round(clamp01(base.r * colorLift * tintR) * 255);
      albedoPixels[pixelIndex + 1] = Math.round(clamp01(base.g * colorLift * tintG) * 255);
      albedoPixels[pixelIndex + 2] = Math.round(clamp01(base.b * colorLift * tintB) * 255);
      albedoPixels[pixelIndex + 3] = 255;

      const roughByte = Math.round(roughness * 255);
      roughnessPixels[pixelIndex] = roughByte;
      roughnessPixels[pixelIndex + 1] = roughByte;
      roughnessPixels[pixelIndex + 2] = roughByte;
      roughnessPixels[pixelIndex + 3] = 255;

      const aoByte = Math.round(ao * 255);
      aoPixels[pixelIndex] = aoByte;
      aoPixels[pixelIndex + 1] = aoByte;
      aoPixels[pixelIndex + 2] = aoByte;
      aoPixels[pixelIndex + 3] = 255;
    }
  }

  const sampleHeight = (x: number, y: number) => {
    const wrappedX = (x + width) % width;
    const wrappedY = (y + height) % height;
    return normalizedHeight[wrappedY * width + wrappedX];
  };

  const normalPixels = new Uint8ClampedArray(size * 4);
  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const idx = y * width + x;
      const pixelIndex = idx * 4;

      const dX = sampleHeight(x + 1, y) - sampleHeight(x - 1, y);
      const dY = sampleHeight(x, y + 1) - sampleHeight(x, y - 1);

      const nX = -dX * normalStrength;
      const nY = -dY * normalStrength;
      const nZ = 1;
      const invLen = 1 / Math.hypot(nX, nY, nZ);

      normalPixels[pixelIndex] = Math.round((nX * invLen * 0.5 + 0.5) * 255);
      normalPixels[pixelIndex + 1] = Math.round((nY * invLen * 0.5 + 0.5) * 255);
      normalPixels[pixelIndex + 2] = Math.round((nZ * invLen * 0.5 + 0.5) * 255);
      normalPixels[pixelIndex + 3] = 255;
    }
  }

  return {
    albedo: buildCanvasTexture(albedoPixels, width, height),
    normal: buildCanvasTexture(normalPixels, width, height),
    roughness: buildCanvasTexture(roughnessPixels, width, height),
    ao: buildCanvasTexture(aoPixels, width, height),
  };
};

const sampleVideoLighting = (
  video: HTMLVideoElement,
  sampleCanvas: HTMLCanvasElement,
  sampleCtx: CanvasRenderingContext2D,
) => {
  if (video.readyState < 2 || video.videoWidth < 2 || video.videoHeight < 2) return null;
  let pixels: Uint8ClampedArray;
  try {
    sampleCtx.drawImage(video, 0, 0, sampleCanvas.width, sampleCanvas.height);
    pixels = sampleCtx.getImageData(0, 0, sampleCanvas.width, sampleCanvas.height).data;
  } catch {
    // Cross-origin or transient decode issues should not break the render loop.
    return null;
  }

  let r = 0;
  let g = 0;
  let b = 0;
  const pixelCount = pixels.length / 4;

  for (let i = 0; i < pixels.length; i += 4) {
    r += pixels[i];
    g += pixels[i + 1];
    b += pixels[i + 2];
  }

  r /= pixelCount * 255;
  g /= pixelCount * 255;
  b /= pixelCount * 255;

  const luminance = r * 0.2126 + g * 0.7152 + b * 0.0722;
  return { color: new THREE.Color(r, g, b), luminance };
};

export function IntelligensTunnelSite() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const runtimePanelsRef = useRef<RuntimePanel[]>([]);
  const targetProgressRef = useRef(CAMERA_START_PROGRESS);
  const currentProgressRef = useRef(CAMERA_START_PROGRESS);

  // Lock body scroll so the page never bounces behind the canvas
  useEffect(() => {
    const prev = document.body.style.cssText;
    document.body.style.overflow = "hidden";
    document.body.style.overscrollBehavior = "none";
    document.documentElement.style.overscrollBehavior = "none";
    return () => {
      document.body.style.cssText = prev;
      document.documentElement.style.overscrollBehavior = "";
    };
  }, []);

  const [panelData, setPanelData] = useState<UiPanel[]>(FALLBACK_PANELS);
  const [glyphLanguageItems, setGlyphLanguageItems] = useState<GlyphLanguageItem[]>([]);
  const [activePanelId, setActivePanelId] = useState(FALLBACK_PANELS[0].id);
  const [panelsLoading, setPanelsLoading] = useState(true);
  const [panelsLoadError, setPanelsLoadError] = useState<string | null>(null);
  const [outsideMenuVisible, setOutsideMenuVisible] = useState(false);

  useEffect(() => {
    let isCancelled = false;

    const loadGlyphLanguage = async () => {
      try {
        const response = await fetch("/assets/data/glyph-language-map.json", { cache: "no-store" });
        const contentType = response.headers.get("content-type") ?? "";
        if (!response.ok) {
          throw new Error(`HTTP ${response.status} while loading glyph language map`);
        }
        if (!contentType.toLowerCase().includes("application/json")) {
          const body = await response.text();
          throw new Error(
            `Expected JSON but got '${contentType || "unknown"}' (${body.slice(0, 120)})`,
          );
        }

        const data = await response.json();
        if (!Array.isArray(data?.items)) {
          throw new Error("Glyph language payload missing 'items' array");
        }

        const mapped = data.items
          .map((item: any, index: number) => normalizeGlyphLanguageItem(item, index))
          .filter((item: GlyphLanguageItem) => item.enabled !== false);

        if (isCancelled) return;
        setGlyphLanguageItems(mapped);
      } catch (error) {
        console.warn("Failed to load glyph language map; using procedural glyph fallback.", error);
        if (isCancelled) return;
        setGlyphLanguageItems([]);
      }
    };

    void loadGlyphLanguage();
    return () => {
      isCancelled = true;
    };
  }, []);

  const glyphCanonicalByPanelId = useMemo(() => {
    const byPanelId = new Map<string, string>();
    glyphLanguageItems.forEach((item) => {
      if (!item.panel_id || !item.canonical || byPanelId.has(item.panel_id)) return;
      byPanelId.set(item.panel_id, item.canonical);
    });
    return byPanelId;
  }, [glyphLanguageItems]);

  useEffect(() => {
    let isCancelled = false;

    const loadPanels = async () => {
      setPanelsLoading(true);
      setPanelsLoadError(null);

      try {
        const response = await fetch("/assets/data/media-panels.json", { cache: "no-store" });
        const contentType = response.headers.get("content-type") ?? "";
        if (!response.ok) {
          throw new Error(`HTTP ${response.status} while loading panel data`);
        }
        if (!contentType.toLowerCase().includes("application/json")) {
          const body = await response.text();
          throw new Error(
            `Expected JSON but got '${contentType || "unknown"}' (${body.slice(0, 120)})`,
          );
        }

        const data = await response.json();
        if (!Array.isArray(data?.panels)) {
          throw new Error("Panel payload missing 'panels' array");
        }

        const mediaRoot =
          typeof data.media_root === "string" ? data.media_root.replace(/\/+$/, "") : "";
        const shouldProxyRemoteMedia =
          window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
        const toProxyIfRemote = (url: string) => {
          if (/^https?:\/\//i.test(url)) {
            return shouldProxyRemoteMedia
              ? `/proxy?url=${encodeURIComponent(url)}`
              : url;
          }
          return url;
        };

        const mapped: UiPanel[] = data.panels.map((p: any) => {
          const source = typeof p?.source === "string" ? p.source.replace(/^\/+/, "") : "";
          const sourceRawUrl = source ? (mediaRoot ? `${mediaRoot}/${source}` : `/${source}`) : undefined;
          const sourceUrl = sourceRawUrl ? toProxyIfRemote(sourceRawUrl) : undefined;
          const poster = typeof p?.poster === "string" ? p.poster.replace(/^\/+/, "") : "";
          const posterRawUrl = poster ? (mediaRoot ? `${mediaRoot}/${poster}` : `/${poster}`) : undefined;
          const posterUrl = posterRawUrl ? toProxyIfRemote(posterRawUrl) : undefined;
          const kind: PanelKind = p?.type === "image" || p?.type === "video" ? p.type : "text";

          return {
            ...p,
            kind,
            type: kind,
            title: p?.content?.title ?? "Uten tittel",
            body: p?.content?.description ?? "",
            cta: p?.content?.cta,
            poster: posterUrl,
            image: kind === "image" ? sourceUrl : undefined,
            video: kind === "video" ? sourceUrl : undefined,
          };
        });

        if (mapped.length === 0) {
          throw new Error("Panel payload contained 0 panels");
        }

        if (isCancelled) return;
        setPanelData(mapped);
        setActivePanelId(mapped[0].id);
      } catch (error) {
        console.error("Failed to load panels; using fallback data.", error);
        if (isCancelled) return;
        setPanelData(FALLBACK_PANELS);
        setActivePanelId(FALLBACK_PANELS[0].id);
        setPanelsLoadError("Kunne ikke laste media-paneler. Viser lokal fallback.");
      } finally {
        if (!isCancelled) setPanelsLoading(false);
      }
    };

    void loadPanels();
    return () => {
      isCancelled = true;
    };
  }, []);

  const activePanel = useMemo(
    () => panelData.find((panel) => panel.id === activePanelId) ?? panelData[0] ?? { title: "", body: "" } as UiPanel,
    [activePanelId, panelData],
  );

  useEffect(() => {
    if (panelData.length === 0) return;
    const mountNode = containerRef.current;
    if (!mountNode) return;
    setOutsideMenuVisible(false);

    let isDisposed = false;
    let cleanup = () => { };

    const run = () => {
      if (isDisposed || !mountNode) return;

      runtimePanelsRef.current = [];

      const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      const mobileQuery = window.matchMedia("(max-width: 767px)");
      const isReducedMotion = reducedMotionQuery.matches;
      const isMobile = mobileQuery.matches;

      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0x0f1217);
      scene.fog = new THREE.Fog(0x0f1217, 38, 230);

      const camera = new THREE.PerspectiveCamera(
        isMobile ? 72 : 64,
        mountNode.clientWidth / mountNode.clientHeight,
        0.1,
        1200,
      );

      const renderer = new THREE.WebGLRenderer({ antialias: !isMobile, alpha: false, powerPreference: "high-performance" });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.0 : 1.5));
      renderer.setSize(mountNode.clientWidth, mountNode.clientHeight);
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = isMobile ? 0.76 : 0.72;
      renderer.shadowMap.enabled = !isMobile;
      renderer.shadowMap.type = THREE.PCFShadowMap;
      mountNode.appendChild(renderer.domElement);

      const pmremGenerator = new THREE.PMREMGenerator(renderer);
      const environmentRT = pmremGenerator.fromScene(new RoomEnvironment(), 0.06);
      scene.environment = environmentRT.texture;

      // Virtual-production base fill: very low ambient, most shape comes from practicals + LED spill.
      const ambient = new THREE.AmbientLight(0xf6f8ff, 0.05);
      scene.add(ambient);

      const hemi = new THREE.HemisphereLight(0xe0e7f2, 0x1b1f26, 0.08);
      scene.add(hemi);

      const curvePoints = getCurvePoints(THREE);
      const curve = new THREE.CatmullRomCurve3(curvePoints, true, "catmullrom", 0.17);
      const segmentCount = isMobile ? 180 : 300;
      const maxAnisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
      const hasContinuousLedOn = (side: "left" | "right") =>
        panelData.some((panel) => {
          const inst = panel.installation;
          return inst?.mount_type === "continuous_led_wall" && inst.side === side;
        });
      // Force white plaster walls on — glyph system replaced video panels,
      // so LED backdrop cutouts are no longer needed.
      const renderLeftBaseWall = true;
      const renderRightBaseWall = true;

      const texSize = isMobile ? 256 : 512;
      const floorMaps = createSurfaceMaps({
        width: texSize,
        height: texSize,
        seed: 7.31,
        baseColor: 0x8f949a,
        macroFreq: 2.7,
        midFreq: 8,
        microFreq: 25,
        bandFreq: 13,
        bandInfluence: 0.015,
        seamAxis: "y",
        seamFreq: 24,
        seamDepth: 0.09,
        seamWidth: 0.012,
        roughnessBase: 0.36,
        roughnessRange: 0.14,
        normalStrength: 2.8,
        aoStrength: 0.12,
      });

      configureTiledTexture(floorMaps.albedo, 4.8, 24, maxAnisotropy, true);
      configureTiledTexture(floorMaps.normal, 4.8, 24, maxAnisotropy);
      configureTiledTexture(floorMaps.roughness, 4.8, 24, maxAnisotropy);
      configureTiledTexture(floorMaps.ao, 4.8, 24, maxAnisotropy);

      const wallMaps = createSurfaceMaps({
        width: texSize,
        height: texSize,
        seed: 11.27,
        baseColor: 0xe5e6e2,
        macroFreq: 1.9,
        midFreq: 6.4,
        microFreq: 20,
        bandFreq: 9.5,
        bandInfluence: 0.012,
        seamAxis: "y",
        seamFreq: 18,
        seamDepth: 0.04,
        seamWidth: 0.02,
        roughnessBase: 0.7,
        roughnessRange: 0.18,
        normalStrength: 1.15,
        aoStrength: 0.18,
      });

      configureTiledTexture(wallMaps.albedo, 2.2, 24, maxAnisotropy, true);
      configureTiledTexture(wallMaps.normal, 2.2, 24, maxAnisotropy);
      configureTiledTexture(wallMaps.roughness, 2.2, 24, maxAnisotropy);
      configureTiledTexture(wallMaps.ao, 2.2, 24, maxAnisotropy);

      const ceilingMaps = createSurfaceMaps({
        width: texSize,
        height: texSize,
        seed: 19.04,
        baseColor: 0xd7dbe0,
        macroFreq: 2.3,
        midFreq: 7.2,
        microFreq: 23,
        bandFreq: 14,
        bandInfluence: 0.02,
        seamAxis: "x",
        seamFreq: 12,
        seamDepth: 0.07,
        seamWidth: 0.018,
        roughnessBase: 0.62,
        roughnessRange: 0.2,
        normalStrength: 1.5,
        aoStrength: 0.2,
      });

      configureTiledTexture(ceilingMaps.albedo, 3.4, 24, maxAnisotropy, true);
      configureTiledTexture(ceilingMaps.normal, 3.4, 24, maxAnisotropy);
      configureTiledTexture(ceilingMaps.roughness, 3.4, 24, maxAnisotropy);
      configureTiledTexture(ceilingMaps.ao, 3.4, 24, maxAnisotropy);

      // Polished grey concrete — reflective enough to pick up LED spill, not mirror-like.
      const floorMat = new THREE.MeshPhysicalMaterial({
        color: 0x9299a2,
        map: floorMaps.albedo,
        normalMap: floorMaps.normal,
        normalScale: new THREE.Vector2(0.32, 0.32),
        roughnessMap: floorMaps.roughness,
        roughness: 0.38,
        metalness: 0.0,
        aoMap: floorMaps.ao,
        aoMapIntensity: 0.34,
        clearcoat: 0.23,
        clearcoatRoughness: 0.2,
        envMapIntensity: 0.74,
        side: THREE.DoubleSide,
      });

      // Plain white plaster walls
      const wallMat = new THREE.MeshPhysicalMaterial({
        color: 0xf2f2ef,
        roughness: 0.9,
        metalness: 0.0,
        envMapIntensity: 0.08,
        side: THREE.DoubleSide,
      });

      // Ceiling as soft-box light — pure white, self-illuminated
      // toneMapped:false bypasses ACES curve, fog:false prevents distance-darkening
      const ceilingMat = new THREE.MeshPhysicalMaterial({
        color: 0x000000,
        roughness: 1.0,
        metalness: 0.0,
        envMapIntensity: 0.0,
        emissive: new THREE.Color(0xffffff),
        emissiveIntensity: 1.0,
        toneMapped: false,
        fog: false,
        side: THREE.DoubleSide,
      });

      const createContinuousGeo = () => {
        const points: { pt: THREE.Vector3; right: THREE.Vector3; up: THREE.Vector3; t: number }[] = [];
        const upRef2 = new THREE.Vector3(0, 1, 0);
        let previousRight2 = new THREE.Vector3(1, 0, 0);

        for (let i = 0; i <= segmentCount; i += 1) {
          const t = i / segmentCount;
          const pt = curve.getPointAt(t);
          const tangent =
            t === 1
              ? pt.clone().sub(curve.getPointAt(t - 0.001)).normalize()
              : curve.getPointAt(t + 0.001).sub(pt).normalize();

          let right = new THREE.Vector3().crossVectors(tangent, upRef2).normalize();
          if (right.lengthSq() < 0.0001) right = previousRight2.clone();
          if (right.dot(previousRight2) < 0) right.multiplyScalar(-1);
          previousRight2 = right.clone();

          const up = new THREE.Vector3().crossVectors(right, tangent).normalize();
          points.push({ pt, right, up, t });
        }

        const buildPlane = (
          getV1: (point: { pt: THREE.Vector3; right: THREE.Vector3; up: THREE.Vector3; t: number }) => THREE.Vector3,
          getV2: (point: { pt: THREE.Vector3; right: THREE.Vector3; up: THREE.Vector3; t: number }) => THREE.Vector3,
          flipWinding = false,
        ) => {
          const pos: number[] = [];
          const uv: number[] = [];
          const idx: number[] = [];

          for (let i = 0; i <= segmentCount; i += 1) {
            const p = points[i];
            const v1 = getV1(p);
            const v2 = getV2(p);
            pos.push(v1.x, v1.y, v1.z, v2.x, v2.y, v2.z);
            uv.push(0, p.t, 1, p.t);
          }

          for (let i = 0; i < segmentCount; i += 1) {
            const a = i * 2;
            const b = a + 1;
            const c = a + 2;
            const d = a + 3;
            if (flipWinding) {
              idx.push(a, c, b, c, d, b);
            } else {
              idx.push(a, b, c, c, b, d);
            }
          }

          const geo = new THREE.BufferGeometry();
          geo.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
          const uvAttr = new THREE.Float32BufferAttribute(uv, 2);
          geo.setAttribute("uv", uvAttr);
          geo.setAttribute("uv2", uvAttr.clone());
          geo.setIndex(idx);
          geo.computeVertexNormals();
          return geo;
        };

        const w = ROOM_WIDTH * 0.5;
        const h = ROOM_HEIGHT * 0.5;

        const floorGeo = buildPlane(
          (p) => p.pt.clone().add(p.up.clone().multiplyScalar(-h)).add(p.right.clone().multiplyScalar(-w)),
          (p) => p.pt.clone().add(p.up.clone().multiplyScalar(-h)).add(p.right.clone().multiplyScalar(w)),
        );
        const ceilGeo = buildPlane(
          (p) => p.pt.clone().add(p.up.clone().multiplyScalar(h)).add(p.right.clone().multiplyScalar(-w)),
          (p) => p.pt.clone().add(p.up.clone().multiplyScalar(h)).add(p.right.clone().multiplyScalar(w)),
          true,
        );
        const leftGeo = buildPlane(
          (p) => p.pt.clone().add(p.up.clone().multiplyScalar(-h)).add(p.right.clone().multiplyScalar(-w)),
          (p) => p.pt.clone().add(p.up.clone().multiplyScalar(h)).add(p.right.clone().multiplyScalar(-w)),
          true,
        );
        const rightGeo = buildPlane(
          (p) => p.pt.clone().add(p.up.clone().multiplyScalar(-h)).add(p.right.clone().multiplyScalar(w)),
          (p) => p.pt.clone().add(p.up.clone().multiplyScalar(h)).add(p.right.clone().multiplyScalar(w)),
        );

        // Crown reveal at wall-ceiling junction — 8 cm dark shadow-gap strip
        // This gives the architectural line between white wall and white ceiling
        const CROWN_H = 0.08;
        const CROWN_IN = 0.015;
        const leftCrownGeo = buildPlane(
          (p) => p.pt.clone().add(p.up.clone().multiplyScalar(h - CROWN_H)).add(p.right.clone().multiplyScalar(-w + CROWN_IN)),
          (p) => p.pt.clone().add(p.up.clone().multiplyScalar(h)).add(p.right.clone().multiplyScalar(-w + CROWN_IN)),
          true,
        );
        const rightCrownGeo = buildPlane(
          (p) => p.pt.clone().add(p.up.clone().multiplyScalar(h - CROWN_H)).add(p.right.clone().multiplyScalar(w - CROWN_IN)),
          (p) => p.pt.clone().add(p.up.clone().multiplyScalar(h)).add(p.right.clone().multiplyScalar(w - CROWN_IN)),
          false,
        );

        // Dark skirting boards at wall-floor junction — 22 cm high, 18 mm proud of wall
        const SKIRTING_H = 0.22;
        const SKIRTING_IN = 0.018;
        const leftSkirtGeo = buildPlane(
          (p) => p.pt.clone().add(p.up.clone().multiplyScalar(-h)).add(p.right.clone().multiplyScalar(-w + SKIRTING_IN)),
          (p) => p.pt.clone().add(p.up.clone().multiplyScalar(-h + SKIRTING_H)).add(p.right.clone().multiplyScalar(-w + SKIRTING_IN)),
          true,
        );
        const rightSkirtGeo = buildPlane(
          (p) => p.pt.clone().add(p.up.clone().multiplyScalar(-h)).add(p.right.clone().multiplyScalar(w - SKIRTING_IN)),
          (p) => p.pt.clone().add(p.up.clone().multiplyScalar(-h + SKIRTING_H)).add(p.right.clone().multiplyScalar(w - SKIRTING_IN)),
          false,
        );

        // Ceiling track rail housing — 28 cm wide strip, 5 cm drop from ceiling, faces down
        const RAIL_HW = 0.14;
        const trackRailGeo = buildPlane(
          (p) => p.pt.clone().add(p.up.clone().multiplyScalar(h - 0.05)).add(p.right.clone().multiplyScalar(-RAIL_HW)),
          (p) => p.pt.clone().add(p.up.clone().multiplyScalar(h - 0.05)).add(p.right.clone().multiplyScalar(RAIL_HW)),
          true,
        );

        return { floorGeo, ceilGeo, leftGeo, rightGeo, leftSkirtGeo, rightSkirtGeo, trackRailGeo, leftCrownGeo, rightCrownGeo };
      };

      const { floorGeo, ceilGeo, leftGeo, rightGeo, leftSkirtGeo, rightSkirtGeo, trackRailGeo, leftCrownGeo, rightCrownGeo } = createContinuousGeo();

      const floorMesh = new THREE.Mesh(floorGeo, floorMat);
      const ceilingMesh = new THREE.Mesh(ceilGeo, ceilingMat);
      const leftWallMesh = renderLeftBaseWall ? new THREE.Mesh(leftGeo, wallMat) : null;
      const rightWallMesh = renderRightBaseWall ? new THREE.Mesh(rightGeo, wallMat) : null;
      const ledBackdropMat = new THREE.MeshPhysicalMaterial({
        color: 0x030406,
        roughness: 0.62,
        metalness: 0.18,
        envMapIntensity: 0.65,
      });
      const leftLedBackdropMesh = renderLeftBaseWall ? null : new THREE.Mesh(leftGeo, ledBackdropMat);
      const rightLedBackdropMesh = renderRightBaseWall ? null : new THREE.Mesh(rightGeo, ledBackdropMat);

      // Dark architectural trim — shared by skirting board (floor) and crown reveal (ceiling)
      const skirtMat = new THREE.MeshStandardMaterial({
        color: 0x1e1c1a,
        roughness: 0.78,
        metalness: 0.0,
        envMapIntensity: 0.04,
        side: THREE.DoubleSide,
      });
      const leftSkirtMesh = new THREE.Mesh(leftSkirtGeo, skirtMat);
      const rightSkirtMesh = new THREE.Mesh(rightSkirtGeo, skirtMat);
      leftSkirtMesh.receiveShadow = true;
      rightSkirtMesh.receiveShadow = true;

      // Crown reveal — same charcoal, creates the shadow-line where white wall meets white ceiling
      const leftCrownMesh = new THREE.Mesh(leftCrownGeo, skirtMat);
      const rightCrownMesh = new THREE.Mesh(rightCrownGeo, skirtMat);
      leftCrownMesh.receiveShadow = false;
      rightCrownMesh.receiveShadow = false;

      // Satin aluminium track rail housing on ceiling centreline
      const trackRailMat = new THREE.MeshPhysicalMaterial({
        color: 0x9a9c9a,
        roughness: 0.24,
        metalness: 0.78,
        envMapIntensity: 0.9,
        side: THREE.DoubleSide,
      });
      const trackRailMesh = new THREE.Mesh(trackRailGeo, trackRailMat);
      trackRailMesh.receiveShadow = false;

      floorMesh.receiveShadow = true;
      floorMesh.castShadow = true;
      ceilingMesh.receiveShadow = true;
      ceilingMesh.castShadow = true;
      if (leftWallMesh) {
        leftWallMesh.receiveShadow = true;
        leftWallMesh.castShadow = true;
      }
      if (rightWallMesh) {
        rightWallMesh.receiveShadow = true;
        rightWallMesh.castShadow = true;
      }
      if (leftLedBackdropMesh) {
        leftLedBackdropMesh.receiveShadow = true;
        leftLedBackdropMesh.castShadow = false;
      }
      if (rightLedBackdropMesh) {
        rightLedBackdropMesh.receiveShadow = true;
        rightLedBackdropMesh.castShadow = false;
      }

      scene.add(floorMesh);
      scene.add(ceilingMesh);
      if (leftWallMesh) scene.add(leftWallMesh);
      if (rightWallMesh) scene.add(rightWallMesh);
      if (leftLedBackdropMesh) scene.add(leftLedBackdropMesh);
      if (rightLedBackdropMesh) scene.add(rightLedBackdropMesh);
      scene.add(leftSkirtMesh);
      scene.add(rightSkirtMesh);
      scene.add(leftCrownMesh);
      scene.add(rightCrownMesh);
      scene.add(trackRailMesh);

      const upRef = new THREE.Vector3(0, 1, 0);

      // Virtual production rig: moving key/fill/rim around camera, plus LED bounce emitters from media.
      const vpKeyTarget = new THREE.Object3D();
      const vpFillTarget = new THREE.Object3D();
      const vpRimTarget = new THREE.Object3D();
      scene.add(vpKeyTarget);
      scene.add(vpFillTarget);
      scene.add(vpRimTarget);

      const vpKey = new THREE.SpotLight(0xfff1de, isMobile ? 16 : 24, 34, Math.PI / 8.4, 0.44, 2);
      vpKey.target = vpKeyTarget;
      vpKey.castShadow = !isMobile;
      if (vpKey.castShadow) {
        vpKey.shadow.mapSize.width = 2048;
        vpKey.shadow.mapSize.height = 2048;
        vpKey.shadow.bias = -0.00035;
        vpKey.shadow.normalBias = 0.012;
        vpKey.shadow.camera.near = 0.4;
        vpKey.shadow.camera.far = 34;
      }
      scene.add(vpKey);

      const vpFill = new THREE.SpotLight(0xbfd4ff, isMobile ? 6 : 9, 34, Math.PI / 6.5, 0.68, 2);
      vpFill.target = vpFillTarget;
      vpFill.castShadow = false;
      scene.add(vpFill);

      const vpRim = new THREE.SpotLight(0xd6e5ff, isMobile ? 5 : 7, 28, Math.PI / 7.8, 0.6, 2);
      vpRim.target = vpRimTarget;
      vpRim.castShadow = false;
      scene.add(vpRim);

      const exteriorKeyTarget = new THREE.Object3D();
      const exteriorFillTarget = new THREE.Object3D();
      scene.add(exteriorKeyTarget);
      scene.add(exteriorFillTarget);

      // Exterior "sun" — warm directional light with shadow casting
      const exteriorKey = new THREE.DirectionalLight(0xfff4e6, 0);
      exteriorKey.target = exteriorKeyTarget;
      exteriorKey.castShadow = !isMobile;
      if (exteriorKey.castShadow) {
        exteriorKey.shadow.mapSize.width = 4096;
        exteriorKey.shadow.mapSize.height = 4096;
        exteriorKey.shadow.bias = -0.0002;
        exteriorKey.shadow.normalBias = 0.005;
        // Ortho frustum covers the full tunnel ring (~500×450 units)
        const S = 320;
        exteriorKey.shadow.camera.left = -S;
        exteriorKey.shadow.camera.right = S;
        exteriorKey.shadow.camera.top = S;
        exteriorKey.shadow.camera.bottom = -S;
        exteriorKey.shadow.camera.near = 1;
        exteriorKey.shadow.camera.far = 1200;
      }
      scene.add(exteriorKey);

      // Cool fill from opposite side — no shadows, just soft counter
      const exteriorFill = new THREE.DirectionalLight(0x8ab4e8, 0);
      exteriorFill.target = exteriorFillTarget;
      scene.add(exteriorFill);

      floorGeo.computeBoundingBox();
      floorGeo.computeBoundingSphere();
      ceilGeo.computeBoundingBox();
      ceilGeo.computeBoundingSphere();
      leftGeo.computeBoundingBox();
      leftGeo.computeBoundingSphere();
      rightGeo.computeBoundingBox();
      rightGeo.computeBoundingSphere();

      const hasStructuralMounts = panelData.some((panel) =>
        panel.installation?.mount_type === "continuous_led_wall" ||
        panel.installation?.mount_type === "jutting_half_wall",
      );
      const panelItems = hasStructuralMounts
        ? panelData
        : isMobile
          ? panelData.filter((_, index) => index % 2 === 0)
          : panelData;

      const panelObjects: any[] = [];
      const dynamicTextures: any[] = [];
      const dynamicMaterials: THREE.Material[] = [];
      const dynamicGeometries: THREE.BufferGeometry[] = [];
      const videoCleanupFns: Array<() => void> = [];
      const runtimeVideos: HTMLVideoElement[] = [];
      const parallaxLayers: Array<{ mesh: THREE.Mesh; basePosition: THREE.Vector3; strength: number }> = [];
      // Negative progression is the intended "forward" route chronology for this tunnel.
      const ROUTE_PROGRESS_DIRECTION = -1;
      const requestVideoPlay = (video: HTMLVideoElement) => {
        if (!video.paused && video.currentTime > 0) return; // already playing
        const playAttempt = video.play();
        if (playAttempt && typeof playAttempt.catch === "function") {
          playAttempt.catch(() => {
            // Browser may still gate autoplay; we retry on user input events.
          });
        }
      };

      // Poll videos until all are playing — catches edge cases canplay misses
      const videoPlayPoller = setInterval(() => {
        let allPlaying = true;
        runtimeVideos.forEach((v) => {
          if (v.paused || v.readyState < 2) {
            allPlaying = false;
            requestVideoPlay(v);
          }
        });
        if (allPlaying && runtimeVideos.length > 0) clearInterval(videoPlayPoller);
      }, 500);
      videoCleanupFns.push(() => clearInterval(videoPlayPoller));

      // Gallery vinyl text — dark letters on transparent, sits flush on white wall
      const makeVinylTexture = (panel: UiPanel) => {
        const canvas = document.createElement("canvas");
        canvas.width = 1700;
        canvas.height = 1100;
        const ctx = canvas.getContext("2d");
        if (!ctx) return null;

        // Transparent background — text floats on the white wall surface
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Title: bold charcoal, letter-spaced like gallery wall text
        ctx.fillStyle = "rgba(12,10,8,0.94)";
        ctx.font = "700 102px 'Helvetica Neue', Helvetica, Arial, sans-serif";
        drawWrappedText(ctx, panel.title.toUpperCase(), 80, 175, 1520, 122);

        // Thin rule under title
        ctx.strokeStyle = "rgba(12,10,8,0.22)";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(80, 315);
        ctx.lineTo(720, 315);
        ctx.stroke();

        // Body: gallery caption weight
        ctx.fillStyle = "rgba(38,34,30,0.80)";
        ctx.font = "400 54px 'Helvetica Neue', Helvetica, Arial, sans-serif";
        drawWrappedText(ctx, panel.body, 80, 410, 1540, 78);

        if (panel.cta) {
          // CTA with arrow — subtle link indicator
          ctx.fillStyle = "rgba(12,10,8,0.62)";
          ctx.font = "600 44px 'Helvetica Neue', Helvetica, Arial, sans-serif";
          ctx.fillText(`→  ${panel.cta.toUpperCase()}`, 80, 1000);
        }

        const texture = new THREE.CanvasTexture(canvas);
        texture.colorSpace = THREE.SRGBColorSpace;
        dynamicTextures.push(texture);
        return texture;
      };

      // Gallery label card — cream card, dark text, subtle border
      const makeLabelTexture = (panel: UiPanel) => {
        const canvas = document.createElement("canvas");
        canvas.width = 980;
        canvas.height = 640;
        const ctx = canvas.getContext("2d");
        if (!ctx) return null;

        // Cream card body
        ctx.fillStyle = "#f8f6f1";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Left accent bar
        ctx.fillStyle = "rgba(12,10,8,0.75)";
        ctx.fillRect(0, 0, 8, canvas.height);

        // Title
        ctx.fillStyle = "#111";
        ctx.font = "700 44px 'Helvetica Neue', Helvetica, Arial, sans-serif";
        drawWrappedText(ctx, panel.title, 50, 92, 880, 56);

        // Body caption
        ctx.fillStyle = "#484440";
        ctx.font = "400 27px 'Helvetica Neue', Helvetica, Arial, sans-serif";
        drawWrappedText(ctx, panel.body, 50, 242, 880, 38);

        // Footer institution
        ctx.fillStyle = "#888";
        ctx.font = "400 22px 'Helvetica Neue', Helvetica, Arial, sans-serif";
        ctx.fillText("Intelligenspartiet  ·  2026", 50, 590);

        const texture = new THREE.CanvasTexture(canvas);
        texture.colorSpace = THREE.SRGBColorSpace;
        dynamicTextures.push(texture);
        return texture;
      };

      const makeCardLayerTexture = (
        width: number,
        height: number,
        painter: (ctx: CanvasRenderingContext2D) => void,
      ) => {
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        if (!ctx) return null;
        ctx.clearRect(0, 0, width, height);
        painter(ctx);

        const texture = new THREE.CanvasTexture(canvas);
        texture.colorSpace = THREE.SRGBColorSpace;
        texture.anisotropy = maxAnisotropy;
        texture.minFilter = THREE.LinearMipmapLinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.needsUpdate = true;
        dynamicTextures.push(texture);
        return texture;
      };

      const splitLongToken = (ctx: CanvasRenderingContext2D, token: string, maxWidth: number) => {
        const parts: string[] = [];
        let chunk = "";
        for (const char of token) {
          const candidate = chunk + char;
          if (ctx.measureText(candidate).width > maxWidth && chunk.length > 0) {
            parts.push(chunk);
            chunk = char;
          } else {
            chunk = candidate;
          }
        }
        if (chunk) parts.push(chunk);
        return parts;
      };

      const wrapLines = (ctx: CanvasRenderingContext2D, text: string, maxWidth: number) => {
        const words = text.trim().split(/\s+/);
        const lines: string[] = [];
        let line = "";

        words.forEach((word) => {
          if (ctx.measureText(word).width > maxWidth) {
            const longParts = splitLongToken(ctx, word, maxWidth);
            longParts.forEach((part, partIndex) => {
              const candidatePart = line ? `${line} ${part}` : part;
              if (ctx.measureText(candidatePart).width > maxWidth && line) {
                lines.push(line);
                line = part;
              } else {
                line = candidatePart;
              }
              if (partIndex < longParts.length - 1) {
                lines.push(line);
                line = "";
              }
            });
            return;
          }
          const candidate = line ? `${line} ${word}` : word;
          if (ctx.measureText(candidate).width > maxWidth && line) {
            lines.push(line);
            line = word;
          } else {
            line = candidate;
          }
        });

        if (line) lines.push(line);
        return lines;
      };

      const drawFittedWrappedText = (
        ctx: CanvasRenderingContext2D,
        text: string,
        x: number,
        y: number,
        maxWidth: number,
        maxLines: number,
        startFontPx: number,
        minFontPx: number,
        weight: number,
        lineHeightMult: number,
      ) => {
        let chosenLines: string[] = [];
        let chosenSize = minFontPx;

        for (let size = startFontPx; size >= minFontPx; size -= 6) {
          ctx.font = `${weight} ${size}px 'Helvetica Neue', Helvetica, Arial, sans-serif`;
          const lines = wrapLines(ctx, text, maxWidth);
          if (lines.length <= maxLines) {
            chosenLines = lines;
            chosenSize = size;
            break;
          }
        }

        if (chosenLines.length === 0) {
          ctx.font = `${weight} ${minFontPx}px 'Helvetica Neue', Helvetica, Arial, sans-serif`;
          chosenLines = wrapLines(ctx, text, maxWidth).slice(0, maxLines);
          chosenSize = minFontPx;
        }

        const lineHeight = Math.round(chosenSize * lineHeightMult);
        chosenLines.forEach((line, index) => {
          ctx.fillText(line, x, y + index * lineHeight);
        });
      };

      const makeJuttingCardLayers = (panel: UiPanel, ordinal: number) => {
        const sectionTexture = makeCardLayerTexture(2048, 320, (ctx) => {
          ctx.fillStyle = "rgba(20,22,26,0.74)";
          ctx.font = "700 120px 'Helvetica Neue', Helvetica, Arial, sans-serif";
          ctx.fillText(`SEKSJON ${String(ordinal).padStart(2, "0")}`, 10, 208);
        });

        const titleTexture = makeCardLayerTexture(3072, 960, (ctx) => {
          ctx.fillStyle = "rgba(17,18,21,0.98)";
          drawFittedWrappedText(
            ctx,
            panel.title.toUpperCase(),
            10,
            290,
            3020,
            3,
            290,
            118,
            900,
            1.04,
          );
        });

        const bodyTexture = makeCardLayerTexture(3072, 1300, (ctx) => {
          ctx.fillStyle = "rgba(28,29,34,0.9)";
          drawFittedWrappedText(
            ctx,
            panel.body,
            10,
            220,
            3020,
            6,
            138,
            76,
            600,
            1.16,
          );
        });

        return { sectionTexture, titleTexture, bodyTexture };
      };

      const numberFaceTextureCache = new Map<number, THREE.Texture>();
      const numberTabGeometry = new THREE.BoxGeometry(1, 1, 0.2);
      const numberFaceGeometry = new THREE.PlaneGeometry(0.82, 0.82);
      const numberTabBodyMaterial = new THREE.MeshPhysicalMaterial({
        color: 0xe9eaec,
        roughness: 0.38,
        metalness: 0.14,
        clearcoat: 0.32,
        clearcoatRoughness: 0.22,
      });

      const getNumberFaceTexture = (value: number) => {
        const normalized = Math.max(1, value);
        const cached = numberFaceTextureCache.get(normalized);
        if (cached) return cached;

        const canvas = document.createElement("canvas");
        canvas.width = 1024;
        canvas.height = 1024;
        const ctx = canvas.getContext("2d");
        if (!ctx) return null;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.font = "900 780px 'Helvetica Neue', Helvetica, Arial, sans-serif";
        ctx.fillStyle = "rgba(10,12,16,0.25)";
        ctx.fillText(String(normalized), 532, 556);
        ctx.fillStyle = "rgba(10,12,16,0.98)";
        ctx.fillText(String(normalized), 512, 540);

        const texture = new THREE.CanvasTexture(canvas);
        texture.colorSpace = THREE.SRGBColorSpace;
        texture.anisotropy = maxAnisotropy;
        texture.minFilter = THREE.LinearMipmapLinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.needsUpdate = true;
        dynamicTextures.push(texture);
        numberFaceTextureCache.set(normalized, texture);
        return texture;
      };

      const makeCarouselNumber = (value: number) => {
        const text = String(Math.max(1, value));
        const group = new THREE.Group();
        const widthScale = Math.max(1, text.length * 0.78);

        const tabBody = new THREE.Mesh(numberTabGeometry, numberTabBodyMaterial);
        tabBody.scale.x = widthScale;
        tabBody.castShadow = true;
        tabBody.receiveShadow = true;
        group.add(tabBody);

        const numberTexture = getNumberFaceTexture(value);
        if (numberTexture) {
          const faceMaterial = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            map: numberTexture,
            transparent: true,
            alphaTest: 0.02,
            roughness: 0.42,
            metalness: 0.02,
          });
          dynamicMaterials.push(faceMaterial);

          const frontFace = new THREE.Mesh(numberFaceGeometry, faceMaterial);
          frontFace.scale.x = widthScale * 0.82;
          frontFace.position.z = 0.102;
          frontFace.castShadow = true;
          frontFace.receiveShadow = true;
          group.add(frontFace);

          const rearFace = new THREE.Mesh(numberFaceGeometry, faceMaterial);
          rearFace.scale.x = widthScale * 0.82;
          rearFace.position.z = -0.102;
          rearFace.rotation.y = Math.PI;
          rearFace.castShadow = true;
          rearFace.receiveShadow = true;
          group.add(rearFace);
        }

        group.scale.setScalar(isMobile ? 1.06 : 1.36);
        return group;
      };

      const createGlyphTexture = (index: number, panelId: string): THREE.CanvasTexture => {
        const size = 512;
        const canvas = document.createElement("canvas");
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext("2d")!;
        ctx.clearRect(0, 0, size, size);

        const canonical = glyphCanonicalByPanelId.get(panelId);
        if (canonical) {
          try {
            drawCanonicalGlyphToContext(ctx, canonical, {
              backgroundColor: "rgba(6,14,24,0.7)",
              lineColor: "rgba(102,221,255,0.95)",
              gridColor: "rgba(102,221,255,0.58)",
            });
            const semanticTexture = new THREE.CanvasTexture(canvas);
            semanticTexture.colorSpace = THREE.SRGBColorSpace;
            return semanticTexture;
          } catch (error) {
            console.warn(
              `Invalid glyph canonical sentence for panel '${panelId}': '${canonical}'. Falling back to procedural glyph.`,
              error,
            );
          }
        }

        const cx = size / 2;
        const cy = size / 2;
        const seed = index * 137.508;

        // Dark backing circle for contrast against white walls
        ctx.fillStyle = "rgba(6,14,24,0.7)";
        ctx.beginPath();
        ctx.arc(cx, cy, size * 0.42, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = "rgba(102,221,255,0.95)";
        ctx.lineWidth = 2.5;
        ctx.lineCap = "round";

        // Outer ring
        ctx.beginPath();
        ctx.arc(cx, cy, size * 0.38, 0, Math.PI * 2);
        ctx.stroke();

        // Inner geometric strokes
        const armCount = 3 + (index % 4);
        for (let i = 0; i < armCount; i++) {
          const angle = (i / armCount) * Math.PI * 2 + seed;
          const innerR = size * 0.08;
          const outerR = size * 0.32;
          ctx.beginPath();
          ctx.moveTo(cx + Math.cos(angle) * innerR, cy + Math.sin(angle) * innerR);
          ctx.lineTo(cx + Math.cos(angle) * outerR, cy + Math.sin(angle) * outerR);
          ctx.stroke();
        }

        // Arc segments
        const arcCount = 2 + (index % 3);
        for (let i = 0; i < arcCount; i++) {
          const r = size * (0.15 + i * 0.09);
          const startAngle = seed + i * 1.2;
          ctx.beginPath();
          ctx.arc(cx, cy, r, startAngle, startAngle + Math.PI * (0.4 + (index % 3) * 0.2));
          ctx.stroke();
        }

        // Small dot accents
        ctx.fillStyle = "rgba(102,221,255,0.85)";
        const dotCount = 3 + (index % 5);
        for (let i = 0; i < dotCount; i++) {
          const angle = seed + (i / dotCount) * Math.PI * 2;
          const r = size * (0.2 + (i % 3) * 0.06);
          ctx.beginPath();
          ctx.arc(cx + Math.cos(angle) * r, cy + Math.sin(angle) * r, 4, 0, Math.PI * 2);
          ctx.fill();
        }

        // Inner circle accent
        ctx.strokeStyle = "rgba(102,221,255,0.5)";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(cx, cy, size * 0.12, 0, Math.PI * 2);
        ctx.stroke();

        // Center dot
        ctx.fillStyle = "rgba(102,221,255,0.95)";
        ctx.beginPath();
        ctx.arc(cx, cy, 6, 0, Math.PI * 2);
        ctx.fill();

        const texture = new THREE.CanvasTexture(canvas);
        texture.colorSpace = THREE.SRGBColorSpace;
        return texture;
      };

      const createCardTexture = (title: string, description: string): THREE.CanvasTexture => {
        const canvas = document.createElement("canvas");
        canvas.width = 1024;
        canvas.height = 640;
        const ctx = canvas.getContext("2d")!;

        // Dark semi-transparent background
        ctx.fillStyle = "rgba(8,12,18,0.88)";
        ctx.beginPath();
        ctx.roundRect(16, 16, 992, 608, 24);
        ctx.fill();

        // Border
        ctx.strokeStyle = "rgba(102,221,255,0.25)";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(16, 16, 992, 608, 24);
        ctx.stroke();

        // Title
        ctx.fillStyle = "rgba(102,221,255,0.95)";
        ctx.font = "700 48px 'Helvetica Neue', Helvetica, Arial, sans-serif";
        drawWrappedText(ctx, title.toUpperCase(), 60, 100, 900, 58);

        // Separator line
        ctx.strokeStyle = "rgba(102,221,255,0.3)";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(60, 180);
        ctx.lineTo(960, 180);
        ctx.stroke();

        // Description
        ctx.fillStyle = "rgba(220,230,240,0.9)";
        ctx.font = "400 32px 'Helvetica Neue', Helvetica, Arial, sans-serif";
        drawWrappedText(ctx, description, 60, 230, 900, 42);

        const texture = new THREE.CanvasTexture(canvas);
        texture.colorSpace = THREE.SRGBColorSpace;
        return texture;
      };

      // ---- Exit glyph texture: gold/amber starburst with outward arrows ----
      const createExitGlyphTexture = (): THREE.CanvasTexture => {
        const size = 512;
        const canvas = document.createElement("canvas");
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext("2d")!;

        const cx = size / 2;
        const cy = size / 2;

        // Dark backing circle
        ctx.beginPath();
        ctx.arc(cx, cy, size * 0.42, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(6,14,24,0.7)";
        ctx.fill();

        // Outer ring – gold
        ctx.strokeStyle = "rgba(255,170,51,0.9)";
        ctx.lineWidth = 6;
        ctx.beginPath();
        ctx.arc(cx, cy, size * 0.38, 0, Math.PI * 2);
        ctx.stroke();

        // Starburst rays
        const rays = 8;
        for (let i = 0; i < rays; i++) {
          const angle = (i / rays) * Math.PI * 2 - Math.PI / 2;
          ctx.strokeStyle = `rgba(255,${170 + Math.round(Math.sin(i) * 40)},51,0.8)`;
          ctx.lineWidth = 4;
          ctx.beginPath();
          ctx.moveTo(cx + Math.cos(angle) * size * 0.12, cy + Math.sin(angle) * size * 0.12);
          ctx.lineTo(cx + Math.cos(angle) * size * 0.34, cy + Math.sin(angle) * size * 0.34);
          ctx.stroke();

          // Arrow heads
          const tipX = cx + Math.cos(angle) * size * 0.34;
          const tipY = cy + Math.sin(angle) * size * 0.34;
          const headLen = size * 0.06;
          ctx.beginPath();
          ctx.moveTo(tipX, tipY);
          ctx.lineTo(
            tipX - headLen * Math.cos(angle - 0.4),
            tipY - headLen * Math.sin(angle - 0.4),
          );
          ctx.moveTo(tipX, tipY);
          ctx.lineTo(
            tipX - headLen * Math.cos(angle + 0.4),
            tipY - headLen * Math.sin(angle + 0.4),
          );
          ctx.stroke();
        }

        // Center dot
        ctx.beginPath();
        ctx.arc(cx, cy, size * 0.06, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,200,80,0.95)";
        ctx.fill();

        const tex = new THREE.CanvasTexture(canvas);
        tex.colorSpace = THREE.SRGBColorSpace;
        return tex;
      };

      const getFrameAt = (progress: number) => {
        const p = wrap01(progress);
        const point = curve.getPointAt(p);
        const next = curve.getPointAt(wrap01(p + 0.002));
        const tangent = next.clone().sub(point).normalize();

        let right = new THREE.Vector3().crossVectors(tangent, upRef).normalize();
        if (right.lengthSq() < 0.0001) {
          right = new THREE.Vector3(1, 0, 0);
        }
        const up = new THREE.Vector3().crossVectors(right, tangent).normalize();

        return { point, tangent, right, up };
      };

      const routeDistanceFromStart = (placementT: number) => {
        const t = wrap01(placementT);
        return ROUTE_PROGRESS_DIRECTION >= 0
          ? wrap01(t - CAMERA_START_PROGRESS)
          : wrap01(CAMERA_START_PROGRESS - t);
      };

      const curveLength = curve.getLength();
      const STRAIGHT_SCAN_STEPS = isMobile ? 120 : 220;
      const STRAIGHT_MIN_SEGMENTS = isMobile ? 4 : 6;
      const STRAIGHT_TANGENT_DELTA = isMobile ? 0.01 : 0.012;
      const STRAIGHT_ANGLE_THRESHOLD = THREE.MathUtils.degToRad(isMobile ? 1.2 : 1.0);
      const STRAIGHT_DEVIATION_RATIO = isMobile ? 0.012 : 0.01;
      const STRAIGHT_MIN_SPAN_WORLD = isMobile ? 24 : 38;
      const MAX_FLAT_SPAN_WORLD = isMobile ? 18 : 26;

      const applyCoverUvToPlane = (
        geometry: THREE.PlaneGeometry,
        planeWidth: number,
        planeHeight: number,
        mediaAspect: number,
      ) => {
        const safeMediaAspect = Number.isFinite(mediaAspect) && mediaAspect > 0.1 ? mediaAspect : 16 / 9;
        const planeAspect = Math.max(planeWidth / Math.max(planeHeight, 0.001), 0.001);
        let u0 = 0;
        let u1 = 1;
        let v0 = 0;
        let v1 = 1;

        // Cover fit keeps aspect ratio and avoids stretch; only crops excess.
        if (planeAspect > safeMediaAspect) {
          const visibleV = THREE.MathUtils.clamp(safeMediaAspect / planeAspect, 0.01, 1);
          v0 = 0.5 - visibleV * 0.5;
          v1 = 0.5 + visibleV * 0.5;
        } else {
          const visibleU = THREE.MathUtils.clamp(planeAspect / safeMediaAspect, 0.01, 1);
          u0 = 0.5 - visibleU * 0.5;
          u1 = 0.5 + visibleU * 0.5;
        }

        const uvAttr = geometry.getAttribute("uv") as THREE.BufferAttribute;
        const posAttr = geometry.getAttribute("position") as THREE.BufferAttribute;
        for (let i = 0; i < uvAttr.count; i += 1) {
          const x = posAttr.getX(i);
          const y = posAttr.getY(i);
          const u = x < 0 ? u0 : u1;
          const v = y < 0 ? v0 : v1;
          uvAttr.setXY(i, u, v);
        }
        uvAttr.needsUpdate = true;
      };

      const collectStraightSpansInRange = (startT: number, lenT: number) => {
        const clampedLen = THREE.MathUtils.clamp(lenT, 0, 1);
        if (clampedLen <= 0.0001) return [] as Array<{ startU: number; endU: number }>;

        const flags = new Array<boolean>(STRAIGHT_SCAN_STEPS);
        for (let i = 0; i < STRAIGHT_SCAN_STEPS; i += 1) {
          const uMid = (i + 0.5) / STRAIGHT_SCAN_STEPS;
          const tMid = wrap01(startT + uMid * clampedLen);
          const prev = curve.getPointAt(wrap01(tMid - STRAIGHT_TANGENT_DELTA));
          const next = curve.getPointAt(wrap01(tMid + STRAIGHT_TANGENT_DELTA));
          const center = curve.getPointAt(tMid);
          const tangentA = center.clone().sub(prev).normalize();
          const tangentB = next.clone().sub(center).normalize();
          const turnAngle = tangentA.angleTo(tangentB);

          const chord = next.clone().sub(prev);
          const chordLen = Math.max(chord.length(), 0.001);
          const chordDir = chord.clone().normalize();
          const centerFromPrev = center.clone().sub(prev);
          const projected = THREE.MathUtils.clamp(centerFromPrev.dot(chordDir), 0, chordLen);
          const closestOnChord = prev.clone().add(chordDir.multiplyScalar(projected));
          const deviationRatio = center.distanceTo(closestOnChord) / chordLen;

          flags[i] = turnAngle <= STRAIGHT_ANGLE_THRESHOLD && deviationRatio <= STRAIGHT_DEVIATION_RATIO;
        }

        // Clean single-sample noise to keep segments stable.
        for (let i = 1; i < STRAIGHT_SCAN_STEPS - 1; i += 1) {
          if (flags[i - 1] && !flags[i] && flags[i + 1]) flags[i] = true;
          if (!flags[i - 1] && flags[i] && !flags[i + 1]) flags[i] = false;
        }

        const spans: Array<{ startU: number; endU: number }> = [];
        let i = 0;
        while (i < STRAIGHT_SCAN_STEPS) {
          if (!flags[i]) {
            i += 1;
            continue;
          }
          const start = i;
          while (i < STRAIGHT_SCAN_STEPS && flags[i]) i += 1;
          const end = i;
          const spanU = (end - start) / STRAIGHT_SCAN_STEPS;
          const spanWorld = spanU * clampedLen * curveLength;
          if (end - start >= STRAIGHT_MIN_SEGMENTS && spanWorld >= STRAIGHT_MIN_SPAN_WORLD) {
            spans.push({
              startU: start / STRAIGHT_SCAN_STEPS,
              endU: end / STRAIGHT_SCAN_STEPS,
            });
          }
        }

        return spans;
      };

      // ======= GLYPH/RUNE SYMBOL SYSTEM =======
      const glyphRunes: GlyphRune[] = [];
      const glyphGeometry = new THREE.PlaneGeometry(GLYPH_SIZE * 2, GLYPH_SIZE * 2);
      const cardGeometry = new THREE.PlaneGeometry(CARD_WIDTH, CARD_HEIGHT);

      panelItems.forEach((panel, index) => {
        const inst = panel.installation;
        const progress = wrap01(inst?.placement_t ?? (0.05 + index / panelItems.length));
        const { point, right, up } = getFrameAt(progress);

        const isLeft = inst?.side === "left";
        const isCenter = inst?.side === "center";
        const sideSign = isCenter ? 0 : (isLeft ? -1 : 1);
        const sideOffset = sideSign * ROOM_WIDTH * 0.12;

        const anchor = point
          .clone()
          .add(right.clone().multiplyScalar(sideOffset))
          .add(up.clone().multiplyScalar(0.5));

        // Glyph texture
        const glyphTex = createGlyphTexture(index, panel.id);
        dynamicTextures.push(glyphTex);

        const glyphMat = new THREE.MeshStandardMaterial({
          color: 0xffffff,
          emissive: new THREE.Color(GLYPH_GLOW_COLOR),
          emissiveIntensity: 1.2,
          map: glyphTex,
          emissiveMap: glyphTex,
          transparent: true,
          alphaTest: 0.05,
          side: THREE.DoubleSide,
          depthWrite: false,
        });
        dynamicMaterials.push(glyphMat);

        const glyphMesh = new THREE.Mesh(glyphGeometry, glyphMat);
        glyphMesh.position.copy(anchor);
        glyphMesh.userData = { panel, isGlyph: true };
        panelObjects.push(glyphMesh);
        scene.add(glyphMesh);

        // Card texture
        const cardTex = createCardTexture(panel.title, panel.body);
        dynamicTextures.push(cardTex);

        const cardMat = new THREE.MeshStandardMaterial({
          color: 0xffffff,
          emissive: new THREE.Color(0x112233),
          emissiveIntensity: 0.3,
          map: cardTex,
          transparent: true,
          opacity: 0,
          side: THREE.DoubleSide,
          depthWrite: true,
        });
        dynamicMaterials.push(cardMat);

        const cardMesh = new THREE.Mesh(cardGeometry, cardMat);
        const cardGroup = new THREE.Group();
        cardGroup.add(cardMesh);
        cardGroup.position.copy(anchor);
        cardGroup.scale.setScalar(0.01);
        cardGroup.visible = false;
        scene.add(cardGroup);

        // Subtle point light for glyph glow
        const glyphLight = new THREE.PointLight(GLYPH_GLOW_COLOR, isMobile ? 6 : 12, 20, 1.5);
        glyphLight.position.copy(anchor);
        scene.add(glyphLight);

        glyphRunes.push({
          mesh: glyphMesh,
          card: cardGroup,
          panel,
          progress,
          baseY: anchor.y,
          expanded: false,
          expandT: 0,
        });

        runtimePanelsRef.current.push({ meta: panel, progress });
      });

      // ======= EXIT GLYPH =======
      let isOutside = false;
      let outsideT = 0; // 0 = inside tunnel, 1 = fully outside
      const exitCameraTarget = new THREE.Vector3(); // computed once on transition start
      const exitLookTarget = new THREE.Vector3();   // center of tunnel

      // Compute tunnel center (average of curve sample points)
      const tunnelCenter = new THREE.Vector3();
      const centerSamples = 32;
      for (let i = 0; i < centerSamples; i++) {
        tunnelCenter.add(curve.getPointAt(i / centerSamples));
      }
      tunnelCenter.divideScalar(centerSamples);

      // Build exit glyph mesh
      const exitGlyphGeom = new THREE.PlaneGeometry(EXIT_GLYPH_SIZE * 2, EXIT_GLYPH_SIZE * 2);
      const exitGlyphTex = createExitGlyphTexture();
      dynamicTextures.push(exitGlyphTex);

      const exitGlyphMat = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        emissive: new THREE.Color(EXIT_GLYPH_COLOR),
        emissiveIntensity: 1.4,
        map: exitGlyphTex,
        emissiveMap: exitGlyphTex,
        transparent: true,
        alphaTest: 0.05,
        side: THREE.DoubleSide,
        depthWrite: false,
      });
      dynamicMaterials.push(exitGlyphMat);

      const { point: exitAnchorPt, up: exitUp } = getFrameAt(EXIT_GLYPH_PLACEMENT_T);
      const exitAnchor = exitAnchorPt.clone().add(exitUp.clone().multiplyScalar(1.0)); // slightly above center

      const exitGlyphMesh = new THREE.Mesh(exitGlyphGeom, exitGlyphMat);
      exitGlyphMesh.position.copy(exitAnchor);
      exitGlyphMesh.userData = { isExitGlyph: true };
      scene.add(exitGlyphMesh);

      // Larger invisible hitbox for easier clicking
      const exitHitGeom = new THREE.PlaneGeometry(EXIT_GLYPH_SIZE * 5, EXIT_GLYPH_SIZE * 5);
      const exitHitMat = new THREE.MeshBasicMaterial({ visible: false, side: THREE.DoubleSide });
      const exitHitMesh = new THREE.Mesh(exitHitGeom, exitHitMat);
      exitHitMesh.position.copy(exitAnchor);
      exitHitMesh.userData = { isExitGlyph: true };
      panelObjects.push(exitHitMesh);
      scene.add(exitHitMesh);

      const exitGlyphLight = new THREE.PointLight(EXIT_GLYPH_COLOR, isMobile ? 6 : 12, 20, 1.5);
      exitGlyphLight.position.copy(exitAnchor);
      scene.add(exitGlyphLight);

      const reentryMarkerGeometry = new THREE.SphereGeometry(isMobile ? 1.25 : 1.6, 26, 26);
      dynamicGeometries.push(reentryMarkerGeometry);
      const reentryMarkerMaterial = new THREE.MeshStandardMaterial({
        color: 0xffcf74,
        emissive: new THREE.Color(0xffb347),
        emissiveIntensity: 0,
        roughness: 0.26,
        metalness: 0.34,
      });
      dynamicMaterials.push(reentryMarkerMaterial);

      const reentryAnchor = exitAnchorPt
        .clone()
        .add(exitUp.clone().multiplyScalar(ROOM_HEIGHT * 0.52 + 0.32));

      const reentryMarkerMesh = new THREE.Mesh(reentryMarkerGeometry, reentryMarkerMaterial);
      reentryMarkerMesh.position.copy(reentryAnchor);
      reentryMarkerMesh.userData = { isReentryDot: true };
      panelObjects.push(reentryMarkerMesh);
      scene.add(reentryMarkerMesh);

      const reentryHaloGeometry = new THREE.RingGeometry(isMobile ? 1.75 : 2.2, isMobile ? 2.35 : 2.95, 52);
      dynamicGeometries.push(reentryHaloGeometry);
      const reentryHaloMaterial = new THREE.MeshBasicMaterial({
        color: 0xffc45c,
        transparent: true,
        opacity: 0,
        side: THREE.DoubleSide,
        depthWrite: false,
      });
      dynamicMaterials.push(reentryHaloMaterial);

      const reentryHaloMesh = new THREE.Mesh(reentryHaloGeometry, reentryHaloMaterial);
      reentryHaloMesh.position.copy(reentryAnchor);
      scene.add(reentryHaloMesh);

      const reentryMarkerLight = new THREE.PointLight(0xffc45c, 0, isMobile ? 34 : 44, 2);
      reentryMarkerLight.position.copy(reentryAnchor);
      scene.add(reentryMarkerLight);

      const raycaster = new THREE.Raycaster();
      const pointer = new THREE.Vector2();

      const onPointerDown = (event: PointerEvent) => {
        runtimeVideos.forEach(requestVideoPlay);
        const rect = renderer.domElement.getBoundingClientRect();
        pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

        raycaster.setFromCamera(pointer, camera);
        const hits = raycaster.intersectObjects(panelObjects, false);
        if (hits.length > 0) {
          const hitObj = hits[0].object;

          if (hitObj.userData.isReentryDot && isOutside) {
            isOutside = false;
            setOutsideMenuVisible(false);
            return;
          }

          // --- Exit glyph click ---
          if (hitObj.userData.isExitGlyph) {
            isOutside = !isOutside;
            setOutsideMenuVisible(isOutside);
            if (isOutside) {
              // Compute exit camera position: above + away from tunnel center
              const camNow = camera.position.clone();
              const awayDir = camNow.clone().sub(tunnelCenter).normalize();
              exitCameraTarget.copy(tunnelCenter).add(awayDir.multiplyScalar(EXIT_CAMERA_DISTANCE));
              exitCameraTarget.y = tunnelCenter.y + EXIT_CAMERA_DISTANCE * 0.35;
              exitLookTarget.copy(tunnelCenter);
            }
            // Collapse any open cards
            glyphRunes.forEach((r) => { r.expanded = false; });
            return;
          }

          // --- Click anywhere in space to re-enter tunnel when outside ---
          if (isOutside) {
            isOutside = false;
            setOutsideMenuVisible(false);
            return;
          }

          const hitPanel: UiPanel | undefined = hitObj.userData.panel;
          if (hitPanel) {
            const rune = glyphRunes.find((r) => r.panel.id === hitPanel.id);
            if (rune) {
              if (rune.expanded) {
                rune.expanded = false;
              } else {
                glyphRunes.forEach((r) => { r.expanded = false; });
                rune.expanded = true;
              }
            }
          }
        } else {
          // Click on empty space: if outside, re-enter; otherwise collapse cards
          if (isOutside) {
            isOutside = false;
            setOutsideMenuVisible(false);
          } else {
            glyphRunes.forEach((r) => { r.expanded = false; });
          }
        }
      };

      renderer.domElement.addEventListener("pointerdown", onPointerDown);

      const mouseTarget = { x: 0, y: 0 };
      const mouseCurrent = { x: 0, y: 0 };

      const onPointerMove = (event: PointerEvent) => {
        if (isReducedMotion || isMobile) return;
        const rect = renderer.domElement.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;
        mouseTarget.x = (x - 0.5) * 2;
        mouseTarget.y = (y - 0.5) * 2;
      };

      const onPointerLeave = () => {
        mouseTarget.x = 0;
        mouseTarget.y = 0;
      };

      renderer.domElement.addEventListener("pointermove", onPointerMove, {
        passive: true,
      });
      renderer.domElement.addEventListener("pointerleave", onPointerLeave, {
        passive: true,
      });

      const onWheel = (event: WheelEvent) => {
        event.preventDefault();
        if (isOutside) return; // no scrolling when outside tunnel
        runtimeVideos.forEach(requestVideoPlay);
        targetProgressRef.current = wrap01(
          targetProgressRef.current + ROUTE_PROGRESS_DIRECTION * event.deltaY * 0.000075,
        );
      };
      renderer.domElement.addEventListener("wheel", onWheel, { passive: false });

      // Debug: press 'o' to toggle outside view
      const onKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'o' || event.key === 'O') {
          isOutside = !isOutside;
          setOutsideMenuVisible(isOutside);
          if (isOutside) {
            const camNow = camera.position.clone();
            const awayDir = camNow.clone().sub(tunnelCenter).normalize();
            exitCameraTarget.copy(tunnelCenter).add(awayDir.multiplyScalar(EXIT_CAMERA_DISTANCE));
            exitCameraTarget.y = tunnelCenter.y + EXIT_CAMERA_DISTANCE * 0.35;
            exitLookTarget.copy(tunnelCenter);
          }
        }
      };
      window.addEventListener("keydown", onKeyDown);

      let touchStartY = 0;
      const onTouchStart = (event: TouchEvent) => {
        runtimeVideos.forEach(requestVideoPlay);
        touchStartY = event.touches[0]?.clientY ?? 0;
      };
      const onTouchMove = (event: TouchEvent) => {
        event.preventDefault();
        if (isOutside) return; // no scrolling when outside tunnel
        const currentY = event.touches[0]?.clientY ?? touchStartY;
        const deltaY = touchStartY - currentY;
        targetProgressRef.current = wrap01(
          targetProgressRef.current + ROUTE_PROGRESS_DIRECTION * deltaY * 0.00011,
        );
        touchStartY = currentY;
      };
      renderer.domElement.addEventListener("touchstart", onTouchStart, { passive: true });
      renderer.domElement.addEventListener("touchmove", onTouchMove, { passive: false });

      const onResize = () => {
        if (!mountNode) return;
        camera.aspect = mountNode.clientWidth / mountNode.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(mountNode.clientWidth, mountNode.clientHeight);
      };
      window.addEventListener("resize", onResize);

      const lookDummy = new THREE.Object3D();
      const clock = new THREE.Clock();
      // Reusable temp vectors to avoid per-frame allocations
      const _tmpVec3A = new THREE.Vector3();
      const _tmpVec3B = new THREE.Vector3();
      const _tmpVec3C = new THREE.Vector3();
      let previousActiveId = panelData.length > 0 ? panelData[0].id : "";

      const animate = () => {
        if (isDisposed) return;

        const dt = clock.getDelta();
        const elapsed = clock.getElapsedTime();

        currentProgressRef.current = circularDamp(
          currentProgressRef.current,
          targetProgressRef.current,
          isReducedMotion ? 2.8 : 4.8,
          dt,
        );

        mouseCurrent.x += (mouseTarget.x - mouseCurrent.x) * 0.07;
        mouseCurrent.y += (mouseTarget.y - mouseCurrent.y) * 0.07;

        const progress = currentProgressRef.current;
        const lookProgress = wrap01(progress + (isMobile ? 0.008 : 0.010));

        const pos = curve.getPointAt(progress);
        const look = curve.getPointAt(lookProgress);

        const tangent = curve
          .getPointAt(wrap01(progress + 0.002))
          .sub(curve.getPointAt(wrap01(progress - 0.002)))
          .normalize();
        let right = new THREE.Vector3().crossVectors(tangent, upRef).normalize();
        if (right.lengthSq() < 0.0001) right = new THREE.Vector3(1, 0, 0);
        const up = new THREE.Vector3().crossVectors(right, tangent).normalize();

        const pointerShift = right
          .clone()
          .multiplyScalar(mouseCurrent.x * (isMobile ? 0 : 0.62))
          .add(up.clone().multiplyScalar(mouseCurrent.y * (isMobile ? 0 : 0.42)));

        const drift = isReducedMotion
          ? new THREE.Vector3()
          : up.clone().multiplyScalar(Math.sin(elapsed * 0.45) * 0.12);

        // ======= EXIT TRANSITION: interpolate outsideT =======
        const exitSpeed = 1.0 / EXIT_TRANSITION_DURATION;
        if (isOutside && outsideT < 1) {
          outsideT = Math.min(1, outsideT + exitSpeed * dt);
        } else if (!isOutside && outsideT > 0) {
          outsideT = Math.max(0, outsideT - exitSpeed * dt);
        }
        // Ease-in-out cubic
        const easeOut = outsideT < 0.5
          ? 4 * outsideT * outsideT * outsideT
          : 1 - Math.pow(-2 * outsideT + 2, 3) / 2;

        // ---- Dynamically adjust fog, lighting, background for exterior view ----
        exteriorKeyTarget.position.copy(tunnelCenter);
        exteriorFillTarget.position.copy(tunnelCenter);
        // Sun: far away, high-angle, slightly behind-left — parallel rays like real sunlight
        exteriorKey.position.set(
          tunnelCenter.x + 500,
          tunnelCenter.y + 600,
          tunnelCenter.z - 300,
        );
        // Fill: opposite side, lower angle
        exteriorFill.position.set(
          tunnelCenter.x - 400,
          tunnelCenter.y + 150,
          tunnelCenter.z + 350,
        );

        if (easeOut > 0.01) {
          // Push fog far away when outside
          if (scene.fog instanceof THREE.Fog) {
            scene.fog.near = THREE.MathUtils.lerp(38, 9999, easeOut);
            scene.fog.far = THREE.MathUtils.lerp(230, 10000, easeOut);
          }
          const insideBg = new THREE.Color(0x0f1217);
          const outsideBg = new THREE.Color(0x060a12);
          (scene.background as THREE.Color).copy(insideBg).lerp(outsideBg, easeOut);

          // Low ambient/hemi so sun shadows have contrast
          ambient.intensity = THREE.MathUtils.lerp(0.05, 0.08, easeOut);
          hemi.intensity = THREE.MathUtils.lerp(0.08, 0.12, easeOut);
          // Sun key — strong, drives all exterior definition
          exteriorKey.intensity = THREE.MathUtils.lerp(0, isMobile ? 2.2 : 3.5, easeOut);
          // Cool fill — very subtle, just lifts the shadow side so it's not pure black
          exteriorFill.intensity = THREE.MathUtils.lerp(0, isMobile ? 0.25 : 0.4, easeOut);
          renderer.toneMappingExposure = THREE.MathUtils.lerp(
            isMobile ? 0.76 : 0.72,
            isMobile ? 1.0 : 1.1,
            easeOut,
          );

          // Minimal emissive — let the sun do the shading work
          [floorMat, wallMat].forEach((mat) => {
            mat.emissive.set(0x334455);
            mat.emissiveIntensity = 0.12 * easeOut;
          });
          // Ceiling: transition from pure emissive soft-box (inside) to
          // PBR-lit white (outside) so sun shadows are visible on it
          ceilingMat.color.set(0x000000).lerp(new THREE.Color(0xffffff), easeOut);
          ceilingMat.toneMapped = easeOut > 0.5;      // let tone mapper handle it when outside
          ceilingMat.fog = easeOut > 0.5;              // re-enable fog outside (pushed to 9999 anyway)
          ceilingMat.emissive.set(0xffffff);
          ceilingMat.emissiveIntensity = THREE.MathUtils.lerp(1.0, 0.15, easeOut);
          ceilingMat.envMapIntensity = THREE.MathUtils.lerp(0.0, 0.1, easeOut);
        } else {
          ambient.intensity = 0.05;
          hemi.intensity = 0.08;
          exteriorKey.intensity = 0;
          exteriorFill.intensity = 0;
          renderer.toneMappingExposure = isMobile ? 0.76 : 0.72;
          (scene.background as THREE.Color).set(0x0f1217);

          // Floor/walls: no emissive when inside
          [floorMat, wallMat].forEach((mat) => {
            mat.emissive.set(0x000000);
            mat.emissiveIntensity = 0;
          });
          // Ceiling: pure soft-box glow when inside
          ceilingMat.color.set(0x000000);
          ceilingMat.toneMapped = false;
          ceilingMat.fog = false;
          ceilingMat.emissive.set(0xffffff);
          ceilingMat.emissiveIntensity = 1.0;
          ceilingMat.envMapIntensity = 0.0;
        }

        // Eye height: floor at -ROOM_HEIGHT*0.5 (-4.5), ~2.7 units above floor
        const eyeOffset = up.clone().multiplyScalar(-ROOM_HEIGHT * 0.200);
        const insidePos = pos.clone().add(eyeOffset).add(pointerShift).add(drift);
        const insideLook = look.clone().add(eyeOffset).add(pointerShift.multiplyScalar(0.22));

        if (easeOut > 0.99) {
          // Fully outside: direct camera control
          camera.position.copy(exitCameraTarget);
          camera.lookAt(exitLookTarget);
        } else if (easeOut > 0.001) {
          // Transitioning: blend camera
          camera.position.lerpVectors(insidePos, exitCameraTarget, easeOut);
          const blendedLook = insideLook.clone().lerp(exitLookTarget, easeOut);
          camera.lookAt(blendedLook);
        } else {
          camera.position.copy(insidePos);
          lookDummy.position.copy(camera.position);
          lookDummy.lookAt(insideLook);
          camera.quaternion.slerp(lookDummy.quaternion, 1 - Math.exp(-8.1 * dt));
        }

        const rigPulse = 0.94 + Math.sin(elapsed * 0.23) * 0.06;
        const lookAnchor = look.clone().add(eyeOffset);

        vpKey.position.copy(camera.position)
          .add(up.clone().multiplyScalar(2.9))
          .add(right.clone().multiplyScalar(2.1))
          .add(tangent.clone().multiplyScalar(-2.2));
        vpKeyTarget.position.copy(lookAnchor)
          .add(right.clone().multiplyScalar(2.5))
          .add(up.clone().multiplyScalar(-0.9));
        vpKey.intensity = (isMobile ? 14 : 21) * rigPulse;

        vpFill.position.copy(camera.position)
          .add(up.clone().multiplyScalar(2.0))
          .add(right.clone().multiplyScalar(-2.4))
          .add(tangent.clone().multiplyScalar(-1.1));
        vpFillTarget.position.copy(lookAnchor)
          .add(right.clone().multiplyScalar(-2.0))
          .add(up.clone().multiplyScalar(-1.4));
        vpFill.intensity = (isMobile ? 5 : 8) * rigPulse;

        vpRim.position.copy(camera.position)
          .add(up.clone().multiplyScalar(1.4))
          .add(tangent.clone().multiplyScalar(2.8))
          .add(right.clone().multiplyScalar(0.6));
        vpRimTarget.position.copy(lookAnchor).add(up.clone().multiplyScalar(-0.8));
        vpRim.intensity = (isMobile ? 4 : 6.2) * rigPulse;

        // --- Dynamic Panel Shading ---
        panelObjects.forEach((obj) => {
          const ud = obj.userData;
          if (!ud || !ud.shading || !ud.material) return;

          const shading = ud.shading;
          const material = ud.material;
          const video = ud.video;
          const bounceData = ud as LedBounceUserData;

          let emissiveMult = 1.0;
          if (shading.lighting?.flicker_sync && video && video.readyState >= 3) {
            // Subtle scan-line style modulation for live-screen feel.
            emissiveMult = 0.88 + Math.sin(elapsed * 22.0) * 0.1 * Math.sin(elapsed * 6.7);
          }

          let angleFade = 1.0;
          if (shading.movement_reaction?.type === "viewing_angle_fade") {
            _tmpVec3A.set(0, 0, 0);
            obj.getWorldPosition(_tmpVec3A);

            // The artwork plane looks roughly outwards, its local Z is the face normal
            _tmpVec3B.set(0, 0, 1).applyQuaternion(obj.quaternion);
            _tmpVec3C.copy(camera.position).sub(_tmpVec3A).normalize();
            const faceNormal = _tmpVec3B;
            const viewDir = _tmpVec3C;

            // Dot product: 1.0 = head on, 0.0 = edge on
            const dot = Math.max(0, faceNormal.dot(viewDir));

            // The cone angle defines how quickly the screen blacks out when viewed from the side
            const strictness = shading.movement_reaction.cone_angle_degrees === 60 ? 3.0 : 1.5;
            angleFade = Math.pow(dot, strictness);
          }

          const currentIntensity = ud.baseEmissive * emissiveMult * angleFade;

          material.emissiveIntensity = currentIntensity;

          if (bounceData.bounceLights && bounceData.bounceLights.length > 0) {
            const sampleCtx = bounceData.bounceSampleCtx;
            const sampleCanvas = bounceData.bounceSampleCanvas;

            if (
              video &&
              sampleCtx &&
              sampleCanvas &&
              (bounceData.bounceNextSampleAt ?? 0) <= elapsed
            ) {
              const sampled = sampleVideoLighting(video, sampleCanvas, sampleCtx);
              if (sampled) {
                if (!bounceData.bounceTargetColor) {
                  bounceData.bounceTargetColor = sampled.color.clone();
                }
                // Keep spill cinematic: color-driven but slightly desaturated and warm-biased.
                const gradedColor = sampled.color.clone().lerp(new THREE.Color(1.0, 0.97, 0.93), 0.18);
                bounceData.bounceTargetColor.copy(gradedColor);

                const luminanceBoost = THREE.MathUtils.clamp(0.22 + sampled.luminance * 1.9, 0.22, 2.25);
                bounceData.bounceTargetIntensity =
                  (bounceData.bounceBaseIntensity ?? 5) *
                  luminanceBoost *
                  (0.25 + currentIntensity * 1.25);
              }
              bounceData.bounceNextSampleAt = elapsed + 1 / (isMobile ? 2 : 4);
            } else if (!video) {
              bounceData.bounceTargetIntensity =
                (bounceData.bounceBaseIntensity ?? 5) * (0.22 + currentIntensity * 1.1);
            }

            const targetIntensity = bounceData.bounceTargetIntensity ?? 0;
            const prevIntensity = bounceData.bounceCurrentIntensity ?? 0;
            bounceData.bounceCurrentIntensity = THREE.MathUtils.lerp(
              prevIntensity,
              targetIntensity,
              1 - Math.exp(-6.2 * dt),
            );

            if (!bounceData.bounceCurrentColor) {
              bounceData.bounceCurrentColor = (bounceData.bounceTargetColor ?? new THREE.Color(1, 1, 1)).clone();
            }
            if (bounceData.bounceTargetColor) {
              bounceData.bounceCurrentColor.lerp(
                bounceData.bounceTargetColor,
                1 - Math.exp(-5.4 * dt),
              );
            }

            bounceData.bounceLights.forEach((light, lightIndex) => {
              const spread = Math.max(1, bounceData.bounceLights!.length - 1);
              const edgeFalloff = 1 - (lightIndex / spread) * 0.34;
              light.color.copy(bounceData.bounceCurrentColor!);
              light.intensity = (bounceData.bounceCurrentIntensity ?? 0) * edgeFalloff;
            });
          }
        });

        parallaxLayers.forEach(({ mesh, basePosition, strength }) => {
          const parent = mesh.parent;
          if (!parent) return;
          const cameraLocal = parent.worldToLocal(camera.position.clone());
          const xOffset = THREE.MathUtils.clamp(cameraLocal.x * 0.008, -0.18, 0.18) * strength;
          const yOffset = THREE.MathUtils.clamp(cameraLocal.y * 0.006, -0.14, 0.14) * strength;
          mesh.position.x = basePosition.x + xOffset;
          mesh.position.y = basePosition.y + yOffset;
        });

        // ======= GLYPH ANIMATION UPDATE =======
        glyphRunes.forEach((rune, runeIndex) => {
          const { mesh, card } = rune;

          // Billboard: glyph faces camera
          mesh.lookAt(camera.position);

          // Bob animation
          const bobPhase = runeIndex * 0.7;
          const bobY = rune.baseY + Math.sin(elapsed * GLYPH_BOB_SPEED + bobPhase) * GLYPH_BOB_AMPLITUDE;
          mesh.position.y = bobY;

          // Slow rotation
          mesh.rotateZ(GLYPH_SPIN_SPEED * dt);

          // Emissive pulse
          const glyphMat = mesh.material as THREE.MeshStandardMaterial;
          glyphMat.emissiveIntensity = 1.0 + Math.sin(elapsed * 2.0 + runeIndex) * 0.4;

          // Expand / collapse interpolation
          const targetT = rune.expanded ? 1 : 0;
          const speed = 1.0 / CARD_EXPAND_DURATION;
          if (rune.expandT < targetT) {
            rune.expandT = Math.min(1, rune.expandT + speed * dt);
          } else if (rune.expandT > targetT) {
            rune.expandT = Math.max(0, rune.expandT - speed * dt);
          }

          // Ease-in-out cubic
          const t = rune.expandT;
          const eased = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

          if (eased > 0.001) {
            card.visible = true;
            card.position.copy(mesh.position);
            card.position.y -= GLYPH_SIZE + 0.3;
            card.lookAt(camera.position);
            card.scale.setScalar(eased);
            const cardMat = (card.children[0] as THREE.Mesh).material as THREE.MeshStandardMaterial;
            cardMat.opacity = eased;
          } else {
            card.visible = false;
          }

          // Dim glyph when expanded
          glyphMat.opacity = 1.0 - eased * 0.4;
        });

        // ======= EXIT GLYPH ANIMATION =======
        const exitBobY = exitAnchor.y + Math.sin(elapsed * 0.8) * 0.35;
        exitGlyphMesh.lookAt(camera.position);
        exitGlyphMesh.position.y = exitBobY;
        exitGlyphMesh.rotateZ(0.15 * dt);
        exitGlyphMat.emissiveIntensity = 1.2 + Math.sin(elapsed * 1.5) * 0.5;
        // Keep hitbox synced
        exitHitMesh.lookAt(camera.position);
        exitHitMesh.position.y = exitBobY;

        const reentryPulse = 0.72 + Math.sin(elapsed * 2.35) * 0.28;
        const reentryVisibility = THREE.MathUtils.smoothstep(easeOut, 0.2, 0.95);
        reentryMarkerMesh.visible = reentryVisibility > 0.001;
        reentryHaloMesh.visible = reentryVisibility > 0.001;
        reentryMarkerMesh.scale.setScalar(0.88 + reentryPulse * 0.28);
        reentryMarkerMaterial.emissiveIntensity = reentryVisibility * (0.48 + reentryPulse * 0.45);
        reentryMarkerLight.intensity = reentryVisibility * (isMobile ? 4.6 : 7.4) * reentryPulse;
        reentryHaloMesh.lookAt(camera.position);
        reentryHaloMesh.scale.setScalar(0.95 + reentryPulse * 0.18);
        reentryHaloMaterial.opacity = reentryVisibility * (0.2 + reentryPulse * 0.32);

        let nearest = runtimePanelsRef.current[0]?.meta.id ?? (panelData.length > 0 ? panelData[0].id : "");
        let nearestDist = Number.POSITIVE_INFINITY;

        runtimePanelsRef.current.forEach((panel) => {
          let d = Math.abs(progress - panel.progress);
          if (d > 0.5) d = 1 - d;
          if (d < nearestDist) {
            nearestDist = d;
            nearest = panel.meta.id;
          }
        });

        if (nearest !== previousActiveId) {
          previousActiveId = nearest;
          setActivePanelId(nearest);
        }

        renderer.render(scene, camera);
        requestAnimationFrame(animate);
      };

      animate();

      cleanup = () => {
        renderer.domElement.removeEventListener("pointerdown", onPointerDown);
        renderer.domElement.removeEventListener("pointermove", onPointerMove);
        renderer.domElement.removeEventListener("pointerleave", onPointerLeave);
        renderer.domElement.removeEventListener("wheel", onWheel);
        renderer.domElement.removeEventListener("touchstart", onTouchStart);
        renderer.domElement.removeEventListener("touchmove", onTouchMove);
        window.removeEventListener("resize", onResize);
        window.removeEventListener("keydown", onKeyDown);

        if (mountNode.contains(renderer.domElement)) {
          mountNode.removeChild(renderer.domElement);
        }

        panelObjects.forEach((obj) => {
          const videoEl: HTMLVideoElement | undefined = obj.userData?.video;
          if (videoEl) {
            videoEl.pause();
            videoEl.src = "";
            videoEl.load();
          }
        });
        runtimeVideos.forEach((videoEl) => {
          videoEl.pause();
          videoEl.src = "";
          videoEl.load();
        });
        videoCleanupFns.forEach((disposeFn) => disposeFn());

        dynamicTextures.forEach((texture) => texture.dispose?.());
        dynamicGeometries.forEach((geometry) => geometry.dispose());
        glyphGeometry.dispose();
        cardGeometry.dispose();
        floorMaps.albedo.dispose();
        floorMaps.normal.dispose();
        floorMaps.roughness.dispose();
        floorMaps.ao.dispose();
        wallMaps.albedo.dispose();
        wallMaps.normal.dispose();
        wallMaps.roughness.dispose();
        wallMaps.ao.dispose();
        ceilingMaps.albedo.dispose();
        ceilingMaps.normal.dispose();
        ceilingMaps.roughness.dispose();
        ceilingMaps.ao.dispose();
        dynamicMaterials.forEach((mat) => mat.dispose());
        environmentRT.texture.dispose();
        environmentRT.dispose();
        pmremGenerator.dispose();

        floorMat.dispose();
        wallMat.dispose();
        ledBackdropMat.dispose();
        ceilingMat.dispose();
        numberTabBodyMaterial.dispose();
        numberTabGeometry.dispose();
        numberFaceGeometry.dispose();

        floorGeo.dispose();
        ceilGeo.dispose();
        leftGeo.dispose();
        rightGeo.dispose();
        leftSkirtGeo.dispose();
        rightSkirtGeo.dispose();
        leftCrownGeo.dispose();
        rightCrownGeo.dispose();
        trackRailGeo.dispose();
        skirtMat.dispose();
        trackRailMat.dispose();

        renderer.dispose();
      };
    };

    run();

    return () => {
      isDisposed = true;
      cleanup();
    };
  }, [panelData, glyphCanonicalByPanelId]);

  return (
    <div className="relative h-[100svh] w-full overflow-hidden overscroll-none touch-none bg-[#f7f7f4] text-[#141414]">
      <div ref={containerRef} className="absolute inset-0" />

      {panelsLoading || panelsLoadError ? (
        <div className="pointer-events-none absolute left-1/2 top-[5.35rem] z-30 -translate-x-1/2 rounded-full border border-black/15 bg-white/85 px-4 py-2 text-[0.64rem] uppercase tracking-[0.16em] text-[#3f3f3f] shadow-[0_6px_18px_rgba(0,0,0,0.1)] backdrop-blur">
          {panelsLoading ? "Laster mediepaneler ..." : panelsLoadError}
        </div>
      ) : null}

      {!outsideMenuVisible ? (
        <div className="pointer-events-none absolute inset-x-0 top-0 z-20 px-5 pt-5 md:px-8">
          <h1 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#525252]">
            INTELLIGENSPARTIET
          </h1>
          <p className="mt-1 text-[0.64rem] uppercase tracking-[0.15em] text-[#6a6a6a]">
            Aktiv installasjon: {activePanel.title}
          </p>
        </div>
      ) : null}

      {outsideMenuVisible ? (
        <div className="pointer-events-none absolute inset-0 z-40">
          <style>
            {`
              @keyframes outsideLinkFloatA {
                0%, 100% { transform: translate3d(0px, 0px, 0px); }
                50% { transform: translate3d(0px, -14px, 0px); }
              }
              @keyframes outsideLinkFloatB {
                0%, 100% { transform: translate3d(0px, 0px, 0px); }
                50% { transform: translate3d(0px, -18px, 0px); }
              }
              @keyframes outsideLinkFloatC {
                0%, 100% { transform: translate3d(0px, 0px, 0px); }
                50% { transform: translate3d(0px, -12px, 0px); }
              }
              @keyframes outsideCorePulse {
                0%, 100% { opacity: 0.88; text-shadow: 0 0 20px rgba(171, 194, 232, 0.34); }
                50% { opacity: 1; text-shadow: 0 0 28px rgba(171, 194, 232, 0.58); }
              }
            `}
          </style>

          <p
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[0.8rem] font-semibold uppercase tracking-[0.24em] text-[#dbe7ff] md:text-[0.95rem]"
            style={{ animation: "outsideCorePulse 6.8s ease-in-out infinite" }}
          >
            INTELLIGENSPARTET
          </p>

          <a
            href="#videos"
            className="pointer-events-auto absolute left-1/2 top-1/2 -translate-x-[10.7rem] -translate-y-[6.8rem] text-sm font-semibold uppercase tracking-[0.18em] text-[#dbe7ff] transition hover:text-white md:-translate-x-[15.6rem] md:-translate-y-[8.8rem] md:text-base"
            style={{ textShadow: "0 0 16px rgba(160,190,255,0.55)" }}
          >
            <span className="inline-block" style={{ animation: "outsideLinkFloatA 7.5s ease-in-out infinite" }}>
              Videoer
            </span>
          </a>

          <a
            href="#signatures"
            className="pointer-events-auto absolute left-1/2 top-1/2 translate-x-[6.8rem] -translate-y-[1.4rem] text-sm font-semibold uppercase tracking-[0.18em] text-[#dbe7ff] transition hover:text-white md:translate-x-[14.2rem] md:-translate-y-[2.2rem] md:text-base"
            style={{ textShadow: "0 0 16px rgba(160,190,255,0.55)" }}
          >
            <span className="inline-block" style={{ animation: "outsideLinkFloatB 8.8s ease-in-out infinite" }}>
              Signaturer
            </span>
          </a>

          <a
            href="#news"
            className="pointer-events-auto absolute left-1/2 top-1/2 -translate-x-[3.2rem] translate-y-[5.4rem] text-sm font-semibold uppercase tracking-[0.18em] text-[#dbe7ff] transition hover:text-white md:-translate-x-[4.4rem] md:translate-y-[8.2rem] md:text-base"
            style={{ textShadow: "0 0 16px rgba(160,190,255,0.55)" }}
          >
            <span className="inline-block" style={{ animation: "outsideLinkFloatC 6.9s ease-in-out infinite" }}>
              AI-nyheter
            </span>
          </a>
        </div>
      ) : null}
    </div>
  );
}
