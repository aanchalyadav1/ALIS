import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto px-4 pt-28 pb-20 space-y-24"
      >
        {/* ========================= */}
        {/* WHAT IS ALIS */}
        {/* ========================= */}
        <section className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            ALIS —{" "}
            <span className="text-cyan-400">
              Agentic Loan Intelligence System
            </span>
          </h1>

          <p className="text-white/70 max-w-3xl text-lg leading-relaxed">
            ALIS is an AI-powered loan intelligence platform designed to help
            users understand loan eligibility, risk factors, and approval
            readiness <span className="text-white">before applying</span>.
            <br />
            <br />
            Instead of blindly applying for loans, ALIS provides explainable AI
            insights, document guidance, and system-driven recommendations —
            reducing rejection chances and enabling informed financial
            decisions.
          </p>
        </section>

        {/* ========================= */}
        {/* HOW ALIS WORKS */}
        {/* ========================= */}
        <section className="grid md:grid-cols-4 gap-6">
          {[
            {
              title: "User Signals",
              desc: "Basic profile, intent & document inputs",
            },
            {
              title: "AI & ML Analysis",
              desc: "Eligibility, risk & readiness modeling",
            },
            {
              title: "Agent Reasoning",
              desc: "Multi-agent evaluation & insights",
            },
            {
              title: "Actionable Guidance",
              desc: "Clear steps before loan application",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl bg-white/5 border border-white/10 p-6 hover:border-cyan-400/40 transition"
            >
              <h3 className="text-lg font-semibold mb-2 text-cyan-300">
                {item.title}
              </h3>
              <p className="text-sm text-white/60">{item.desc}</p>
            </motion.div>
          ))}
        </section>

        {/* ========================= */}
        {/* AI CORE */}
        {/* ========================= */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold">AI Core Intelligence</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "ML-based Loan Eligibility Prediction (Python)",
              "Explainable risk & readiness scoring",
              "Document-driven approval insights",
              "Multi-agent reasoning system",
            ].map((point, i) => (
              <div
                key={i}
                className="rounded-xl bg-white/5 border border-white/10 p-5 text-white/80"
              >
                • {point}
              </div>
            ))}
          </div>

          <p className="text-xs text-white/40">
            *AI outputs shown are simulated for demo purposes and aligned with
            real-world lending principles.*
          </p>
        </section>

        {/* ========================= */}
        {/* TECHNOLOGY STACK */}
        {/* ========================= */}
        <section className="space-y-10">
          <h2 className="text-3xl font-semibold">Technology Stack</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "React", desc: "Component-based UI" },
              { name: "Vite", desc: "Fast build tooling" },
              { name: "Tailwind CSS", desc: "Utility-first styling" },
              { name: "Node.js", desc: "Backend runtime" },
              { name: "Express", desc: "REST APIs & logic" },
              { name: "Firebase", desc: "Auth & storage" },
              { name: "Python", desc: "ML & data processing" },
              { name: "NumPy / Pandas", desc: "Data handling" },
              { name: "Scikit-learn", desc: "ML modeling" },
            ].map((tech, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.04 }}
                className="rounded-2xl bg-white/5 border border-white/10 p-6 text-center"
              >
                <div className="text-xl font-medium text-cyan-400">
                  {tech.name}
                </div>
                <div className="text-sm text-white/60 mt-2">
                  {tech.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ========================= */}
        {/* WHO ARE VISIONCODERS */}
        {/* ========================= */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold">
            Who are <span className="text-cyan-400">VisionCoders</span>?
          </h2>

          <p className="text-white/70 max-w-3xl leading-relaxed">
            VisionCoders is a student-led technology team focused on building
            intelligent, ethical, and real-world–ready software solutions.
            <br />
            <br />
            We believe in transforming emerging technologies like AI and ML into
            meaningful systems that solve genuine user problems — with clarity,
            responsibility, and strong design principles.
          </p>
        </section>

        {/* ========================= */}
        {/* VISION */}
        {/* ========================= */}
        <section className="rounded-3xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-white/10 p-10 text-center space-y-4">
          <h2 className="text-2xl font-semibold">Our Vision</h2>
          <p className="text-white/70 max-w-3xl mx-auto">
            To make financial decision-making more transparent, accessible, and
            informed — especially for students, first-time borrowers, and
            early-career professionals.
          </p>
        </section>
      </motion.div>
    </div>
  );
}
