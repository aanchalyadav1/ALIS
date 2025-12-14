export default function HeroOrb() {
  return (
    <div className="relative w-64 h-64 md:w-72 md:h-72">
      {/* Glow */}
      <div className="absolute inset-0 rounded-3xl bg-cyan-500/10 blur-2xl" />

      {/* Glass Card */}
      <div className="relative w-full h-full rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center">
        {/* Orb */}
        <div className="relative w-36 h-36 rounded-full bg-gradient-to-br from-cyan-400 to-sky-500 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full blur-xl bg-cyan-400/40 animate-pulse" />
          <span className="relative z-10 text-xl font-semibold tracking-wide text-black">
            VC
          </span>
        </div>
      </div>
    </div>
  );
}
