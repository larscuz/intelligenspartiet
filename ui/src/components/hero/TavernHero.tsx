import { useEffect, useMemo, useRef } from "react";

const ENABLE_MICRO_EYES = false;

const HERO_COPY = {
  kicker: "Ingen trodde kunsten skulle gå først.",
  headline: "INTELLIGENSPARTIET",
  subtext:
    "Når intelligensen tar over kunsten, blir spørsmålet ikke om noe kan lages — men om noe fortsatt lever.",
  primaryCta: { label: "Se prosjektet", href: "#" },
  secondaryCta: { label: "Les mer", href: "#" },
};

const TAVERN_BASE = "/assets/tavern";

type LayerId =
  | "roomBase"
  | "patronsPrimary"
  | "patronsAtmosphere"
  | "henrik"
  | "eyeballs"
  | "irises"
  | "tableShadowStrip"
  | "tableForeground"
  | "aleMug";

type LayerConfig = {
  id: LayerId;
  src: string;
  alt: string;
  className: string;
  baseX: number;
  baseY: number;
  scale: number;
  pointerX: number;
  pointerY: number;
  scrollY: number;
  depthZ: number;
};

const LAYERS: LayerConfig[] = [
  {
    id: "roomBase",
    src: `${TAVERN_BASE}/room-base.png`,
    alt: "Empty 1830s tavern interior",
    className: "z-10",
    baseX: 0,
    baseY: 0,
    scale: 1.015,
    pointerX: 4,
    pointerY: 4,
    scrollY: 3,
    depthZ: 0,
  },
  {
    id: "patronsPrimary",
    src: `${TAVERN_BASE}/patrons-variant-b.png`,
    alt: "Distant tavern patrons",
    className: "z-20 opacity-[0.88] saturate-[0.96] contrast-[0.96]",
    baseX: 0,
    baseY: 4,
    scale: 1.03,
    pointerX: 7,
    pointerY: 8,
    scrollY: 7,
    depthZ: 14,
  },
  {
    id: "patronsAtmosphere",
    src: `${TAVERN_BASE}/deep-patrons-haze.png`,
    alt: "Tavern smoke and background figures",
    className:
      "z-[25] hidden md:block opacity-[0.3] blur-[0.35px] saturate-[0.9] contrast-[0.88]",
    baseX: 0,
    baseY: -2,
    scale: 1.04,
    pointerX: 6,
    pointerY: 7,
    scrollY: 9,
    depthZ: 18,
  },
  {
    id: "henrik",
    src: `${TAVERN_BASE}/henrik-base.png`,
    alt: "Henrik Wergeland at a tavern table",
    className: "z-30 drop-shadow-[0_20px_40px_rgba(0,0,0,0.45)]",
    baseX: -1,
    baseY: 2,
    scale: 1.05,
    pointerX: 13,
    pointerY: 15,
    scrollY: 12,
    depthZ: 24,
  },
  {
    id: "eyeballs",
    src: `${TAVERN_BASE}/eyeballs.png`,
    alt: "Henrik eye whites",
    className: "z-[36] hidden md:block",
    baseX: -1.25,
    baseY: 0.5,
    scale: 1.042,
    pointerX: 1.2,
    pointerY: 1.3,
    scrollY: 1.2,
    depthZ: 30,
  },
  {
    id: "irises",
    src: `${TAVERN_BASE}/irises.png`,
    alt: "Henrik irises",
    className: "z-[37] hidden md:block",
    baseX: -1.25,
    baseY: 0.45,
    scale: 1.042,
    pointerX: 1.8,
    pointerY: 2.1,
    scrollY: 1.6,
    depthZ: 32,
  },
  {
    id: "tableShadowStrip",
    src: `${TAVERN_BASE}/table-shadow-strip.png`,
    alt: "Near table shadow strip",
    className: "z-[40] hidden lg:block opacity-[0.5]",
    baseX: 0,
    baseY: 6,
    scale: 1.07,
    pointerX: 14,
    pointerY: 18,
    scrollY: 18,
    depthZ: 42,
  },
  {
    id: "tableForeground",
    src: `${TAVERN_BASE}/table-foreground.png`,
    alt: "Foreground table and hands",
    className: "z-[45]",
    baseX: 0,
    baseY: 7,
    scale: 1.06,
    pointerX: 18,
    pointerY: 21,
    scrollY: 20,
    depthZ: 50,
  },
  {
    id: "aleMug",
    src: `${TAVERN_BASE}/ale-mug.png`,
    alt: "Ale mug in the foreground",
    className: "z-50",
    baseX: 24,
    baseY: 13,
    scale: 1.28,
    pointerX: 27,
    pointerY: 32,
    scrollY: 31,
    depthZ: 68,
  },
];

