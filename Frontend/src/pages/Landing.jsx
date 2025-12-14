import { motion } from "framer-motion";
import HeroScene from "../components/three/HeroScene";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* ===== HERO SECTION ===== */}
      <section className="relative pt-28 pb-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT — TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <p className="text-sm tracking-widest text-cyan-400 uppercase">
              VisionCoders presents
            </p>

            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-semibold leading-tight">
              ALIS — <span className="text-cyan-400">Agentic Loan</span>
              <br />
              Intelligence System
            </h1>

            <p className="text-base sm:text-lg text-white/70 max-w-xl">
              Loans can be confusing.  
              ALIS helps you understand eligibility, risk, and approval —
              step by step — using AI-powered multi-agent intelligence
              built for India.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => navigate("/chat")}
                className="px-7 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 transition font-medium text-black"
              >
                Start with ALIS
              </button>

              <button
                onClick={() => navigate("/about")}
                className="px-7 py-3 rounded-lg border border-white/15 hover:border-white/30 transition text-white/80"
              >
                How it works
              </button>
            </div>
          </motion.div>

          {/* RIGHT — AI CORE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
              <HeroScene />
              <p className="mt-4 text-center text-sm text-white/60">
                ALIS Core Intelligence Engine
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== TRUST STRIP ===== */}
      <section className="border-t border-b border-white/10 bg-black/30">
        <div className="max-w-6xl mx-auto px-6 py-6 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center text-sm text-white/70">
          <span>AI-Driven</span>
          <span>India-First Lending</span>
          <span>RBI-Aware Logic</span>
          <span>Secure by Design</span>
        </div>
      </section>

      {/* ===== HOW ALIS WORKS ===== */}
      <section className="pt-24 pb-28 px-6">
        <div className="max-w-6xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-semibold">
              How ALIS Works
            </h2>
            <p className="mt-4 text-white/60 max-w-2xl mx-auto">
              ALIS uses multiple specialized AI agents to guide you
              through the complete loan journey — clearly, securely,
              and intelligently.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Understand",
                desc: "ALIS listens to your loan intent, income, and financial context.",
              },
              {
                title: "Verify",
                desc: "PAN, income, and document checks with fraud awareness.",
              },
              {
                title: "Underwrite",
                desc: "AI-driven eligibility and risk classification for Indian profiles.",
              },
              {
                title: "Guide",
                desc: "Clear guidance and sanction-style insights you can trust.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-6"
              >
                <h3 className="font-medium text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-white/60">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="pb-28 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto text-center rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-transparent backdrop-blur p-12"
        >
          <h2 className="text-3xl font-semibold">
            Experience AI-Powered Loan Intelligence
          </h2>
          <p className="mt-4 text-white/60">
            Whether you’re a student, salaried professional, or business owner,
            ALIS helps you make confident loan decisions.
          </p>

          <button
            onClick={() => navigate("/chat")}
            className="mt-8 px-8 py-4 rounded-lg bg-cyan-500 hover:bg-cyan-400 transition font-medium text-black"
          >
            Start your loan journey
          </button>
        </motion.div>
      </section>

    </div>
  );
                      }
