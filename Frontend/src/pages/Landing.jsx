import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import HeroOrb from "../components/landing/HeroOrb";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen pt-24 pb-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* VisionCoders */}
          <p className="text-xs tracking-[0.3em] uppercase text-amber-400/80">
            VisionCoders presents
          </p>

          {/* TITLE — TWO TIER */}
          <h1 className="leading-tight">
            <span className="block text-4xl sm:text-5xl xl:text-6xl font-semibold text-white">
              ALIS — <span className="text-cyan-400">Agentic Loan</span>
            </span>
            <span className="block mt-2 text-3xl sm:text-4xl xl:text-5xl font-medium text-slate-300">
              Intelligence System
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="max-w-xl text-base sm:text-lg text-slate-400 leading-relaxed">
            ALIS is a multi-agent loan intelligence platform that understands
            user intent, evaluates financial context, and explains eligibility,
            affordability, and approval logic — before any application is submitted.
          </p>

          {/* CTA */}
          <div className="flex gap-4 pt-2">
            <button
              onClick={() => navigate("/chat")}
              className="px-7 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 transition 
                         font-medium text-black shadow-lg shadow-cyan-500/20"
            >
              Talk to ALIS
            </button>

            <button
              onClick={() => navigate("/about")}
              className="px-7 py-3 rounded-lg border border-white/20 
                         hover:border-white/40 transition text-white/80"
            >
              About the system
            </button>
          </div>
        </motion.div>

        {/* RIGHT — ORB */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center lg:justify-end"
        >
          <HeroOrb />
        </motion.div>
      </div>

      {/* TRUST STRIP */}
      <div className="mt-20 border-t border-white/10 pt-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center text-sm text-slate-500">
          <span>Multi-Agent Reasoning</span>
          <span>Context-Aware Intelligence</span>
          <span>Compliance-Aware Logic</span>
          <span>No Forced Applications</span>
        </div>
      </div>
    </div>
  );
}
