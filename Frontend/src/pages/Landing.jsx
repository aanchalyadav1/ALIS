import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import HeroScene from "../components/three/HeroScene";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen bg-[#05060a] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-cyan-400 text-sm tracking-widest mb-3">
            VISIONCODERS PRESENTS
          </p>

          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            ALIS — <span className="text-cyan-400">AI Loan</span><br />
            Intelligence for India
          </h1>

          <p className="mt-5 text-white/70 max-w-xl">
            Loans shouldn’t feel confusing or risky. ALIS helps you understand
            eligibility, affordability, and approval logic before you apply.
          </p>

          <div className="mt-8 flex gap-4">
            <button
              onClick={() => navigate("/chat")}
              className="px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-semibold transition"
            >
              Talk to ALIS
            </button>

            <button
              onClick={() => navigate("/about")}
              className="px-6 py-3 rounded-lg border border-white/20 hover:border-cyan-400 transition"
            >
              Learn how it works
            </button>
          </div>
        </motion.div>

        {/* RIGHT – AI CORE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <div className="relative w-[300px] h-[300px] sm:w-[340px] sm:h-[340px] rounded-2xl 
            bg-white/5 backdrop-blur border border-white/10 shadow-xl
            before:absolute before:inset-0 before:rounded-2xl 
            before:bg-cyan-500/20 before:blur-3xl before:-z-10">
            <HeroScene />
          </div>
        </motion.div>
      </div>

      {/* TRUST STRIP */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-6 grid grid-cols-2 sm:grid-cols-4 text-center text-sm text-white/60">
          <span>AI-Guided</span>
          <span>India-First</span>
          <span>RBI-Aware</span>
          <span>No Forced Applications</span>
        </div>
      </div>
    </section>
  );
}
