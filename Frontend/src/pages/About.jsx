import { motion } from "framer-motion";
import AlisCore3D from "../components/about/AlisCore3D";
import VisionCoders from "../components/about/VisionCoders";
import AgentFlow from "../components/about/AgentFlow";
import TechnologyStack from "../components/about/TechnologyStack";

import { sectionFade } from "../animationVariants";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b0f14] via-[#0e1420] to-black text-white">
      <div className="max-w-7xl mx-auto px-6 pt-28 pb-32 space-y-40">

        {/* WHAT IS ALIS */}
        <motion.section
          variants={sectionFade}
          initial="hidden"
          animate="visible"
          className="text-center space-y-6"
        >
          <h1 className="text-5xl md:text-6xl font-bold">
            What is <span className="text-cyan-400">ALIS</span>?
          </h1>

          <p className="text-xl text-white/70 max-w-4xl mx-auto">
            ALIS (Agentic Loan Intelligence System) is an AI-powered decision
            intelligence platform that explains <b>loan eligibility</b>,
            <b> risk</b>, and <b>documentation readiness</b> before a user applies.
          </p>

          <p className="text-white/50">
            Not a chatbot. Not a calculator. A real decision system.
          </p>
        </motion.section>

        {/* 3D CORE */}
        <AlisCore3D />

        {/* VISIONCODERS */}
        <VisionCoders />

        {/* HOW ALIS WORKS */}
        <AgentFlow />

        {/* TECHNOLOGY STACK */}
        <TechnologyStack />

      </div>
    </div>
  );
}