const clamp = (value: number, min: number, max: number) =>
  Math.max(min, Math.min(max, value));

function getMotionFactor(width: number, reduced: boolean) {
  if (reduced) return 0.12;
  if (width < 768) return 0.28;
  if (width < 1024) return 0.6;
  return 1;
}

export function TavernHero() {
  const heroRef = useRef<HTMLElement | null>(null);
  const layerRefs = useRef<Partial<Record<LayerId, HTMLImageElement | null>>>(
    {},
  );

  const renderedLayers = useMemo(() => {
    return ENABLE_MICRO_EYES
      ? LAYERS
      : LAYERS.filter(
          (layer) => layer.id !== "eyeballs" && layer.id !== "irises",
        );
  }, []);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const target = { x: 0, y: 0, scroll: 0 };
    const current = { x: 0, y: 0, scroll: 0 };

    let rafId = 0;
    let rect = hero.getBoundingClientRect();
    let reduced = reducedMotionQuery.matches;
    let motionFactor = getMotionFactor(window.innerWidth, reduced);

    const refreshRect = () => {
      rect = hero.getBoundingClientRect();
    };

    const refreshMotionFactor = () => {
      motionFactor = getMotionFactor(window.innerWidth, reduced);
    };

    const updateScrollTarget = () => {
      const viewportHalf = window.innerHeight / 2 || 1;
      const heroCenter = rect.top + rect.height / 2;
      const normalized = clamp((viewportHalf - heroCenter) / viewportHalf, -1, 1);
      target.scroll = normalized;
    };

    const onPointerMove = (event: PointerEvent) => {
      if (reduced) return;
      if (window.innerWidth < 768) return;

      const x = clamp((event.clientX - rect.left) / rect.width, 0, 1);
      const y = clamp((event.clientY - rect.top) / rect.height, 0, 1);
      target.x = (x - 0.5) * 2;
      target.y = (y - 0.5) * 2;
    };

    const onPointerLeave = () => {
      target.x = 0;
      target.y = 0;
    };

    const onResize = () => {
      refreshRect();
      refreshMotionFactor();
      updateScrollTarget();
    };

    const onScroll = () => {
      refreshRect();
      updateScrollTarget();
    };

    const onReducedMotionChange = (event: MediaQueryListEvent) => {
      reduced = event.matches;
      refreshMotionFactor();
      if (reduced) {
        target.x = 0;
        target.y = 0;
      }
    };

    const render = () => {
      current.x += (target.x - current.x) * 0.09;
      current.y += (target.y - current.y) * 0.09;
      current.scroll += (target.scroll - current.scroll) * 0.075;

      renderedLayers.forEach((layer) => {
        const element = layerRefs.current[layer.id];
        if (!element) return;

        const driftX = current.x * layer.pointerX * motionFactor;
        const driftY =
          current.y * layer.pointerY * motionFactor +
          current.scroll * layer.scrollY * motionFactor;

        element.style.transform = `translate3d(calc(${layer.baseX}% + ${driftX.toFixed(
          2,
        )}px), calc(${layer.baseY}% + ${driftY.toFixed(2)}px), ${
          layer.depthZ
        }px) scale(${layer.scale})`;
      });

      rafId = window.requestAnimationFrame(render);
    };

    refreshRect();
    refreshMotionFactor();
    updateScrollTarget();

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    hero.addEventListener("pointerleave", onPointerLeave, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("blur", onPointerLeave);
    reducedMotionQuery.addEventListener("change", onReducedMotionChange);

    rafId = window.requestAnimationFrame(render);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("pointermove", onPointerMove);
      hero.removeEventListener("pointerleave", onPointerLeave);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("blur", onPointerLeave);
      reducedMotionQuery.removeEventListener("change", onReducedMotionChange);
    };
  }, [renderedLayers]);

  return (
    <section
      ref={heroRef}
      aria-label="Intelligenspartiet tavern hero"
      className="relative isolate w-full overflow-hidden bg-[#0c0907] text-[#f3ece2]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(110%_95%_at_50%_120%,rgba(0,0,0,0.64),rgba(0,0,0,0)_55%),linear-gradient(180deg,rgba(6,4,3,0.2),rgba(6,4,3,0.75))]" />

      <div className="relative h-[74svh] min-h-[460px] w-full max-w-[1920px] mx-auto md:h-[82svh] md:min-h-[620px]">
        <div className="absolute inset-0 overflow-hidden [perspective:1200px] [transform-style:preserve-3d]">
          {renderedLayers.map((layer) => (
            <img
              key={layer.id}
              ref={(el) => {
                layerRefs.current[layer.id] = el;
              }}
              src={layer.src}
              alt={layer.alt}
              loading={layer.id === "roomBase" || layer.id === "henrik" ? "eager" : "lazy"}
              className={`pointer-events-none absolute left-0 top-0 h-full w-full max-w-none object-cover will-change-transform ${layer.className}`}
            />
          ))}

          <div className="pointer-events-none absolute inset-0 z-[60] bg-[radial-gradient(120%_120%_at_85%_20%,rgba(247,206,139,0.18),rgba(247,206,139,0)_50%),radial-gradient(130%_120%_at_10%_90%,rgba(0,0,0,0.5),rgba(0,0,0,0)_45%)]" />
          <div className="pointer-events-none absolute inset-0 z-[65] bg-[linear-gradient(90deg,rgba(8,7,6,0.72)_0%,rgba(8,7,6,0.52)_34%,rgba(8,7,6,0.16)_60%,rgba(8,7,6,0.45)_100%)] md:bg-[linear-gradient(90deg,rgba(8,7,6,0.72)_0%,rgba(8,7,6,0.5)_40%,rgba(8,7,6,0.16)_66%,rgba(8,7,6,0.45)_100%)]" />
        </div>

        <div className="absolute inset-0 z-[80] flex items-center">
          <div className="mx-auto w-full max-w-[1320px] px-6 md:px-12 lg:px-16">
            <div className="max-w-xl space-y-5 md:space-y-6">
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.24em] text-[#d6c7af] md:text-xs">
                {HERO_COPY.kicker}
              </p>
              <h1 className="font-serif text-4xl font-semibold leading-[0.95] tracking-[0.02em] text-[#f7eee0] sm:text-5xl md:text-6xl lg:text-7xl">
                {HERO_COPY.headline}
              </h1>
              <p className="max-w-[52ch] text-sm leading-relaxed text-[#e5d8c7]/92 sm:text-base md:text-lg">
                {HERO_COPY.subtext}
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={HERO_COPY.primaryCta.href}
                  className="inline-flex min-h-11 items-center rounded-full border border-[#d6b482]/60 bg-[#cfad7a]/14 px-6 text-sm font-medium tracking-[0.08em] text-[#f4e6cf] transition-colors hover:bg-[#cfad7a]/25"
                >
                  {HERO_COPY.primaryCta.label}
                </a>
                <a
                  href={HERO_COPY.secondaryCta.href}
                  className="inline-flex min-h-11 items-center rounded-full border border-[#f0e4d0]/30 bg-black/25 px-6 text-sm font-medium tracking-[0.08em] text-[#eee2cf] transition-colors hover:bg-black/45"
                >
                  {HERO_COPY.secondaryCta.label}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
