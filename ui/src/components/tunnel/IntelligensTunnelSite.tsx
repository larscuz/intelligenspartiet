import {
  type FormEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type TouchEvent as ReactTouchEvent,
  type WheelEvent as ReactWheelEvent,
} from "react";
import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import {
  canonicalizeCanonicalSentence,
  drawCanonicalGlyphToContext,
  serializeCanonicalSentence,
  type RlStatement,
} from "@/lib/radarLanguageGlyph";

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
  title_en?: string;
  title_nb?: string;
  body_en?: string;
  body_nb?: string;
  image?: string;
  video?: string;
  cta?: string;
};

type GlyphLanguageItem = {
  id: string;
  label?: string;
  label_nb?: string;
  panel_id: string;
  canonical: string;
  enabled?: boolean;
  note?: string;
  note_nb?: string;
};

type GlyphCopy = {
  label: string;
  note: string;
  labelNb: string;
  noteNb: string;
};

type OutsideSection = "menu" | "videos" | "signatures" | "news" | "glyphwall" | "signal";

type AiNewsItem = {
  title: string;
  source: string;
  url: string;
  snippet: string;
  published_at: string;
  published: boolean;
};

type CursorTrailPoint = {
  x: number;
  y: number;
  t: number;
};

type CursorTrailRenderState = {
  tailPath: string;
  taperPaths: string[];
  headPath: string;
  headX: number;
  headY: number;
  visible: boolean;
};

type RuntimePanel = {
  meta: UiPanel;
  progress: number;
};

type MobileGlyphPopup = {
  panelId: string;
  title: string;
  body: string;
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

type UiLanguage = "nb" | "en";

type UiCopy = {
  siteName: string;
  loadingPanels: string;
  panelsFallback: string;
  activeInstallation: string;
  outsideVideos: string;
  outsideSignatures: string;
  outsideAiNews: string;
  outsideGlyphWall: string;
  outsideSignal: string;
  outsideBack: string;
  outsideVideosTitle: string;
  outsideSignaturesTitle: string;
  outsideGlyphWallTitle: string;
  outsideGlyphWallBody: string;
  outsideNewsTitle: string;
  outsideNewsBody: string;
  outsideNewsLoading: string;
  outsideNewsEmpty: string;
  outsideNewsError: string;
  outsideSignalTitle: string;
};

const LANGUAGE_STORAGE_KEY = "intelligenspartiet:language";

const UI_COPY: Record<UiLanguage, UiCopy> = {
  nb: {
    siteName: "INTELLIGENSPARTIET",
    loadingPanels: "Laster mediepaneler ...",
    panelsFallback: "Kunne ikke laste media-paneler. Viser lokal fallback.",
    activeInstallation: "Aktiv installasjon",
    outsideVideos: "Film",
    outsideSignatures: "Signaturer",
    outsideAiNews: "KI-nyheter",
    outsideGlyphWall: "Glyff",
    outsideSignal: "Signal",
    outsideBack: "Tilbake",
    outsideVideosTitle: "Film",
    outsideSignaturesTitle: "Signaturer",
    outsideGlyphWallTitle: "Glyff",
    outsideGlyphWallBody: "",
    outsideNewsTitle: "KI-nyheter",
    outsideNewsBody: "Direkte feed fra eksisterende nyhetsgrunnlag.",
    outsideNewsLoading: "Laster KI-nyheter ...",
    outsideNewsEmpty: "Ingen publiserte nyheter tilgjengelig ennå.",
    outsideNewsError: "Kunne ikke laste KI-nyheter.",
    outsideSignalTitle: "Signalrom",
  },
  en: {
    siteName: "INTELLIGENSPARTIET",
    loadingPanels: "Loading media panels ...",
    panelsFallback: "Could not load media panels. Showing local fallback.",
    activeInstallation: "Active installation",
    outsideVideos: "Film",
    outsideSignatures: "Signatures",
    outsideAiNews: "AI news",
    outsideGlyphWall: "Glyff",
    outsideSignal: "Signal",
    outsideBack: "Back",
    outsideVideosTitle: "Film",
    outsideSignaturesTitle: "Signatures",
    outsideGlyphWallTitle: "Glyff",
    outsideGlyphWallBody: "",
    outsideNewsTitle: "AI news",
    outsideNewsBody: "Live feed from the existing news dataset.",
    outsideNewsLoading: "Loading AI news ...",
    outsideNewsEmpty: "No published news items available yet.",
    outsideNewsError: "Could not load AI news.",
    outsideSignalTitle: "Signal Room",
  },
};

type GlyphWallStoryItem = {
  id: string;
  canonical: string;
  phase: string;
};

const GLYPH_WALL_RENDER_COUNT = 100;

type ReplacementAnxietyAct = {
  phase: string;
  subjects: RlStatement["subject"][];
  domains: RlStatement["domain"][];
  verbs: RlStatement["verb"][];
  magnitudes: RlStatement["magnitude"][];
  times: RlStatement["time"][];
  certainties: RlStatement["certainty"][];
};

const RL_SUBJECT_VALUES: RlStatement["subject"][] = [
  "TECHNOLOGY",
  "IDEA",
  "INSTITUTION",
  "EVENT",
  "BREAKTHROUGH",
  "SYSTEM",
  "INDIVIDUAL",
];

const RL_DOMAIN_VALUES: RlStatement["domain"][] = [
  "SOCIETY",
  "POLITICS",
  "ECONOMY",
  "TECHNOLOGY",
  "MEDIA",
  "CULTURE",
  "SCIENCE",
  "EDUCATION",
  "ENVIRONMENT",
  "INFRASTRUCTURE",
  "ORGANIZATIONS",
  "INDIVIDUALS",
];

const RL_MAGNITUDE_VALUES: RlStatement["magnitude"][] = ["LOW", "MEDIUM", "HIGH", "EXTREME"];
const RL_TIME_VALUES: RlStatement["time"][] = ["NOW", "LT1Y", "Y1_3", "Y3_10", "GT10Y"];
const RL_CERTAINTY_VALUES: RlStatement["certainty"][] = [
  "HYPOTHESIS",
  "INDICATION",
  "PROBABLE",
  "CONFIRMED",
];

const REPLACEMENT_ANXIETY_ACTS: ReplacementAnxietyAct[] = [
  {
    phase: "signal-whisper",
    subjects: ["IDEA", "TECHNOLOGY", "INSTITUTION"],
    domains: ["MEDIA", "CULTURE", "TECHNOLOGY", "EDUCATION", "INDIVIDUALS"],
    verbs: ["EXISTS", "INFLUENCES", "GROWS"],
    magnitudes: ["LOW", "MEDIUM"],
    times: ["NOW", "LT1Y"],
    certainties: ["INDICATION", "PROBABLE"],
  },
  {
    phase: "attention-displacement",
    subjects: ["INDIVIDUAL", "IDEA", "SYSTEM"],
    domains: ["INDIVIDUALS", "MEDIA", "ORGANIZATIONS", "TECHNOLOGY"],
    verbs: ["INFLUENCES", "GROWS", "DECLINES"],
    magnitudes: ["MEDIUM", "HIGH"],
    times: ["NOW", "LT1Y"],
    certainties: ["PROBABLE", "CONFIRMED"],
  },
  {
    phase: "output-surge",
    subjects: ["SYSTEM", "TECHNOLOGY", "INSTITUTION"],
    domains: ["TECHNOLOGY", "ORGANIZATIONS", "ECONOMY", "INFRASTRUCTURE"],
    verbs: ["GROWS", "TRANSFORMS", "INFLUENCES"],
    magnitudes: ["HIGH", "EXTREME"],
    times: ["LT1Y", "Y1_3"],
    certainties: ["PROBABLE", "CONFIRMED"],
  },
  {
    phase: "cognitive-strain",
    subjects: ["INDIVIDUAL", "SYSTEM", "TECHNOLOGY"],
    domains: ["INDIVIDUALS", "ORGANIZATIONS", "EDUCATION", "SCIENCE"],
    verbs: ["DECLINES", "INFLUENCES", "TRANSFORMS"],
    magnitudes: ["HIGH", "EXTREME"],
    times: ["NOW", "LT1Y", "Y1_3"],
    certainties: ["PROBABLE", "CONFIRMED"],
  },
  {
    phase: "blame-cycle",
    subjects: ["INSTITUTION", "EVENT", "SYSTEM"],
    domains: ["POLITICS", "SOCIETY", "MEDIA", "ECONOMY"],
    verbs: ["INFLUENCES", "TRANSFORMS", "EXISTS"],
    magnitudes: ["MEDIUM", "HIGH"],
    times: ["NOW", "LT1Y"],
    certainties: ["INDICATION", "PROBABLE"],
  },
  {
    phase: "resistance-ritual",
    subjects: ["INSTITUTION", "INDIVIDUAL", "EVENT"],
    domains: ["CULTURE", "POLITICS", "ORGANIZATIONS", "SOCIETY"],
    verbs: ["DECLINES", "INFLUENCES", "TRANSFORMS"],
    magnitudes: ["MEDIUM", "HIGH"],
    times: ["LT1Y", "Y1_3"],
    certainties: ["PROBABLE", "CONFIRMED"],
  },
  {
    phase: "reskilling-wave",
    subjects: ["IDEA", "INSTITUTION", "SYSTEM"],
    domains: ["EDUCATION", "SCIENCE", "ORGANIZATIONS", "TECHNOLOGY"],
    verbs: ["GROWS", "TRANSFORMS", "INFLUENCES"],
    magnitudes: ["MEDIUM", "HIGH"],
    times: ["Y1_3", "Y3_10"],
    certainties: ["PROBABLE", "CONFIRMED"],
  },
  {
    phase: "institutional-memory",
    subjects: ["INSTITUTION", "SYSTEM", "BREAKTHROUGH"],
    domains: ["INFRASTRUCTURE", "ORGANIZATIONS", "ECONOMY", "SCIENCE"],
    verbs: ["EXISTS", "TRANSFORMS", "GROWS"],
    magnitudes: ["MEDIUM", "HIGH"],
    times: ["Y1_3", "Y3_10"],
    certainties: ["INDICATION", "PROBABLE", "CONFIRMED"],
  },
  {
    phase: "myth-afterimage",
    subjects: ["EVENT", "IDEA", "INDIVIDUAL"],
    domains: ["CULTURE", "MEDIA", "SOCIETY", "EDUCATION"],
    verbs: ["EXISTS", "INFLUENCES", "DECLINES"],
    magnitudes: ["LOW", "MEDIUM", "HIGH"],
    times: ["Y3_10", "GT10Y"],
    certainties: ["INDICATION", "PROBABLE"],
  },
  {
    phase: "recurrence",
    subjects: ["SYSTEM", "INSTITUTION", "INDIVIDUAL"],
    domains: ["SOCIETY", "POLITICS", "ORGANIZATIONS", "INDIVIDUALS"],
    verbs: ["TRANSFORMS", "INFLUENCES", "EXISTS"],
    magnitudes: ["MEDIUM", "HIGH"],
    times: ["GT10Y", "NOW"],
    certainties: ["PROBABLE", "CONFIRMED"],
  },
];

const rotatePick = <T,>(values: readonly T[], index: number, salt = 0): T =>
  values[(index + salt) % values.length];

const shiftToken = <T,>(values: readonly T[], value: T, offset: number): T => {
  const startIndex = values.indexOf(value);
  const safeStartIndex = startIndex >= 0 ? startIndex : 0;
  return values[(safeStartIndex + offset + values.length * 32) % values.length];
};

const buildReplacementAnxietyStoryGlyphs = (count: number): GlyphWallStoryItem[] => {
  const glyphs: GlyphWallStoryItem[] = [];
  const usedCanonicals = new Set<string>();
  const glyphsPerAct = Math.ceil(count / REPLACEMENT_ANXIETY_ACTS.length);

  for (let actIndex = 0; actIndex < REPLACEMENT_ANXIETY_ACTS.length; actIndex += 1) {
    const act = REPLACEMENT_ANXIETY_ACTS[actIndex];
    for (let step = 0; step < glyphsPerAct && glyphs.length < count; step += 1) {
      let statement: RlStatement = {
        subject: rotatePick(act.subjects, step, actIndex),
        domain: rotatePick(act.domains, step, actIndex * 2),
        verb: rotatePick(act.verbs, step, actIndex + (step % 3)),
        magnitude: rotatePick(act.magnitudes, step, Math.floor(step / 2)),
        time: rotatePick(act.times, step, Math.floor(step / 3)),
        certainty: rotatePick(act.certainties, step, step % 2),
      };

      let canonical = canonicalizeCanonicalSentence(serializeCanonicalSentence(statement));

      if (usedCanonicals.has(canonical)) {
        let uniqueFound = false;
        for (let tweak = 1; tweak <= RL_DOMAIN_VALUES.length * RL_TIME_VALUES.length; tweak += 1) {
          const candidateStatement: RlStatement = {
            ...statement,
            subject: shiftToken(RL_SUBJECT_VALUES, statement.subject, Math.floor(tweak / 7)),
            domain: shiftToken(RL_DOMAIN_VALUES, statement.domain, tweak),
            magnitude: shiftToken(RL_MAGNITUDE_VALUES, statement.magnitude, Math.floor(tweak / 4)),
            time: shiftToken(RL_TIME_VALUES, statement.time, Math.floor(tweak / 2)),
            certainty: shiftToken(RL_CERTAINTY_VALUES, statement.certainty, Math.floor(tweak / 3)),
          };
          const candidateCanonical = canonicalizeCanonicalSentence(
            serializeCanonicalSentence(candidateStatement),
          );
          if (!usedCanonicals.has(candidateCanonical)) {
            statement = candidateStatement;
            canonical = candidateCanonical;
            uniqueFound = true;
            break;
          }
        }

        if (!uniqueFound) {
          for (const subject of RL_SUBJECT_VALUES) {
            for (const domain of RL_DOMAIN_VALUES) {
              for (const magnitude of RL_MAGNITUDE_VALUES) {
                for (const time of RL_TIME_VALUES) {
                  for (const certainty of RL_CERTAINTY_VALUES) {
                    const candidateCanonical = canonicalizeCanonicalSentence(
                      serializeCanonicalSentence({
                        subject,
                        domain,
                        verb: statement.verb,
                        magnitude,
                        time,
                        certainty,
                      }),
                    );
                    if (!usedCanonicals.has(candidateCanonical)) {
                      statement = {
                        subject,
                        domain,
                        verb: statement.verb,
                        magnitude,
                        time,
                        certainty,
                      };
                      canonical = candidateCanonical;
                      uniqueFound = true;
                      break;
                    }
                  }
                  if (uniqueFound) break;
                }
                if (uniqueFound) break;
              }
              if (uniqueFound) break;
            }
            if (uniqueFound) break;
          }
        }
      }

      if (usedCanonicals.has(canonical)) {
        const emergencySearchSpace =
          RL_SUBJECT_VALUES.length *
          RL_DOMAIN_VALUES.length *
          RL_MAGNITUDE_VALUES.length *
          RL_TIME_VALUES.length *
          RL_CERTAINTY_VALUES.length;

        for (let offset = 0; offset < emergencySearchSpace; offset += 1) {
          const emergencyIndex = glyphs.length + offset;
          const mixedRadixSubject = emergencyIndex % RL_SUBJECT_VALUES.length;
          const mixedRadixDomain =
            Math.floor(emergencyIndex / RL_SUBJECT_VALUES.length) % RL_DOMAIN_VALUES.length;
          const mixedRadixMagnitude =
            Math.floor(emergencyIndex / (RL_SUBJECT_VALUES.length * RL_DOMAIN_VALUES.length)) %
            RL_MAGNITUDE_VALUES.length;
          const mixedRadixTime =
            Math.floor(
              emergencyIndex /
                (RL_SUBJECT_VALUES.length * RL_DOMAIN_VALUES.length * RL_MAGNITUDE_VALUES.length),
            ) % RL_TIME_VALUES.length;
          const mixedRadixCertainty =
            Math.floor(
              emergencyIndex /
                (RL_SUBJECT_VALUES.length *
                  RL_DOMAIN_VALUES.length *
                  RL_MAGNITUDE_VALUES.length *
                  RL_TIME_VALUES.length),
            ) % RL_CERTAINTY_VALUES.length;

          const emergencyStatement: RlStatement = {
            subject: RL_SUBJECT_VALUES[mixedRadixSubject],
            domain: RL_DOMAIN_VALUES[mixedRadixDomain],
            verb: statement.verb,
            magnitude: RL_MAGNITUDE_VALUES[mixedRadixMagnitude],
            time: RL_TIME_VALUES[mixedRadixTime],
            certainty: RL_CERTAINTY_VALUES[mixedRadixCertainty],
          };
          const emergencyCanonical = canonicalizeCanonicalSentence(
            serializeCanonicalSentence(emergencyStatement),
          );
          if (!usedCanonicals.has(emergencyCanonical)) {
            canonical = emergencyCanonical;
            break;
          }
        }
      }

      usedCanonicals.add(canonical);
      glyphs.push({
        id: `ra-${String(glyphs.length + 1).padStart(3, "0")}`,
        canonical,
        phase: act.phase,
      });
    }
  }

  return glyphs;
};

const GLYPH_WALL_STORY = buildReplacementAnxietyStoryGlyphs(GLYPH_WALL_RENDER_COUNT);

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
  titleNb: string,
  descriptionNb: string,
  side: "left" | "right",
  placementT: number,
  titleEn: string,
  descriptionEn: string,
): UiPanel => ({
  id,
  type: "text",
  kind: "text",
  content: {
    title: titleNb,
    description: descriptionNb,
  },
  title: titleNb,
  body: descriptionNb,
  title_nb: titleNb,
  body_nb: descriptionNb,
  title_en: titleEn,
  body_en: descriptionEn,
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
    "Politisk KI-kapasitet for et samfunn i rask omforming.",
    "right",
    0.1,
    "INTELLIGENSPARTIET",
    "Political AI capacity for a society in rapid transformation.",
  ),
  makeFallbackPanel(
    "fallback-02",
    "FORSTÅ SKIFTET",
    "Kartlegg effekt, risiko og styringsbehov før beslutninger låses.",
    "left",
    0.42,
    "UNDERSTAND THE SHIFT",
    "Map impact, risk, and governance needs before decisions are locked in.",
  ),
  makeFallbackPanel(
    "fallback-03",
    "BYGG INSTITUSJONER",
    "Tilsyn, standarder og ansvar som faktisk kan håndheves.",
    "right",
    0.74,
    "BUILD INSTITUTIONS",
    "Oversight, standards, and accountability that can actually be enforced.",
  ),
];

