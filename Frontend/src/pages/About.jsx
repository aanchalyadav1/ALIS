import { motion } from "framer-motion";
import {
  Brain,
  Cpu,
  BarChart3,
  ShieldCheck,
  Users,
  Layers,
  Database,
  Cloud,
  Bot,
} from "lucide-react";

/* ================= ANIMATION PRESETS ================= */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

/* ================= PAGE ================= */

export default function About() {
  return (
    <div className="min-h-screen bg-[#05060a] text-white pt-24 pb-20 px-4">
      <div className="max-w-7xl mx-auto space-y-28">

        {/* ================= HERO ================= */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.9 }}
          className="text-center space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            What is <span className="text-cyan-400">ALIS</span>?
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-white/70 leading-relaxed">
            <span className="text-white">ALIS (Agentic Loan Intelligence System)</span> is an
            AI-powered decision intelligence platform that helps users understand
            <span className="text-white"> eligibility, risk, documentation readiness,</span>
            and loan outcomes <span className="text-white">before</span> applying.
          </p>
        </motion.section>

        {/* ================= HOW ALIS WORKS ================= */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="space-y-14"
        >
          <h2 className="text-3xl font-semibold text-center">
            How <span className="text-cyan-400">ALIS</span> Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <InfoCard
              icon={<Users />}
              title="User Intelligence"
              text="User profile, income signals, documents, and intent are captured through an intuitive UI."
            />
            <InfoCard
              icon={<Bot />}
              title="Agentic AI Layer"
              text="Multiple AI agents analyze intent, eligibility, risk, and readiness independently."
            />
            <InfoCard
              icon={<BarChart3 />}
              title="Explainable Insights"
              text="Clear dashboards, scores, and AI reasoning help users make confident decisions."
            />
          </div>
        </motion.section>

        {/* ================= ARCHITECTURE ================= */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="space-y-14"
        >
          <h2 className="text-3xl font-semibold text-center">
            System Architecture
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <ArchCard
              icon={<Layers />}
              title="Frontend"
              text="React • Vite • Tailwind • Framer Motion"
            />
            <ArchCard
              icon={<Cloud />}
              title="Backend"
              text="Node.js • Express • API Layer"
            />
            <ArchCard
              icon={<Brain />}
              title="ML & AI"
              text="Loan Eligibility Models • Risk Scoring • AI Agents"
            />
            <ArchCard
              icon={<Database />}
              title="Security"
              text="Auth • Secure Storage • Session Isolation"
            />
          </div>
        </motion.section>

        {/* ================= WHY ALIS ================= */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="space-y-14"
        >
          <h2 className="text-3xl font-semibold text-center">
            Why <span className="text-cyan-400">ALIS</span>?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <InfoCard
              icon={<ShieldCheck />}
              title="Explainable by Design"
              text="Every output is backed by AI reasoning — no black boxes."
            />
            <InfoCard
              icon={<Cpu />}
              title="ML-Powered Decisions"
              text="Uses predictive models for eligibility and affordability estimation."
            />
            <InfoCard
              icon={<Users />}
              title="Built for India"
              text="Designed for Indian lending realities, users, and workflows."
            />
          </div>
        </motion.section>

        {/* ================= VISION CODERS ================= */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6"
        >
          <h2 className="text-3xl font-semibold">
            Who are <span className="text-cyan-400">VisionCoders</span>?
          </h2>

          <p className="max-w-3xl mx-auto text-white/70 leading-relaxed">
            VisionCoders is a student-led technology team focused on building
            <span className="text-white"> real-world AI systems</span> that are
            ethical, explainable, and scalable.
            <br /><br />
            ALIS reflects our belief that AI should <span className="text-white">
            guide users clearly</span>, not overwhelm them with complexity.
          </p>
        </motion.section>

        {/* ================= FOOTER NOTE ================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          transition={{ duration: 1 }}
          className="text-center text-sm text-white/50"
        >
          ALIS is a demo-first system built for hackathons, scalability, and future production deployment.
        </motion.div>

      </div>
    </div>
  );
}

/* ================= REUSABLE COMPONENTS ================= */

function InfoCard({ icon, title, text }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 180 }}
      className="rounded-2xl bg-white/5 border border-white/10 p-6 space-y-3 backdrop-blur"
    >
      <div className="h-11 w-11 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-lg font-medium">{title}</h3>
      <p className="text-sm text-white/70">{text}</p>
    </motion.div>
  );
}

function ArchCard({ icon, title, text }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.35 }}
      className="rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 p-6 text-center space-y-3"
    >
      <div className="mx-auto h-10 w-10 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-lg font-medium">{title}</h3>
      <p className="text-sm text-white/70">{text}</p>
    </motion.div>
  );
}
