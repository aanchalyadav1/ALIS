import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function AICore() {
  const coreRef = useRef();

  useFrame((state, delta) => {
    if (!coreRef.current) return;

    // Slow, premium rotation (NOT demo-fast)
    coreRef.current.rotation.y += delta * 0.15;
    coreRef.current.rotation.x += delta * 0.05;

    // Gentle floating motion
    coreRef.current.position.y =
      Math.sin(state.clock.elapsedTime * 0.8) * 0.08;
  });

  return (
    <mesh ref={coreRef} scale={1.3}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial
        color="#38bdf8"
        emissive="#22d3ee"
        emissiveIntensity={0.35}
        roughness={0.35}
        metalness={0.55}
      />
    </mesh>
  );
}
