import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HeroOrb from "../components/landing/HeroOrb";

const contexts = [
  "Student exploring education loan eligibility",
  "Salaried professional checking home loan affordability",
  "Business owner analyzing credit risk",
  "Founder planning expansion capital",
];

export default function Landing() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % contexts.length);
    }, 3200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative min-h-screen pt-24 pb-28 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* ================= LEFT CONTENT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* VC identity */}
          <p className="text-sm tracking-[0.35em] uppercase text-slate-400">
            VisionCoders presents
          </p>

          {/* Two-tier Title */}
          <h1 className="font-semibold leading-tight">
            <span className="block text-4xl sm:text-5xl xl:text-6xl text-white">
              ALIS — Agentic Loan
            </span>
            <span className="block text-3xl sm:text-4xl xl:text-5xl text-cyan-400">
              Intelligence System
            </span>
          </h1>

          {/* Dynamic Context */}
          <div className="h-7">
            <AnimatePresence mode="wait">
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="text-sm sm:text-base text-violet-300"
              >
                {contexts[index]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg text-white/65 max-w-xl">
            ALIS is an agent-based AI platform that helps users understand
            eligibility, affordability, and approval logic
            <span className="text-white"> before applying</span>.
          </p>

          {/* VC × ALIS line */}
          <p className="text-sm text-slate-400">
            An agentic AI system built by <span className="text-white">VisionCoders</span>.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap gap-4 pt-3">
            <button
              onClick={() => navigate("/chat")}
              className="px-8 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 transition font-medium text-black"
            >
              Talk to ALIS
            </button>

            <button
              onClick={() => navigate("/about")}
              className="px-8 py-3 rounded-lg border border-white/20 hover:border-white/40 transition text-white/80"
            >
              About the System
            </button>
          </div>
        </motion.div>

        {/* ================= RIGHT HERO ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative mx-auto max-w-sm rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">

            {/* VC label */}
            <div className="mb-3 text-center text-xs tracking-widest text-slate-400 uppercase">
              VisionCoders
            </div>

            <HeroOrb />

            <p className="mt-4 text-center text-xs text-white/50">
              Agentic Intelligence Core
            </p>
          </div>
        </motion.div>
      </div>

      {/* ================= TRUST STRIP ================= */}
      <div className="mt-24 border-t border-white/10 pt-8">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center text-sm text-white/60">
          <span>Agentic AI</span>
          <span>Guidance-first</span>
          <span>Explainable Logic</span>
          <span>Ethical by Design</span>
        </div>
      </div>
    </div>
  );
}
