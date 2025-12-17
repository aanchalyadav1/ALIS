import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";
import {
  SiVite,
  SiTailwindcss,
  SiFirebase,
  SiExpress,
  SiTensorflow,
} from "react-icons/si";

const tech = [
  { icon: <FaReact />, name: "React", desc: "Component-based UI" },
  { icon: <SiVite />, name: "Vite", desc: "Fast builds" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS", desc: "Utility-first UI" },
  { icon: <FaNodeJs />, name: "Node.js", desc: "Backend runtime" },
  { icon: <SiExpress />, name: "Express", desc: "REST APIs" },
  { icon: <SiFirebase />, name: "Firebase", desc: "Auth & storage" },
  { icon: <FaPython />, name: "Python", desc: "ML pipelines" },
  { icon: <SiTensorflow />, name: "ML Models", desc: "Eligibility & risk" },
];

export default function TechnologyStack() {
  return (
    <section className="space-y-12">
      <h2 className="text-3xl font-semibold text-center">
        Technology <span className="text-cyan-400">Stack</span>
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {tech.map((t, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1, rotateX: 8, rotateY: -8 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="rounded-2xl bg-gradient-to-br from-white/10 to-white/5
              border border-white/10 p-6 text-center space-y-3 shadow-xl"
          >
            <div className="text-5xl text-cyan-400 mx-auto">
              {t.icon}
            </div>
            <p className="font-medium">{t.name}</p>
            <p className="text-sm text-white/60">{t.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
