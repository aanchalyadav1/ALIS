import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function AICore() {
  const mesh = useRef();

  useFrame((_, delta) => {
    mesh.current.rotation.y += delta * 0.25;
    mesh.current.rotation.x += delta * 0.1;
  });

  return (
    <mesh ref={mesh} scale={1.4}>
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
