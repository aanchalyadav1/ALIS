import { motion } from "framer-motion";
import { fadeUp } from "../animationVariants";

import VisionCoders from "../components/about/VisionCoders";
import AgentFlow from "../components/about/AgentFlow";
import TechnologyStack from "../components/about/TechnologyStack";
import WhyAlisMatters from "../components/about/WhyAlisMatters";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b0f14] via-[#0e1420] to-black text-white">
      <div className="max-w-7xl mx-auto px-6 pt-28 pb-32 space-y-32">

        {/* WHAT IS ALIS */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <h1 className="text-5xl md:text-6xl font-bold">
            What is <span className="text-cyan-400">ALIS</span>?
          </h1>

          <p className="text-xl text-white/70 max-w-4xl mx-auto">
            <b>ALIS (Agentic Loan Intelligence System)</b> is an AI-powered
            decision intelligence platform designed to explain loan eligibility,
            risk, and documentation readiness <b>before a user applies</b>.
          </p>

          <p className="text-white/60 max-w-3xl mx-auto">
            Unlike traditional calculators or chatbots, ALIS uses independent
            AI agents and machine learning models to analyze user intent,
            financial signals, and compliance readiness — producing transparent,
            explainable decisions.
          </p>

          <p className="text-white/40 italic">
            Not a chatbot. Not a calculator. A real decision system.
          </p>
        </motion.section>

        {/* WHO ARE VISIONCODERS */}
        <VisionCoders />

        {/* AGENTIC DECISION FLOW */}
        <AgentFlow />

        {/* HOW ALIS WORKS */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <h2 className="text-4xl font-bold">
            How <span className="text-cyan-400">ALIS</span> Works
          </h2>

          <p className="text-white/70 max-w-4xl mx-auto">
            ALIS processes user data through multiple independent AI agents.
            Each agent specializes in a specific decision dimension such as
            intent analysis, document readiness, or risk assessment.
          </p>

          <p className="text-white/60 max-w-4xl mx-auto">
            Outputs from these agents are cross-validated using machine learning
            models to reduce bias and ensure consistency. The system then
            generates a final explainable decision with reasoning, scores, and
            actionable next steps.
          </p>
        </motion.section>

        {/* TECHNOLOGY STACK */}
        <TechnologyStack />

        {/* WHY ALIS MATTERS */}
        <WhyAlisMatters />

      </div>
    </div>
  );
}
