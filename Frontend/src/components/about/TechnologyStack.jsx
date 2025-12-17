import { motion } from "framer-motion";
import TechCard from "./TechCard";
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
import { staggerContainer } from "../../animationVariants";

export default function TechnologyStack() {
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <TechCard
          icon={FaReact}
          title="React"
          description="Component-driven UI for scalable, interactive interfaces"
        />
        <TechCard
          icon={SiVite}
          title="Vite"
          description="Lightning-fast development & production builds"
        />
        <TechCard
          icon={SiTailwindcss}
          title="Tailwind CSS"
          description="Utility-first styling for pixel-perfect UI control"
        />
        <TechCard
          icon={FaNodeJs}
          title="Node.js"
          description="Backend runtime for APIs & agent orchestration"
        />
        <TechCard
          icon={SiExpress}
          title="Express"
          description="REST APIs handling system logic & workflows"
        />
        <TechCard
          icon={SiFirebase}
          title="Firebase"
          description="Authentication, storage & secure user data handling"
        />
        <TechCard
          icon={FaPython}
          title="Python"
          description="ML pipelines, preprocessing & decision logic"
        />
        <TechCard
          icon={SiTensorflow}
          title="ML Models"
          description="Eligibility & risk prediction models"
        />
      </div>
    </motion.section>
  );
}
