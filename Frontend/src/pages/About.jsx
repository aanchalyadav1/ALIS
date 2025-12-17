import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaShieldAlt,
  FaBrain,
} from "react-icons/fa";
import {
  SiVite,
  SiTailwindcss,
  SiFirebase,
  SiExpress,
  SiPython,
  SiScikitlearn,
} from "react-icons/si";

import AgentFlow from "../components/about/AgentFlow";
import MLCredibility from "../components/about/MLCredibility";
import VisionCoders from "../components/about/VisionCoders";

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 pt-24 pb-20 space-y-24 text-white">

      {/* WHAT IS ALIS */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-6"
      >
        <h1 className="text-4xl font-bold">
          What is <span className="text-cyan-400">ALIS</span>?
        </h1>
        <p className="max-w-3xl mx-auto text-white/70">
          ALIS (Agentic Loan Intelligence System) is an AI-powered decision
          intelligence platform that helps users understand loan eligibility,
          risk, documentation readiness, and approval outcomes before applying.
        </p>
      </motion.section>

      {/* WHO ARE VISIONCODERS */}
      <VisionCoders />

      {/* HOW ALIS WORKS */}
      <section className="space-y-8">
        <h2 className="text-3xl font-semibold text-center">
          How <span className="text-cyan-400">ALIS</span> Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "User Intelligence",
              desc: "User profile, income signals & intent captured securely",
            },
            {
              title: "Agentic AI Layer",
              desc: "Independent AI agents analyze eligibility, risk & readiness",
            },
            {
              title: "Decision Intelligence",
              desc: "Clear scores, insights & next-step guidance",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-white/5 border border-white/10 p-6"
            >
              <h3 className="text-white font-medium">{item.title}</h3>
              <p className="text-sm text-white/60 mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* AGENT FLOW (OPTION 2) */}
      <section className="space-y-8">
        <h2 className="text-3xl font-semibold text-center">
          AI Agent Execution Flow
        </h2>
        <AgentFlow />
      </section>

      {/* ARCHITECTURE */}
      <section className="space-y-8">
        <h2 className="text-3xl font-semibold text-center">System Architecture</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { icon: FaReact, title: "Frontend", desc: "React • Vite • Tailwind" },
            { icon: FaNodeJs, title: "Backend", desc: "Node.js • Express APIs" },
            { icon: FaBrain, title: "ML & AI", desc: "Eligibility • Risk • Agents" },
            { icon: FaShieldAlt, title: "Security", desc: "Auth • Storage • Isolation" },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-white/5 border border-white/10 p-6 text-center"
            >
              <item.icon className="mx-auto text-cyan-400" size={28} />
              <h4 className="mt-3 text-white font-medium">{item.title}</h4>
              <p className="text-sm text-white/60 mt-1">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ML CREDIBILITY */}
      <MLCredibility />

      {/* TECHNOLOGY STACK */}
      <section className="space-y-8">
        <h2 className="text-3xl font-semibold text-center">
          Technology Stack
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { icon: FaReact, name: "React" },
            { icon: SiVite, name: "Vite" },
            { icon: SiTailwindcss, name: "Tailwind CSS" },
            { icon: FaNodeJs, name: "Node.js" },
            { icon: SiExpress, name: "Express" },
            { icon: SiFirebase, name: "Firebase" },
            { icon: SiPython, name: "Python" },
            { icon: SiScikitlearn, name: "Scikit-learn" },
          ].map((tech) => (
            <div
              key={tech.name}
              className="rounded-xl bg-white/5 border border-white/10 p-5 text-center hover:border-cyan-400/40 transition"
            >
              <tech.icon className="mx-auto text-cyan-400" size={30} />
              <p className="mt-2 text-sm text-white/70">{tech.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY ALIS */}
      <section className="text-center space-y-4">
        <h2 className="text-3xl font-semibold">
          Why <span className="text-cyan-400">ALIS</span> Matters
        </h2>
        <p className="max-w-3xl mx-auto text-white/70">
          ALIS reduces uncertainty in lending by making decisions explainable,
          risk-aware, and user-centric — especially for first-time borrowers.
        </p>
      </section>
    </div>
  );
      }
