export default function HeroOrb() {
  return (
    <div className="relative w-72 h-72 sm:w-80 sm:h-80">

      {/* Outer cyan aura */}
      <div className="absolute inset-0 rounded-3xl bg-cyan-400/20 blur-3xl" />

      {/* Glass container */}
      <div className="relative w-full h-full rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center">

        {/* Orb */}
        <div className="relative w-44 h-44 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 shadow-[0_0_90px_rgba(34,211,238,0.55)] flex items-center justify-center">

          {/* Soft pulse */}
          <div className="absolute inset-0 rounded-full animate-pulse bg-cyan-300/30" />

          {/* VC Glyph */}
          <div className="relative text-center font-semibold tracking-widest text-white text-2xl">
            VC
          </div>
        </div>
      </div>
    </div>
  );
}
