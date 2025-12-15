import { useAuth } from "../context/AuthContext";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HeroOrb from "../components/landing/HeroOrb";

export default function Landing() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  const scenarios = [
    { title: "Student planning higher studies", subtitle: "Education loan options" },
    { title: "Family buying a home", subtitle: "Home loan eligibility" },
    { title: "Professional upgrading lifestyle", subtitle: "Car & personal loans" },
    { title: "Founder scaling a startup", subtitle: "Business loan readiness" },
  ];

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % scenarios.length);
    }, 3500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative min-h-screen pt-28 pb-20 px-6 bg-[#05060a]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <p className="text-xs tracking-widest uppercase text-violet-400">
            VisionCoders presents
          </p>

          <h1 className="text-5xl font-semibold">
            <span className="block text-white">ALIS — Agentic Loan</span>
            <span className="block text-cyan-400">Intelligence System</span>
          </h1>

          <p className="text-white/70 max-w-xl">
            AI-powered multi-agent loan intelligence that explains eligibility,
            risk, and sanction logic <span className="text-white">before</span> you apply.
          </p>

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-sm"
            >
              <p className="text-emerald-400 font-medium">
                {scenarios[index].title}
              </p>
              <p className="text-white/50">{scenarios[index].subtitle}</p>
            </motion.div>
          </AnimatePresence>

          {/* CTA — AUTH AWARE */}
          {!user ? (
            <div className="flex gap-4 pt-6">
              <button
                onClick={() => navigate("/chat")}
                className="px-8 py-3 rounded-xl bg-cyan-500 text-black font-semibold"
              >
                Continue as Guest
              </button>

              <button
                onClick={() => navigate("/login")}
                className="px-7 py-3 rounded-xl border border-white/20 text-white"
              >
                Login
              </button>

              <button
                onClick={() => navigate("/register")}
                className="px-7 py-3 rounded-xl border border-emerald-400 text-emerald-400"
              >
                Create Account
              </button>
            </div>
          ) : (
            <div className="flex gap-4 pt-6">
              <button
                onClick={() => navigate("/dashboard")}
                className="px-8 py-3 rounded-xl bg-cyan-500 text-black font-semibold"
              >
                Go to Dashboard
              </button>

              <button
                onClick={() => navigate("/profile")}
                className="px-7 py-3 rounded-xl border border-white/20 text-white"
              >
                Profile
              </button>
            </div>
          )}
        </motion.div>

        {/* RIGHT */}
        <HeroOrb />
      </div>
    </div>
  );
}
