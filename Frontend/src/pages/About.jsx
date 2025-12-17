
import { motion } from "framer-motion";
import {
  Cpu,
  Brain,
  ShieldCheck,
  Server,
  LayoutDashboard,
  Users,
  Network,
  Sparkles,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <div className="pt-24 pb-20 px-4 max-w-7xl mx-auto text-white space-y-24">

      {/* ================= WHAT IS ALIS ================= */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="text-center space-y-6"
      >
        <h1 className="text-4xl md:text-5xl font-bold">
          What is <span className="text-cyan-400">ALIS</span>?
        </h1>

        <p className="max-w-3xl mx-auto text-white/70 text-lg">
          <b>ALIS (Agentic Loan Intelligence System)</b> is an AI-powered decision
          intelligence platform that helps users understand loan eligibility,
          risk, documentation readiness, and approval outcomes <b>before</b>
          applying.
        </p>

        <p className="max-w-2xl mx-auto text-white/60">
          It combines Machine Learning, Agent-based AI reasoning, and explainable
          insights to eliminate uncertainty in lending decisions.
        </p>
      </motion.section>

      {/* ================= WHO ARE VISIONCODERS ================= */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center"
      >
        <Users className="mx-auto text-cyan-400 mb-4" size={48} />
        <h2 className="text-3xl font-semibold">
          Who are <span className="text-cyan-400">VisionCoders</span>?
        </h2>

        <p className="mt-6 max-w-3xl mx-auto text-white/70">
          VisionCoders is a student-led AI and technology innovation team focused
          on building <b>real-world, explainable, and scalable systems</b>.
        </p>

        <p className="mt-4 max-w-2xl mx-auto text-white/60">
          We believe AI should guide users clearly — not overwhelm them with
          black-box complexity. ALIS represents our commitment to ethical,
          transparent, and impact-driven AI.
        </p>

        <div className="mt-6 text-cyan-400 font-medium">
          “We don’t build demos — we build decision systems.”
        </div>
      </motion.section>

      {/* ================= HOW ALIS WORKS ================= */}
      <section className="space-y-10">
        <h2 className="text-3xl font-semibold text-center">
          How <span className="text-cyan-400">ALIS</span> Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: LayoutDashboard,
              title: "User Intelligence",
              desc: "User profile, income signals, intent & documents captured securely",
            },
            {
              icon: Brain,
              title: "Agentic AI Layer",
              desc: "Independent AI agents analyze eligibility, risk & readiness",
            },
            {
              icon: Sparkles,
              title: "Decision Intelligence",
              desc: "Clear scores, insights & next-step recommendations",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-[#0f172a] border border-white/10 p-6"
            >
              <item.icon className="text-cyan-400 mb-4" size={32} />
              <h3 className="text-lg font-medium">{item.title}</h3>
              <p className="text-sm text-white/60 mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= ARCHITECTURE (ANIMATED) ================= */}
      <section className="space-y-12">
        <h2 className="text-3xl font-semibold text-center">
          System <span className="text-cyan-400">Architecture</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              icon: LayoutDashboard,
              title: "Frontend",
              tech: "React · Vite · Tailwind · Framer Motion",
            },
            {
              icon: Server,
              title: "Backend",
              tech: "Node.js · Express · REST APIs",
            },
            {
              icon: Cpu,
              title: "ML & AI",
              tech: "Eligibility Model · Risk Scoring · AI Agents",
            },
            {
              icon: ShieldCheck,
              title: "Security",
              tech: "Auth · Secure Storage · Session Isolation",
            },
          ].map((layer, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="relative rounded-2xl bg-gradient-to-br from-[#0b1220] to-[#020617] border border-white/10 p-6 text-center"
            >
              <layer.icon className="mx-auto text-cyan-400 mb-4" size={36} />
              <h3 className="font-medium">{layer.title}</h3>
              <p className="text-xs text-white/60 mt-2">{layer.tech}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-6 text-center text-white/60 text-sm"
        >
          Modular · Scalable · RBI-aware · Hackathon-ready
        </motion.div>
      </section>

      {/* ================= WHY ALIS ================= */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="rounded-3xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-white/10 p-10 text-center"
      >
        <Network className="mx-auto text-cyan-400 mb-4" size={48} />
        <h2 className="text-3xl font-semibold">Why ALIS Matters</h2>

        <p className="mt-4 max-w-3xl mx-auto text-white/70">
          Millions of loan applications fail due to poor awareness, unclear
          eligibility rules, and incomplete documentation. ALIS empowers users
          with clarity <b>before rejection happens</b>.
        </p>

        <p className="mt-4 text-white/60">
          ALIS is not just a tool — it’s a <b>decision companion</b>.
        </p>
      </motion.section>
    </div>
  );
}
