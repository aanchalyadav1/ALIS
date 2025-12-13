import { motion } from "framer-motion";

export default function AgentStatus({ text }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-center text-xs text-cyan-400 tracking-wide my-4"
    >
      {text}
    </motion.div>
  );
}
