export default function HeroOrb() {
  return (
    <div className="relative w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center">
      
      {/* Ambient glow */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-400/20 via-indigo-400/10 to-transparent blur-3xl" />

      {/* Core */}
      <div className="relative w-36 h-36 rounded-full bg-gradient-to-br from-cyan-400 to-indigo-500 flex items-center justify-center shadow-[0_0_60px_rgba(99,102,241,0.45)]">
        <span className="text-black font-semibold tracking-[0.25em] text-xl">
          VC
        </span>
      </div>

      {/* Label */}
      <div className="absolute bottom-4 text-xs tracking-widest text-white/40">
        VisionCoders Core
      </div>
    </div>
  );
}
