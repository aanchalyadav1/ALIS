export default function HeroOrb() {
  return (
    <div className="relative w-72 h-72 sm:w-80 sm:h-80">
      {/* Outer Glow */}
      <div className="absolute inset-0 rounded-3xl bg-cyan-400/20 blur-3xl" />

      {/* Glass Frame */}
      <div className="relative w-full h-full rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center">
        
        {/* Orb */}
        <div className="relative w-44 h-44 rounded-full bg-cyan-500 shadow-[0_0_90px_rgba(34,211,238,0.55)] flex items-center justify-center">
          
          {/* Soft pulse */}
          <div className="absolute inset-0 rounded-full animate-pulse bg-cyan-400/30" />

          {/* TEXT INSIDE ORB */}
          <div className="relative text-center">
            <div className="text-black font-bold text-xl tracking-wide">
              ALIS
            </div>
            <div className="text-black/80 text-xs tracking-widest mt-1">
              AI CORE
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
