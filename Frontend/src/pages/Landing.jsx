import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import HeroOrb from "../components/landing/HeroOrb";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[calc(100vh-64px)] bg-[#05060a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          {/* VisionCoders */}
          <p className="text-xs tracking-[0.3em] uppercase text-amber-300/80 mb-4">
            VisionCoders Presents
          </p>

          {/* TITLE */}
          <h1 className="leading-tight">
            <span className="block text-4xl md:text-5xl font-semibold text-white">
              ALIS —{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-sky-400 bg-clip-text text-transparent">
                Agentic
              </span>
            </span>
            <span className="block mt-2 text-4xl md:text-5xl font-semibold text-slate-200">
              Loan Intelligence System
            </span>
          </h1>

          {/* SUBTEXT */}
          <p className="mt-6 max-w-xl text-base md:text-lg text-slate-400 leading-relaxed">
            ALIS is a multi-agent loan intelligence platform that understands
            user intent, evaluates financial context, and explains eligibility,
            affordability, and approval logic — <span className="text-slate-300">
              before any application is submitted.
            </span>
          </p>

          {/* CTA */}
          <div className="mt-8 flex gap-4 flex-wrap">
            <button
              onClick={() => navigate("/chat")}
              className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-medium transition"
            >
              Talk to ALIS
            </button>

            <button
              onClick={() => navigate("/about")}
              className="px-6 py-3 rounded-xl border border-white/15 text-slate-300 hover:bg-white/5 transition"
            >
              About the system
            </button>
          </div>

          {/* TRUST POINTS */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-xs text-slate-400">
            <div>Multi-Agent Reasoning</div>
            <div>Context-Aware Intelligence</div>
            <div>Compliance-Aware Logic</div>
            <div>No Forced Applications</div>
          </div>
        </div>

        {/* RIGHT ORB */}
        <div className="flex justify-center lg:justify-end">
          <HeroOrb />
        </div>
      </div>
    </section>
  );
}
