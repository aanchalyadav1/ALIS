import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";

function Core() {
  return (
    <mesh>
      <sphereGeometry args={[1.2, 64, 64]} />
      <meshStandardMaterial
        color="#22d3ee"
        emissive="#22d3ee"
        emissiveIntensity={0.6}
        roughness={0.2}
      />
    </mesh>
  );
}

function AgentNode({ position }) {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh position={position}>
        <sphereGeometry args={[0.15, 32, 32]} />
        <meshStandardMaterial
          color="#67e8f9"
          emissive="#67e8f9"
          emissiveIntensity={1}
        />
      </mesh>
    </Float>
  );
}

export default function AlisCore3D() {
  return (
    <div className="w-full h-[420px] rounded-3xl overflow-hidden border border-cyan-400/20 bg-black">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={2} />

        <Core />

        {/* Agent Nodes */}
        <AgentNode position={[2, 0, 0]} />
        <AgentNode position={[-2, 0, 0]} />
        <AgentNode position={[0, 2, 0]} />
        <AgentNode position={[0, -2, 0]} />

        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
      </Canvas>
    </div>
  );
}
