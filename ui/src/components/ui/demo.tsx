import { SplineScene } from "@/components/ui/spline";
import { Card } from "@/components/ui/card";

export function SplineSceneDemo() {
  return (
    <Card className="w-full h-[500px] bg-black/[0.96] relative overflow-hidden">
      <div className="flex h-full">
        {/* Left content */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Interactive 3D Experience
          </h1>
          <p className="text-gray-300 text-lg max-w-lg">
            Bring your UI to life with beautiful 3D scenes. This component
            combines Spline 3D with a modern UI overlay.
          </p>
        </div>

        {/* Right Spline Scene */}
        <div className="flex-1 relative">
          <SplineScene
            scene="https://prod.spline.design/your-scene-url/scene.splinecode"
            className="h-full w-full border-0 bg-transparent"
          />
        </div>
      </div>
    </Card>
  );
}
