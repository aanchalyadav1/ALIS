
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HeroScene from "../components/three/HeroScene";

export default function Landing() {
  return (
    <main className="relative">

      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#020617] to-[#020617]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.15),transparent_40%)]" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <p className="text-cyan-400 uppercase tracking-widest text-sm">
                VisionCoders presents
              </p>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                ALIS
              </h1>

              <h2 className="text-lg md:text-xl text-white/80">
                Agentic Loan Intelligence System for India
              </h2>

              <p className="text-white/60 max-w-xl">
                From ₹5,000 to crores — ALIS helps individuals, students, and
                businesses understand loan eligibility, risk, and approval
                pathways using AI-powered underwriting intelligence.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link to="/chat">
                  <button className="px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 transition font-medium text-black">
                    Check Loan Eligibility
                  </button>
                </Link>

                <a href="#how-it-works">
                  <button className="px-6 py-3 rounded-lg border border-white/20 hover:border-cyan-400 transition">
                    How it works
                  </button>
                </a>
              </div>
            </motion.div>

            {/* RIGHT 3D FRAME */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
                <HeroScene />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= TRUST STRIP ================= */}
      <section className="border-t border-white/10 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center gap-8 text-sm text-white/60">
          <span>AI-Driven</span>
          <span>India-First Lending</span>
          <span>RBI-Aware Logic</span>
          <span>Secure by Design</span>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section
        id="how-it-works"
        className="py-24 max-w-7xl mx-auto px-6"
      >
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold text-center mb-16"
        >
          How ALIS Works
        </motion.h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Understand",
              desc: "ALIS understands loan intent, income and financial context."
            },
            {
              title: "Verify",
              desc: "PAN, income and document checks with fraud awareness."
            },
            {
              title: "Underwrite",
              desc: "AI-driven eligibility and risk classification."
            },
            {
              title: "Guide",
              desc: "Clear guidance and sanction-style insights."
            }
          ].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl bg-white/5 border border-white/10 p-6 backdrop-blur"
            >
              <h4 className="text-lg font-medium mb-2">
                {step.title}
              </h4>
              <p className="text-sm text-white/60">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-24 text-center border-t border-white/10">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold mb-6"
        >
          Experience AI-Powered Loan Intelligence
        </motion.h3>

        <Link to="/chat">
          <button className="px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition font-semibold text-black">
            Start with ALIS
          </button>
        </Link>
      </section>
    </main>
  );
}
