
import { motion } from "framer-motion";
import {
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiFirebase,
  SiOpenai
} from "react-icons/si";

export default function About() {
  return (
    <div className="min-h-screen px-6 pt-24 pb-32 bg-[#05060a] text-white">
      <div className="max-w-6xl mx-auto space-y-28">

        {/* ================= HERO ================= */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6"
        >
          <p className="text-xs tracking-widest uppercase text-cyan-400/80">
            About the Project
          </p>

          <h1 className="text-4xl sm:text-5xl font-semibold leading-tight">
            ALIS — <span className="text-cyan-400">Agentic Loan</span>
            <br />
            Intelligence System
          </h1>

          <p className="max-w-2xl mx-auto text-white/70 text-lg">
            ALIS is an agent-driven AI loan intelligence platform that helps users
            understand eligibility, risk, and affordability — <span className="text-white">
              before applying
            </span>.
          </p>
        </motion.section>

        {/* ================= WHO WE ARE ================= */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-semibold">
            Who We Are — <span className="text-cyan-400">VisionCoders</span>
          </h2>

          <p className="text-white/70 max-w-3xl leading-relaxed">
            VisionCoders is a team focused on building intelligent systems that
            solve real-world problems with clarity, responsibility, and strong
            user experience.
          </p>

          <p className="text-white/60 max-w-3xl leading-relaxed">
            We believe AI should not just automate decisions — it should
            <span className="text-white"> explain them</span>.  
            That belief is the foundation of ALIS.
          </p>
        </motion.section>

        {/* ================= WHY ALIS ================= */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-10"
        >
          <h2 className="text-2xl font-semibold">Why We Built ALIS</h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "Agentic AI",
                desc: "Multiple specialized AI agents collaborate instead of a single chatbot."
              },
              {
                title: "Guidance-first",
                desc: "Users understand eligibility and risk before applying."
              },
              {
                title: "Explainable Decisions",
                desc: "Clear reasoning behind approvals or rejections."
              },
              {
                title: "Ethical by Design",
                desc: "No forced selling, no dark patterns."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur"
              >
                <h3 className="font-medium text-lg mb-2 text-cyan-300">
                  {item.title}
                </h3>
                <p className="text-white/65 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ================= TECH STACK ================= */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-10"
        >
          <h2 className="text-2xl font-semibold text-center">
            Technology Behind <span className="text-cyan-400">ALIS</span>
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-center">
            {[
              { icon: SiReact, name: "React" },
              { icon: SiTailwindcss, name: "Tailwind" },
              { icon: SiNodedotjs, name: "Node.js" },
              { icon: SiExpress, name: "Express" },
              { icon: SiFirebase, name: "Firebase" },
              { icon: SiOpenai, name: "Groq LLM" }
            ].map((tech, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur"
              >
                <tech.icon className="mx-auto text-3xl text-cyan-400 mb-2" />
                <p className="text-sm text-white/70">{tech.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ================= FOOTER NOTE ================= */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center text-xs text-white/40 pt-10"
        >
          Built by VisionCoders · Agentic AI · Guidance-first · Ethics-driven
        </motion.footer>

      </div>
    </div>
  );
}
