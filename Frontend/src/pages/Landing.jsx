import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import HeroOrb from "../components/landing/HeroOrb";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="relative overflow-hidden bg-[#05060a] text-white">
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[calc(100vh-64px)] flex items-center">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          
          {/* LEFT — TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm tracking-widest text-cyan-400 mb-4">
              VISIONCODERS PRESENTS
            </p>

            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold leading-tight">
              ALIS —{" "}
              <span className="text-cyan-400">AI Loan</span>
              <br />
              Intelligence for India
            </h1>

            <p className="mt-6 max-w-xl text-slate-400 text-base leading-relaxed">
              Loans shouldn’t feel confusing or risky.  
              ALIS helps you understand eligibility, affordability, and approval
              logic <span className="text-white">before</span> you apply.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => navigate("/chat")}
                className="px-6 py-3 rounded-xl bg-cyan-500 text-black font-medium hover:bg-cyan-400 transition"
              >
                Talk to ALIS
              </button>

              <button
                onClick={() => navigate("/about")}
                className="px-6 py-3 rounded-xl border border-white/15 text-slate-200 hover:bg-white/5 transition"
              >
                Learn how it works
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
      </section>

      {/* ================= TRUST STRIP ================= */}
      <section className="border-t border-white/5 bg-black/30">
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            "AI-Guided",
            "India-First",
            "RBI-Aware",
            "No Forced Applications"
          ].map((item) => (
            <div
              key={item}
              className="text-sm text-slate-400 tracking-wide"
            >
              {item}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
