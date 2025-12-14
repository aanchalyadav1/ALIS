import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: "easeOut" },
};

export default function About() {
  return (
    <div className="relative min-h-screen pt-24 pb-32 px-6 bg-[#05060a]">
      <div className="max-w-6xl mx-auto space-y-28">

        {/* ================= HERO ================= */}
        <motion.section {...fadeUp} className="text-center space-y-6">
          <p className="text-xs tracking-widest uppercase text-cyan-400/80">
            About ALIS
          </p>

          <h1 className="font-semibold leading-tight">
            <span className="block text-4xl sm:text-5xl text-white">
              ALIS — Agentic Loan
            </span>
            <span className="block text-3xl sm:text-4xl text-cyan-400">
              Intelligence System
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-white/70 text-lg">
            ALIS is an agent-based AI platform designed to help users
            understand loan eligibility, affordability, and risk
            <span className="text-white"> before making decisions</span>.
          </p>
        </motion.section>

        {/* ================= VISIONCODERS ================= */}
        <motion.section {...fadeUp} className="space-y-6">
          <h2 className="text-2xl font-semibold">
            Built by <span className="text-cyan-400">VisionCoders</span>
          </h2>

          <p className="text-white/70 max-w-4xl leading-relaxed">
            VisionCoders is a product-focused team working at the intersection of
            artificial intelligence, user experience, and real-world problem solving.
          </p>

          <p className="text-white/60 max-w-4xl leading-relaxed">
            We believe AI systems should be transparent, explainable, and helpful —
            not just automated decision engines.  
            <span className="text-white"> ALIS is built on that philosophy.</span>
          </p>
        </motion.section>

        {/* ================= WHY ALIS ================= */}
        <motion.section {...fadeUp} className="space-y-10">
          <h2 className="text-2xl font-semibold">Why ALIS Exists</h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "Confusing Loan Journeys",
                desc: "Users often apply for loans without understanding eligibility, EMI burden, or rejection reasons.",
              },
              {
                title: "Opaque Decisions",
                desc: "Traditional systems approve or reject without explanation, causing mistrust.",
              },
              {
                title: "ALIS Approach",
                desc: "ALIS explains, guides, and reasons — before any application is submitted.",
              },
              {
                title: "Ethical First",
                desc: "No pressure, no forced applications, no dark patterns.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur p-6"
              >
                <h3 className="text-lg font-medium text-cyan-300 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-white/65 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ================= AGENT ARCHITECTURE ================= */}
        <motion.section {...fadeUp} className="space-y-10">
          <h2 className="text-2xl font-semibold">
            Agentic Intelligence Architecture
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Master Agent",
                role: "Understands intent and orchestrates all other agents.",
              },
              {
                name: "Verification Agent",
                role: "Analyzes documents, income proofs, and KYC completeness.",
              },
              {
                name: "Underwriting Agent",
                role: "Evaluates eligibility, risk profile, and loan affordability.",
              },
              {
                name: "Sanction Agent",
                role: "Generates approval logic and sanction-style summaries.",
              },
            ].map((agent, i) => (
              <div
                key={i}
                className="rounded-xl bg-gradient-to-b from-white/10 to-white/5 border border-white/10 p-6"
              >
                <h3 className="font-medium text-white mb-2">
                  {agent.name}
                </h3>
                <p className="text-sm text-white/60">
                  {agent.role}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ================= TECHNOLOGY ================= */}
        <motion.section {...fadeUp} className="space-y-10">
          <h2 className="text-2xl font-semibold text-center">
            Technology Powering <span className="text-cyan-400">ALIS</span>
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-center">
            {[
              { name: "React", note: "Modular UI" },
              { name: "Tailwind CSS", note: "Design consistency" },
              { name: "Node.js", note: "Backend runtime" },
              { name: "Express", note: "API layer" },
              { name: "Firebase", note: "Auth & storage" },
              { name: "Groq LLM", note: "Low-latency AI" },
            ].map((tech) => (
              <div
                key={tech.name}
                className="rounded-xl bg-white/5 border border-white/10 backdrop-blur p-5"
              >
                <div className="text-base font-semibold text-cyan-300">
                  {tech.name}
                </div>
                <div className="text-xs text-white/50 mt-1">
                  {tech.note}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ================= FOOTER ================= */}
        <motion.div
          {...fadeUp}
          className="text-center text-xs tracking-widest text-white/40 pt-12"
        >
          VisionCoders · Agentic AI · Explainable Intelligence · Ethical Design
        </motion.div>

      </div>
    </div>
  );
}
