import { motion } from "framer-motion";
import { fadeUp, stagger, cardHover } from "../../animationVariants";
import {
  SiReact, SiVite, SiTailwindcss, SiNodedotjs,
  SiExpress, SiFirebase, SiPython, SiTensorflow
} from "react-icons/si";

const tech = [
  { icon: SiReact, name: "React", desc: "Component-based interactive UI" },
  { icon: SiVite, name: "Vite", desc: "Lightning-fast dev & build tooling" },
  { icon: SiTailwindcss, name: "Tailwind CSS", desc: "Utility-first UI styling" },
  { icon: SiNodedotjs, name: "Node.js", desc: "Backend runtime & orchestration" },
  { icon: SiExpress, name: "Express", desc: "REST APIs & system logic" },
  { icon: SiFirebase, name: "Firebase", desc: "Auth, storage & security" },
  { icon: SiPython, name: "Python", desc: "ML pipelines & preprocessing" },
  { icon: SiTensorflow, name: "ML Models", desc: "Eligibility & risk prediction" }
];

export default function TechnologyStack() {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="space-y-12"
    >
      <h2 className="text-4xl font-bold text-center">
        Technology <span className="text-cyan-400">Stack</span>
      </h2>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {tech.map((t, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            {...cardHover}
            className="
              bg-white/5 backdrop-blur-xl
              border border-white/10
              rounded-2xl p-6 text-center
              shadow-inner
            "
          >
            <t.icon className="text-cyan-400 text-4xl mx-auto mb-4" />
            <h3 className="font-semibold text-lg">{t.name}</h3>
            <p className="text-white/60 text-sm mt-2">{t.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
