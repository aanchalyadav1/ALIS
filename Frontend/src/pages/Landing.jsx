import { useNavigate } from "react-router-dom";
import HeroOrb from "../components/landing/HeroOrb";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[calc(100vh-64px)] bg-[#05060a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          {/* VisionCoders */}
          <p className="text-xs tracking-[0.35em] uppercase text-amber-400 font-medium mb-5">
            VisionCoders Presents
          </p>

          {/* HERO TITLE */}
          <h1 className="leading-tight">
            <span className="block text-4xl md:text-5xl lg:text-6xl font-semibold text-white">
              ALIS —
            </span>

            <span className="block mt-1 text-4xl md:text-5xl lg:text-6xl font-semibold bg-gradient-to-r from-cyan-400 to-sky-400 bg-clip-text text-transparent">
              Agentic Loan
            </span>

            <span className="block mt-1 text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-200">
              Intelligence System
            </span>
          </h1>

          {/* SUBTITLE */}
          <p className="mt-6 max-w-xl text-slate-400 text-sm md:text-base leading-relaxed">
            ALIS is a multi-agent loan intelligence platform that understands user
            intent, evaluates financial context, and explains eligibility,
            affordability, and approval logic — before any application is
            submitted.
          </p>

          {/* CTA BUTTONS */}
          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={() => navigate("/chat")}
              className="px-6 py-3 rounded-xl bg-cyan-500/90 hover:bg-cyan-500 text-black text-sm font-semibold transition"
            >
              Talk to ALIS
            </button>

            <button
              onClick={() => navigate("/about")}
              className="px-6 py-3 rounded-xl border border-white/15 text-slate-200 hover:bg-white/5 text-sm transition"
            >
              About the system
            </button>
          </div>

          {/* FEATURE STRIP */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 text-xs text-slate-400">
            <div>Multi-Agent Reasoning</div>
            <div>Context-Aware Intelligence</div>
            <div>Compliance-Aware Logic</div>
            <div>No Forced Applications</div>
          </div>
        </div>

        {/* RIGHT ORB */}
        <div className="flex justify-center lg:justify-end mt-10 lg:mt-0">
          <HeroOrb />
        </div>
      </div>
    </section>
  );
}
