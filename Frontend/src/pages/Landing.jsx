import { useAuth } from "../context/AuthContext";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HeroOrb from "../components/landing/HeroOrb";

const scenarios = [
  {
    title: "Student planning higher studies",
    subtitle: "Exploring education loan options",
  },
  {
    title: "Family planning a new home",
    subtitle: "Checking home loan eligibility",
  },
  {
    title: "Professional upgrading lifestyle",
    subtitle: "Comparing car & personal loans",
  },
  {
    title: "Founder scaling a startup",
    subtitle: "Evaluating business loan readiness",
  },
];

export default function Landing() {
  const navigate = useNavigate();
  const { user } = useAuth(); // ✅ IMPORTANT
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % scenarios.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen pt-28 pb-20 px-6 overflow-hidden bg-[#05060a]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-9"
        >
          {/* BRAND */}
          <p className="text-xs tracking-[0.3em] uppercase text-violet-400/90">
            VisionCoders presents
          </p>

          {/* TITLE */}
          <h1 className="text-4xl sm:text-5xl xl:text-6xl font-semibold leading-[1.1]">
            <span className="block text-white">
              ALIS — Agentic Loan
            </span>
            <span className="block text-cyan-400">
              Intelligence System
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="text-base sm:text-lg text-white/70 max-w-xl leading-relaxed">
            ALIS is a{" "}
            <span className="text-white">
              multi-agent AI loan intelligence platform
            </span>{" "}
            that helps you understand eligibility, affordability, and approval
            logic <span className="text-white">before</span> you apply — built
            for real-world Indian lending.
          </p>

          {/* SCENARIO SLIDER */}
          <div className="relative h-16 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="absolute"
              >
                <p className="text-sm font-semibold text-emerald-400">
                  {scenarios[index].title}
                </p>
                <p className="text-xs text-white/50 mt-0.5">
                  {scenarios[index].subtitle}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* CTA BUTTONS — AUTH AWARE */}
          <div className="flex flex-wrap gap-4 pt-6">
            {!user ? (
              <>
                <button
                  onClick={() => navigate("/chat")}
                  className="px-8 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition font-semibold text-black shadow-lg shadow-cyan-500/20"
                >
                  Continue as Guest
                </button>

                <button
                  onClick={() => navigate("/login")}
                  className="px-7 py-3 rounded-xl border border-white/20 hover:border-white/40 transition text-white/90"
                >
                  Login
                </button>

                <button
                  onClick={() => navigate("/register")}
                  className="px-7 py-3 rounded-xl border border-emerald-400/40 hover:border-emerald-400 transition text-emerald-400"
                >
                  Create Account
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => navigate("/dashboard")}
                  className="px-8 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 transition font-semibold text-black shadow-lg shadow-emerald-500/20"
                >
                  Go to Dashboard
                </button>

                <button
                  onClick={() => navigate("/chat")}
                  className="px-7 py-3 rounded-xl border border-white/20 hover:border-white/40 transition text-white/90"
                >
                  Continue with ALIS
                </button>
              </>
            )}
          </div>
        </motion.div>

        {/* RIGHT — HERO ORB */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex justify-center"
        >
          <HeroOrb />
        </motion.div>
      </div>
    </div>
  );
}
