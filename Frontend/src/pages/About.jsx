
import { motion } from "framer-motion";

import AlisCore3D from "../components/about/AlisCore3D";
import VisionCoders from "../components/about/VisionCoders";
import AgentFlow from "../components/about/AgentFlow";
import TechnologyStack from "../components/about/TechnologyStack";
import MLCredibility from "../components/about/MLCredibility";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b0f14] via-[#0e1420] to-black text-white">
      <div className="max-w-7xl mx-auto px-4 pt-28 pb-32 space-y-40">

        {/* ================= WHAT IS ALIS ================= */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7 }}
          className="text-center space-y-6"
        >
          <h1 className="text-5xl md:text-6xl font-bold">
            What is <span className="text-cyan-400">ALIS</span>?
          </h1>

          <p className="text-lg text-white/70 max-w-4xl mx-auto">
            <b>ALIS (Agentic Loan Intelligence System)</b> is an AI-powered
            decision intelligence platform that explains{" "}
            <b>loan eligibility, risk, documentation readiness</b>, and
            <b> approval outcomes before a user applies</b>.
          </p>

          <p className="text-sm text-white/50">
            Not a chatbot. Not a calculator. A real decision system.
          </p>
        </motion.section>

        {/* ================= ALIS CORE 3D ================= */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-semibold text-center">
            Inside the <span className="text-cyan-400">ALIS Core</span>
          </h2>

          <p className="text-center text-white/60 max-w-3xl mx-auto">
            This core visualizes how ALIS orchestrates AI agents, ML models,
            and decision logic to produce explainable intelligence.
          </p>

          <AlisCore3D />
        </motion.section>

        {/* ================= VISIONCODERS ================= */}
        <VisionCoders />

        {/* ================= AGENTIC FLOW ================= */}
        <AgentFlow />

        {/* ================= HOW ALIS WORKS ================= */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          <h2 className="text-3xl font-semibold">
            How <span className="text-cyan-400">ALIS</span> Works
          </h2>

          <p className="text-white/70 max-w-4xl mx-auto text-lg">
            User data is analyzed by multiple independent AI agents, each
            specializing in eligibility, risk, or document readiness.
            <br /><br />
            These agent outputs are cross-verified using machine learning
            models to reduce bias and ensure consistency. ALIS then generates
            a final <b>explainable decision</b> with clear reasoning and
            next-step guidance.
          </p>
        </motion.section>

        {/* ================= TECHNOLOGY STACK ================= */}
        <TechnologyStack />

        {/* ================= ML CREDIBILITY ================= */}
        <MLCredibility />

      </div>
    </div>
  );
}
