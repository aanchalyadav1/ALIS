import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function AICore() {
  const ref = useRef();

  useFrame((_, delta) => {
    ref.current.rotation.y += delta * 0.25;
    ref.current.rotation.x += delta * 0.1;
  });

  return (
    <mesh ref={ref} scale={1.4}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial
        color="#38bdf8"
        emissive="#22d3ee"
        emissiveIntensity={0.6}
        roughness={0.3}
        metalness={0.6}
      />
    </mesh>
  );
}
