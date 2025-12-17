import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaShieldAlt,
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
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b0f14] via-[#0e1420] to-black text-white">
      <div className="max-w-7xl mx-auto px-4 pt-24 pb-24 space-y-20 md:space-y-28">

        {/* WHAT IS ALIS */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold">
            What is <span className="text-cyan-400">ALIS</span>?
          </h1>
          <p className="text-lg text-white/70 max-w-4xl mx-auto">
            ALIS (Agentic Loan Intelligence System) is a decision intelligence
            platform that explains <b>loan eligibility, risk, and outcomes</b>
            before a user applies — using ML models and independent AI agents.
          </p>
          <p className="text-sm text-white/50">
            Not a chatbot. Not a calculator. A real decision system.
          </p>
        </motion.section>

        {/* 3D CORE */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-semibold text-center">
            Inside the <span className="text-cyan-400">ALIS Core</span>
          </h2>
          <p className="text-center text-white/60 text-sm">
            Visualizing how agents, ML models, and decision logic coordinate.
          </p>
          <AlisCore3D />
        </motion.section>

        {/* VISIONCODERS */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          <div className="flex justify-center">
            <div className="p-5 rounded-full bg-cyan-500/10 border border-cyan-400/30">
              <FaUsers className="text-3xl text-cyan-400" />
            </div>
          </div>
          <h2 className="text-3xl font-semibold">
            Who are <span className="text-cyan-400">VisionCoders</span>?
          </h2>
          <p className="text-white/70 max-w-3xl mx-auto text-lg">
            VisionCoders is a student-led technology team focused on building
            <b> real-world, ethical, and explainable AI systems</b>.
            <br /><br />
            <span className="text-cyan-400">
              “We don’t build demos — we build decision systems.”
            </span>
          </p>
        </motion.section>

        {/* AGENT FLOW */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
          className="space-y-10"
        >
          <h2 className="text-3xl font-semibold text-center">
            Agentic <span className="text-cyan-400">Decision Flow</span>
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: <BsCpuFill />, title: "User Intelligence", desc: "Profile, income, intent & documents" },
              { icon: <BsDiagram3Fill />, title: "Agentic AI Layer", desc: "Eligibility, risk & readiness agents" },
              { icon: <SiTensorflow />, title: "ML Engine", desc: "Eligibility & risk prediction models" },
              { icon: <FaShieldAlt />, title: "Explainable Output", desc: "Scores, reasons & guidance" },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white/5 border border-white/10 p-6 text-center space-y-3"
              >
                <div className="text-4xl text-cyan-400">{item.icon}</div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-white/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* TECH STACK */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <h2 className="text-3xl font-semibold text-center">
            Technology <span className="text-cyan-400">Stack</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[FaReact, SiVite, SiTailwindcss, FaNodeJs, SiExpress, SiFirebase, FaPython, SiTensorflow]
              .map((Icon, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-white/5 border border-white/10 p-6 text-center"
                >
                  <Icon className="text-5xl text-cyan-400 mx-auto" />
                </div>
              ))}
          </div>
        </motion.section>

        {/* WHY ALIS */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {[
            "Explainable by design — no black boxes",
            "ML-based eligibility & affordability prediction",
            "Aligned with Indian lending rules",
          ].map((text, i) => (
            <div
              key={i}
              className="rounded-2xl bg-cyan-500/10 border border-cyan-400/20 p-6 text-center"
            >
              <BsStars className="text-cyan-400 text-xl mx-auto mb-2" />
              <p className="text-white/80">{text}</p>
            </div>
          ))}
        </motion.section>

      </div>
    </div>
  );
}
