import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import HeroOrb from "../components/landing/HeroOrb";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="relative bg-[#05060a] text-white overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="max-w-7xl mx-auto px-6 pt-28 pb-32 grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Brand label */}
          <p className="text-[11px] tracking-[0.35em] uppercase text-amber-400/70 mb-4">
            VisionCoders Presents
          </p>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
            <span className="text-white">ALIS — </span>
            <span className="text-cyan-400">Agentic Loan</span>{" "}
            <span className="text-slate-200">Intelligence System</span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-slate-400">
            ALIS is an agent-driven loan intelligence platform that understands
            intent, evaluates financial context, and guides users through
            eligibility, affordability, and approval logic — before any
            application is submitted.
          </p>

          {/* CTA */}
          <div className="mt-10 flex gap-4">
            <button
              onClick={() => navigate("/chat")}
              className="px-6 py-3 rounded-xl bg-cyan-500 text-black text-sm font-medium hover:bg-cyan-400 transition"
            >
              Talk to ALIS
            </button>

            <button
              onClick={() => navigate("/about")}
              className="px-6 py-3 rounded-xl border border-white/10 text-slate-300 text-sm hover:bg-white/5 transition"
            >
              Learn how it works
            </button>
          </div>
        </motion.div>

        {/* RIGHT ORB */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <HeroOrb />
        </motion.div>
      </section>

      {/* ================= VALUE STRIP ================= */}
      <section className="border-t border-white/5 py-8">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center text-[11px] tracking-wide text-slate-500">
          <div>Agent-Guided Decisions</div>
          <div>Context-Aware Intelligence</div>
          <div>RBI-Aware Logic</div>
          <div>No Forced Applications</div>
        </div>
      </section>
    </div>
  );
}
