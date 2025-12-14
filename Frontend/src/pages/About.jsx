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
  { name: "React", icon: SiReact, color: "text-cyan-400" },
  { name: "Vite", icon: SiVite, color: "text-violet-400" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-400" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-emerald-400" },
  { name: "Express", icon: SiExpress, color: "text-white/80" },
  { name: "Firebase", icon: SiFirebase, color: "text-amber-400" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-[#05060a] pt-24 px-6 pb-32">
      <div className="max-w-6xl mx-auto space-y-20">

        {/* WHO WE ARE */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-semibold text-white">
            About ALIS & VisionCoders
          </h1>
          <p className="mt-4 text-white/70 leading-relaxed max-w-3xl">
            VisionCoders is a student-led engineering team focused on
            building real-world, production-grade systems. ALIS was
            created to solve a core problem in lending — people apply
            for loans without understanding eligibility, risk, or outcomes.
          </p>
        </motion.div>

        {/* WHY ALIS */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-white mb-4">
            Why ALIS is Different
          </h2>
          <ul className="space-y-3 text-white/70">
            <li>• Multi-agent AI instead of a single chatbot</li>
            <li>• Guidance-first, not application-first</li>
            <li>• India-aware loan logic and documentation</li>
            <li>• Explainable AI decisions, not black boxes</li>
          </ul>
        </motion.div>

        {/* TECH STACK */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
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
                  className="flex flex-col items-center gap-3"
                >
                  <div
                    className={`w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur ${tech.color}`}
                  >
                    <Icon size={28} />
                  </div>
                  <span className="text-xs text-white/60">
                    {tech.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