const normalizeGlyphLanguageItem = (raw: any, index: number): GlyphLanguageItem => ({
  id: String(raw?.id ?? `glyph-${index + 1}`).trim() || `glyph-${index + 1}`,
  label: String(raw?.label ?? "").trim(),
  label_nb: String(raw?.label_nb ?? raw?.label_no ?? "").trim(),
  panel_id: String(raw?.panel_id ?? "").trim(),
  canonical: String(raw?.canonical ?? "").trim(),
  enabled: raw?.enabled !== false,
  note: String(raw?.note ?? "").trim(),
  note_nb: String(raw?.note_nb ?? raw?.note_no ?? "").trim(),
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
const ROUTE_PROGRESS_DIRECTION = -1;
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
const OUTSIDE_DEFAULT_CAMERA_OFFSET = new THREE.Vector3(
  EXIT_CAMERA_DISTANCE * -0.04,
  EXIT_CAMERA_DISTANCE * -0.42,
  EXIT_CAMERA_DISTANCE * 1.02,
);
const OUTSIDE_DEFAULT_ORBIT_YAW = -0.14;
const OUTSIDE_DEFAULT_ORBIT_PITCH = 0.2;
const OUTSIDE_DEFAULT_ORBIT_ROLL = 0;
const OUTSIDE_DEFAULT_ZOOM_OFFSET = -22;
const OUTSIDE_ENTER_CLICK_DRIFT_PX = 7;
const DEFAULT_LANDING_GLYPH_IDS = ["v1-cognitive-overproduction"];
const DEFAULT_LANDING_PANEL_IDS = ["halfwall-06"];

const AI_NEWS_PATHS = [
  "/assets/data/ai-jobs-news.local.json",
  "/assets/data/ai-jobs-news.json",
];

const GULLHAIEN_ROOM_BADGE_IMAGE_URL = "/gullhaien/nominert.png";
const GULLHAIEN_ROOM_BADGE_ASPECT = 1000 / 593;
const GULLHAIEN_ROOM_BADGE_WIDTH = 8.4;
const MAIN_FILM_VIDEO_URL = "https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/Intelligenspartiet2027.mp4";
const MAIN_FILM_POSTER_URL =
  "https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/Skjermbilde%202026-03-01%20kl.%2015.09.35.png";

const HEX_VIDEO_ROOM_SOURCES = [
  {
    video: MAIN_FILM_VIDEO_URL,
    poster: MAIN_FILM_POSTER_URL,
  },
  {
    video: "https://larscuzner.com/static/_upload/2ChristTheater.mp4",
    poster:
      "https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/posters/1770979065067-ff4bab61-WergelandTheater.jpg",
  },
  {
    video: "https://larscuzner.com/static/_upload/3ChristTheater.mp4",
    poster:
      "https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/posters/1770979092555-8d0fe8b9-DameTheater.jpg",
  },
  {
    video: "https://larscuzner.com/static/_upload/4ChristTheater.mp4",
    poster:
      "https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/posters/1770979109765-9708239d-TomatTheater.jpg",
  },
  {
    video: "https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/videos/1771415406784-886154de-CamillaStone.mp4",
    poster:
      "https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/posters/1771415863642-3227a9d0-camillaStill.jpg",
  },
  {
    video:
      "https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/videos/1771442235013-9c01df3d-FremtidensIntelligenssedler.mp4",
    poster:
      "https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/posters/1771442255228-9181695a-freepik__keep-everything-in-img1-the-same-only-change-the-p__35543.png",
  },
];

const DEFAULT_VIDEO_ROOM_URL = MAIN_FILM_VIDEO_URL;
const DEFAULT_VIDEO_ROOM_INDEX = Math.max(
  0,
  HEX_VIDEO_ROOM_SOURCES.findIndex((item) => item.video === DEFAULT_VIDEO_ROOM_URL),
);

const HEX_VIDEO_WALL_HEIGHT_REM = 17.6;
const HEX_VIDEO_WALL_WIDTH_REM = HEX_VIDEO_WALL_HEIGHT_REM * (16 / 9);
const HEX_VIDEO_ROOM_APOTHEM_REM = (HEX_VIDEO_WALL_WIDTH_REM * Math.sqrt(3)) / 2;
const HEX_VIDEO_WALL_OVERLAP_REM = 0.56;
const HEX_VIDEO_VIEWER_PUSH_REM = 31.2;
const HEX_VIDEO_FLOOR_CEILING_SIZE_REM = HEX_VIDEO_ROOM_APOTHEM_REM * 2.62;
const HEX_VIDEO_FLOOR_CEILING_OFFSET_REM = HEX_VIDEO_WALL_HEIGHT_REM * 0.56;
const HEX_VIDEO_OUTER_WALL_WIDTH_REM = HEX_VIDEO_WALL_WIDTH_REM + 5.4;
const HEX_VIDEO_OUTER_WALL_HEIGHT_REM = HEX_VIDEO_WALL_HEIGHT_REM + 4.4;
const HEX_VIDEO_OUTER_ROOM_APOTHEM_REM = HEX_VIDEO_ROOM_APOTHEM_REM + 0.22;
const HEX_VIDEO_OUTER_WALL_YAW_OFFSET_DEG = 0;
const HEX_VIDEO_OUTER_CORNER_RADIUS_REM = HEX_VIDEO_ROOM_APOTHEM_REM + 0.72;
const HEX_VIDEO_OUTER_CORNER_POST_WIDTH_REM = 0.72;
const FILM_ROOM_TRANSITION_DURATION = 1.35;
const FILM_ROOM_WALL_HEIGHT = 18;
const FILM_ROOM_WALL_WIDTH = FILM_ROOM_WALL_HEIGHT * (16 / 9);
const FILM_ROOM_APOTHEM = (FILM_ROOM_WALL_WIDTH * Math.sqrt(3)) / 2;
const FILM_ROOM_FLOOR_RADIUS = FILM_ROOM_APOTHEM * 1.06;
const FILM_ROOM_CAMERA_DISTANCE = 17;
const FILM_ROOM_CAMERA_HEIGHT = 2.8;
const FILM_ROOM_WHEEL_ORBIT_SENSITIVITY = 0.00185;
const FILM_ROOM_TOUCH_ORBIT_SENSITIVITY = 0.0062;
const FILM_ROOM_TOUCH_PITCH_SENSITIVITY = 0.0036;
const VIDEO_ROOM_STEP_ANGLE = 60;
const VIDEO_ROOM_WHEEL_THRESHOLD = 40;
const VIDEO_ROOM_SCROLL_COOLDOWN_MS = 220;

const CURSOR_TRAIL_LIFETIME_MS = 360;
const CURSOR_HEAD_WINDOW_MS = 105;
const CURSOR_MIN_POINT_DISTANCE_PX = 0.75;
const CURSOR_TRAIL_MAX_POINTS = 96;
const CURSOR_TAPER_WINDOWS_MS = [330, 250, 180, 120];
const CURSOR_TAPER_WIDTHS = [2.0, 3.2, 4.8, 6.2];
const CURSOR_TAPER_OPACITIES = [0.12, 0.17, 0.22, 0.3];

const EMPTY_CURSOR_TRAIL_STATE: CursorTrailRenderState = {
  tailPath: "",
  taperPaths: CURSOR_TAPER_WINDOWS_MS.map(() => ""),
  headPath: "",
  headX: 0,
  headY: 0,
  visible: false,
};

const buildSmoothPath = (points: CursorTrailPoint[]) => {
  if (points.length < 2) return "";
  if (points.length === 2) {
    return `M ${points[0].x} ${points[0].y} L ${points[1].x} ${points[1].y}`;
  }

  let path = `M ${points[0].x} ${points[0].y}`;
  for (let index = 1; index < points.length - 1; index += 1) {
    const current = points[index];
    const next = points[index + 1];
    const midX = (current.x + next.x) / 2;
    const midY = (current.y + next.y) / 2;
    path += ` Q ${current.x} ${current.y} ${midX} ${midY}`;
  }

  const beforeLast = points[points.length - 2];
  const last = points[points.length - 1];
  return `${path} Q ${beforeLast.x} ${beforeLast.y} ${last.x} ${last.y}`;
};

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
  const lines = wrapTextLines(ctx, text, maxWidth);
  lines.forEach((line, index) => {
    ctx.fillText(line, x, y + index * lineHeight);
  });
};

const wrapTextLines = (ctx: CanvasRenderingContext2D, text: string, maxWidth: number) => {
  const words = text.split(" ");
  const lines: string[] = [];
  let line = "";

  for (let i = 0; i < words.length; i += 1) {
    const word = words[i];
    if (!word) continue;
    const testLine = `${line}${word} `;
    if (ctx.measureText(testLine).width > maxWidth && line.length > 0) {
      lines.push(line.trim());
      line = `${word} `;
    } else {
      line = testLine;
    }
  }

  if (line.trim()) {
    lines.push(line.trim());
  }

  return lines;
};

type FormattedCardSegment = {
  text: string;
  bold: boolean;
  paragraphBreak: boolean;
};

const DIRECTIVE_BOLD = /\(\s*bold\s*\)/gi;
const DIRECTIVE_NEW_LINE = /\(\s*new\s*line\s*\)/gi;
const DIRECTIVE_NEW_PARAGRAPH = /\(\s*new\s*paragraph\s*\)/gi;

const parseFormattedCardText = (text: string): FormattedCardSegment[] => {
  const normalized = text
    .replace(/\r\n?/g, "\n")
    .replace(DIRECTIVE_NEW_PARAGRAPH, "\n\n")
    .replace(DIRECTIVE_NEW_LINE, "\n");
  const rawLines = normalized.split("\n");

  let paragraphBreak = false;
  const segments: FormattedCardSegment[] = [];

  rawLines.forEach((rawLine) => {
    const hasContent = rawLine.trim().length > 0;
    if (!hasContent) {
      paragraphBreak = true;
      return;
    }

    const bold = /\(\s*bold\s*\)/i.test(rawLine);
    const textLine = rawLine.replace(DIRECTIVE_BOLD, "").replace(/\s{2,}/g, " ").trim();

    if (!textLine) {
      paragraphBreak = true;
      return;
    }

    segments.push({
      text: textLine,
      bold,
      paragraphBreak,
    });

    paragraphBreak = false;
  });

  return segments;
};

const drawFormattedCardText = (
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  lineHeight: number,
  regularFont: string,
  boldFont: string,
  paragraphGapLines = 0.6,
) => {
  const segments = parseFormattedCardText(text);
  let cursorY = y;

  segments.forEach((segment, segmentIndex) => {
    if (segmentIndex > 0 && segment.paragraphBreak) {
      cursorY += lineHeight * paragraphGapLines;
    }

    ctx.font = segment.bold ? boldFont : regularFont;
    const lines = wrapTextLines(ctx, segment.text, maxWidth);
    lines.forEach((line) => {
      ctx.fillText(line, x, cursorY);
      cursorY += lineHeight;
    });
  });

  ctx.font = regularFont;
};

const FORMAT_DIRECTIVE_TOKEN_PATTERN = /\(\s*(?:bold|new\s*line|new\s*paragraph)\s*\)/gi;

const normalizeTranslationKey = (value: string) =>
  value
    .toLowerCase()
    .replace(/[—–]/g, "-")
    .replace(/[.!?]+$/g, "")
    .replace(/\s+/g, " ")
    .trim();

const escapeRegExp = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const EN_TO_NB_EXACT_ENTRIES: Array<[string, string]> = [
  ["ai fatigue", "KI-tretthet"],
  ["brain fry", "Hjernekok"],
  ["threaded work", "Trådet arbeid"],
  ["cognitive orchestration", "Kognitiv orkestrering"],
  ["output inflation", "Output-inflasjon"],
  ["prompt looping", "Prompt-løkker"],
  ["decision density", "Beslutningstetthet"],
  ["cognitive overproduction", "Kognitiv overproduksjon"],
  ["continuous partial attention", "Kontinuerlig delvis oppmerksomhet"],
  ["ai work rhythm", "KI-arbeidsrytme"],
  ["cognitive checkpoints increase in short horizon.", "Kognitive kontrollpunkter øker på kort sikt."],
  ["overload reduces evaluative sharpness.", "Overbelastning reduserer vurderingsskarphet."],
  ["linear workflows shift to parallel supervision.", "Lineære arbeidsflyter går over til parallell oppfølging."],
  ["new skill: coordinating ai outputs.", "Ny ferdighet: koordinering av KI-utdata."],
  ["output volume spikes immediately.", "Volumet av utdata øker umiddelbart."],
  ["prompt-output loops shape behavior now.", "Prompt-utdata-løkker former adferd nå."],
  ["micro-decisions per hour increase.", "Antall mikrobeslutninger per time øker."],
  ["input load scales faster than cognition.", "Informasjonsmengden skalerer raskere enn kognisjonen."],
  ["prepared concept, not assigned to a tunnel slot yet.", "Klargjort konsept, ikke tildelt tunnelplass ennå."],
  [
    "mental exhaustion caused by continuous interaction with ai systems: prompting, reviewing, correcting, switching context, and supervising outputs.",
    "Mental utmattelse forårsaket av kontinuerlig samhandling med KI-systemer: prompting, vurdering, korrigering, kontekstbytte og oppfølging av utdata.",
  ],
  ["ai does not remove work - it multiplies cognitive checkpoints.", "KI fjerner ikke arbeid - den multipliserer kognitive kontrollpunkter."],
  ["ai does not remove work — it multiplies cognitive checkpoints.", "KI fjerner ikke arbeid - den multipliserer kognitive kontrollpunkter."],
  ["the broad umbrella term.", "Det brede paraplybegrepet."],
  ["ai accelerates production but slows mental recovery.", "KI akselererer produksjon, men senker mental restitusjon."],
];

const EN_TO_NB_EXACT = new Map<string, string>(
  EN_TO_NB_EXACT_ENTRIES.map(([source, target]) => [normalizeTranslationKey(source), target]),
);

const EN_TO_NB_PHRASE_REPLACEMENTS: Array<[string, string]> = [
  ["meaning", "Betydning"],
  ["why it happens", "Hvorfor det skjer"],
  ["key insight", "Nøkkelinnsikt"],
  ["symptoms", "Symptomer"],
  ["mental exhaustion", "mental utmattelse"],
  ["continuous interaction", "kontinuerlig samhandling"],
  ["cognitive checkpoints", "kognitive kontrollpunkter"],
  ["decision paralysis", "beslutningsparalyse"],
  ["difficulty judging quality", "vansker med å vurdere kvalitet"],
  ["rereading the same content", "gjenlesing av det samme innholdet"],
  ["loss of critical thinking sharpness", "tap av kritisk vurderingsskarphet"],
  ["parallel cognitive threads", "parallelle kognitive tråder"],
  ["parallel supervision", "parallell oppfølging"],
  ["new skill", "ny ferdighet"],
  ["coordinating outputs", "koordinering av utdata"],
  ["output volume", "volumet av utdata"],
  ["micro-decisions", "mikrobeslutninger"],
  ["input load", "informasjonsmengde"],
  ["short horizon", "kort sikt"],
  ["workers operate in parallel cognitive threads", "arbeidere opererer i parallelle kognitive tråder"],
  ["instead of finishing one thing, people supervise many processes simultaneously", "i stedet for å fullføre én ting, overvåker folk mange prosesser samtidig"],
  ["ai accelerates production but slows mental recovery", "KI akselererer produksjon, men senker mental restitusjon"],
  ["ai does not remove work", "KI fjerner ikke arbeid"],
  ["it multiplies cognitive checkpoints", "den multipliserer kognitive kontrollpunkter"],
  ["prepared concept", "klargjort konsept"],
  ["not assigned to a tunnel slot yet", "ikke tildelt tunnelplass ennå"],
  ["new paragraph", "new paragraph"],
];

const EN_TO_NB_PHRASE_REGEX: Array<[RegExp, string]> = EN_TO_NB_PHRASE_REPLACEMENTS.map(([source, target]) => [
  new RegExp(escapeRegExp(source), "gi"),
  target,
]);

const EN_TO_NB_WORD_REPLACEMENTS: Record<string, string> = {
  meaning: "betydning",
  the: "den",
  a: "en",
  an: "en",
  of: "av",
  in: "i",
  on: "på",
  at: "ved",
  for: "for",
  from: "fra",
  across: "på tvers av",
  into: "inn i",
  is: "er",
  are: "er",
  be: "være",
  can: "kan",
  will: "vil",
  this: "denne",
  that: "det",
  these: "disse",
  those: "de",
  and: "og",
  or: "eller",
  if: "hvis",
  then: "da",
  also: "også",
  people: "folk",
  person: "person",
  workers: "arbeidere",
  operate: "opererer",
  many: "mange",
  processes: "prosesser",
  process: "prosess",
  simultaneously: "samtidig",
  instead: "i stedet",
  finishing: "fullfører",
  finish: "fullføre",
  one: "én",
  thing: "ting",
  same: "samme",
  content: "innhold",
  critical: "kritisk",
  thinking: "tenkning",
  quality: "kvalitet",
  judging: "vurdere",
  difficulty: "vansker",
  loss: "tap",
  term: "begrep",
  broad: "bredt",
  umbrella: "paraply",
  threads: "tråder",
  why: "hvorfor",
  happens: "skjer",
  key: "nøkkel",
  insight: "innsikt",
  symptoms: "symptomer",
  mental: "mental",
  exhaustion: "utmattelse",
  caused: "forårsaket",
  by: "av",
  continuous: "kontinuerlig",
  interaction: "samhandling",
  with: "med",
  systems: "systemer",
  prompting: "prompting",
  reviewing: "vurdering",
  correcting: "korrigering",
  switching: "bytte",
  context: "kontekst",
  supervising: "oppfølging",
  outputs: "utdata",
  does: "gjør",
  not: "ikke",
  remove: "fjerner",
  work: "arbeid",
  it: "den",
  multiplies: "multipliserer",
  cognitive: "kognitive",
  checkpoints: "kontrollpunkter",
  accelerates: "akselererer",
  production: "produksjon",
  but: "men",
  slows: "senker",
  recovery: "restitusjon",
  overload: "overbelastning",
  reduces: "reduserer",
  evaluative: "vurderings",
  sharpness: "skarphet",
  linear: "lineære",
  workflows: "arbeidsflyter",
  shift: "skifter",
  to: "til",
  parallel: "parallell",
  supervision: "oppfølging",
  new: "ny",
  skill: "ferdighet",
  coordinating: "koordinering",
  output: "utdata",
  volume: "volum",
  spikes: "øker",
  immediately: "umiddelbart",
  prompt: "prompt",
  loops: "løkker",
  shape: "former",
  behavior: "adferd",
  now: "nå",
  "micro-decisions": "mikrobeslutninger",
  per: "per",
  hour: "time",
  increase: "øker",
  input: "input",
  load: "belastning",
  scales: "skalerer",
  faster: "raskere",
  than: "enn",
  cognition: "kognisjon",
  prepared: "klargjort",
  concept: "konsept",
  assigned: "tildelt",
  tunnel: "tunnel",
  slot: "plass",
  yet: "ennå",
  fatigue: "tretthet",
  brain: "hjerne",
  fry: "kok",
  threaded: "trådet",
  orchestration: "orkestrering",
  inflation: "inflasjon",
  looping: "løkker",
  density: "tetthet",
  overproduction: "overproduksjon",
  partial: "delvis",
  attention: "oppmerksomhet",
  rhythm: "rytme",
};

const preserveWordCase = (source: string, replacement: string) => {
  if (!replacement) return replacement;
  if (source === source.toUpperCase()) return replacement.toUpperCase();
  if (source[0] === source[0].toUpperCase()) {
    return replacement[0].toUpperCase() + replacement.slice(1);
  }
  return replacement;
};

const applyPhraseReplacements = (value: string) => {
  let next = value;
  EN_TO_NB_PHRASE_REGEX.forEach(([pattern, replacement]) => {
    next = next.replace(pattern, replacement);
  });
  return next;
};

const applyWordFallback = (value: string) =>
  value.replace(/\b[A-Za-z][A-Za-z'-]*\b/g, (word) => {
    const replacement = EN_TO_NB_WORD_REPLACEMENTS[word.toLowerCase()];
    if (!replacement) return word;
    return preserveWordCase(word, replacement);
  });

const translateLineToBokmal = (line: string) => {
  const trimmed = line.trim();
  if (!trimmed) return line;

  const exact = EN_TO_NB_EXACT.get(normalizeTranslationKey(trimmed));
  const translatedBase = exact ?? applyWordFallback(applyPhraseReplacements(trimmed));

  return translatedBase
    .replace(/\bai(?=\b|-)/gi, "KI")
    .replace(/\s+([,.;:!?])/g, "$1")
    .replace(/\s{2,}/g, " ")
    .trim();
};

const autoTranslateEnglishToBokmal = (text: string) => {
  if (!text || !text.trim()) return text;

  const directives: string[] = [];
  let working = text.replace(FORMAT_DIRECTIVE_TOKEN_PATTERN, (match) => {
    const token = `__FMT_${directives.length}__`;
    directives.push(match);
    return token;
  });

  working = working
    .split("\n")
    .map((line) => translateLineToBokmal(line))
    .join("\n");

  directives.forEach((directive, index) => {
    working = working.replace(`__FMT_${index}__`, directive);
  });

  return working;
};

const pickFirstText = (...values: Array<string | undefined>) => {
  for (const value of values) {
    if (typeof value !== "string") continue;
    const trimmed = value.trim();
    if (trimmed) return trimmed;
  }
  return "";
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

function CursorCometTrail() {
  const pointsRef = useRef<CursorTrailPoint[]>([]);
  const animationFrameRef = useRef<number | null>(null);
  const [enabled, setEnabled] = useState(false);
  const [viewport, setViewport] = useState({ width: 1, height: 1 });
  const [trailState, setTrailState] = useState<CursorTrailRenderState>(EMPTY_CURSOR_TRAIL_STATE);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointerQuery = window.matchMedia("(pointer: fine)");
    const coarsePointerQuery = window.matchMedia("(pointer: coarse)");

    const evaluateCapability = () => {
      setEnabled(!reducedMotionQuery.matches && finePointerQuery.matches && !coarsePointerQuery.matches);
    };

    const onResize = () => {
      setViewport({
        width: Math.max(1, window.innerWidth),
        height: Math.max(1, window.innerHeight),
      });
    };

    const onMediaChange = () => {
      evaluateCapability();
    };

    const bindMediaQuery = (query: MediaQueryList, callback: () => void) => {
      if (typeof query.addEventListener === "function") {
        query.addEventListener("change", callback);
        return () => query.removeEventListener("change", callback);
      }

      query.addListener(callback);
      return () => query.removeListener(callback);
    };

    evaluateCapability();
    onResize();

    const unbindReducedMotion = bindMediaQuery(reducedMotionQuery, onMediaChange);
    const unbindFinePointer = bindMediaQuery(finePointerQuery, onMediaChange);
    const unbindCoarsePointer = bindMediaQuery(coarsePointerQuery, onMediaChange);
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      unbindReducedMotion();
      unbindFinePointer();
      unbindCoarsePointer();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    if (!enabled || typeof window === "undefined") {
      pointsRef.current = [];
      setTrailState(EMPTY_CURSOR_TRAIL_STATE);
      return undefined;
    }

    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse" && event.pointerType !== "pen") return;

      const nextPoint: CursorTrailPoint = {
        x: event.clientX,
        y: event.clientY,
        t: performance.now(),
      };

      const points = pointsRef.current;
      const lastPoint = points[points.length - 1];
      if (lastPoint) {
        const dx = nextPoint.x - lastPoint.x;
        const dy = nextPoint.y - lastPoint.y;
        const distance = Math.hypot(dx, dy);
        if (distance < CURSOR_MIN_POINT_DISTANCE_PX) return;
      }

      points.push(nextPoint);
      if (points.length > CURSOR_TRAIL_MAX_POINTS) {
        points.splice(0, points.length - CURSOR_TRAIL_MAX_POINTS);
      }
    };

    const tick = () => {
      const now = performance.now();
      const cutoff = now - CURSOR_TRAIL_LIFETIME_MS;
      const points = pointsRef.current;

      let trimCount = 0;
      while (trimCount < points.length && points[trimCount].t < cutoff) {
        trimCount += 1;
      }
      if (trimCount > 0) {
        points.splice(0, trimCount);
      }

      if (points.length < 2) {
        setTrailState((previous) => (previous.visible ? EMPTY_CURSOR_TRAIL_STATE : previous));
      } else {
        const tailPath = buildSmoothPath(points);
        const taperPaths = CURSOR_TAPER_WINDOWS_MS.map((windowMs) => {
          const taperCutoff = now - windowMs;
          let startIndex = points.length - 1;
          while (startIndex > 0 && points[startIndex - 1].t >= taperCutoff) {
            startIndex -= 1;
          }
          const segment = points.slice(startIndex);
          return buildSmoothPath(segment.length >= 2 ? segment : points.slice(-2));
        });
        const headCutoff = now - CURSOR_HEAD_WINDOW_MS;

        let headStartIndex = points.length - 1;
        while (headStartIndex > 0 && points[headStartIndex - 1].t >= headCutoff) {
          headStartIndex -= 1;
        }

        let headPoints = points.slice(headStartIndex);
        if (headPoints.length < 2) {
          headPoints = points.slice(-2);
        }

        const headPath = buildSmoothPath(headPoints);
        const headPoint = headPoints[headPoints.length - 1] ?? points[points.length - 1];

        setTrailState((previous) => {
          if (
            previous.visible &&
            previous.tailPath === tailPath &&
            previous.taperPaths.every((path, index) => path === taperPaths[index]) &&
            previous.headPath === headPath &&
            previous.headX === headPoint.x &&
            previous.headY === headPoint.y
          ) {
            return previous;
          }
          return {
            tailPath,
            taperPaths,
            headPath,
            headX: headPoint.x,
            headY: headPoint.y,
            visible: true,
          };
        });
      }

      animationFrameRef.current = window.requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    animationFrameRef.current = window.requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
      pointsRef.current = [];
      setTrailState(EMPTY_CURSOR_TRAIL_STATE);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-50 h-full w-full"
      viewBox={`0 0 ${viewport.width} ${viewport.height}`}
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="cursor-head-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7ad7ff" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#dff6ff" stopOpacity="0.95" />
        </linearGradient>
        <filter id="cursor-trail-glow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="1.6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {trailState.visible ? (
        <>
          <path
            d={trailState.tailPath}
            fill="none"
            stroke="#7ad7ff"
            strokeOpacity="0.1"
            strokeWidth="1.35"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#cursor-trail-glow)"
          />
          {trailState.taperPaths.map((path, index) =>
            path ? (
              <path
                key={`cursor-taper-${CURSOR_TAPER_WINDOWS_MS[index]}`}
                d={path}
                fill="none"
                stroke="#7ad7ff"
                strokeOpacity={CURSOR_TAPER_OPACITIES[index]}
                strokeWidth={CURSOR_TAPER_WIDTHS[index]}
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#cursor-trail-glow)"
              />
            ) : null,
          )}
          <path
            d={trailState.headPath}
            fill="none"
            stroke="url(#cursor-head-gradient)"
            strokeOpacity="0.98"
            strokeWidth="3.1"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#cursor-trail-glow)"
          />
          <circle
            cx={trailState.headX}
            cy={trailState.headY}
            r="2.4"
            fill="#e8f9ff"
            fillOpacity="0.9"
            filter="url(#cursor-trail-glow)"
          />
        </>
      ) : null}
    </svg>
  );
}

export function IntelligensTunnelSite() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const runtimePanelsRef = useRef<RuntimePanel[]>([]);
  const targetProgressRef = useRef(CAMERA_START_PROGRESS);
  const currentProgressRef = useRef(CAMERA_START_PROGRESS);
  const initialLandingAppliedRef = useRef(false);
  const videoRoomRefs = useRef<Array<HTMLVideoElement | null>>([]);
  const tunnelOutsideToggleRef = useRef<(() => void) | null>(null);
  const outsideFilmRoomEnterRef = useRef<(() => void) | null>(null);
  const outsideFilmRoomExitRef = useRef<(() => void) | null>(null);
  const outsideFilmMenuButtonRef = useRef<HTMLButtonElement | null>(null);
  const filmRoomPopupVideoRef = useRef<HTMLVideoElement | null>(null);
  const mobileGlyphPopupPanelIdRef = useRef<string | null>(null);

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
  const [panelsLoadError, setPanelsLoadError] = useState(false);
  const [outsideMenuVisible, setOutsideMenuVisible] = useState(false);
  const [outsideSection, setOutsideSection] = useState<OutsideSection>("menu");
  const outsideSectionRef = useRef<OutsideSection>("menu");
  const [outsideFilmRoomActive, setOutsideFilmRoomActive] = useState(false);
  const [outsideNewsItems, setOutsideNewsItems] = useState<AiNewsItem[]>([]);
  const [outsideNewsLoading, setOutsideNewsLoading] = useState(false);
  const [outsideNewsError, setOutsideNewsError] = useState("");
  const [videoRoomIndex, setVideoRoomIndex] = useState(() => DEFAULT_VIDEO_ROOM_INDEX);
  const [signatureContactName, setSignatureContactName] = useState("");
  const [signatureContactEmail, setSignatureContactEmail] = useState("");
  const [signatureContactMessage, setSignatureContactMessage] = useState("");
  const [filmRoomVideoPopupOpen, setFilmRoomVideoPopupOpen] = useState(false);
  const [mobileGlyphPopup, setMobileGlyphPopup] = useState<MobileGlyphPopup | null>(null);
  const [language, setLanguage] = useState<UiLanguage>(() => {
    if (typeof window === "undefined") return "nb";
    try {
      const saved = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
      if (saved === "nb" || saved === "en") return saved;
    } catch (_error) {
      // Ignore storage access errors and default to Bokmal.
    }
    return "nb";
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    } catch (_error) {
      // Ignore storage write errors.
    }
  }, [language]);

  useEffect(() => {
    outsideSectionRef.current = outsideSection;
  }, [outsideSection]);

  const uiCopy = UI_COPY[language];
  const localizeDynamicText = useMemo(
    () => (text: string) => (language === "nb" ? autoTranslateEnglishToBokmal(text) : text),
    [language],
  );
  const glyphWallItems = useMemo(
    () =>
      GLYPH_WALL_STORY.map((item, index) => {
        let previewDataUrl = "";
        if (typeof document !== "undefined") {
          const canvas = document.createElement("canvas");
          canvas.width = 420;
          canvas.height = 420;
          const ctx = canvas.getContext("2d");
          if (ctx) {
            try {
              drawCanonicalGlyphToContext(ctx, item.canonical, {
                backgroundColor: "rgba(0,0,0,0)",
                lineColor: "rgba(46,39,33,0.94)",
                gridColor: "rgba(69,60,53,0.48)",
              });
              previewDataUrl = canvas.toDataURL("image/png");
            } catch {
              previewDataUrl = "";
            }
          }
        }

        return {
          ...item,
          index,
          previewDataUrl,
        };
      }),
    [],
  );
  useEffect(() => {
    const uniqueCanonicals = new Set(glyphWallItems.map((item) => item.canonical));
    if (uniqueCanonicals.size !== glyphWallItems.length) {
      console.warn(
        `Glyff wall uniqueness violation: ${glyphWallItems.length - uniqueCanonicals.size} duplicates detected.`,
      );
    }
  }, [glyphWallItems]);
  const glyphWallPayloadJson = useMemo(
    () =>
      JSON.stringify(
        {
          version: "rl-story-v1",
          name: "replacement-anxiety-pattern",
          protocol: "ra-sequence-v1",
          read_order: "left_to_right_top_to_bottom",
          count: glyphWallItems.length,
          items: glyphWallItems.map((item) => ({
            order: item.index + 1,
            id: item.id,
            phase: item.phase,
            canonical: item.canonical,
          })),
        },
        null,
        2,
      ),
    [glyphWallItems],
  );
  const onTunnelToggleClick = useCallback(() => {
    tunnelOutsideToggleRef.current?.();
  }, []);
  const onOutsideFilmRoomEnter = useCallback(() => {
    outsideFilmRoomEnterRef.current?.();
  }, []);
  const onOutsideFilmRoomExit = useCallback(() => {
    outsideFilmRoomExitRef.current?.();
  }, []);
  const closeFilmRoomVideoPopup = useCallback(() => {
    setFilmRoomVideoPopupOpen(false);
  }, []);
  const closeMobileGlyphPopup = useCallback(() => {
    mobileGlyphPopupPanelIdRef.current = null;
    setMobileGlyphPopup(null);
  }, []);
  const onSignatureContactSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const name = signatureContactName.trim();
      const email = signatureContactEmail.trim();
      const message = signatureContactMessage.trim();
      if (!name || !email || !message) return;

      const subject = language === "nb" ? "Kontakt fra Signaturer" : "Contact from Signatures";
      const body = [
        `${language === "nb" ? "Navn" : "Name"}: ${name}`,
        `${language === "nb" ? "E-post" : "Email"}: ${email}`,
        "",
        `${language === "nb" ? "Melding" : "Message"}:`,
        message,
      ].join("\n");
      const href = `mailto:lars@larscuzner.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = href;
    },
    [language, signatureContactEmail, signatureContactMessage, signatureContactName],
  );
  const videoWheelAccumulatorRef = useRef(0);
  const videoWheelLastStepAtRef = useRef(0);
  const videoTouchStartXRef = useRef<number | null>(null);

  const stepVideoRoomIndex = useCallback((direction: number) => {
    const step = direction >= 0 ? 1 : -1;
    setVideoRoomIndex((prev) => {
      const total = HEX_VIDEO_ROOM_SOURCES.length;
      return (prev + step + total) % total;
    });
  }, []);

  const onVideoRoomWheel = useCallback(
    (event: ReactWheelEvent<HTMLDivElement>) => {
      event.preventDefault();
      const dominant = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
      videoWheelAccumulatorRef.current += dominant;

      const now = performance.now();
      if (now - videoWheelLastStepAtRef.current < VIDEO_ROOM_SCROLL_COOLDOWN_MS) return;
      if (Math.abs(videoWheelAccumulatorRef.current) < VIDEO_ROOM_WHEEL_THRESHOLD) return;

      stepVideoRoomIndex(videoWheelAccumulatorRef.current > 0 ? 1 : -1);
      videoWheelAccumulatorRef.current = 0;
      videoWheelLastStepAtRef.current = now;
    },
    [stepVideoRoomIndex],
  );

  const onVideoRoomTouchStart = useCallback((event: ReactTouchEvent<HTMLDivElement>) => {
    videoTouchStartXRef.current = event.touches[0]?.clientX ?? null;
  }, []);

  const onVideoRoomTouchEnd = useCallback(
    (event: ReactTouchEvent<HTMLDivElement>) => {
      const startX = videoTouchStartXRef.current;
      const endX = event.changedTouches[0]?.clientX ?? null;
      videoTouchStartXRef.current = null;
      if (startX === null || endX === null) return;

      const deltaX = endX - startX;
      if (Math.abs(deltaX) < 28) return;
      stepVideoRoomIndex(deltaX < 0 ? 1 : -1);
    },
    [stepVideoRoomIndex],
  );

  useEffect(() => {
    if (!outsideMenuVisible) {
      setOutsideSection("menu");
    }
  }, [outsideMenuVisible]);

  useEffect(() => {
    if (!outsideMenuVisible) {
      setOutsideFilmRoomActive(false);
    }
  }, [outsideMenuVisible]);

  useEffect(() => {
    if (!outsideFilmRoomActive) {
      setFilmRoomVideoPopupOpen(false);
    }
  }, [outsideFilmRoomActive]);

  useEffect(() => {
    if (!filmRoomVideoPopupOpen) return;
    const video = filmRoomPopupVideoRef.current;
    if (!video) return;
    const attempt = video.play();
    if (attempt && typeof attempt.catch === "function") {
      attempt.catch(() => {
        // Popup is still usable even if autoplay with audio is blocked.
      });
    }
  }, [filmRoomVideoPopupOpen]);

  useEffect(() => {
    if (!filmRoomVideoPopupOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setFilmRoomVideoPopupOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [filmRoomVideoPopupOpen]);

  useEffect(() => {
    if (outsideSection !== "videos") return;
    videoWheelAccumulatorRef.current = 0;
    videoWheelLastStepAtRef.current = 0;
  }, [outsideSection]);

  useEffect(() => {
    if (!outsideMenuVisible || outsideSection !== "videos") return;
    let isCancelled = false;

    const tryPlayAll = () => {
      if (isCancelled) return;
      videoRoomRefs.current.forEach((videoNode) => {
        if (!videoNode) return;
        if (!videoNode.paused && videoNode.readyState >= 2) return;
        const attempt = videoNode.play();
        if (attempt && typeof attempt.catch === "function") {
          attempt.catch(() => {
            // Browser autoplay guards: keep retry loop alive while this view is open.
          });
        }
      });
    };

    tryPlayAll();
    const poll = window.setInterval(tryPlayAll, 900);
    return () => {
      isCancelled = true;
      window.clearInterval(poll);
    };
  }, [outsideMenuVisible, outsideSection]);

  useEffect(() => {
    if (!outsideMenuVisible || outsideSection !== "news") return;
    let isCancelled = false;

    const normalizeNewsItem = (raw: any): AiNewsItem => ({
      title: String(raw?.title ?? "").trim(),
      source: String(raw?.source ?? "").trim(),
      url: String(raw?.url ?? "").trim(),
      snippet: String(raw?.snippet ?? "").trim(),
      published_at: String(raw?.published_at ?? "").trim(),
      published: raw?.published !== false,
    });

    const parseTimestamp = (value: string) => {
      const time = Date.parse(value);
      return Number.isFinite(time) ? time : 0;
    };

    const loadNews = async () => {
      setOutsideNewsLoading(true);
      setOutsideNewsError("");

      for (const path of AI_NEWS_PATHS) {
        try {
          const response = await fetch(path, { cache: "no-store" });
          if (!response.ok) continue;
          const payload = await response.json();
          if (!Array.isArray(payload?.items)) continue;

          const items = payload.items
            .map(normalizeNewsItem)
            .filter((item: AiNewsItem) => item.published && item.title && item.url)
            .sort((a: AiNewsItem, b: AiNewsItem) => parseTimestamp(b.published_at) - parseTimestamp(a.published_at));

          if (isCancelled) return;
          setOutsideNewsItems(items);
          setOutsideNewsLoading(false);
          return;
        } catch {
          // Try next path.
        }
      }

      if (isCancelled) return;
      setOutsideNewsItems([]);
      setOutsideNewsError(uiCopy.outsideNewsError);
      setOutsideNewsLoading(false);
    };

    void loadNews();
    return () => {
      isCancelled = true;
    };
  }, [outsideMenuVisible, outsideSection, uiCopy.outsideNewsError]);

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

        const normalized = data.items
          .map((item: any, index: number) => normalizeGlyphLanguageItem(item, index))
          .filter((item: GlyphLanguageItem) => item.enabled !== false);

        const canonicalToId = new Map<string, string>();
        const mapped: GlyphLanguageItem[] = [];
        const droppedInvalid: string[] = [];
        const droppedDuplicate: string[] = [];

        normalized.forEach((item: GlyphLanguageItem) => {
          if (!item.canonical) {
            droppedInvalid.push(`${item.id} (empty canonical)`);
            return;
          }

          let lockedCanonical = "";
          try {
            lockedCanonical = canonicalizeCanonicalSentence(item.canonical);
          } catch {
            droppedInvalid.push(`${item.id} (${item.canonical})`);
            return;
          }

          const existingId = canonicalToId.get(lockedCanonical);
          if (existingId && existingId !== item.id) {
            droppedDuplicate.push(`${item.id} duplicates ${existingId} (${lockedCanonical})`);
            return;
          }

          canonicalToId.set(lockedCanonical, item.id);
          mapped.push({
            ...item,
            canonical: lockedCanonical,
          });
        });

        if (droppedInvalid.length > 0) {
          console.warn(
            "Glyph language map dropped invalid canonical rows:",
            droppedInvalid.join("; "),
          );
        }
        if (droppedDuplicate.length > 0) {
          console.warn(
            "Glyph language map dropped duplicate canonical rows:",
            droppedDuplicate.join("; "),
          );
        }

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

  useEffect(() => {
    if (initialLandingAppliedRef.current) return;
    if (panelData.length === 0) return;

    let preferredPanelId: string | null = null;
    for (const glyphId of DEFAULT_LANDING_GLYPH_IDS) {
      const match = glyphLanguageItems.find((item) => item.id === glyphId && item.panel_id);
      if (match?.panel_id) {
        preferredPanelId = match.panel_id;
        break;
      }
    }

    if (!preferredPanelId) {
      preferredPanelId =
        DEFAULT_LANDING_PANEL_IDS.find((id) => panelData.some((panel) => panel.id === id)) ??
        null;
    }

    const preferredPanel =
      (preferredPanelId ? panelData.find((panel) => panel.id === preferredPanelId) : undefined) ??
      panelData[0];

    const preferredProgress =
      typeof preferredPanel?.installation?.placement_t === "number"
        ? wrap01(preferredPanel.installation.placement_t)
        : CAMERA_START_PROGRESS;

    targetProgressRef.current = preferredProgress;
    currentProgressRef.current = preferredProgress;
    if (preferredPanel?.id) setActivePanelId(preferredPanel.id);
    initialLandingAppliedRef.current = true;
  }, [glyphLanguageItems, panelData]);

  const orderedActiveGlyphItems = useMemo(
    () =>
      glyphLanguageItems.filter(
        (item) => item.enabled !== false && typeof item.canonical === "string" && item.canonical.trim().length > 0,
      ),
    [glyphLanguageItems],
  );

  const glyphByPanelIdInUiOrder = useMemo(() => {
    const byPanelId = new Map<string, GlyphLanguageItem>();
    if (!panelData.length || !orderedActiveGlyphItems.length) return byPanelId;

    const routeDistanceFromStart = (placementT: number) => {
      const t = wrap01(placementT);
      return ROUTE_PROGRESS_DIRECTION >= 0
        ? wrap01(t - CAMERA_START_PROGRESS)
        : wrap01(CAMERA_START_PROGRESS - t);
    };

    const orderedPanels = [...panelData].sort((a, b) => {
      const placementA =
        typeof a.installation?.placement_t === "number" ? a.installation.placement_t : 0;
      const placementB =
        typeof b.installation?.placement_t === "number" ? b.installation.placement_t : 0;
      const distanceA = routeDistanceFromStart(placementA);
      const distanceB = routeDistanceFromStart(placementB);
      if (distanceA === distanceB) return a.id.localeCompare(b.id);
      return distanceA - distanceB;
    });

    const limit = Math.min(orderedPanels.length, orderedActiveGlyphItems.length);
    for (let i = 0; i < limit; i += 1) {
      byPanelId.set(orderedPanels[i].id, orderedActiveGlyphItems[i]);
    }

    return byPanelId;
  }, [panelData, orderedActiveGlyphItems]);

  const glyphCanonicalByPanelId = useMemo(() => {
    const byPanelId = new Map<string, string>();
    glyphByPanelIdInUiOrder.forEach((item, panelId) => {
      if (item.canonical) byPanelId.set(panelId, item.canonical);
    });
    return byPanelId;
  }, [glyphByPanelIdInUiOrder]);

  const glyphCopyByPanelId = useMemo(() => {
    const byPanelId = new Map<string, GlyphCopy>();
    glyphByPanelIdInUiOrder.forEach((item, panelId) => {
      byPanelId.set(panelId, {
        label: item.label || "",
        note: item.note || "",
        labelNb: item.label_nb || "",
        noteNb: item.note_nb || "",
      });
    });
    return byPanelId;
  }, [glyphByPanelIdInUiOrder]);

  useEffect(() => {
    let isCancelled = false;

    const loadPanels = async () => {
      setPanelsLoading(true);
      setPanelsLoadError(false);

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
          const content = p?.content ?? {};
          const title = String(content?.title ?? "Untitled").trim() || "Untitled";
          const body = String(content?.description ?? "").trim();
          const titleNb = String(content?.title_nb ?? content?.title_no ?? "").trim();
          const bodyNb = String(content?.description_nb ?? content?.description_no ?? "").trim();
          const titleEn = String(content?.title_en ?? "").trim();
          const bodyEn = String(content?.description_en ?? "").trim();

          return {
            ...p,
            kind,
            type: kind,
            title,
            body,
            title_nb: titleNb || title,
            body_nb: bodyNb || body,
            title_en: titleEn,
            body_en: bodyEn,
            cta: content?.cta,
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
        setPanelsLoadError(true);
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
  const resolveLocalizedGlyphCopy = useMemo(
    () => (panel: UiPanel): { title: string; body: string } => {
      const glyphCopy = glyphCopyByPanelId.get(panel.id);
      if (language === "nb") {
        const title = pickFirstText(
          glyphCopy?.labelNb,
          panel.title_nb,
          localizeDynamicText(glyphCopy?.label || ""),
          localizeDynamicText(panel.title || ""),
        );
        const body = pickFirstText(
          glyphCopy?.noteNb,
          panel.body_nb,
          localizeDynamicText(glyphCopy?.note || ""),
          localizeDynamicText(panel.body || ""),
        );
        return {
          title: title || "Mangler norsk tittel",
          body: body || "Mangler norsk tekst.",
        };
      }

      const title = pickFirstText(glyphCopy?.label, panel.title_en);
      const body = pickFirstText(glyphCopy?.note, panel.body_en);
      return {
        title: title || "Missing English title",
        body: body || "Missing English text.",
      };
    },
    [glyphCopyByPanelId, language, localizeDynamicText],
  );
  const activeInstallationText = useMemo(() => {
    return resolveLocalizedGlyphCopy(activePanel).title;
  }, [activePanel, resolveLocalizedGlyphCopy]);
  const formatOutsideNewsDate = useMemo(
    () =>
      new Intl.DateTimeFormat(language === "nb" ? "nb-NO" : "en-US", {
        dateStyle: "medium",
      }),
    [language],
  );

  useEffect(() => {
    if (panelData.length === 0) return;
    const mountNode = containerRef.current;
    if (!mountNode) return;
    tunnelOutsideToggleRef.current = null;
    outsideFilmRoomEnterRef.current = null;
    outsideFilmRoomExitRef.current = null;
    setOutsideMenuVisible(false);
    setOutsideFilmRoomActive(false);
    closeMobileGlyphPopup();

    let isDisposed = false;
    let cleanup = () => { };

    const run = () => {
      if (isDisposed || !mountNode) return;

      runtimePanelsRef.current = [];

      const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      const mobileQuery = window.matchMedia("(max-width: 767px)");
      const isReducedMotion = reducedMotionQuery.matches;
      const isMobile = mobileQuery.matches;
      const openMobileGlyphPopup = (panel: UiPanel) => {
        const localizedCopy = resolveLocalizedGlyphCopy(panel);
        mobileGlyphPopupPanelIdRef.current = panel.id;
        setMobileGlyphPopup({
          panelId: panel.id,
          title: localizedCopy.title,
          body: localizedCopy.body,
        });
      };

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
      let outsideHardShadowEnabled = false;
      const setOutsideHardShadow = (enabled: boolean) => {
        if (outsideHardShadowEnabled === enabled) return;
        outsideHardShadowEnabled = enabled;
        // Keep interior softer; switch to hard-edged filtering for outside object view.
        renderer.shadowMap.type = enabled ? THREE.BasicShadowMap : THREE.PCFShadowMap;
        renderer.shadowMap.needsUpdate = true;
      };

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
      void hasContinuousLedOn;
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

      const outsideEnterMeshes: THREE.Object3D[] = [
        floorMesh,
        ceilingMesh,
        leftSkirtMesh,
        rightSkirtMesh,
        leftCrownMesh,
        rightCrownMesh,
        trackRailMesh,
      ];
      if (leftWallMesh) outsideEnterMeshes.push(leftWallMesh);
      if (rightWallMesh) outsideEnterMeshes.push(rightWallMesh);
      if (leftLedBackdropMesh) outsideEnterMeshes.push(leftLedBackdropMesh);
      if (rightLedBackdropMesh) outsideEnterMeshes.push(rightLedBackdropMesh);

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
        // Sharper exterior shadows: tighter frustum + lower bias + no soft radius blur.
        exteriorKey.shadow.bias = -0.00008;
        exteriorKey.shadow.normalBias = 0.0012;
        exteriorKey.shadow.radius = 0;
        const S = isMobile ? 250 : 220;
        exteriorKey.shadow.camera.left = -S;
        exteriorKey.shadow.camera.right = S;
        exteriorKey.shadow.camera.top = S;
        exteriorKey.shadow.camera.bottom = -S;
        exteriorKey.shadow.camera.near = 25;
        exteriorKey.shadow.camera.far = 980;
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
      void makeVinylTexture;
      void makeLabelTexture;
      void makeJuttingCardLayers;
      void makeCarouselNumber;

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
        const descriptionFont = "400 32px 'Helvetica Neue', Helvetica, Arial, sans-serif";
        const descriptionBoldFont = "700 32px 'Helvetica Neue', Helvetica, Arial, sans-serif";
        ctx.font = descriptionFont;
        drawFormattedCardText(
          ctx,
          description,
          60,
          230,
          900,
          42,
          descriptionFont,
          descriptionBoldFont,
        );

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

      const resolveProgressFromHit = (hit: THREE.Intersection<THREE.Object3D>) => {
        const uvY = hit.uv?.y;
        if (typeof uvY === "number" && Number.isFinite(uvY)) {
          return wrap01(uvY);
        }

        // Fallback for hits without UVs: nearest point on curve.
        const sampleCount = isMobile ? 180 : 320;
        let bestT = 0;
        let bestDistSq = Number.POSITIVE_INFINITY;
        for (let i = 0; i <= sampleCount; i += 1) {
          const t = i / sampleCount;
          const point = curve.getPointAt(t);
          const distSq = point.distanceToSquared(hit.point);
          if (distSq < bestDistSq) {
            bestDistSq = distSq;
            bestT = t;
          }
        }
        return wrap01(bestT);
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
      void routeDistanceFromStart;
      void MAX_FLAT_SPAN_WORLD;
      void applyCoverUvToPlane;
      void collectStraightSpansInRange;

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

        // Card texture: glyph semantic copy overrides panel copy when assigned.
        const localizedCopy = resolveLocalizedGlyphCopy(panel);
        const cardTitle = localizedCopy.title;
        const cardBody = localizedCopy.body;
        const cardTex = createCardTexture(cardTitle, cardBody);
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
      let filmRoomT = 0; // 0 = outside orbit, 1 = fully inside film room
      let filmRoomTarget = 0;
      let filmRoomOrbitYaw = 0;
      let filmRoomOrbitPitch = 0.08;
      let filmRoomZoomOffset = 0;
      let filmRoomDragActive = false;
      let filmRoomLastPointerX = 0;
      let filmRoomLastPointerY = 0;
      let filmRoomUiActive = false;
      let outsideOrbitYaw = 0;
      let outsideOrbitPitch = 0;
      let outsideOrbitRoll = 0;
      let outsideZoomOffset = 0;
      let outsideDragActive = false;
      let outsideDragRollMode = false;
      let outsideLastPointerX = 0;
      let outsideLastPointerY = 0;
      let outsidePendingEnterProgress: number | null = null;
      let outsidePendingEnterMoved = false;
      let outsidePendingStartX = 0;
      let outsidePendingStartY = 0;
      let outsideUserAdjustedView = false;
      let resetOutsidePointerDrift = false;
      const mouseTarget = { x: 0, y: 0 };
      const mouseCurrent = { x: 0, y: 0 };
      const exitCameraTarget = new THREE.Vector3(); // computed once on transition start
      const exitLookTarget = new THREE.Vector3();   // center of tunnel

      const setFilmRoomUiActive = (nextActive: boolean) => {
        if (filmRoomUiActive === nextActive) return;
        filmRoomUiActive = nextActive;
        setOutsideFilmRoomActive(nextActive);
      };

      // Compute tunnel center (average of curve sample points)
      const tunnelCenter = new THREE.Vector3();
      const centerSamples = 32;
      for (let i = 0; i < centerSamples; i++) {
        tunnelCenter.add(curve.getPointAt(i / centerSamples));
      }
      tunnelCenter.divideScalar(centerSamples);

      const signalSwarmCount = isReducedMotion ? (isMobile ? 480 : 800) : isMobile ? 1200 : 2200;
      const signalAnchor = tunnelCenter.clone().add(new THREE.Vector3(-6, 10, 4));
      const signalGroup = new THREE.Group();
      signalGroup.position.copy(signalAnchor);
      signalGroup.visible = false;
      scene.add(signalGroup);

      const signalGeometry = new THREE.TetrahedronGeometry(isMobile ? 1.6 : 1.2);
      dynamicGeometries.push(signalGeometry);
      const signalMaterial = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.94,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        depthTest: false,
        toneMapped: false,
      });
      dynamicMaterials.push(signalMaterial);

      const signalMesh = new THREE.InstancedMesh(signalGeometry, signalMaterial, signalSwarmCount);
      signalMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      signalMesh.frustumCulled = false;
      signalMesh.renderOrder = 20;
      signalGroup.add(signalMesh);

      const signalDummy = new THREE.Object3D();
      const signalTarget = new THREE.Vector3();
      const signalColor = new THREE.Color();
      const signalPositions = Array.from({ length: signalSwarmCount }, () =>
        new THREE.Vector3(
          (Math.random() - 0.5) * 80,
          (Math.random() - 0.5) * 80,
          (Math.random() - 0.5) * 80,
        ),
      );
      for (let index = 0; index < signalSwarmCount; index += 1) {
        signalMesh.setColorAt(index, signalColor.setHex(0x2a79ff));
      }
      if (signalMesh.instanceColor) signalMesh.instanceColor.needsUpdate = true;

      const updateOutsideCameraTargets = () => {
        exitCameraTarget.copy(tunnelCenter).add(OUTSIDE_DEFAULT_CAMERA_OFFSET);
        exitLookTarget.copy(tunnelCenter);
      };

      const collapseGlyphCards = () => {
        glyphRunes.forEach((rune) => {
          rune.expanded = false;
        });
      };

      const setOutsideView = (nextOutside: boolean) => {
        if (isOutside === nextOutside) return;
        isOutside = nextOutside;
        outsideDragActive = false;
        outsideDragRollMode = false;
        filmRoomDragActive = false;
        outsidePendingEnterProgress = null;
        outsidePendingEnterMoved = false;
        setOutsideMenuVisible(nextOutside);
        if (nextOutside) {
          filmRoomT = 0;
          filmRoomTarget = 0;
          filmRoomOrbitYaw = 0;
          filmRoomOrbitPitch = 0.08;
          filmRoomZoomOffset = 0;
          setFilmRoomUiActive(false);
          outsideUserAdjustedView = false;
          resetOutsidePointerDrift = true;
          outsideOrbitYaw = OUTSIDE_DEFAULT_ORBIT_YAW;
          outsideOrbitPitch = OUTSIDE_DEFAULT_ORBIT_PITCH;
          outsideOrbitRoll = OUTSIDE_DEFAULT_ORBIT_ROLL;
          outsideZoomOffset = OUTSIDE_DEFAULT_ZOOM_OFFSET;
          updateOutsideCameraTargets();
          collapseGlyphCards();
          closeMobileGlyphPopup();
        } else {
          setFilmRoomUiActive(false);
        }
      };

      const toggleOutsideView = () => {
        setOutsideView(!isOutside);
      };

      tunnelOutsideToggleRef.current = toggleOutsideView;

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

      const filmRoomCenter = tunnelCenter.clone().add(new THREE.Vector3(-178, 42, 118));
      const filmRoomGroup = new THREE.Group();
      filmRoomGroup.position.copy(filmRoomCenter);
      filmRoomGroup.visible = false;
      scene.add(filmRoomGroup);

      const filmRoomShellMaterial = new THREE.MeshStandardMaterial({
        color: 0x2f343b,
        roughness: 0.88,
        metalness: 0.06,
      });
      const filmRoomFrameMaterial = new THREE.MeshStandardMaterial({
        color: 0x5a626b,
        roughness: 0.54,
        metalness: 0.14,
      });
      const filmRoomFloorMaterial = new THREE.MeshStandardMaterial({
        color: 0x1f2329,
        roughness: 0.92,
        metalness: 0.04,
      });
      dynamicMaterials.push(filmRoomShellMaterial, filmRoomFrameMaterial, filmRoomFloorMaterial);

      const filmRoomOuterWallGeometry = new THREE.PlaneGeometry(FILM_ROOM_WALL_WIDTH + 2.6, FILM_ROOM_WALL_HEIGHT + 2.4);
      const filmRoomInnerWallGeometry = new THREE.PlaneGeometry(FILM_ROOM_WALL_WIDTH, FILM_ROOM_WALL_HEIGHT);
      const filmRoomFloorGeometry = new THREE.CircleGeometry(FILM_ROOM_FLOOR_RADIUS, 6);
      const filmRoomCeilingGeometry = new THREE.CircleGeometry(FILM_ROOM_FLOOR_RADIUS, 6);
      const filmRoomCornerGeometry = new THREE.CylinderGeometry(0.2, 0.2, FILM_ROOM_WALL_HEIGHT + 2.8, 10);
      dynamicGeometries.push(
        filmRoomOuterWallGeometry,
        filmRoomInnerWallGeometry,
        filmRoomFloorGeometry,
        filmRoomCeilingGeometry,
        filmRoomCornerGeometry,
      );

      const filmRoomFloorMesh = new THREE.Mesh(filmRoomFloorGeometry, filmRoomFloorMaterial);
      filmRoomFloorMesh.rotation.x = -Math.PI * 0.5;
      filmRoomFloorMesh.position.y = -FILM_ROOM_WALL_HEIGHT * 0.52;
      filmRoomFloorMesh.receiveShadow = true;
      filmRoomGroup.add(filmRoomFloorMesh);

      const filmRoomCeilingMesh = new THREE.Mesh(filmRoomCeilingGeometry, filmRoomShellMaterial);
      filmRoomCeilingMesh.rotation.x = Math.PI * 0.5;
      filmRoomCeilingMesh.position.y = FILM_ROOM_WALL_HEIGHT * 0.52;
      filmRoomCeilingMesh.receiveShadow = true;
      filmRoomGroup.add(filmRoomCeilingMesh);

      const filmRoomTopLight = new THREE.PointLight(0xf3ebde, 0, 96, 2);
      filmRoomTopLight.position.set(0, FILM_ROOM_WALL_HEIGHT * 0.34, 0);
      filmRoomGroup.add(filmRoomTopLight);

      const filmRoomFillLight = new THREE.PointLight(0xa9bbd2, 0, 74, 2);
      filmRoomFillLight.position.set(0, -FILM_ROOM_WALL_HEIGHT * 0.1, FILM_ROOM_APOTHEM * 0.3);
      filmRoomGroup.add(filmRoomFillLight);
      const filmRoomBadgeTexture = new THREE.TextureLoader().load(GULLHAIEN_ROOM_BADGE_IMAGE_URL);
      filmRoomBadgeTexture.colorSpace = THREE.SRGBColorSpace;
      filmRoomBadgeTexture.anisotropy = renderer.capabilities.getMaxAnisotropy();
      dynamicTextures.push(filmRoomBadgeTexture);
      const filmRoomBadgeGeometry = new THREE.PlaneGeometry(
        GULLHAIEN_ROOM_BADGE_WIDTH,
        GULLHAIEN_ROOM_BADGE_WIDTH / GULLHAIEN_ROOM_BADGE_ASPECT,
      );
      dynamicGeometries.push(filmRoomBadgeGeometry);
      const filmRoomBadgeMaterial = new THREE.MeshBasicMaterial({
        map: filmRoomBadgeTexture,
        transparent: true,
        alphaTest: 0.06,
        depthWrite: false,
        toneMapped: false,
      });
      dynamicMaterials.push(filmRoomBadgeMaterial);
      const filmRoomBadgeMesh = new THREE.Mesh(filmRoomBadgeGeometry, filmRoomBadgeMaterial);
      const filmRoomBadgeBaseY = FILM_ROOM_WALL_HEIGHT * 0.34;
      const filmRoomFallbackVideo = HEX_VIDEO_ROOM_SOURCES[0]?.video ?? "";

      for (let sideIndex = 0; sideIndex < 6; sideIndex += 1) {
        const yaw = (sideIndex * Math.PI) / 3;
        const outerRadius = FILM_ROOM_APOTHEM + 1.0;
        const innerRadius = FILM_ROOM_APOTHEM - 0.18;

        const outerWall = new THREE.Mesh(filmRoomOuterWallGeometry, filmRoomShellMaterial);
        outerWall.position.set(-Math.sin(yaw) * outerRadius, 0, -Math.cos(yaw) * outerRadius);
        outerWall.rotation.y = yaw;
        outerWall.castShadow = true;
        outerWall.receiveShadow = true;
        filmRoomGroup.add(outerWall);

        const source = HEX_VIDEO_ROOM_SOURCES[sideIndex % HEX_VIDEO_ROOM_SOURCES.length];
        const videoNode = document.createElement("video");
        videoNode.src = source.video;
        videoNode.poster = source.poster;
        videoNode.autoplay = true;
        videoNode.loop = true;
        videoNode.muted = true;
        videoNode.playsInline = true;
        videoNode.preload = "metadata";
        videoNode.crossOrigin = "anonymous";
        videoNode.setAttribute("playsinline", "true");
        videoNode.setAttribute("webkit-playsinline", "true");
        runtimeVideos.push(videoNode);

        let fallbackApplied = false;
        const activateFallbackVideo = () => {
          if (fallbackApplied || !filmRoomFallbackVideo || videoNode.src === filmRoomFallbackVideo) return;
          fallbackApplied = true;
          videoNode.src = filmRoomFallbackVideo;
          videoNode.load();
          requestVideoPlay(videoNode);
        };
        const onFilmVideoReady = () => {
          requestVideoPlay(videoNode);
        };
        const onFilmVideoError = () => {
          activateFallbackVideo();
        };
        videoNode.addEventListener("loadeddata", onFilmVideoReady);
        videoNode.addEventListener("canplay", onFilmVideoReady);
        videoNode.addEventListener("error", onFilmVideoError);
        videoCleanupFns.push(() => {
          videoNode.removeEventListener("loadeddata", onFilmVideoReady);
          videoNode.removeEventListener("canplay", onFilmVideoReady);
          videoNode.removeEventListener("error", onFilmVideoError);
        });

        const videoTexture = new THREE.VideoTexture(videoNode);
        videoTexture.colorSpace = THREE.SRGBColorSpace;
        videoTexture.minFilter = THREE.LinearFilter;
        videoTexture.magFilter = THREE.LinearFilter;
        videoTexture.generateMipmaps = false;
        dynamicTextures.push(videoTexture);
        requestVideoPlay(videoNode);

        const innerWallMaterial = new THREE.MeshBasicMaterial({
          color: 0xffffff,
          map: videoTexture,
          side: THREE.DoubleSide,
          toneMapped: false,
        });
        dynamicMaterials.push(innerWallMaterial);

        const innerWall = new THREE.Mesh(filmRoomInnerWallGeometry, innerWallMaterial);
        innerWall.position.set(-Math.sin(yaw) * innerRadius, 0, -Math.cos(yaw) * innerRadius);
        innerWall.rotation.y = yaw;
        innerWall.castShadow = false;
        innerWall.receiveShadow = true;
        if (sideIndex === 0) {
          innerWall.userData = { isMainFilmWall: true };
          panelObjects.push(innerWall);
          filmRoomBadgeMesh.position.set(0, filmRoomBadgeBaseY, -innerRadius + 0.72);
          filmRoomBadgeMesh.rotation.y = yaw;
          filmRoomGroup.add(filmRoomBadgeMesh);
        }
        filmRoomGroup.add(innerWall);
      }

      for (let cornerIndex = 0; cornerIndex < 6; cornerIndex += 1) {
        const yaw = (cornerIndex * Math.PI) / 3 + Math.PI / 6;
        const cornerRadius = FILM_ROOM_APOTHEM + 1.56;
        const cornerPost = new THREE.Mesh(filmRoomCornerGeometry, filmRoomFrameMaterial);
        cornerPost.position.set(-Math.sin(yaw) * cornerRadius, 0, -Math.cos(yaw) * cornerRadius);
        cornerPost.castShadow = true;
        cornerPost.receiveShadow = true;
        filmRoomGroup.add(cornerPost);
      }

      const filmRoomExitGeometry = new THREE.TorusGeometry(2.15, 0.2, 12, 48);
      dynamicGeometries.push(filmRoomExitGeometry);
      const filmRoomExitMaterial = new THREE.MeshStandardMaterial({
        color: 0xe6d9c3,
        roughness: 0.46,
        metalness: 0.24,
      });
      dynamicMaterials.push(filmRoomExitMaterial);
      const filmRoomExitMesh = new THREE.Mesh(filmRoomExitGeometry, filmRoomExitMaterial);
      filmRoomExitMesh.position.copy(
        filmRoomCenter.clone().add(new THREE.Vector3(0, -FILM_ROOM_WALL_HEIGHT * 0.22, FILM_ROOM_APOTHEM - 4.4)),
      );
      filmRoomExitMesh.rotation.x = Math.PI * 0.5;
      filmRoomExitMesh.userData = { isFilmRoomExit: true };
      panelObjects.push(filmRoomExitMesh);
      scene.add(filmRoomExitMesh);

      const filmRoomExitLight = new THREE.PointLight(0xf2d6ad, 0, 26, 2);
      filmRoomExitLight.position.copy(filmRoomExitMesh.position).add(new THREE.Vector3(0, 1.2, 0));
      scene.add(filmRoomExitLight);

      const filmRoomHitGeometry = new THREE.CylinderGeometry(
        FILM_ROOM_FLOOR_RADIUS * 1.08,
        FILM_ROOM_FLOOR_RADIUS * 1.08,
        FILM_ROOM_WALL_HEIGHT * 1.2,
        6,
      );
      dynamicGeometries.push(filmRoomHitGeometry);
      const filmRoomHitMaterial = new THREE.MeshBasicMaterial({ visible: false, side: THREE.DoubleSide });
      dynamicMaterials.push(filmRoomHitMaterial);
      const filmRoomHitMesh = new THREE.Mesh(filmRoomHitGeometry, filmRoomHitMaterial);
      filmRoomHitMesh.userData = { isFilmRoomPortal: true };
      panelObjects.push(filmRoomHitMesh);
      scene.add(filmRoomHitMesh);

      const beginFilmRoomEntry = () => {
        if (!isOutside) return;
        outsideDragActive = false;
        outsideDragRollMode = false;
        outsidePendingEnterProgress = null;
        outsidePendingEnterMoved = false;
        filmRoomDragActive = false;
        filmRoomTarget = 1;
        setOutsideSection("menu");
        setFilmRoomUiActive(true);
        runtimeVideos.forEach(requestVideoPlay);
      };

      const beginFilmRoomExit = () => {
        if (!isOutside) return;
        filmRoomTarget = 0;
        filmRoomDragActive = false;
      };

      outsideFilmRoomEnterRef.current = beginFilmRoomEntry;
      outsideFilmRoomExitRef.current = beginFilmRoomExit;

      const raycaster = new THREE.Raycaster();
      const pointer = new THREE.Vector2();

      const onPointerDown = (event: PointerEvent) => {
        runtimeVideos.forEach(requestVideoPlay);
        const rect = renderer.domElement.getBoundingClientRect();
        pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
        outsideLastPointerX = event.clientX;
        outsideLastPointerY = event.clientY;

        raycaster.setFromCamera(pointer, camera);
        const hits = raycaster.intersectObjects(panelObjects, false);

        if (isOutside) {
          if (hits.length > 0) {
            const hitObj = hits[0].object;
            if (hitObj.userData.isFilmRoomPortal) {
              beginFilmRoomEntry();
              return;
            }
            if (hitObj.userData.isFilmRoomExit) {
              beginFilmRoomExit();
              return;
            }
            if (hitObj.userData.isMainFilmWall && filmRoomT > 0.12) {
              filmRoomDragActive = false;
              setFilmRoomVideoPopupOpen(true);
              return;
            }
            if (hitObj.userData.isReentryDot) {
              setOutsideView(false);
              return;
            }
            if (hitObj.userData.isExitGlyph) {
              toggleOutsideView();
              return;
            }
          }

          if (filmRoomT > 0.12) {
            filmRoomDragActive = event.button === 0;
            filmRoomLastPointerX = event.clientX;
            filmRoomLastPointerY = event.clientY;
            return;
          }

          outsideDragActive = true;
          outsideDragRollMode = event.shiftKey || event.altKey || event.button === 2;
          outsidePendingEnterProgress = null;
          outsidePendingEnterMoved = false;
          outsidePendingStartX = event.clientX;
          outsidePendingStartY = event.clientY;

          // Left-click on tunnel shell: enter at exact clicked route position.
          if (!outsideDragRollMode && event.button === 0 && filmRoomT < 0.08) {
            const shellHits = raycaster.intersectObjects(outsideEnterMeshes, false);
            if (shellHits.length > 0) {
              outsidePendingEnterProgress = resolveProgressFromHit(shellHits[0]);
            }
          }
          return;
        }

        if (hits.length > 0) {
          const hitObj = hits[0].object;

          // --- Exit glyph click ---
          if (hitObj.userData.isExitGlyph) {
            toggleOutsideView();
            return;
          }

          const hitPanel: UiPanel | undefined = hitObj.userData.panel;
          if (hitPanel) {
            if (isMobile) {
              if (mobileGlyphPopupPanelIdRef.current === hitPanel.id) {
                closeMobileGlyphPopup();
              } else {
                openMobileGlyphPopup(hitPanel);
              }
              collapseGlyphCards();
              return;
            }

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
          if (!isMobile) {
            glyphRunes.forEach((r) => { r.expanded = false; });
          }
        }
      };

      renderer.domElement.addEventListener("pointerdown", onPointerDown);

      const onPointerMove = (event: PointerEvent) => {
        const rect = renderer.domElement.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;
        mouseTarget.x = (x - 0.5) * 2;
        mouseTarget.y = (y - 0.5) * 2;

        if (isOutside && filmRoomDragActive) {
          const dx = event.clientX - filmRoomLastPointerX;
          const dy = event.clientY - filmRoomLastPointerY;
          filmRoomLastPointerX = event.clientX;
          filmRoomLastPointerY = event.clientY;
          filmRoomOrbitYaw += dx * 0.0042;
          filmRoomOrbitPitch = THREE.MathUtils.clamp(
            filmRoomOrbitPitch + dy * 0.0032,
            -0.46,
            0.42,
          );
          return;
        }

        if (isOutside && outsideDragActive) {
          if (outsidePendingEnterProgress !== null && !outsidePendingEnterMoved) {
            const dragDistance = Math.hypot(
              event.clientX - outsidePendingStartX,
              event.clientY - outsidePendingStartY,
            );
            if (dragDistance <= OUTSIDE_ENTER_CLICK_DRIFT_PX) {
              outsideLastPointerX = event.clientX;
              outsideLastPointerY = event.clientY;
              return;
            }
            outsidePendingEnterMoved = true;
            outsidePendingEnterProgress = null;
          }

          const dx = event.clientX - outsideLastPointerX;
          const dy = event.clientY - outsideLastPointerY;
          outsideLastPointerX = event.clientX;
          outsideLastPointerY = event.clientY;
          outsideUserAdjustedView = true;

          if (outsideDragRollMode) {
            outsideOrbitRoll = THREE.MathUtils.clamp(
              outsideOrbitRoll + dx * 0.0038,
              -Math.PI * 0.48,
              Math.PI * 0.48,
            );
          } else {
            outsideOrbitYaw += dx * 0.0046;
            outsideOrbitPitch = THREE.MathUtils.clamp(
              outsideOrbitPitch + dy * 0.0035,
              -0.88,
              0.88,
            );
          }
          return;
        }

        if (isReducedMotion || isMobile) return;
      };

      const onPointerLeave = () => {
        mouseTarget.x = 0;
        mouseTarget.y = 0;
        filmRoomDragActive = false;
        outsideDragActive = false;
        outsideDragRollMode = false;
        outsidePendingEnterProgress = null;
        outsidePendingEnterMoved = false;
      };

      const onPointerUp = () => {
        if (isOutside && outsidePendingEnterProgress !== null && !outsidePendingEnterMoved) {
          targetProgressRef.current = outsidePendingEnterProgress;
          currentProgressRef.current = outsidePendingEnterProgress;
          setOutsideView(false);
        }
        filmRoomDragActive = false;
        outsideDragActive = false;
        outsideDragRollMode = false;
        outsidePendingEnterProgress = null;
        outsidePendingEnterMoved = false;
      };

      const onContextMenu = (event: MouseEvent) => {
        if (!isOutside) return;
        event.preventDefault();
      };

      renderer.domElement.addEventListener("pointermove", onPointerMove, {
        passive: true,
      });
      renderer.domElement.addEventListener("pointerleave", onPointerLeave, {
        passive: true,
      });
      renderer.domElement.addEventListener("pointerup", onPointerUp, { passive: true });
      renderer.domElement.addEventListener("pointercancel", onPointerUp, { passive: true });
      renderer.domElement.addEventListener("contextmenu", onContextMenu);

      const onWheel = (event: WheelEvent) => {
        event.preventDefault();
        if (isOutside) {
          if (filmRoomT > 0.12) {
            const orbitDelta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
            filmRoomOrbitYaw += orbitDelta * FILM_ROOM_WHEEL_ORBIT_SENSITIVITY;
            filmRoomOrbitPitch = THREE.MathUtils.clamp(
              filmRoomOrbitPitch + event.deltaY * 0.00065,
              -0.46,
              0.42,
            );
            return;
          }
          outsideUserAdjustedView = true;
          if (event.ctrlKey || event.metaKey) {
            // Ctrl+scroll or pinch-to-zoom → zoom
            outsideZoomOffset = THREE.MathUtils.clamp(
              outsideZoomOffset + event.deltaY * 0.32,
              -165,
              230,
            );
          } else {
            // Regular scroll → orbit
            outsideOrbitYaw += event.deltaX * 0.0014;
            outsideOrbitPitch = THREE.MathUtils.clamp(
              outsideOrbitPitch + event.deltaY * 0.0014,
              -0.7,
              0.7,
            );
          }
          return;
        }
        runtimeVideos.forEach(requestVideoPlay);
        targetProgressRef.current = wrap01(
          targetProgressRef.current + ROUTE_PROGRESS_DIRECTION * event.deltaY * 0.000075,
        );
      };
      renderer.domElement.addEventListener("wheel", onWheel, { passive: false });

      // Debug: press 'o' to toggle outside view
      const onKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'o' || event.key === 'O') {
          toggleOutsideView();
        }
      };
      window.addEventListener("keydown", onKeyDown);

      let touchStartX = 0;
      let touchStartY = 0;
      let touchPinchDist = 0;
      const onTouchStart = (event: TouchEvent) => {
        runtimeVideos.forEach(requestVideoPlay);
        touchStartX = event.touches[0]?.clientX ?? 0;
        touchStartY = event.touches[0]?.clientY ?? 0;
        if (event.touches.length === 2) {
          const dx = event.touches[0].clientX - event.touches[1].clientX;
          const dy = event.touches[0].clientY - event.touches[1].clientY;
          touchPinchDist = Math.sqrt(dx * dx + dy * dy);
        }
      };
      const onTouchMove = (event: TouchEvent) => {
        event.preventDefault();
        if (isOutside && event.touches.length === 2) {
          // Two-finger pinch → zoom
          const dx = event.touches[0].clientX - event.touches[1].clientX;
          const dy = event.touches[0].clientY - event.touches[1].clientY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (touchPinchDist > 0) {
            const pinchDelta = touchPinchDist - dist;
            outsideUserAdjustedView = true;
            outsideZoomOffset = THREE.MathUtils.clamp(
              outsideZoomOffset + pinchDelta * 0.4,
              -165,
              230,
            );
          }
          touchPinchDist = dist;
          return;
        }
        const currentX = event.touches[0]?.clientX ?? touchStartX;
        const currentY = event.touches[0]?.clientY ?? touchStartY;
        const deltaX = touchStartX - currentX;
        const deltaY = touchStartY - currentY;
        if (isOutside) {
          if (filmRoomT > 0.12) {
            filmRoomOrbitYaw += deltaX * FILM_ROOM_TOUCH_ORBIT_SENSITIVITY;
            filmRoomOrbitPitch = THREE.MathUtils.clamp(
              filmRoomOrbitPitch + deltaY * FILM_ROOM_TOUCH_PITCH_SENSITIVITY,
              -0.46,
              0.42,
            );
            touchStartX = currentX;
            touchStartY = currentY;
            return;
          }
          // Single finger drag → orbit
          outsideUserAdjustedView = true;
          outsideOrbitYaw += deltaX * 0.003;
          outsideOrbitPitch = THREE.MathUtils.clamp(
            outsideOrbitPitch + deltaY * 0.003,
            -0.7,
            0.7,
          );
          touchStartX = currentX;
          touchStartY = currentY;
          return;
        }
        targetProgressRef.current = wrap01(
          targetProgressRef.current + ROUTE_PROGRESS_DIRECTION * deltaY * 0.00011,
        );
        touchStartX = currentX;
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

      const clock = new THREE.Clock();
      // Reusable temp vectors to avoid per-frame allocations
      const _tmpVec3A = new THREE.Vector3();
      const _tmpVec3B = new THREE.Vector3();
      const _tmpVec3C = new THREE.Vector3();
      const _tmpPortalNdc = new THREE.Vector3();
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
        if (resetOutsidePointerDrift) {
          mouseTarget.x = 0;
          mouseTarget.y = 0;
          mouseCurrent.x = 0;
          mouseCurrent.y = 0;
          resetOutsidePointerDrift = false;
        }

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
        const filmTransitionSpeed = 1.0 / FILM_ROOM_TRANSITION_DURATION;
        if (filmRoomTarget > filmRoomT) {
          filmRoomT = Math.min(filmRoomTarget, filmRoomT + filmTransitionSpeed * dt);
        } else if (filmRoomTarget < filmRoomT) {
          filmRoomT = Math.max(filmRoomTarget, filmRoomT - filmTransitionSpeed * dt);
        }
        const filmRoomEase = filmRoomT < 0.5
          ? 4 * filmRoomT * filmRoomT * filmRoomT
          : 1 - Math.pow(-2 * filmRoomT + 2, 3) / 2;
        if (filmRoomTarget === 0 && filmRoomT <= 0.001 && filmRoomUiActive) {
          setFilmRoomUiActive(false);
        }
        if (filmRoomTarget > 0.01 && filmRoomT > 0.08) {
          runtimeVideos.forEach(requestVideoPlay);
        }
        if (isOutside && !outsideUserAdjustedView) {
          outsideOrbitYaw = OUTSIDE_DEFAULT_ORBIT_YAW;
          outsideOrbitPitch = OUTSIDE_DEFAULT_ORBIT_PITCH;
          outsideOrbitRoll = OUTSIDE_DEFAULT_ORBIT_ROLL;
          outsideZoomOffset = OUTSIDE_DEFAULT_ZOOM_OFFSET;
        }
        const outsideMotionWeight = THREE.MathUtils.smoothstep(easeOut, 0.18, 1);
        const outsideInteractionWeight = outsideUserAdjustedView ? outsideMotionWeight : 0;
        const outsideMotionX = mouseCurrent.x * (isMobile ? 0 : 15.4) * outsideInteractionWeight;
        const outsideMotionY = mouseCurrent.y * (isMobile ? 0 : 9.2) * outsideInteractionWeight;

        // ---- Dynamically adjust fog, lighting, background for exterior view ----
        exteriorKeyTarget.position
          .copy(tunnelCenter)
          .add(
            new THREE.Vector3(
              Math.sin(outsideOrbitYaw) * 6.8 + outsideMotionX * 0.2,
              outsideOrbitPitch * 2.4 + outsideMotionY * 0.18,
              Math.cos(outsideOrbitYaw) * 3.6 - outsideMotionX * 0.13,
            ),
          );
        exteriorFillTarget.position
          .copy(tunnelCenter)
          .add(
            new THREE.Vector3(
              -Math.sin(outsideOrbitYaw) * 3.2,
              outsideOrbitPitch * 0.9,
              Math.cos(outsideOrbitYaw) * 2.1,
            ),
          );
        // Sun key with subtle pointer-responsive shift for a slight "object reacts to movement" feel.
        exteriorKey.position.set(
          tunnelCenter.x + 700 + outsideMotionX * 2.8 + Math.sin(outsideOrbitYaw) * 52,
          tunnelCenter.y + 290 + outsideMotionY * 1.35 + outsideOrbitPitch * 28,
          tunnelCenter.z - 130 - outsideMotionX * 1.3 + Math.cos(outsideOrbitYaw) * 30,
        );
        // Opposite fill stays weak to preserve contrast.
        exteriorFill.position.set(
          tunnelCenter.x - 470 - outsideMotionX * 0.82 - Math.sin(outsideOrbitYaw) * 16,
          tunnelCenter.y + 35 + outsideMotionY * 0.22 + outsideOrbitPitch * 10,
          tunnelCenter.z + 360 + outsideMotionX * 0.6 - Math.cos(outsideOrbitYaw) * 12,
        );
        const outsideBaseOffset = exitCameraTarget
          .clone()
          .sub(tunnelCenter)
          .applyQuaternion(
            new THREE.Quaternion().setFromEuler(
              new THREE.Euler(outsideOrbitPitch, outsideOrbitYaw, 0, "YXZ"),
            ),
          );
        const outsideDistance = THREE.MathUtils.clamp(
          outsideBaseOffset.length() + outsideZoomOffset,
          260,
          860,
        );
        outsideBaseOffset.setLength(outsideDistance);
        const outsideCameraPos = tunnelCenter
          .clone()
          .add(outsideBaseOffset)
          .add(new THREE.Vector3(outsideMotionX, outsideMotionY * 0.84, outsideMotionX * 0.58));
        const outsideLook = exitLookTarget
          .clone()
          .add(new THREE.Vector3(outsideMotionX * 0.11, outsideMotionY * 0.095, outsideMotionX * 0.085));
        const outsideRollQuat = new THREE.Quaternion();
        const filmRoomSymbolVisibility = THREE.MathUtils.smoothstep(easeOut, 0.24, 0.96) * (1 - filmRoomEase);
        const filmRoomVisible = isOutside && (filmRoomSymbolVisibility > 0.001 || filmRoomEase > 0.001 || filmRoomTarget > 0.001);
        const filmRoomScale = THREE.MathUtils.lerp(0.22, 1, filmRoomEase);
        filmRoomGroup.visible = filmRoomVisible;
        filmRoomGroup.scale.setScalar(filmRoomScale);
        filmRoomGroup.position.copy(filmRoomCenter).add(
          new THREE.Vector3(0, Math.sin(elapsed * 0.72) * 0.9 * (1 - filmRoomEase), 0),
        );
        filmRoomGroup.rotation.y = elapsed * 0.18 * (1 - filmRoomEase);
        filmRoomBadgeMesh.position.y = filmRoomBadgeBaseY + Math.sin(elapsed * 1.18) * 0.22;
        filmRoomExitMesh.visible = filmRoomEase > 0.08;
        filmRoomExitLight.intensity = THREE.MathUtils.lerp(0, isMobile ? 1.8 : 2.9, filmRoomEase);
        const filmRoomVisibilityMul = filmRoomVisible ? 1 : 0;
        filmRoomTopLight.intensity = THREE.MathUtils.lerp(
          isMobile ? 0.34 : 0.58,
          isMobile ? 2.6 : 4.8,
          filmRoomEase,
        ) * filmRoomVisibilityMul;
        filmRoomFillLight.intensity = THREE.MathUtils.lerp(
          isMobile ? 0.14 : 0.24,
          isMobile ? 1.2 : 2.1,
          filmRoomEase,
        ) * filmRoomVisibilityMul;
        filmRoomExitMesh.rotation.z = elapsed * 0.18;

        const roomSymbolClickable = isOutside && filmRoomTarget < 0.01 && filmRoomSymbolVisibility > 0.08;
        filmRoomHitMesh.visible = roomSymbolClickable;
        filmRoomHitMesh.position.copy(filmRoomGroup.position);
        filmRoomHitMesh.rotation.copy(filmRoomGroup.rotation);
        filmRoomHitMesh.scale.setScalar(filmRoomScale);

        const outsideFilmMenuButton = outsideFilmMenuButtonRef.current;
        if (outsideFilmMenuButton) {
          const showFilmMenuButton = isOutside && filmRoomTarget < 0.01 && filmRoomSymbolVisibility > 0.06;
          if (showFilmMenuButton) {
            _tmpPortalNdc.copy(filmRoomGroup.position).project(camera);
            const portalScreenX = (_tmpPortalNdc.x * 0.5 + 0.5) * mountNode.clientWidth;
            const portalScreenY = (-_tmpPortalNdc.y * 0.5 + 0.5) * mountNode.clientHeight;
            outsideFilmMenuButton.style.left = `${portalScreenX - (isMobile ? 86 : 132)}px`;
            outsideFilmMenuButton.style.top = `${portalScreenY - (isMobile ? 6 : 12)}px`;
            outsideFilmMenuButton.style.opacity = `${THREE.MathUtils.clamp(filmRoomSymbolVisibility * 1.25, 0, 1)}`;
            outsideFilmMenuButton.style.visibility = "visible";
          } else {
            outsideFilmMenuButton.style.opacity = "0";
            outsideFilmMenuButton.style.visibility = "hidden";
          }
        }

        const filmRoomDistance = THREE.MathUtils.clamp(
          FILM_ROOM_CAMERA_DISTANCE + filmRoomZoomOffset,
          11.5,
          29,
        );
        const filmRoomLook = filmRoomCenter.clone().add(new THREE.Vector3(0, -0.8, 0));
        const filmRoomCameraPos = filmRoomCenter.clone().add(
          new THREE.Vector3(
            Math.sin(filmRoomOrbitYaw) * filmRoomDistance,
            FILM_ROOM_CAMERA_HEIGHT + filmRoomOrbitPitch * 9.5,
            Math.cos(filmRoomOrbitYaw) * filmRoomDistance,
          ),
        );

        if (easeOut > 0.01) {
          setOutsideHardShadow(easeOut > 0.26);
          // Push fog far away when outside
          if (scene.fog instanceof THREE.Fog) {
            scene.fog.near = THREE.MathUtils.lerp(38, 9999, easeOut);
            scene.fog.far = THREE.MathUtils.lerp(230, 10000, easeOut);
          }
          const insideBg = new THREE.Color(0x0f1217);
          const outsideBg = new THREE.Color(0x02040a);
          (scene.background as THREE.Color).copy(insideBg).lerp(outsideBg, easeOut);

          // Further contrast: darker base, stronger sun, weaker fill.
          ambient.intensity = THREE.MathUtils.lerp(0.05, 0.002, easeOut);
          hemi.intensity = THREE.MathUtils.lerp(0.08, 0.007, easeOut);
          exteriorKey.intensity = THREE.MathUtils.lerp(0, isMobile ? 4.6 : 8.6, easeOut);
          exteriorFill.intensity = THREE.MathUtils.lerp(0, isMobile ? 0.02 : 0.03, easeOut);
          renderer.toneMappingExposure = THREE.MathUtils.lerp(
            isMobile ? 0.76 : 0.72,
            isMobile ? 0.75 : 0.76,
            easeOut,
          );

          // Keep emissive low to avoid flattening shadow contrast.
          [floorMat, wallMat].forEach((mat) => {
            mat.emissive.set(0x334455);
            mat.emissiveIntensity = 0;
          });
          floorMat.envMapIntensity = THREE.MathUtils.lerp(0.74, 0.04, easeOut);
          wallMat.envMapIntensity = THREE.MathUtils.lerp(0.08, 0.01, easeOut);
          // Ceiling: transition from pure emissive soft-box (inside) to
          // PBR-lit white (outside) so sun shadows are visible on it
          ceilingMat.color.set(0x000000).lerp(new THREE.Color(0xffffff), easeOut);
          ceilingMat.toneMapped = easeOut > 0.5;      // let tone mapper handle it when outside
          ceilingMat.fog = easeOut > 0.5;              // re-enable fog outside (pushed to 9999 anyway)
          ceilingMat.emissive.set(0xffffff);
          ceilingMat.emissiveIntensity = THREE.MathUtils.lerp(1.0, 0.02, easeOut);
          ceilingMat.envMapIntensity = THREE.MathUtils.lerp(0.0, 0.03, easeOut);
        } else {
          setOutsideHardShadow(false);
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
          floorMat.envMapIntensity = 0.74;
          wallMat.envMapIntensity = 0.08;
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
          camera.position.copy(outsideCameraPos);
          camera.lookAt(outsideLook);
          if (Math.abs(outsideOrbitRoll) > 0.0001) {
            const outsideViewDir = outsideLook.clone().sub(camera.position).normalize();
            outsideRollQuat.setFromAxisAngle(outsideViewDir, outsideOrbitRoll);
            camera.quaternion.multiply(outsideRollQuat);
          }
        } else if (easeOut > 0.001) {
          // Transitioning: blend camera
          camera.position.lerpVectors(insidePos, outsideCameraPos, easeOut);
          const blendedLook = insideLook.clone().lerp(outsideLook, easeOut);
          camera.lookAt(blendedLook);
          if (Math.abs(outsideOrbitRoll) > 0.0001) {
            const blendedViewDir = blendedLook.clone().sub(camera.position).normalize();
            outsideRollQuat.setFromAxisAngle(blendedViewDir, outsideOrbitRoll * easeOut);
            camera.quaternion.multiply(outsideRollQuat);
          }
        } else {
          camera.position.copy(insidePos);
          camera.lookAt(insideLook);
        }

        if (isOutside && filmRoomEase > 0.001) {
          const blendedPos = camera.position.clone().lerp(filmRoomCameraPos, filmRoomEase);
          const blendedLook = outsideLook.clone().lerp(filmRoomLook, filmRoomEase);
          camera.position.copy(blendedPos);
          camera.lookAt(blendedLook);
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
          const targetT = !isMobile && rune.expanded ? 1 : 0;
          const speed = 1.0 / CARD_EXPAND_DURATION;
          if (rune.expandT < targetT) {
            rune.expandT = Math.min(1, rune.expandT + speed * dt);
          } else if (rune.expandT > targetT) {
            rune.expandT = Math.max(0, rune.expandT - speed * dt);
          }

          // Ease-in-out cubic
          const t = rune.expandT;
          const eased = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

          if (!isMobile && eased > 0.001) {
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
          glyphMat.opacity = isMobile ? 1.0 : 1.0 - eased * 0.4;
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
        const reentryVisibility = THREE.MathUtils.smoothstep(easeOut, 0.2, 0.95) * (1 - filmRoomEase);
        reentryMarkerMesh.visible = reentryVisibility > 0.001;
        reentryHaloMesh.visible = reentryVisibility > 0.001;
        reentryMarkerMesh.scale.setScalar(0.88 + reentryPulse * 0.28);
        reentryMarkerMaterial.emissiveIntensity = reentryVisibility * (0.48 + reentryPulse * 0.45);
        reentryMarkerLight.intensity = reentryVisibility * (isMobile ? 4.6 : 7.4) * reentryPulse;
        reentryHaloMesh.lookAt(camera.position);
        reentryHaloMesh.scale.setScalar(0.95 + reentryPulse * 0.18);
        reentryHaloMaterial.opacity = reentryVisibility * (0.2 + reentryPulse * 0.32);

        const signalVisible = isOutside;
        signalGroup.visible = signalVisible;
        if (signalVisible) {
          const signalTowardCamera = camera.position.clone().sub(tunnelCenter);
          const signalCamDist = signalTowardCamera.length();
          signalTowardCamera.normalize();
          signalGroup.position.copy(tunnelCenter).add(signalTowardCamera.multiplyScalar(signalCamDist * 0.55)).add(new THREE.Vector3(0, 32, 0));
          signalGroup.lookAt(camera.position);
          signalGroup.rotation.z = elapsed * 0.04;

          const signalCoreCount = Math.max(1, Math.floor(signalSwarmCount * 0.05));
          for (let index = 0; index < signalSwarmCount; index += 1) {
            const ratio = index / signalSwarmCount;
            const isCore = index < signalCoreCount;
            let spin = 0;
            let scale = 1;

            if (!isCore) {
              const radius = 24 + ratio * (isMobile ? 80 : 140);
              const angle = index * 137.5 + elapsed * 0.16;
              const wave = Math.sin(radius * 0.04 - elapsed) * 15;

              signalTarget.x = Math.cos(angle) * radius;
              signalTarget.y = wave * (1 - ratio) + Math.sin(index * 0.7) * 2.8;
              signalTarget.z = Math.sin(angle) * radius;

              signalColor.setRGB(0.12, 0.4, 1);
              signalColor.multiplyScalar(0.82 + (1 - ratio) * 0.26);
              spin = elapsed * 0.14 + index * 0.002;
              scale = 1.04 + (1 - ratio) * 0.16;
            } else {
              const phi = Math.acos(1 - (2 * (index + 0.5)) / signalCoreCount);
              const theta = Math.PI * (1 + Math.sqrt(5)) * index;
              const pulse = 20 + Math.sin(elapsed * 4 + index * 0.1) * 6;
              const rotY = elapsed * 0.8;
              const x = pulse * Math.cos(theta) * Math.sin(phi);
              const y = pulse * Math.sin(theta) * Math.sin(phi);
              const z = pulse * Math.cos(phi);
              const energy = 0.5 + 0.5 * Math.sin(elapsed * 6 + index);

              signalTarget.x = x * Math.cos(rotY) - z * Math.sin(rotY);
              signalTarget.y = y;
              signalTarget.z = x * Math.sin(rotY) + z * Math.cos(rotY);

              signalColor.setRGB(1, 0.78 + energy * 0.22, 0.14);
              signalColor.multiplyScalar(1.3 + energy * 0.28);
              spin = elapsed * 0.92 + index * 0.018;
              scale = 1.3 + energy * 0.42;
            }

            signalPositions[index].lerp(signalTarget, isReducedMotion ? 0.025 : isMobile ? 0.052 : 0.075);
            signalDummy.position.copy(signalPositions[index]);
            signalDummy.rotation.set(spin * 0.4, spin, spin * 0.24);
            signalDummy.scale.setScalar(scale);
            signalDummy.updateMatrix();

            signalMesh.setMatrixAt(index, signalDummy.matrix);
            signalMesh.setColorAt(index, signalColor);
          }

          signalMesh.instanceMatrix.needsUpdate = true;
          if (signalMesh.instanceColor) signalMesh.instanceColor.needsUpdate = true;
        }

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
        tunnelOutsideToggleRef.current = null;
        outsideFilmRoomEnterRef.current = null;
        outsideFilmRoomExitRef.current = null;
        closeMobileGlyphPopup();
        renderer.domElement.removeEventListener("pointerdown", onPointerDown);
        renderer.domElement.removeEventListener("pointermove", onPointerMove);
        renderer.domElement.removeEventListener("pointerleave", onPointerLeave);
        renderer.domElement.removeEventListener("pointerup", onPointerUp);
        renderer.domElement.removeEventListener("pointercancel", onPointerUp);
        renderer.domElement.removeEventListener("contextmenu", onContextMenu);
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
      tunnelOutsideToggleRef.current = null;
      outsideFilmRoomEnterRef.current = null;
      outsideFilmRoomExitRef.current = null;
      cleanup();
    };
  }, [panelData, glyphCanonicalByPanelId, resolveLocalizedGlyphCopy, closeMobileGlyphPopup]);

  return (
    <div className="relative h-[100svh] w-full overflow-hidden overscroll-none touch-none bg-[#f7f7f4] text-[#141414]">
      <div ref={containerRef} className="absolute inset-0" />
      <CursorCometTrail />

      <div className="absolute right-4 top-4 z-[60] flex flex-col items-end gap-2">
        <div className="flex items-center gap-2 rounded-full border border-black/20 bg-white/90 px-2 py-1 shadow-[0_6px_18px_rgba(0,0,0,0.12)] backdrop-blur">
          <button
            type="button"
            onClick={() => setLanguage("nb")}
            className={`pointer-events-auto rounded-full px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.16em] transition ${
              language === "nb" ? "bg-[#11161f] text-white" : "bg-transparent text-[#4f4f4f] hover:bg-black/5"
            }`}
            aria-pressed={language === "nb"}
          >
            NO
          </button>
          <button
            type="button"
            onClick={() => setLanguage("en")}
            className={`pointer-events-auto rounded-full px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.16em] transition ${
              language === "en" ? "bg-[#11161f] text-white" : "bg-transparent text-[#4f4f4f] hover:bg-black/5"
            }`}
            aria-pressed={language === "en"}
          >
            EN
          </button>
        </div>
        <button
          type="button"
          onClick={outsideFilmRoomActive ? onOutsideFilmRoomExit : onTunnelToggleClick}
          className="pointer-events-auto rounded-full border border-[#f7d58b]/90 bg-[linear-gradient(180deg,#f9db8d_0%,#d79a3a_52%,#bc7d1f_100%)] px-4 py-2 text-[0.56rem] font-semibold uppercase tracking-[0.16em] text-[#241606] shadow-[0_8px_18px_rgba(0,0,0,0.26),inset_0_1px_0_rgba(255,245,207,0.82)] transition hover:brightness-105 active:translate-y-[1px]"
          aria-pressed={outsideMenuVisible}
        >
          {outsideFilmRoomActive ? "get out" : outsideMenuVisible ? "get in" : "get out"}
        </button>
      </div>

      {panelsLoading || panelsLoadError ? (
        <div className="pointer-events-none absolute left-1/2 top-[5.35rem] z-30 -translate-x-1/2 rounded-full border border-black/15 bg-white/85 px-4 py-2 text-[0.64rem] uppercase tracking-[0.16em] text-[#3f3f3f] shadow-[0_6px_18px_rgba(0,0,0,0.1)] backdrop-blur">
          {panelsLoading ? uiCopy.loadingPanels : uiCopy.panelsFallback}
        </div>
      ) : null}

      {!outsideMenuVisible ? (
        <div className="pointer-events-none absolute inset-x-0 top-0 z-20 px-5 pt-5 md:px-8">
          <h1 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#525252]">
            {uiCopy.siteName}
          </h1>
          <p className="mt-1 text-[0.64rem] uppercase tracking-[0.15em] text-[#6a6a6a]">
            {uiCopy.activeInstallation}: {activeInstallationText}
          </p>
        </div>
      ) : null}

      {mobileGlyphPopup && !outsideMenuVisible ? (
        <div className="pointer-events-none absolute inset-0 z-50 flex items-center justify-center px-4 md:hidden">
          <section className="pointer-events-auto w-full max-w-[30rem] rounded-2xl border border-[#7fd9ff]/28 bg-[#061324]/94 px-4 py-3 text-[#e6f4ff] shadow-[0_22px_56px_rgba(0,0,0,0.62)] backdrop-blur">
            <div className="flex items-start justify-between gap-3">
              <h2 className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[#9edfff]">
                {mobileGlyphPopup.title}
              </h2>
              <button
                type="button"
                onClick={closeMobileGlyphPopup}
                className="pointer-events-auto rounded-full border border-[#7fd9ff]/35 px-3 py-[0.28rem] text-[0.58rem] font-semibold uppercase tracking-[0.12em] text-[#d7f0ff] transition active:translate-y-[1px]"
              >
                {language === "nb" ? "Lukk" : "Close"}
              </button>
            </div>
            <p className="mt-2 max-h-[52svh] overflow-y-auto whitespace-pre-line text-[0.83rem] leading-relaxed text-[#d9e7f4]">
              {mobileGlyphPopup.body}
            </p>
          </section>
        </div>
      ) : null}

      {filmRoomVideoPopupOpen ? (
        <div
          className="absolute inset-0 z-[70] bg-[rgba(2,6,14,0.84)] backdrop-blur-[10px]"
          onClick={closeFilmRoomVideoPopup}
        >
          <div className="flex h-full w-full items-center justify-center px-4 py-20 md:px-8">
            <section
              className="relative w-full max-w-[72rem] overflow-hidden rounded-[1.35rem] border border-[#d4e4ff]/24 bg-black shadow-[0_32px_110px_rgba(0,0,0,0.62)]"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={closeFilmRoomVideoPopup}
                className="absolute right-3 top-3 z-10 rounded-full border border-white/16 bg-black/45 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-black/65"
              >
                {language === "nb" ? "Lukk" : "Close"}
              </button>
              <video
                ref={filmRoomPopupVideoRef}
                controls
                playsInline
                preload="metadata"
                poster={MAIN_FILM_POSTER_URL}
                autoPlay
                className="block aspect-video w-full bg-black"
              >
                <source src={MAIN_FILM_VIDEO_URL} type="video/mp4" />
                {language === "nb"
                  ? "Nettleseren din kan ikke spille av denne videoen."
                  : "Your browser cannot play this video."}
              </video>
            </section>
          </div>
        </div>
      ) : null}

      {outsideMenuVisible && !outsideFilmRoomActive ? (
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
              @keyframes outsideLinkFloatD {
                0%, 100% { transform: translate3d(0px, 0px, 0px); }
                50% { transform: translate3d(0px, -16px, 0px); }
              }
              @keyframes outsideCorePulse {
                0%, 100% { opacity: 0.88; text-shadow: 0 0 20px rgba(171, 194, 232, 0.34); }
                50% { opacity: 1; text-shadow: 0 0 28px rgba(171, 194, 232, 0.58); }
              }
              @keyframes outsideHexRoomSpin {
                0% { transform: translate(-50%, -50%) rotateY(0deg); }
                100% { transform: translate(-50%, -50%) rotateY(0deg); }
              }
              @keyframes glyffFloatA {
                0%, 100% { transform: translate3d(0px, 0px, 0px); }
                50% { transform: translate3d(0px, -8px, 0px); }
              }
              @keyframes glyffFloatB {
                0%, 100% { transform: translate3d(0px, 0px, 0px); }
                50% { transform: translate3d(0px, -11px, 0px); }
              }
              @keyframes glyffFloatC {
                0%, 100% { transform: translate3d(0px, 0px, 0px); }
                50% { transform: translate3d(0px, -6px, 0px); }
              }
              @keyframes glyffHoloPulse {
                0%, 100% {
                  border-color: rgba(134, 181, 235, 0.34);
                  box-shadow:
                    0 0 16px rgba(88, 170, 255, 0.24),
                    0 0 34px rgba(79, 224, 255, 0.2),
                    inset 0 0 18px rgba(0, 0, 0, 0.36),
                    inset 0 1px 0 rgba(208, 232, 255, 0.24);
                }
                50% {
                  border-color: rgba(162, 235, 255, 0.62);
                  box-shadow:
                    0 0 26px rgba(88, 170, 255, 0.44),
                    0 0 52px rgba(79, 224, 255, 0.34),
                    inset 0 0 20px rgba(0, 0, 0, 0.34),
                    inset 0 1px 0 rgba(208, 232, 255, 0.34);
                }
              }
              @keyframes glyffHoloTwinkle {
                0%, 100% { filter: saturate(1.12) contrast(1.02) brightness(0.98); }
                40% { filter: saturate(1.42) contrast(1.16) brightness(1.1); }
                72% { filter: saturate(1.22) contrast(1.08) brightness(1.03); }
              }
              @keyframes glyffHoloSweep {
                0% { transform: translate3d(-42%, -18%, 0) rotate(0deg); opacity: 0.1; }
                45% { opacity: 0.4; }
                100% { transform: translate3d(42%, 18%, 0) rotate(180deg); opacity: 0.12; }
              }
              @keyframes glyffHoloScan {
                0% { background-position: 0 0, 0 0; }
                100% { background-position: 0 66px, 160px 0; }
              }
            `}
          </style>

          {outsideSection === "menu" ? (
            <>
              <p
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[0.8rem] font-semibold uppercase tracking-[0.24em] text-[#dbe7ff] md:text-[0.95rem]"
                style={{ animation: "outsideCorePulse 6.8s ease-in-out infinite" }}
              >
                {uiCopy.siteName}
              </p>

              {outsideSection === "menu" ? (
                <button
                  ref={outsideFilmMenuButtonRef}
                  type="button"
                  onClick={onOutsideFilmRoomEnter}
                  className="pointer-events-auto absolute text-left text-sm font-semibold uppercase tracking-[0.18em] text-[#dbe7ff] transition hover:text-white md:text-base"
                  style={{
                    textShadow: "0 0 16px rgba(160,190,255,0.55)",
                    transform: "translate(-50%, -50%)",
                    left: "-9999px",
                    top: "-9999px",
                    opacity: 0,
                    visibility: "hidden",
                  }}
                >
                  <span className="relative inline-block">
                    {uiCopy.outsideVideos}
                  </span>
                </button>
              ) : null}

              {outsideSection === "menu" ? (
                <button
                  type="button"
                  onClick={() => setOutsideSection("signatures")}
                  className="pointer-events-auto absolute left-1/2 top-1/2 translate-x-[6.8rem] -translate-y-[1.4rem] text-left text-sm font-semibold uppercase tracking-[0.18em] text-[#dbe7ff] transition hover:text-white md:translate-x-[14.2rem] md:-translate-y-[2.2rem] md:text-base"
                  style={{ textShadow: "0 0 16px rgba(160,190,255,0.55)" }}
                >
                  <span className="inline-block" style={{ animation: "outsideLinkFloatB 8.8s ease-in-out infinite" }}>
                    {uiCopy.outsideSignatures}
                  </span>
                </button>
              ) : null}

            </>
          ) : null}

          {outsideSection !== "menu" ? (
            <div
              className="pointer-events-auto absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(22,36,58,0.75),rgba(4,8,18,0.96)_70%)]"
            >
              <div className="absolute left-4 right-4 top-20 z-20 mx-auto w-full max-w-6xl md:left-8 md:right-8 md:top-24">
                <button
                  type="button"
                  onClick={() => setOutsideSection("menu")}
                  className="mb-4 rounded-full border border-[#8eaed7]/40 bg-[#0b1324]/70 px-4 py-2 text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-[#dbe7ff] transition hover:bg-[#101d35]"
                >
                  {uiCopy.outsideBack}
                </button>

                {outsideSection === "videos" ? (
                  <>
                    <h2 className="text-xl font-semibold uppercase tracking-[0.2em] text-[#e7f1ff] md:text-2xl">
                      {uiCopy.outsideVideosTitle}
                    </h2>
                  </>
                ) : null}
                {outsideSection === "signatures" ? (
                  <>
                    <h2 className="text-xl font-semibold uppercase tracking-[0.2em] text-[#e7f1ff] md:text-2xl">
                      {uiCopy.outsideSignaturesTitle}
                    </h2>
                  </>
                ) : null}
                {outsideSection === "news" ? (
                  <>
                    <h2 className="text-xl font-semibold uppercase tracking-[0.2em] text-[#e7f1ff] md:text-2xl">
                      {uiCopy.outsideNewsTitle}
                    </h2>
                    <p className="mt-2 text-sm text-[#b8cbe6] md:text-base">{uiCopy.outsideNewsBody}</p>
                  </>
                ) : null}
                {outsideSection === "glyphwall" ? (
                  <>
                    <h2 className="text-xl font-semibold uppercase tracking-[0.2em] text-[#e7f1ff] md:text-2xl">
                      {uiCopy.outsideGlyphWallTitle}
                    </h2>
                    {uiCopy.outsideGlyphWallBody ? (
                      <p className="mt-2 max-w-4xl text-sm leading-relaxed text-[#b8cbe6] md:text-base">
                        {uiCopy.outsideGlyphWallBody}
                      </p>
                    ) : null}
                  </>
                ) : null}
              </div>

              {outsideSection === "signatures" ? (
                <div className="absolute inset-x-4 bottom-14 top-[15.5rem] mx-auto w-full max-w-6xl md:inset-x-8 md:top-64">
                  <form
                    onSubmit={onSignatureContactSubmit}
                    className="max-w-2xl rounded-2xl border border-[#8fb5e8]/38 bg-[#0b1629]/82 p-4 shadow-[0_16px_40px_rgba(0,0,0,0.42)] md:p-6"
                  >
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                      <label className="block">
                        <span className="text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[#98b7e5]">
                          {language === "nb" ? "Navn" : "Name"}
                        </span>
                        <input
                          type="text"
                          required
                          autoComplete="name"
                          value={signatureContactName}
                          onChange={(event) => setSignatureContactName(event.target.value)}
                          className="mt-1 w-full rounded-lg border border-[#86a8d8]/30 bg-[#071022]/85 px-3 py-2 text-sm text-[#e9f1ff] outline-none ring-[#95bbf3]/60 transition focus:ring-2"
                        />
                      </label>
                      <label className="block">
                        <span className="text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[#98b7e5]">
                          {language === "nb" ? "E-post" : "Email"}
                        </span>
                        <input
                          type="email"
                          required
                          autoComplete="email"
                          value={signatureContactEmail}
                          onChange={(event) => setSignatureContactEmail(event.target.value)}
                          className="mt-1 w-full rounded-lg border border-[#86a8d8]/30 bg-[#071022]/85 px-3 py-2 text-sm text-[#e9f1ff] outline-none ring-[#95bbf3]/60 transition focus:ring-2"
                        />
                      </label>
                    </div>
                    <label className="mt-3 block">
                      <span className="text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[#98b7e5]">
                        {language === "nb" ? "Melding" : "Message"}
                      </span>
                      <textarea
                        required
                        rows={5}
                        value={signatureContactMessage}
                        onChange={(event) => setSignatureContactMessage(event.target.value)}
                        className="mt-1 w-full resize-y rounded-lg border border-[#86a8d8]/30 bg-[#071022]/85 px-3 py-2 text-sm text-[#e9f1ff] outline-none ring-[#95bbf3]/60 transition focus:ring-2"
                      />
                    </label>
                    <button
                      type="submit"
                      className="mt-4 rounded-full border border-[#8fb5e8]/55 bg-[#122742]/85 px-5 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[#e4efff] transition hover:bg-[#17365a]"
                    >
                      {language === "nb" ? "Send melding" : "Send message"}
                    </button>
                  </form>
                </div>
              ) : null}

              {outsideSection === "news" ? (
                <div className="absolute inset-x-4 bottom-8 top-[15.5rem] mx-auto w-full max-w-6xl overflow-auto rounded-2xl border border-[#93b4df]/25 bg-[#071226]/68 p-4 md:inset-x-8 md:top-64 md:p-6">
                  {outsideNewsLoading ? (
                    <p className="text-sm text-[#b8cbe6]">{uiCopy.outsideNewsLoading}</p>
                  ) : null}
                  {!outsideNewsLoading && outsideNewsError ? (
                    <p className="text-sm text-[#ffb6b6]">{outsideNewsError}</p>
                  ) : null}
                  {!outsideNewsLoading && !outsideNewsError && outsideNewsItems.length === 0 ? (
                    <p className="text-sm text-[#b8cbe6]">{uiCopy.outsideNewsEmpty}</p>
                  ) : null}
                  {!outsideNewsLoading && !outsideNewsError && outsideNewsItems.length > 0 ? (
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                      {outsideNewsItems.map((item) => {
                        const timestamp = Date.parse(item.published_at);
                        const dateLabel = Number.isFinite(timestamp)
                          ? formatOutsideNewsDate.format(new Date(timestamp))
                          : item.published_at;
                        return (
                          <article
                            key={`${item.url}-${item.title}`}
                            className="rounded-xl border border-[#8aa9d3]/20 bg-[#0b162c]/80 p-4"
                          >
                            <p className="text-[0.62rem] uppercase tracking-[0.15em] text-[#8fb4e8]">
                              {item.source}{dateLabel ? ` · ${dateLabel}` : ""}
                            </p>
                            <h3 className="mt-1 text-base font-semibold leading-tight text-[#e4efff]">
                              {item.title}
                            </h3>
                            {item.snippet ? (
                              <p className="mt-2 text-sm leading-relaxed text-[#bbcee9]">{item.snippet}</p>
                            ) : null}
                            <a
                              href={item.url}
                              target="_blank"
                              rel="noreferrer"
                              className="mt-3 inline-block text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[#9fc6ff] transition hover:text-white"
                            >
                              {language === "nb" ? "Åpne sak" : "Open story"}
                            </a>
                          </article>
                        );
                      })}
                    </div>
                  ) : null}
                </div>
              ) : null}

              {outsideSection === "glyphwall" ? (
                <div className="absolute inset-x-4 bottom-8 top-[15.5rem] mx-auto w-full max-w-6xl md:inset-x-8 md:top-64">
                  <section
                    className="relative h-full"
                    data-rl-story-version="rl-story-v1"
                    data-rl-story-name="replacement-anxiety-pattern"
                  >
                    <div className="relative h-full overflow-auto">
                      <div className="grid grid-cols-3 gap-y-6 pb-6 sm:grid-cols-4 md:grid-cols-6 md:gap-y-7 lg:grid-cols-8 xl:grid-cols-10">
                        {glyphWallItems.map((item) => (
                          <article
                            key={item.id}
                            className="relative flex items-center justify-center"
                            data-rl-story-index={item.index + 1}
                            data-rl-canonical={item.canonical}
                            data-rl-id={item.id}
                            data-rl-phase={item.phase}
                          >
                            <div
                              className="relative h-[7rem] w-[7rem] overflow-hidden rounded-full border border-[#86b5eb]/34"
                              style={{
                                background:
                                  "radial-gradient(circle_at_42%_38%,rgba(122,213,255,0.26),rgba(13,27,52,0.94)_66%), radial-gradient(circle_at_75%_82%,rgba(43,163,255,0.16),rgba(0,0,0,0)_58%)",
                                animation:
                                  item.index % 3 === 0
                                    ? "glyffFloatA 7.8s ease-in-out infinite, glyffHoloPulse 6.6s ease-in-out infinite, glyffHoloTwinkle 4.9s ease-in-out infinite"
                                    : item.index % 3 === 1
                                      ? "glyffFloatB 9.2s ease-in-out infinite, glyffHoloPulse 7.4s ease-in-out infinite, glyffHoloTwinkle 5.3s ease-in-out infinite"
                                      : "glyffFloatC 8.4s ease-in-out infinite, glyffHoloPulse 6.9s ease-in-out infinite, glyffHoloTwinkle 5.1s ease-in-out infinite",
                                animationDelay: `${(item.index % 11) * 0.16}s, ${(item.index % 7) * 0.21}s, ${(item.index % 5) * 0.27}s`,
                              }}
                            >
                              {item.previewDataUrl ? (
                                <div className="relative h-full w-full overflow-hidden rounded-full bg-[#11213c]">
                                  <img
                                    src={item.previewDataUrl}
                                    alt={`Glyff ${item.index + 1}`}
                                    className="absolute inset-0 h-full w-full object-cover mix-blend-screen"
                                    style={{
                                      opacity: 0.88,
                                      filter: "saturate(1.48) hue-rotate(8deg) contrast(1.12)",
                                    }}
                                    loading="lazy"
                                  />
                                  <div
                                    className="pointer-events-none absolute inset-0 rounded-full"
                                    style={{
                                      background:
                                        "radial-gradient(circle_at_20%_18%,rgba(204,240,255,0.26),rgba(204,240,255,0)_42%), radial-gradient(circle_at_82%_79%,rgba(0,0,0,0.28),rgba(0,0,0,0)_56%)",
                                    }}
                                  />
                                  <div
                                    className="pointer-events-none absolute rounded-full"
                                    style={{
                                      inset: "-34%",
                                      background:
                                        "conic-gradient(from 0deg, rgba(128,250,255,0) 0deg, rgba(128,250,255,0.36) 72deg, rgba(123,170,255,0.06) 148deg, rgba(128,250,255,0) 260deg)",
                                      mixBlendMode: "screen",
                                      animation: "glyffHoloSweep 7.1s linear infinite",
                                      animationDelay: `${(item.index % 9) * 0.31}s`,
                                    }}
                                  />
                                  <div
                                    className="pointer-events-none absolute inset-0 rounded-full"
                                    style={{
                                      background:
                                        "repeating-linear-gradient(180deg, rgba(151,228,255,0.16) 0px, rgba(151,228,255,0.16) 1px, rgba(10,18,34,0) 1px, rgba(10,18,34,0) 4px), linear-gradient(135deg, rgba(77,236,255,0.18) 0%, rgba(77,236,255,0) 54%)",
                                      mixBlendMode: "screen",
                                      opacity: 0.38,
                                      animation: "glyffHoloScan 2.7s linear infinite",
                                    }}
                                  />
                                  <div
                                    className="pointer-events-none absolute rounded-full"
                                    style={{
                                      inset: "1px",
                                      border: "1px solid rgba(164,238,255,0.52)",
                                      boxShadow:
                                        "0 0 18px rgba(131,237,255,0.28), inset 0 0 12px rgba(110,221,255,0.22)",
                                    }}
                                  />
                                </div>
                              ) : (
                                <div className="h-full w-full rounded-full bg-[#11213c]" />
                              )}
                            </div>
                            <span className="sr-only">{item.canonical}</span>
                          </article>
                        ))}
                      </div>
                    </div>
                    <pre className="sr-only" data-rl-story-payload>
                      {glyphWallPayloadJson}
                    </pre>
                  </section>
                </div>
              ) : null}

              {outsideSection === "videos" ? (
                <div
                  className="absolute inset-x-4 bottom-10 top-[15.5rem] mx-auto flex w-full max-w-6xl items-center justify-center md:inset-x-8 md:top-52"
                  onWheel={onVideoRoomWheel}
                  onTouchStart={onVideoRoomTouchStart}
                  onTouchEnd={onVideoRoomTouchEnd}
                >
                  <div className="relative h-[min(92vw,47rem)] w-[min(98vw,76rem)] [perspective:760px] [perspective-origin:50%_56%]">
                    <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-black" />
                    <div className="pointer-events-none absolute inset-0 rounded-[2rem] shadow-[inset_0_0_120px_rgba(0,0,0,0.92)]" />
                    <p className="absolute left-1/2 top-1 -translate-x-1/2 text-[0.62rem] font-semibold uppercase tracking-[0.15em] text-[#e5e7eb]">
                      {videoRoomIndex + 1} / {HEX_VIDEO_ROOM_SOURCES.length}
                    </p>
                    <div className="absolute left-1/2 top-1/2 h-[1.05rem] w-[1.05rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/90 shadow-[0_0_10px_rgba(255,255,255,0.35)]" />
                    <div
                      className="absolute left-1/2 top-1/2 h-full w-full [transform-style:preserve-3d]"
                      style={{
                        transform: `translate(-50%, -50%) translateZ(${HEX_VIDEO_VIEWER_PUSH_REM.toFixed(3)}rem) rotateY(${-videoRoomIndex * VIDEO_ROOM_STEP_ANGLE}deg)`,
                        transition: "transform 420ms cubic-bezier(0.22,0.61,0.36,1)",
                      }}
                    >
                      <div
                        className="absolute left-1/2 top-1/2 border border-white/10"
                        style={{
                          width: `${HEX_VIDEO_FLOOR_CEILING_SIZE_REM.toFixed(3)}rem`,
                          height: `${HEX_VIDEO_FLOOR_CEILING_SIZE_REM.toFixed(3)}rem`,
                          transform: `translate(-50%, -50%) translateY(${HEX_VIDEO_FLOOR_CEILING_OFFSET_REM.toFixed(3)}rem) rotateX(90deg)`,
                          background: "linear-gradient(180deg, rgba(0,0,0,0.98) 0%, rgba(0,0,0,1) 100%)",
                          boxShadow: "none",
                        }}
                      />
                      <div
                        className="absolute left-1/2 top-1/2 border border-white/8"
                        style={{
                          width: `${HEX_VIDEO_FLOOR_CEILING_SIZE_REM.toFixed(3)}rem`,
                          height: `${HEX_VIDEO_FLOOR_CEILING_SIZE_REM.toFixed(3)}rem`,
                          transform: `translate(-50%, -50%) translateY(-${HEX_VIDEO_FLOOR_CEILING_OFFSET_REM.toFixed(3)}rem) rotateX(-90deg)`,
                          background: "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.96) 100%)",
                        }}
                      />
                      {HEX_VIDEO_ROOM_SOURCES.map((videoItem, index) => (
                        <div
                          key={`outer-wall-${videoItem.video}-${index}`}
                          className="pointer-events-none absolute left-1/2 top-1/2 border border-[#c4e1ff]/80 bg-[#0d223f]/76"
                          style={{
                            width: `${HEX_VIDEO_OUTER_WALL_WIDTH_REM.toFixed(3)}rem`,
                            height: `${HEX_VIDEO_OUTER_WALL_HEIGHT_REM.toFixed(3)}rem`,
                            transform: `translate(-50%, -50%) rotateY(${index * 60 + HEX_VIDEO_OUTER_WALL_YAW_OFFSET_DEG}deg) translateZ(-${HEX_VIDEO_OUTER_ROOM_APOTHEM_REM.toFixed(3)}rem)`,
                            backfaceVisibility: "hidden",
                            boxShadow:
                              "0 0 0 1px rgba(211,235,255,0.75), 0 0 26px rgba(120,193,255,0.56), inset 0 0 44px rgba(110,186,255,0.32), 0 24px 46px rgba(0,0,0,0.62)",
                            background:
                              "linear-gradient(132deg, rgba(194,228,255,0.28) 0%, rgba(38,85,143,0.72) 36%, rgba(7,14,28,0.92) 100%)",
                            opacity: 0.96,
                          }}
                        />
                      ))}
                      {HEX_VIDEO_ROOM_SOURCES.map((videoItem, index) => (
                        <div
                          key={`outer-corner-${videoItem.video}-${index}`}
                          className="pointer-events-none absolute left-1/2 top-1/2 bg-[#d7ecff]/86"
                          style={{
                            width: `${HEX_VIDEO_OUTER_CORNER_POST_WIDTH_REM.toFixed(3)}rem`,
                            height: `${(HEX_VIDEO_OUTER_WALL_HEIGHT_REM + 1.6).toFixed(3)}rem`,
                            transform: `translate(-50%, -50%) rotateY(${index * 60 + 30}deg) translateZ(-${HEX_VIDEO_OUTER_CORNER_RADIUS_REM.toFixed(3)}rem)`,
                            boxShadow:
                              "0 0 30px rgba(172,220,255,0.98), 0 0 62px rgba(107,187,255,0.68)",
                            opacity: 0.94,
                          }}
                        />
                      ))}
                      {HEX_VIDEO_ROOM_SOURCES.map((videoItem, index) => (
                        <div
                          key={`${videoItem.video}-${index}`}
                          className="absolute left-1/2 top-1/2 overflow-hidden border border-white/10 bg-black shadow-[0_22px_44px_rgba(0,0,0,0.86)]"
                          style={{
                            width: `${(HEX_VIDEO_WALL_WIDTH_REM + HEX_VIDEO_WALL_OVERLAP_REM).toFixed(3)}rem`,
                            height: `${HEX_VIDEO_WALL_HEIGHT_REM}rem`,
                            transform: `translate(-50%, -50%) rotateY(${index * 60}deg) translateZ(-${HEX_VIDEO_ROOM_APOTHEM_REM.toFixed(3)}rem)`,
                            backfaceVisibility: "hidden",
                          }}
                        >
                          <video
                            ref={(node) => {
                              videoRoomRefs.current[index] = node;
                            }}
                            src={videoItem.video}
                            poster={videoItem.poster}
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="metadata"
                            className="h-full w-full object-cover"
                            style={{ pointerEvents: "none" }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
