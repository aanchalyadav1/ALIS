import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaShieldAlt,
} from "react-icons/fa";
import { SiVite, SiTailwindcss, SiFirebase, SiTensorflow } from "react-icons/si";
import { BsCpuFill, BsDiagram3Fill } from "react-icons/bs";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b0f14] via-[#0e1420] to-black">
      <div className="max-w-7xl mx-auto px-4 pt-24 pb-20 text-white space-y-28">

        {/* ================= WHAT IS ALIS ================= */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold">
            What is <span className="text-cyan-400">ALIS</span>?
          </h1>
          <p className="text-white/70 max-w-3xl mx-auto text-lg">
            <b>ALIS (Agentic Loan Intelligence System)</b> is an AI-powered decision
            intelligence platform that explains loan eligibility, risk,
            documentation readiness, and approval outcomes <b>before</b> users apply.
          </p>
        </motion.section>

        {/* ================= AGENT FLOW ================= */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <h2 className="text-3xl font-semibold text-center">
            How <span className="text-cyan-400">ALIS Works</span>
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: "User Intelligence",
                desc: "Profile, income signals, intent & documents captured securely",
                icon: <BsCpuFill />,
              },
              {
                title: "Agentic AI Layer",
                desc: "Independent AI agents analyze eligibility, risk & readiness",
                icon: <BsDiagram3Fill />,
              },
              {
                title: "ML Decision Engine",
                desc: "Eligibility prediction & risk scoring using ML models",
                icon: <SiTensorflow />,
              },
              {
                title: "Explainable Output",
                desc: "Clear scores, insights & next-step recommendations",
                icon: <FaShieldAlt />,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="rounded-2xl bg-white/5 border border-white/10 p-6 text-center space-y-4"
              >
                <div className="text-4xl text-cyan-400 mx-auto">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-sm text-white/70">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ================= TECHNOLOGY STACK ================= */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <h2 className="text-3xl font-semibold text-center">
            Technology <span className="text-cyan-400">Stack</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "React", icon: <FaReact />, desc: "Component-based UI" },
              { name: "Vite", icon: <SiVite />, desc: "Lightning-fast builds" },
              { name: "Tailwind", icon: <SiTailwindcss />, desc: "Utility-first UI" },
              { name: "Node.js", icon: <FaNodeJs />, desc: "Backend runtime" },
              { name: "Express", icon: <FaDatabase />, desc: "REST APIs" },
              { name: "Firebase", icon: <SiFirebase />, desc: "Auth & storage" },
              { name: "Python", icon: <FaPython />, desc: "ML pipelines" },
              { name: "ML Models", icon: <SiTensorflow />, desc: "Eligibility & risk" },
            ].map((tech, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.08, rotate: 1 }}
                transition={{ type: "spring", stiffness: 180 }}
                className="rounded-2xl bg-white/5 border border-white/10 p-6 text-center space-y-3"
              >
                <div className="text-5xl text-cyan-400 mx-auto">
                  {tech.icon}
                </div>
                <h4 className="font-semibold">{tech.name}</h4>
                <p className="text-xs text-white/60">{tech.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ================= WHY ALIS ================= */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {[
            "Explainable by Design — no black-box decisions",
            "ML-powered eligibility & affordability scoring",
            "Built for Indian lending rules & workflows",
          ].map((point, i) => (
            <div
              key={i}
              className="rounded-2xl bg-cyan-500/10 border border-cyan-400/20 p-6 text-center"
            >
              <p className="text-white/80">{point}</p>
            </div>
          ))}
        </motion.section>

        {/* ================= VISIONCODERS ================= */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <h2 className="text-3xl font-semibold">
            Who are <span className="text-cyan-400">VisionCoders</span>?
          </h2>
          <p className="text-white/70 max-w-3xl mx-auto">
            VisionCoders is a student-led technology team focused on building
            <b> real-world, ethical, and explainable AI systems</b>.
            <br /><br />
            Our philosophy is simple:
            <br />
            <span className="text-cyan-400 font-medium">
              “We don’t build demos — we build decision systems.”
            </span>
          </p>
        </motion.section>

      </div>
    </div>
  );
}
