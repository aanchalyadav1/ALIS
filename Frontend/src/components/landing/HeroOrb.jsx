export default function HeroOrb() {
  return (
    <div className="relative w-64 h-64 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center">
      
      {/* Glow */}
      <div className="absolute inset-0 rounded-3xl bg-cyan-400/20 blur-3xl" />

      {/* Orb */}
      <div className="relative w-36 h-36 rounded-full bg-cyan-500 flex items-center justify-center shadow-lg">
        <span className="text-white font-semibold tracking-[0.3em] text-xl">
          VC
        </span>
      </div>
    </div>
  );
}
