import { motion } from "framer-motion";
import { FaUsers, FaReact, FaNodeJs, FaPython, FaShieldAlt } from "react-icons/fa";
import { SiVite, SiTailwindcss, SiExpress, SiFirebase, SiTensorflow } from "react-icons/si";
import { BsCpuFill, BsDiagram3Fill, BsStars } from "react-icons/bs";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

function TechIcon({ icon: Icon, name, desc }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="h-20 w-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-xl hover:scale-105 transition">
        <Icon className="text-4xl text-cyan-400" />
      </div>
      <p className="text-sm font-medium">{name}</p>
      <p className="text-xs text-white/50 text-center">{desc}</p>
    </div>
  );
}

export default function About() {
  return (
    <div className="min-h-screen bg-[#0b0f14] text-white">
      <div className="max-w-7xl mx-auto px-4 pt-28 pb-28 space-y-28">

        {/* WHAT IS ALIS */}
        <motion.section {...fadeUp} initial="hidden" animate="visible" className="text-center space-y-6">
          <h1 className="text-5xl font-bold">
            What is <span className="text-cyan-400">ALIS</span>?
          </h1>
          <p className="max-w-4xl mx-auto text-white/70 text-lg">
            ALIS (Agentic Loan Intelligence System) is an AI-powered decision
            intelligence platform that explains eligibility, risk, documentation
            readiness, and approval outcomes <b>before a user applies</b>.
          </p>
          <p className="text-sm text-white/50">
            Not a chatbot. Not a calculator. A real decision system.
          </p>
        </motion.section>

        {/* AGENTIC FLOW */}
        <motion.section {...fadeUp} initial="hidden" whileInView="visible" className="space-y-10">
          <h2 className="text-3xl font-semibold text-center">
            Agentic <span className="text-cyan-400">Decision Flow</span>
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: BsCpuFill, title: "User Intelligence", desc: "Profile, income & documents" },
              { icon: BsDiagram3Fill, title: "Agentic AI Layer", desc: "Eligibility, risk & readiness agents" },
              { icon: SiTensorflow, title: "ML Engine", desc: "Eligibility & risk models" },
              { icon: FaShieldAlt, title: "Explainable Output", desc: "Scores & reasons" },
            ].map((i, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center space-y-3">
                <i.icon className="text-4xl text-cyan-400 mx-auto" />
                <h3 className="font-semibold">{i.title}</h3>
                <p className="text-sm text-white/60">{i.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ML CREDIBILITY */}
        <motion.section {...fadeUp} initial="hidden" whileInView="visible" className="grid md:grid-cols-3 gap-6">
          {[
            "ML-based eligibility & affordability prediction",
            "Risk scoring aligned with Indian lending rules",
            "Explainable outputs — no black boxes",
          ].map((t, i) => (
            <div key={i} className="bg-cyan-500/10 border border-cyan-400/20 rounded-xl p-6 text-center">
              <BsStars className="text-cyan-400 mx-auto mb-2" />
              <p>{t}</p>
            </div>
          ))}
        </motion.section>

        {/* ✅ KEEP VISIONCODERS ONLY HERE */}
        <motion.section {...fadeUp} initial="hidden" whileInView="visible" className="text-center space-y-6">
          <FaUsers className="text-4xl text-cyan-400 mx-auto" />
          <h2 className="text-3xl font-semibold">
            Who are <span className="text-cyan-400">VisionCoders</span>?
          </h2>
          <p className="max-w-3xl mx-auto text-white/70">
            VisionCoders is a student-led team focused on building real-world,
            ethical, and explainable AI systems.
            <br /><br />
            <span className="text-cyan-400">
              “We don’t build demos — we build decision systems.”
            </span>
          </p>
        </motion.section>

        {/* TECHNOLOGY STACK */}
        <motion.section {...fadeUp} initial="hidden" whileInView="visible" className="space-y-12">
          <h2 className="text-3xl font-semibold text-center">
            Technology <span className="text-cyan-400">Stack</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 justify-items-center">
            <TechIcon icon={FaReact} name="React" desc="Component UI" />
            <TechIcon icon={SiVite} name="Vite" desc="Fast builds" />
            <TechIcon icon={SiTailwindcss} name="Tailwind" desc="Styling" />
            <TechIcon icon={FaNodeJs} name="Node.js" desc="Runtime" />
            <TechIcon icon={SiExpress} name="Express" desc="APIs" />
            <TechIcon icon={SiFirebase} name="Firebase" desc="Auth & storage" />
            <TechIcon icon={FaPython} name="Python" desc="ML pipelines" />
            <TechIcon icon={SiTensorflow} name="TensorFlow" desc="ML models" />
          </div>
        </motion.section>

      </div>
    </div>
  );
}
