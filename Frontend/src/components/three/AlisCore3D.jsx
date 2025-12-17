
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";

function Core() {
  return (
    <mesh>
      <sphereGeometry args={[1.2, 64, 64]} />
      <meshStandardMaterial
        color="#22d3ee"
        emissive="#22d3ee"
        emissiveIntensity={0.4}
      />
    </mesh>
  );
}

function Agent({ position, color }) {
  return (
    <mesh position={position}>
      <sphereGeometry args={[0.25, 32, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export default function AlisCore3D() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full h-[320px] md:h-[420px] rounded-2xl overflow-hidden bg-black/40 border border-white/10"
    >
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[5, 5, 5]} intensity={1.2} />

        {/* ALIS CORE */}
        <Core />

        {/* AGENTS */}
        <Agent position={[2, 0, 0]} color="#38bdf8" />
        <Agent position={[-2, 0, 0]} color="#22c55e" />
        <Agent position={[0, 2, 0]} color="#facc15" />
        <Agent position={[0, -2, 0]} color="#f97316" />

        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.8} />
      </Canvas>
    </motion.div>
  );
}
