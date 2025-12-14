import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import HeroOrb from "../components/landing/HeroOrb";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="relative overflow-hidden bg-[#05060a] text-white">
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-32 grid md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs tracking-widest text-cyan-400 mb-3">
            VISIONCODERS PRESENTS
          </p>

          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            ALIS —{" "}
            <span className="text-cyan-400">
              Agentic Loan Intelligence System
            </span>
          </h1>

          <p className="mt-5 text-slate-400 max-w-xl">
            ALIS is an agent-driven loan intelligence platform that understands
            your intent, verifies financial context, and guides you through
            eligibility, affordability, and approval logic — before you apply.
          </p>

          <div className="mt-8 flex gap-4">
            <button
              onClick={() => navigate("/chat")}
              className="px-6 py-3 rounded-xl bg-cyan-500 text-black font-medium hover:bg-cyan-400 transition"
            >
              Talk to ALIS
            </button>

            <button
              onClick={() => navigate("/about")}
              className="px-6 py-3 rounded-xl border border-white/10 text-slate-300 hover:bg-white/5 transition"
            >
              Learn how it works
            </button>
          </div>
        </motion.div>

        {/* RIGHT ORB */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <HeroOrb />
        </motion.div>
      </section>

      {/* VALUE STRIP */}
      <section className="border-t border-white/5 py-8">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center text-xs text-slate-400">
          <div>Agent-Guided Decisions</div>
          <div>Context-Aware Intelligence</div>
          <div>RBI-Aware Logic</div>
          <div>No Forced Applications</div>
        </div>
      </section>
    </div>
  );
}
