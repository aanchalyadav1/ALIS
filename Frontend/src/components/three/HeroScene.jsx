import { Canvas } from "@react-three/fiber";
import AICore from "./AICore";

export default function HeroScene() {
  return (
    <div className="w-full h-[420px]">
      <Canvas camera={{ position: [0, 0, 4] }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[5, 5, 5]} />
        <AICore />
      </Canvas>
    </div>
  );
}
