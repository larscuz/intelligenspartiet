import { Suspense } from "react";
import Spline from "@splinetool/react-spline";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";

type SplineSceneProps = {
  scene: string;
  className?: string;
};

export function SplineScene({ scene, className }: SplineSceneProps) {
  return (
    <Card className={`relative overflow-hidden ${className ?? ""}`}>
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="relative h-full w-full">
        <Suspense
          fallback={
            <div className="absolute inset-0 grid place-items-center">
              <span className="loader" />
            </div>
          }
        >
          <Spline scene={scene} />
        </Suspense>
      </div>
    </Card>
  );
}
