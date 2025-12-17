import { motion } from "framer-motion";
import { FaUsers } from "react-icons/fa";

export default function VisionCoders() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="text-center space-y-6"
    >
      <div className="flex justify-center">
        <div className="h-14 w-14 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
          <FaUsers size={26} />
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-white">
        Who are <span className="text-cyan-400">VisionCoders?</span>
      </h3>

      <p className="max-w-3xl mx-auto text-white/70">
        VisionCoders is a student-led technology team focused on building
        real-world AI systems that are explainable, ethical, and impactful.
        We believe AI should guide users with clarity — not overwhelm them
        with complexity.
      </p>

      <p className="text-sm text-white/50 italic">
        “We don’t build demos — we build decision systems.”
      </p>
    </motion.div>
  );
}
