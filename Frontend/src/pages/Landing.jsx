import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function Landing() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl">
        <div>
          <h1 className="text-4xl font-bold mb-4">Agentic Loan Intelligence System</h1>
          <p className="text-white/70">
            AI-powered loan eligibility, underwriting, and sanction intelligence for India.
          </p>
        </div>
        <Canvas className="h-64">
          <ambientLight />
          <mesh rotation={[1, 1, 0]}>
            <boxGeometry />
            <meshStandardMaterial color="#38bdf8" />
          </mesh>
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
    </section>
  );
}
