import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import AICore from "./aicore.jsx";

export default function HeroScene() {
  return (
    <div className="w-full h-[320px] md:h-[380px] lg:h-[420px]">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 50 }}
        dpr={[1, 1.5]}
      >
        <Suspense fallback={null}>

          {/* Soft ambient light */}
          <ambientLight intensity={0.6} />

          {/* Main highlight */}
          <pointLight
            position={[4, 4, 4]}
            intensity={1.2}
            color="#38bdf8"
          />

          {/* Rim light */}
          <pointLight
            position={[-4, -2, 2]}
            intensity={0.6}
            color="#22d3ee"
          />

          <AICore />

        </Suspense>
      </Canvas>
    </div>
  );
}
