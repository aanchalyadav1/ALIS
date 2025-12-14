export default function HeroOrb() {
  return (
    <div className="relative w-72 h-72 sm:w-80 sm:h-80">
      {/* Glow */}
      <div className="absolute inset-0 rounded-3xl bg-cyan-400/20 blur-3xl" />

      {/* Frame */}
      <div className="relative w-full h-full rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center">
        
        {/* Orb */}
        <div className="relative w-40 h-40 rounded-full bg-cyan-500 shadow-[0_0_80px_rgba(34,211,238,0.5)]">
          <div className="absolute inset-0 rounded-full animate-pulse bg-cyan-400/30" />
        </div>
      </div>
    </div>
  );
}
