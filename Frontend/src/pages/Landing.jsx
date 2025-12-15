import { useAuth } from "../context/AuthContext";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HeroOrb from "../components/landing/HeroOrb";

const scenarios = [
  { title: "Student planning higher studies", subtitle: "Education loan options" },
  { title: "Family buying a home", subtitle: "Home loan eligibility" },
  { title: "Professional upgrading lifestyle", subtitle: "Car & personal loans" },
  { title: "Founder scaling a startup", subtitle: "Business loan readiness" },
];

export default function Landing() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % scenarios.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen pt-28 pb-20 px-6 overflow-hidden bg-[#05060a]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* BRAND */}
          <p className="text-xs tracking-widest uppercase text-violet-400">
            VisionCoders presents
          </p>

          {/* TITLE */}
          <h1 className="text-4xl sm:text-5xl xl:text-6xl font-semibold leading-tight">
            <span className="block text-white">
              ALIS — Agentic Loan
            </span>
            <span className="block text-cyan-400">
              Intelligence System
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="text-base sm:text-lg text-white/70 max-w-xl">
            AI-powered multi-agent loan intelligence that explains eligibility,
            risk, and sanction logic{" "}
            <span className="text-white">before</span> you apply.
          </p>

          {/* SCENARIO SLIDER */}
          <div className="relative h-14 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="absolute"
              >
                <p className="text-sm font-medium text-emerald-400">
                  {scenarios[index].title}
                </p>
                <p className="text-xs text-white/50">
                  {scenarios[index].subtitle}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* CTA — AUTH AWARE */}
          {!user ? (
            <div className="flex flex-wrap gap-4 pt-6">
              <button
                onClick={() => navigate("/chat")}
                className="px-8 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition font-semibold text-black"
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
            </div>
          ) : (
            <div className="flex gap-4 pt-6">
              <button
                onClick={() => navigate("/dashboard")}
                className="px-8 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition font-semibold text-black"
              >
                Go to Dashboard
              </button>

              <button
                onClick={() => navigate("/profile")}
                className="px-7 py-3 rounded-xl border border-white/20 hover:border-white/40 transition text-white/90"
              >
                Profile
              </button>
            </div>
          )}
        </motion.div>

        {/* RIGHT — HERO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
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
