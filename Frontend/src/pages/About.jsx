import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaShieldAlt,
  FaUsers
} from "react-icons/fa";
import {
  SiVite,
  SiTailwindcss,
  SiFirebase,
  SiExpress,
  SiTensorflow
} from "react-icons/si";
import { BsCpuFill, BsDiagram3Fill, BsStars } from "react-icons/bs";

/* ================= ANIMATION VARIANTS (INLINE) ================= */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 }
  }
};

const cardFade = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

/* ================= COMPONENT ================= */

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b0f14] via-[#0e1420] to-black text-white">
      <div className="max-w-7xl mx-auto px-6 pt-28 pb-32 space-y-32">

        {/* 1️⃣ WHAT IS ALIS */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-center space-y-6"
        >
          <h1 className="text-5xl md:text-6xl font-bold">
            What is <span className="text-cyan-400">ALIS</span>?
          </h1>

          <p className="text-xl text-white/70 max-w-4xl mx-auto">
            <b>ALIS (Agentic Loan Intelligence System)</b> is an AI-powered
            decision intelligence platform that explains loan eligibility,
            credit risk, and document readiness <b>before</b> a user applies.
          </p>

          <p className="text-white/50 max-w-3xl mx-auto">
            ALIS combines machine learning models with independent AI agents to
            make lending decisions transparent, explainable, and trustworthy.
          </p>

          <p className="text-white/40 italic">
            Not a chatbot. Not a calculator. A real decision system.
          </p>
        </motion.section>

        {/* 2️⃣ WHO ARE VISIONCODERS */}
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
            <b> real-world, explainable, and ethical AI systems</b>.
          </p>

          <p className="text-white/60 max-w-3xl mx-auto">
            We don’t build flashy demos. We build systems that justify decisions,
            reduce bias, and help users understand outcomes that affect their lives.
          </p>
        </motion.section>

        {/* 3️⃣ AGENTIC DECISION FLOW */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          <h2 className="text-3xl font-semibold text-center">
            Agentic <span className="text-cyan-400">Decision Flow</span>
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: <BsCpuFill />,
                title: "User Signals",
                desc: "Profile, income, intent & documents"
              },
              {
                icon: <BsDiagram3Fill />,
                title: "AI Agents",
                desc: "Eligibility, risk & readiness agents"
              },
              {
                icon: <SiTensorflow />,
                title: "ML Models",
                desc: "Risk & eligibility prediction"
              },
              {
                icon: <FaShieldAlt />,
                title: "Explainable Output",
                desc: "Scores, reasons & guidance"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={cardFade}
                whileHover={{ y: -8, scale: 1.05 }}
                className="rounded-2xl bg-white/5 border border-white/10 p-6 text-center space-y-4"
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

        {/* 4️⃣ HOW ALIS WORKS */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <h2 className="text-3xl font-semibold">
            How <span className="text-cyan-400">ALIS</span> Works
          </h2>

          <p className="text-white/70 max-w-4xl mx-auto text-lg">
            ALIS processes user data through independent AI agents.
            Each agent evaluates one decision dimension such as intent,
            eligibility, risk, or document readiness.
          </p>

          <p className="text-white/60 max-w-4xl mx-auto">
            Agent outputs are cross-validated using ML models and merged into a
            final explainable decision with scores, reasoning, and next steps.
          </p>
        </motion.section>

        {/* 5️⃣ TECHNOLOGY STACK */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
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
              { icon: <SiTensorflow />, name: "ML Models" }
            ].map((tech, i) => (
              <motion.div
                key={i}
                variants={cardFade}
                whileHover={{ scale: 1.12 }}
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

        {/* 6️⃣ WHY ALIS MATTERS */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {[
            "Explainable by design — no black-box decisions",
            "ML-powered eligibility & affordability scoring",
            "Built for Indian lending workflows"
          ].map((text, i) => (
            <motion.div
              key={i}
              variants={cardFade}
              className="rounded-2xl bg-cyan-500/10 border border-cyan-400/20 p-6 text-center"
            >
              <BsStars className="mx-auto text-cyan-400 text-2xl mb-2" />
              <p className="text-white/80">{text}</p>
            </motion.div>
          ))}
        </motion.section>

      </div>
    </div>
  );
}
