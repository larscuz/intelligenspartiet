import { useEffect, useRef } from "react";

import { HackerSwarm } from "@/lib/hackerSwarm";

export function HackerSignalField() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mountNode = mountRef.current;
    if (!mountNode) return undefined;

    const swarm = new HackerSwarm(mountNode, {
      transparent: true,
      speed: 1,
    });

    return () => {
      swarm.dispose();
    };
  }, []);

  return (
    <section className="pointer-events-none absolute inset-0">
      <div className="absolute left-1/2 top-[52%] h-[min(68vh,42rem)] w-[min(78vw,54rem)] -translate-x-1/2 -translate-y-1/2 md:h-[min(72vh,46rem)] md:w-[min(74vw,58rem)]">
        <div ref={mountRef} className="pointer-events-auto absolute inset-0" />
      </div>
    </section>
  );
}
