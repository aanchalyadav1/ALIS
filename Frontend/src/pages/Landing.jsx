import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import HeroOrb from "../components/HeroOrb";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-[calc(100vh-64px)] bg-[#05060a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT — TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Brand */}
          <p className="text-[12px] tracking-[0.4em] text-amber-300 mb-4 uppercase">
            VisionCoders Presents
          </p>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-white">
            ALIS —{" "}
            <span className="text-cyan-400">Agentic Loan</span>{" "}
            <span className="text-slate-300 block mt-1">
              Intelligence System
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-lg text-slate-300 text-sm leading-relaxed">
            ALIS is an agent-driven loan intelligence platform that understands
            user intent, evaluates financial context, and guides decisions
            through eligibility, affordability, and approval logic — before any
            application is submitted.
          </p>

          {/* CTA */}
          <div className="mt-8 flex gap-4">
            <button
              onClick={() => navigate("/chat")}
              className="px-6 py-2.5 rounded-xl bg-cyan-500 text-black text-sm font-medium hover:bg-cyan-400 transition"
            >
              Talk to ALIS
            </button>

            <button
              onClick={() => navigate("/about")}
              className="px-6 py-2.5 rounded-xl border border-white/15 text-slate-400 text-sm hover:text-white hover:border-white/30 transition"
            >
              Learn how it works
            </button>
          </div>
        </motion.div>

        {/* RIGHT — ORB */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center"
        >
          <HeroOrb />
        </motion.div>
      </div>

      {/* VALUE STRIP */}
      <div className="max-w-6xl mx-auto px-6 mt-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-[11px] uppercase tracking-wider text-slate-400">
          <span>Agent-Guided Decisions</span>
          <span>Context-Aware Intelligence</span>
          <span>RBI-Aware Logic</span>
          <span>No Forced Applications</span>
        </div>
      </div>
    </div>
  );
}
