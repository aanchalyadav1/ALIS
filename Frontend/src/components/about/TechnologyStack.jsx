import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython
} from "react-icons/fa";
import {
  SiVite,
  SiTailwindcss,
  SiFirebase,
  SiExpress,
  SiTensorflow
} from "react-icons/si";

import { staggerContainer, cardFade } from "../../animationVariants";

export default function TechnologyStack() {
  const tech = [
    {
      icon: <FaReact />,
      name: "React",
      desc: "Component-driven UI for scalable interfaces"
    },
    {
      icon: <SiVite />,
      name: "Vite",
      desc: "Ultra-fast development & builds"
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
      desc: "Utility-first modern styling"
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
      desc: "Backend runtime & agent orchestration"
    },
    {
      icon: <SiExpress />,
      name: "Express",
      desc: "REST APIs & system workflows"
    },
    {
      icon: <SiFirebase />,
      name: "Firebase",
      desc: "Auth, storage & secure data"
    },
    {
      icon: <FaPython />,
      name: "Python",
      desc: "ML pipelines & preprocessing"
    },
    {
      icon: <SiTensorflow />,
      name: "ML Models",
      desc: "Eligibility & risk prediction"
    }
  ];

  return (
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
        {tech.map((t, i) => (
          <motion.div
            key={i}
            variants={cardFade}
            whileHover={{ scale: 1.15, rotateX: 8, rotateY: -8 }}
            className="rounded-2xl bg-gradient-to-br from-white/10 to-white/5
                       border border-white/10 p-6 text-center space-y-3 shadow-xl"
          >
            <div className="text-5xl text-cyan-400 mx-auto">
              {t.icon}
            </div>
            <p className="font-medium">{t.name}</p>
            <p className="text-xs text-white/60">{t.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
