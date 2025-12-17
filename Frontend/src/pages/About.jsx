import { motion } from "framer-motion";

/* ========== ICONS ========== */
// Frontend
import { FaReact, FaNodeJs, FaPython, FaShieldAlt, FaUsers } from "react-icons/fa";
import { SiVite, SiTailwindcss, SiExpress, SiFirebase, SiTensorflow } from "react-icons/si";

// System / AI
import { BsCpuFill, BsDiagram3Fill, BsStars } from "react-icons/bs";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

/* ========== 3D ICON TILE ========== */
function Tech3D({ icon: Icon, name, desc }) {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.06 }}
      transition={{ type: "spring", stiffness: 180, damping: 14 }}
      className="group flex flex-col items-center gap-3"
    >
      <div className="relative h-20 w-20 rounded-2xl bg-gradient-to-br from-[#1a2233] to-[#0b0f14] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.7)] flex items-center justify-center">
        <div className="absolute inset-0 rounded-2xl bg-cyan-400/10 blur-xl opacity-0 group-hover:opacity-100 transition" />
        <Icon className="relative text-4xl text-cyan-400" />
      </div>
      <p className="text-sm font-medium text-white">{name}</p>
      {desc && <p className="text-xs text-white/50 text-center">{desc}</p>}
    </motion.div>
  );
}

/* ========== MAIN PAGE ========== */
export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b0f14] via-[#0e1420] to-black text-white">
      <div className="max-w-7xl mx-auto px-4 pt-28 pb-32 space-y-32">

        {/* ================= WHAT IS ALIS ================= */}
        <motion.section variants={fadeUp} initial="hidden" animate="visible" transition={{ duration: 0.7 }} className="text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold">
            What is <span className="text-cyan-400">ALIS</span>?
          </h1>
          <p className="text-xl text-white/70 max-w-4xl mx-auto">
            <b>ALIS (Agentic Loan Intelligence System)</b> is an AI-powered decision
            intelligence platform that explains loan eligibility, risk, documentation
            readiness, and approval outcomes <span className="text-cyan-400">before a user applies</span>.
          </p>
          <p className="text-sm text-white/50">
            Not a chatbot. Not a calculator. A real decision system.
          </p>
        </motion.section>

        {/* ================= WHO ARE VISIONCODERS ================= */}
        <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center space-y-6">
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
            We believe AI should <b>justify decisions</b>, not hide behind black-box outputs.
            <br />
            <span className="text-cyan-400 font-medium">
              “We don’t build demos — we build decision systems.”
            </span>
          </p>
        </motion.section>

        {/* ================= AGENTIC DECISION FLOW ================= */}
        <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-12">
          <h2 className="text-3xl font-semibold text-center">
            Agentic <span className="text-cyan-400">Decision Flow</span>
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: BsCpuFill, title: "User Intelligence", desc: "Profile, income signals, intent & documents" },
              { icon: BsDiagram3Fill, title: "Agentic AI Layer", desc: "Independent eligibility, risk & readiness agents" },
              { icon: SiTensorflow, title: "ML Decision Engine", desc: "Eligibility & risk prediction models" },
              { icon: FaShieldAlt, title: "Explainable Output", desc: "Scores, reasons & next-step guidance" },
            ].map((item, i) => (
              <motion.div key={i} whileHover={{ y: -10 }} className="rounded-2xl bg-white/5 border border-white/10 p-6 text-center space-y-4">
                <item.icon className="text-4xl text-cyan-400 mx-auto" />
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-white/70">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ================= TECHNOLOGY STACK (3D ICONS) ================= */}
        <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-16">
          <h2 className="text-3xl font-semibold text-center">
            Technology <span className="text-cyan-400">Stack</span>
          </h2>

          {/* Frontend */}
          <div>
            <h3 className="text-center text-lg mb-8 text-white/80">Frontend</h3>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-10 justify-items-center">
              <Tech3D icon={FaReact} name="React" desc="Component UI" />
              <Tech3D icon={SiVite} name="Vite" desc="Fast builds" />
              <Tech3D icon={SiTailwindcss} name="Tailwind" desc="Utility CSS" />
            </div>
          </div>

          {/* Backend */}
          <div>
            <h3 className="text-center text-lg mb-8 text-white/80">Backend</h3>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-10 justify-items-center">
              <Tech3D icon={FaNodeJs} name="Node.js" desc="Runtime" />
              <Tech3D icon={SiExpress} name="Express" desc="REST APIs" />
              <Tech3D icon={SiFirebase} name="Firebase" desc="Auth & Storage" />
            </div>
          </div>

          {/* ML & AI */}
          <div>
            <h3 className="text-center text-lg mb-8 text-white/80">ML & AI</h3>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-10 justify-items-center">
              <Tech3D icon={FaPython} name="Python" desc="ML pipelines" />
              <Tech3D icon={SiTensorflow} name="TensorFlow" desc="Eligibility models" />
            </div>
          </div>
        </motion.section>

        {/* ================= ML CREDIBILITY ================= */}
        <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid md:grid-cols-3 gap-6">
          {[
            "ML-based eligibility & affordability prediction",
            "Risk scoring aligned with Indian lending rules",
            "Explainable outputs — no black-box decisions",
          ].map((text, i) => (
            <div key={i} className="rounded-2xl bg-cyan-500/10 border border-cyan-400/20 p-6 text-center">
              <BsStars className="mx-auto text-cyan-400 text-2xl mb-2" />
              <p className="text-white/80">{text}</p>
            </div>
          ))}
        </motion.section>

      </div>
    </div>
  );
},O,
