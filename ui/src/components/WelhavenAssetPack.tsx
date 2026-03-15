export function WelhavenAssetPack() {
  const base = "/assets/welhaven_android";

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-2xl md:text-3xl font-bold text-white">
          Welhaven Android — Asset Pack
        </h1>
        <p className="text-white/70">
          Turnaround, head/neck details, and material sheets for Spline + UI work.
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-white">Turnaround</h2>
        <img
          src={`${base}/welhaven_turnaround_v2.png`}
          alt="Welhaven android turnaround"
          className="w-full rounded-lg border border-white/10 bg-white/5"
          loading="lazy"
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-white">Head + Neck Details</h2>
        <img
          src={`${base}/welhaven_head_detail_v1.png`}
          alt="Welhaven android head detail sheet"
          className="w-full rounded-lg border border-white/10 bg-white/5"
          loading="lazy"
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-white">Materials</h2>
        <img
          src={`${base}/welhaven_materials_v1.png`}
          alt="Welhaven android materials sheet"
          className="w-full rounded-lg border border-white/10 bg-white/5"
          loading="lazy"
        />
      </section>
    </div>
  );
}
