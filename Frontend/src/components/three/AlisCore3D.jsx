import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Core() {
  return (
    <>
      <mesh>
        <sphereGeometry args={[1.2, 64, 64]} />
        <meshStandardMaterial color="#22d3ee" emissive="#0891b2" />
      </mesh>

      {[0, 1, 2, 3].map((i) => (
        <mesh key={i} position={[
          Math.cos((i * Math.PI) / 2) * 2,
          Math.sin((i * Math.PI) / 2) * 2,
          0
        ]}>
          <sphereGeometry args={[0.25, 32, 32]} />
          <meshStandardMaterial color="#94a3b8" />
        </mesh>
      ))}
    </>
  );
}

export default function AlisCore3D() {
  return (
    <div className="h-[320px] rounded-2xl overflow-hidden bg-black/40 border border-white/10">
      <Canvas camera={{ position: [0, 0, 6] }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[5, 5, 5]} />
        <Core />
        <OrbitControls enableZoom={false} autoRotate />
      </Canvas>
    </div>
  );
}
