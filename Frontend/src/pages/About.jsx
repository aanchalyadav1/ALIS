import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" },
};

export default function About() {
  return (
    <div className="relative min-h-screen pt-24 pb-24 px-6">
      <div className="max-w-6xl mx-auto space-y-24">

        {/* ===================== */}
        {/* HEADER */}
        {/* ===================== */}
        <motion.div
          {...fadeUp}
          className="text-center space-y-4"
        >
          <p className="text-xs tracking-widest uppercase text-cyan-400">
            About the Project
          </p>

          <h1 className="text-3xl sm:text-4xl xl:text-5xl font-semibold">
            ALIS — Agentic Loan
            <br />
            <span className="text-cyan-400">
              Intelligence System
            </span>
          </h1>

          <p className="text-white/60 max-w-3xl mx-auto text-base sm:text-lg">
            An AI-powered loan guidance platform built to help users
            understand eligibility, risk, and affordability
            <span className="text-white"> before applying</span>.
          </p>
        </motion.div>

        {/* ===================== */}
        {/* WHO WE ARE */}
        {/* ===================== */}
        <motion.section
          {...fadeUp}
          className="max-w-4xl mx-auto text-center space-y-6"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Who We Are — VisionCoders
          </h2>

          <p className="text-white/60 text-base sm:text-lg leading-relaxed">
            VisionCoders is a team focused on building intelligent systems
            that solve real-world problems with clarity, responsibility,
            and strong user experience.
          </p>

          <p className="text-white/60 text-base sm:text-lg leading-relaxed">
            We believe AI should not just automate decisions —
            <span className="text-white"> it should explain them</span>.
            That belief is the foundation of ALIS.
          </p>
        </motion.section>

        {/* ===================== */}
        {/* WHY ALIS */}
        {/* ===================== */}
        <motion.section
          {...fadeUp}
          className="max-w-4xl mx-auto text-center space-y-6"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Why We Built ALIS
          </h2>

          <p className="text-white/60 text-base sm:text-lg leading-relaxed">
            Most loan platforms focus on pushing applications,
            not on helping users understand whether a loan
            actually makes sense for them.
          </p>

          <p className="text-white/60 text-base sm:text-lg leading-relaxed">
            Users are often forced into decisions without clarity
            on eligibility, risk, or long-term impact.
          </p>

          <p className="text-white/60 text-base sm:text-lg leading-relaxed">
            <span className="text-white">ALIS changes that.</span>
            It listens first, reasons step-by-step,
            and guides users honestly — without pressure.
          </p>
        </motion.section>

        {/* ===================== */}
        {/* WHAT MAKES ALIS DIFFERENT */}
        {/* ===================== */}
        <motion.section
          {...fadeUp}
          className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            {
              title: "Agentic AI",
              desc: "Multiple specialized AI agents collaborate instead of a single chatbot.",
            },
            {
              title: "Guidance-first",
              desc: "Users understand eligibility and risk before applying.",
            },
            {
              title: "Explainable Decisions",
              desc: "Clear reasoning behind approvals or rejections.",
            },
            {
              title: "Ethical by Design",
              desc: "No forced selling, no dark patterns.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-6"
            >
              <h3 className="font-medium text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-white/60">
                {item.desc}
              </p>
            </div>
          ))}
        </motion.section>

        {/* ===================== */}
        {/* TECHNOLOGY STACK */}
        {/* ===================== */}
        <motion.section
          {...fadeUp}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Technology Behind ALIS
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-sm text-white/70">
            <div className="card p-4">React + Vite</div>
            <div className="card p-4">Tailwind CSS</div>
            <div className="card p-4">Framer Motion</div>
            <div className="card p-4">Node.js + Express</div>
            <div className="card p-4">Firebase (Auth & Storage)</div>
            <div className="card p-4">Groq LLM (Free Tier)</div>
          </div>
        </motion.section>

        {/* ===================== */}
        {/* FOOTER NOTE */}
        {/* ===================== */}
        <motion.div
          {...fadeUp}
          className="text-center text-xs tracking-widest text-white/40 pt-12"
        >
          Built by VisionCoders · Agentic AI · Guidance-first · Ethics-driven
        </motion.div>

      </div>
    </div>
  );
}
