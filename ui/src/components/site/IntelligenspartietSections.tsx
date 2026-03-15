import { DepthCard } from "./DepthCard";

const POSITIONING = [
  {
    kicker: "Politisk Akse",
    title: "Fremdrift uten teknologisk naivitet",
    text: "Vi er verken anti-teknologi eller ukritisk AI-optimisme. Vi krever konkret samfunnsverdi, etterprøvbarhet og tydelig ansvar når systemer påvirker folk.",
  },
  {
    kicker: "AI-Ekspertise",
    title: "Kompetanse i modellene, konsekvensene og styringen",
    text: "Partiet måles på evnen til å forstå både modellkvalitet, dataflyt, sikkerhet, økonomi og arbeidslivseffekt. Politikken skal være teknisk realistisk og sosialt robust.",
  },
  {
    kicker: "Mandat",
    title: "Fra uro til navigasjon i et historisk skifte",
    text: "Fra utsiden er det vanskelig å se hvordan samfunnet skal styre denne endringen. Vår rolle er å gjøre retningen lesbar: hva som må bygges, reguleres og beskyttes først.",
  },
];

const FRAMEWORK = [
  {
    step: "01",
    title: "Forstå skiftet",
    text: "Løpende risikobilde for arbeid, kultur, offentlig sektor og demokratiske beslutninger.",
  },
  {
    step: "02",
    title: "Bygg institusjoner",
    text: "AI-tilsyn, ansvarsstandarder, datakrav og nasjonal beredskap som faktisk kan håndheves.",
  },
  {
    step: "03",
    title: "Flytt gevinster til folk",
    text: "Produktivitetsvekst må kobles til omstilling, opplæring, trygghet og bred demokratisk kontroll.",
  },
];

export function IntelligenspartietSections() {
  return (
    <div className="relative bg-[#090604] text-[#f1e8dc]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(100%_80%_at_50%_0%,rgba(174,123,58,0.16),rgba(174,123,58,0)_55%)]" />

      <section className="relative mx-auto w-full max-w-[1240px] px-6 py-16 md:px-10 md:py-24">
        <div className="max-w-3xl">
          <p className="text-[0.72rem] uppercase tracking-[0.24em] text-[#c9b08b]">
            Politisk posisjonering
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-[0.01em] text-[#f7ede0] md:text-5xl">
            Et AI-parti som kan styre virkeligheten, ikke bare kommentere den.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#dcccba] md:text-lg">
            Intelligenspartiet skal være en styringskraft i en tid der kunstig
            intelligens endrer tempo, makt og arbeidsdeling raskere enn
            institusjonene våre rekker å svare.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:mt-14 md:grid-cols-3">
          {POSITIONING.map((item) => (
            <DepthCard
              key={item.title}
              kicker={item.kicker}
              title={item.title}
              text={item.text}
            />
          ))}
        </div>
      </section>

      <section className="relative border-y border-white/10 bg-[#100a07]/70">
        <div className="mx-auto grid w-full max-w-[1240px] gap-10 px-6 py-16 md:px-10 md:py-20 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <p className="text-[0.72rem] uppercase tracking-[0.24em] text-[#c9b08b]">
              Seachange Navigator
            </p>
            <h3 className="mt-3 text-2xl font-semibold leading-tight text-[#f5ebdf] md:text-4xl">
              Fra utsiden er skiftet uleselig. Politikkens jobb er å gjøre det
              styrbart.
            </h3>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-[#d9cab7] md:text-base">
              Vi bruker en enkel styringslogikk: først kartlegge effekt og
              risiko, deretter bygge institusjoner som kan håndheve ansvar, og
              til slutt fordele gevinstene slik at tillit og legitimitet varer.
            </p>
          </div>

          <ol className="space-y-4">
            {FRAMEWORK.map((item) => (
              <li
                key={item.step}
                className="rounded-2xl border border-white/10 bg-[#17100c]/75 p-5 shadow-[0_14px_30px_rgba(0,0,0,0.28)]"
              >
                <p className="text-xs tracking-[0.16em] text-[#d2b486]">
                  FASE {item.step}
                </p>
                <h4 className="mt-1 text-lg font-semibold text-[#f2e8da]">
                  {item.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-[#d7c7b2]">
                  {item.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-[1240px] px-6 py-16 md:px-10 md:py-20">
        <div className="rounded-3xl border border-[#d6b37f]/35 bg-[linear-gradient(160deg,rgba(208,157,93,0.14),rgba(19,13,9,0.82))] p-7 md:p-10">
          <p className="text-[0.72rem] uppercase tracking-[0.24em] text-[#d8be98]">
            Neste trekk
          </p>
          <h3 className="mt-3 text-2xl font-semibold leading-tight text-[#f7ecdf] md:text-4xl">
            Norge trenger en politisk AI-kapasitet med både teknisk og
            samfunnsmessig tyngde.
          </h3>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[#e0d0bc] md:text-base">
            Intelligenspartiet posisjonerer seg for å levere dette: tydelig
            retning, etterprøvbar kompetanse og ansvarlige grep for et samfunn i
            omforming.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#"
              className="inline-flex min-h-11 items-center rounded-full border border-[#dfc099]/60 bg-[#d4b07a]/16 px-6 text-sm font-medium uppercase tracking-[0.08em] text-[#f8ecdb] transition-colors hover:bg-[#d4b07a]/28"
            >
              Se prosjektet
            </a>
            <a
              href="#"
              className="inline-flex min-h-11 items-center rounded-full border border-white/20 bg-black/25 px-6 text-sm font-medium uppercase tracking-[0.08em] text-[#f0e4d1] transition-colors hover:bg-black/45"
            >
              Les mer
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
