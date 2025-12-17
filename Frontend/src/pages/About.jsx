import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaUsers,
} from "react-icons/fa";
import {
  SiVite,
  SiTailwindcss,
  SiFirebase,
  SiTensorflow,
  SiExpress,
} from "react-icons/si";
import { BsCpuFill, BsDiagram3Fill, BsStars } from "react-icons/bs";

import AlisCore3D from "../components/three/AlisCore3D";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b0f14] via-[#0e1420] to-black text-white">
      <div className="max-w-7xl mx-auto px-4 pt-28 pb-24 space-y-32">

        {/* WHAT IS ALIS */}
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
          <p className="text-xl text-white/70 max-w-4xl mx-auto">
            <b>ALIS (Agentic Loan Intelligence System)</b> is an AI-powered
            decision intelligence platform that explains
            <b> loan eligibility, risk, documentation readiness,</b> and
            approval outcomes <span className="text-cyan-400">before a user applies</span>.
          </p>
          <p className="text-sm text-white/50">
            Not a chatbot. Not a calculator. A real decision system.
          </p>
        </motion.section>

        {/* 3D CORE */}
        <section className="space-y-6 text-center">
          <h2 className="text-3xl font-semibold">
            Inside the <span className="text-cyan-400">ALIS Core</span>
          </h2>
          <p className="text-white/60 max-w-3xl mx-auto">
            This 3D core visualizes how ALIS orchestrates AI agents, ML models,
            and decision logic to produce explainable loan intelligence.
          </p>
          <AlisCore3D />
        </section>

        {/* VISIONCODERS */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <div className="flex justify-center">
            <div className="p-6 rounded-full bg-cyan-500/10 border border-cyan-400/30">
              <FaUsers className="text-4xl text-cyan-400" />
            </div>
          </div>
          <h2 className="text-3xl font-semibold">
            Who are <span className="text-cyan-400">VisionCoders</span>?
          </h2>
          <p className="text-white/70 max-w-3xl mx-auto text-lg">
            VisionCoders is a student-led technology team focused on building
            <b> real-world, ethical, and explainable AI systems</b>.
            <br /><br />
            We believe AI should justify decisions — not hide behind black-box outputs.
          </p>
          <p className="text-cyan-400 italic">
            “We don’t build demos — we build decision systems.”
          </p>
        </motion.section>

        {/* AGENT FLOW */}
        <section className="space-y-12">
          <h2 className="text-3xl font-semibold text-center">
            Agentic <span className="text-cyan-400">Decision Flow</span>
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: <BsCpuFill />,
                title: "User Intelligence",
                desc: "Profile, income signals, intent & documents",
              },
              {
                icon: <BsDiagram3Fill />,
                title: "Agentic AI Layer",
                desc: "Independent eligibility, risk & readiness agents",
              },
              {
                icon: <SiTensorflow />,
                title: "ML Decision Engine",
                desc: "Eligibility & risk prediction models",
              },
              {
                icon: <FaUsers />,
                title: "Explainable Output",
                desc: "Scores, reasons & next-step guidance",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white/5 border border-white/10 p-6 text-center space-y-4 hover:scale-105 transition"
              >
                <div className="text-4xl text-cyan-400 mx-auto">{item.icon}</div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-white/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* HOW ALIS WORKS */}
        <section className="space-y-6 text-center">
          <h2 className="text-3xl font-semibold">
            How <span className="text-cyan-400">ALIS</span> Works
          </h2>
          <p className="text-white/70 max-w-4xl mx-auto text-lg">
            User data is analyzed by multiple independent AI agents and validated
            using machine learning models. Agent outputs are cross-verified to
            reduce bias, and ALIS generates a final explainable decision with
            actionable guidance.
          </p>
        </section>

        {/* TECHNOLOGY STACK */}
        <section className="space-y-12">
          <h2 className="text-3xl font-semibold text-center">
            Technology <span className="text-cyan-400">Stack</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <FaReact />, name: "React" },
              { icon: <SiVite />, name: "Vite" },
              { icon: <SiTailwindcss />, name: "Tailwind CSS" },
              { icon: <FaNodeJs />, name: "Node.js" },
              { icon: <SiExpress />, name: "Express" },
              { icon: <SiFirebase />, name: "Firebase" },
              { icon: <FaPython />, name: "Python" },
              { icon: <SiTensorflow />, name: "ML Models" },
            ].map((tech, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white/5 border border-white/10 p-6 text-center space-y-3 hover:scale-110 transition"
              >
                <div className="text-5xl text-cyan-400 mx-auto">
                  {tech.icon}
                </div>
                <p className="font-medium">{tech.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* WHY ALIS */}
        <section className="grid md:grid-cols-3 gap-6">
          {[
            "Explainable by design — no black-box decisions",
            "ML-based eligibility & affordability prediction",
            "Aligned with Indian lending rules & workflows",
          ].map((text, i) => (
            <div
              key={i}
              className="rounded-2xl bg-cyan-500/10 border border-cyan-400/20 p-6 text-center"
            >
              <BsStars className="mx-auto text-cyan-400 text-2xl mb-2" />
              <p className="text-white/80">{text}</p>
            </div>
          ))}
        </section>

      </div>
    </div>
  );
}
