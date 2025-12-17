
import { motion } from "framer-motion";
import AlisCore3D from "../components/three/AlisCore3D";

import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaUsers,
  FaShieldAlt,
} from "react-icons/fa";
import {
  SiVite,
  SiTailwindcss,
  SiFirebase,
  SiTensorflow,
  SiExpress,
} from "react-icons/si";
import {
  BsCpuFill,
  BsDiagram3Fill,
  BsStars,
} from "react-icons/bs";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b0f14] via-[#0e1420] to-black text-white">
      <div className="max-w-7xl mx-auto px-4 pt-28 pb-28 space-y-32">

        {/* ================================================= */}
        {/* HERO */}
        {/* ================================================= */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7 }}
          className="text-center space-y-6"
        >
          <h1 className="text-5xl md:text-6xl font-bold">
            <span className="text-cyan-400">ALIS</span>
          </h1>

          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            <b>Agentic Loan Intelligence System</b> — an AI-powered decision
            intelligence platform that explains loan outcomes{" "}
            <span className="text-cyan-400">before you apply</span>.
          </p>

          <p className="text-sm text-white/50">
            Not a calculator. Not a chatbot. A decision intelligence system.
          </p>
        </motion.section>

        {/* ================================================= */}
        {/* WHAT IS ALIS */}
        {/* ================================================= */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8"
        >
          <h2 className="text-4xl font-semibold">
            What is <span className="text-cyan-400">ALIS</span>?
          </h2>

          <p className="text-white/70 max-w-4xl mx-auto text-lg">
            ALIS is an AI-powered decision intelligence platform that helps users
            understand <b>loan eligibility, credit risk, documentation readiness,
            and approval outcomes</b>.
            <br /><br />
            It combines <b>machine learning models</b> with
            <b> independent AI agents</b> to generate transparent, explainable,
            and actionable loan guidance.
          </p>
        </motion.section>

        {/* ================================================= */}
        {/* ALIS CORE 3D */}
        {/* ================================================= */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6 text-center"
        >
          <h2 className="text-3xl font-semibold">
            Inside the <span className="text-cyan-400">ALIS Core</span>
          </h2>

          <p className="text-white/70 max-w-3xl mx-auto text-lg">
            This 3D core represents how ALIS orchestrates AI agents, ML models,
            and decision logic to produce explainable loan intelligence.
          </p>

          <AlisCore3D />

          <p className="text-sm text-white/50 max-w-2xl mx-auto">
            Demo visualization of agent coordination & decision intelligence.
          </p>
        </motion.section>

        {/* ================================================= */}
        {/* VISIONCODERS (3rd POSITION AS REQUESTED) */}
        {/* ================================================= */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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
            We believe AI should <b>justify decisions</b>, not hide behind
            black-box outputs.
          </p>

          <p className="text-cyan-400 font-medium">
            “We don’t build demos — we build decision systems.”
          </p>
        </motion.section>

        {/* ================================================= */}
        {/* AGENTIC DECISION FLOW */}
        {/* ================================================= */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
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
                icon: <FaShieldAlt />,
                title: "Explainable Output",
                desc: "Scores, reasons & next-step guidance",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="relative rounded-2xl bg-white/5 border border-white/10 p-6 text-center space-y-4"
              >
                <div className="text-4xl text-cyan-400 mx-auto">
                  {item.icon}
                </div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-white/70">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ================================================= */}
        {/* TECHNOLOGY STACK */}
        {/* ================================================= */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
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
              <motion.div
                key={i}
                whileHover={{ scale: 1.12 }}
                transition={{ type: "spring", stiffness: 150 }}
                className="rounded-2xl bg-white/5 border border-white/10 p-6 text-center space-y-3"
              >
                <div className="text-5xl text-cyan-400 mx-auto">
                  {tech.icon}
                </div>
                <p className="font-medium">{tech.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ================================================= */}
        {/* WHY ALIS */}
        {/* ================================================= */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {[
            "Explainable by design — no black-box decisions",
            "ML-powered eligibility & affordability scoring",
            "Built for Indian lending rules & real workflows",
          ].map((text, i) => (
            <div
              key={i}
              className="rounded-2xl bg-cyan-500/10 border border-cyan-400/20 p-6 text-center"
            >
              <BsStars className="mx-auto text-cyan-400 text-2xl mb-2" />
              <p className="text-white/80">{text}</p>
            </div>
          ))}
        </motion.section>

      </div>
    </div>
  );
}
