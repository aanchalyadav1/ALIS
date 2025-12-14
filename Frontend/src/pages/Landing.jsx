
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import HeroScene from "../components/three/HeroScene";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen pt-28 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT — MESSAGE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <p className="text-xs tracking-widest text-cyan-400 uppercase">
            VisionCoders presents
          </p>

          <h1 className="text-4xl sm:text-5xl xl:text-6xl font-semibold leading-tight">
            ALIS — <span className="text-cyan-400">AI Loan</span><br />
            Intelligence for India
          </h1>

          <p className="text-base sm:text-lg text-white/70 max-w-xl">
            Loans shouldn’t feel confusing or risky.
            ALIS helps you understand eligibility, affordability,
            and approval logic <span className="text-white">before</span> you apply.
          </p>

          <div className="flex gap-4 pt-2">
            <button
              onClick={() => navigate("/chat")}
              className="px-7 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 transition font-medium text-black"
            >
              Talk to ALIS
            </button>

            <button
              onClick={() => navigate("/about")}
              className="px-7 py-3 rounded-lg border border-white/15 hover:border-white/30 transition text-white/80"
            >
              Learn how it works
            </button>
          </div>
        </motion.div>

        {/* RIGHT — AI CORE (SUBTLE) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
            <HeroScene />
            <p className="mt-4 text-center text-xs text-white/50">
              ALIS Core Intelligence Engine
            </p>
          </div>
        </motion.div>
      </div>

      {/* TRUST STRIP */}
      <div className="mt-24 border-t border-white/10 pt-8">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center text-sm text-white/60">
          <span>AI-Guided</span>
          <span>India-First</span>
          <span>RBI-Aware</span>
          <span>No Forced Applications</span>
        </div>
      </div>
    </div>
  );
}
