import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import HeroOrb from "../components/landing/HeroOrb";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[calc(100vh-64px)] bg-[#05060a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-7"
        >
          {/* VisionCoders */}
          <p className="text-xs tracking-[0.35em] uppercase text-amber-400 font-medium">
            VisionCoders Presents
          </p>

          {/* TWO-TIER TITLE */}
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
            ALIS is a multi-agent loan intelligence platform that understands user
            intent, evaluates financial context, and explains eligibility,
            affordability, and approval logic — before any application is made.
          </p>

          {/* CTA */}
          <div className="flex gap-4 pt-4">
            <button
              onClick={() => navigate("/chat")}
              className="px-7 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition font-semibold text-black shadow-lg shadow-cyan-500/25"
            >
              Talk to ALIS
            </button>

            <button
              onClick={() => navigate("/about")}
              className="px-7 py-3 rounded-xl border border-white/20 hover:border-white/40 transition text-white/80"
            >
              About the system
            </button>
          </div>

          {/* TRUST STRIP */}
          <div className="pt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm text-slate-500">
            <span>Multi-Agent Reasoning</span>
            <span>Context-Aware AI</span>
            <span>Compliance-Aware</span>
            <span>No Forced Applications</span>
          </div>
        </motion.div>

        {/* RIGHT — HERO ORB WITH FLOAT ANIMATION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center lg:justify-end"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <HeroOrb />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
