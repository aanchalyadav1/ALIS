import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import HeroOrb from "../components/landing/HeroOrb";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen pt-24 pb-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          {/* Micro Brand */}
          <p className="text-xs tracking-[0.35em] uppercase text-white/50">
            VisionCoders presents
          </p>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl xl:text-6xl font-semibold leading-[1.15] text-white">
            ALIS —
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-400">
              Agentic Loan
            </span>{" "}
            <span className="text-white/85">
              Intelligence System
            </span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-white/75 max-w-xl leading-relaxed">
            ALIS is a multi-agent AI system that understands user intent,
            evaluates financial context, and explains loan eligibility,
            affordability, and approval logic —
            <span className="text-white">
              {" "}before any application is submitted.
            </span>
          </p>

          {/* CTA */}
          <div className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={() => navigate("/chat")}
              className="px-7 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 transition font-medium text-black"
            >
              Talk to ALIS
            </button>

            <button
              onClick={() => navigate("/about")}
              className="px-7 py-3 rounded-lg border border-white/20 hover:border-white/40 transition text-white/80"
            >
              About the system
            </button>
          </div>
        </motion.div>

        {/* RIGHT ORB */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="flex justify-center lg:justify-end"
        >
          <HeroOrb />
        </motion.div>
      </div>

      {/* TRUST STRIP */}
      <div className="mt-24 border-t border-white/10 pt-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center text-sm text-white/60">
          <span>Multi-Agent Reasoning</span>
          <span>Context-Aware Intelligence</span>
          <span>Compliance-Aware Logic</span>
          <span>No Forced Applications</span>
        </div>
      </div>
    </div>
  );
    }
