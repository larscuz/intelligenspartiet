import { useEffect, useRef } from "react";
import type { ReactNode } from "react";

type DepthCardProps = {
  title: string;
  text: string;
  kicker?: string;
  children?: ReactNode;
};

export function DepthCard({ title, text, kicker, children }: DepthCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const allowMotionRef = useRef(true);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointerFine = window.matchMedia("(pointer: fine)");

    const apply = () => {
      allowMotionRef.current = !reduced.matches && pointerFine.matches;
    };

    apply();
    reduced.addEventListener("change", apply);
    pointerFine.addEventListener("change", apply);

    return () => {
      reduced.removeEventListener("change", apply);
      pointerFine.removeEventListener("change", apply);
    };
  }, []);

  const handleMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!allowMotionRef.current || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    const rx = (0.5 - y) * 5.5;
    const ry = (x - 0.5) * 6.5;

    cardRef.current.style.setProperty("--rx", `${rx.toFixed(2)}deg`);
    cardRef.current.style.setProperty("--ry", `${ry.toFixed(2)}deg`);
    cardRef.current.style.setProperty("--glow-x", `${(x * 100).toFixed(2)}%`);
    cardRef.current.style.setProperty("--glow-y", `${(y * 100).toFixed(2)}%`);
  };

  const handleLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.setProperty("--rx", "0deg");
    cardRef.current.style.setProperty("--ry", "0deg");
    cardRef.current.style.setProperty("--glow-x", "50%");
    cardRef.current.style.setProperty("--glow-y", "50%");
  };

  return (
    <article
      ref={cardRef}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#15100c]/80 p-6 shadow-[0_20px_45px_rgba(0,0,0,0.35)] backdrop-blur-sm transition-transform duration-300 [--glow-x:50%] [--glow-y:50%] [--rx:0deg] [--ry:0deg] [transform:perspective(1100px)_rotateX(var(--rx))_rotateY(var(--ry))] md:p-7"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(200px_140px_at_var(--glow-x)_var(--glow-y),rgba(219,170,104,0.16),rgba(219,170,104,0)_70%)]" />
      {kicker ? (
        <p className="relative text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[#d4b992]">
          {kicker}
        </p>
      ) : null}
      <h3 className="relative mt-2 text-xl font-semibold tracking-[0.01em] text-[#f3eadf]">
        {title}
      </h3>
      <p className="relative mt-3 text-sm leading-relaxed text-[#dccfbc] md:text-base">
        {text}
      </p>
      {children ? <div className="relative mt-5">{children}</div> : null}
    </article>
  );
}
