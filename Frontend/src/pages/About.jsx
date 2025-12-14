import { motion } from "framer-motion";
import {
  SiReact,
  SiVite,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiFirebase,
} from "react-icons/si";

const techStack = [
  {
    name: "React",
    icon: SiReact,
    color: "text-cyan-400",
    desc: "Component-based UI for fast, scalable interfaces",
  },
  {
    name: "Vite",
    icon: SiVite,
    color: "text-violet-400",
    desc: "Lightning-fast dev & build tooling",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "text-sky-400",
    desc: "Utility-first styling for precise UI control",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "text-emerald-400",
    desc: "Backend runtime for API & agent orchestration",
  },
  {
    name: "Express",
    icon: SiExpress,
    color: "text-white/80",
    desc: "Lightweight REST APIs for system logic",
  },
  {
    name: "Firebase",
    icon: SiFirebase,
    color: "text-amber-400",
    desc: "Auth, storage & secure user data handling",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-[#05060a] pt-24 px-6 pb-32">
      <div className="max-w-6xl mx-auto space-y-24">

        {/* INTRO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs tracking-widest uppercase text-violet-400 mb-3">
            About the Project
          </p>
          <h1 className="text-4xl font-semibold text-white mb-4">
            ALIS — Agentic Loan Intelligence System
          </h1>
          <p className="text-white/70 max-w-3xl leading-relaxed">
            ALIS is an AI-powered, agent-driven loan intelligence platform
            designed to help users <span className="text-white">understand</span>{" "}
            loan eligibility, risk, and affordability — before making
            life-impacting financial decisions.
          </p>
        </motion.div>

        {/* WHO WE ARE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-white mb-4">
            Who We Are — VisionCoders
          </h2>
          <p className="text-white/70 max-w-3xl leading-relaxed">
            VisionCoders is a student-led engineering team focused on building
            real-world, production-grade systems. We believe technology should
            not just automate decisions — it should explain them.
          </p>
          <p className="text-white/60 max-w-3xl mt-3">
            ALIS represents our vision of ethical, transparent, and
            guidance-first AI in the financial domain.
          </p>
        </motion.div>

        {/* WHY ALIS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-white mb-6">
            Why ALIS is Different
          </h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
            {[
              {
                title: "Agentic AI Architecture",
                desc: "Multiple specialized AI agents collaborate instead of a single chatbot.",
              },
              {
                title: "Guidance-first Design",
                desc: "ALIS explains eligibility and risk before pushing applications.",
              },
              {
                title: "India-aware Loan Logic",
                desc: "Understands Indian documents, income types, and lending norms.",
              },
              {
                title: "Explainable Decisions",
                desc: "Clear reasoning behind approvals, limits, and rejections.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-xl bg-white/5 border border-white/10 p-5"
              >
                <h3 className="text-white font-medium mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-white/60">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* TECH STACK */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-white mb-8">
            Technology Behind ALIS
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
            {techStack.map((tech, i) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={i}
                  whileHover={{ y: -6, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex flex-col items-center text-center gap-3"
                >
                  <div
                    className={`w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur ${tech.color}`}
                  >
                    <Icon size={30} />
                  </div>
                  <span className="text-sm text-white/80">
                    {tech.name}
                  </span>
                  <span className="text-xs text-white/50">
                    {tech.desc}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* FOOTER NOTE */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-10 border-t border-white/10 text-center"
        >
          <p className="text-xs text-white/40">
            Built by VisionCoders · Agentic AI · Guidance-first · Ethics-driven
          </p>
        </motion.div>

      </div>
    </div>
  );
}
