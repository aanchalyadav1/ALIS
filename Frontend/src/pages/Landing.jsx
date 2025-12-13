import HeroScene from "../components/three/HeroScene";

export default function Landing() {
  return (
    <section className="min-h-screen grid md:grid-cols-2 items-center px-8">
      <div>
        <img src="/robot_bg.png" className="h-24 mb-4" />
        <h1 className="text-4xl font-bold">ALIS</h1>
        <p className="opacity-70 mt-2">
          Agentic Loan Intelligence System for India
        </p>
      </div>
      <HeroScene />
    </section>
  );
}
