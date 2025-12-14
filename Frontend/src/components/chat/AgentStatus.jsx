import { motion } from "framer-motion";

export default function AgentStatus({ text }) {
  if (!text) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center gap-3 text-xs text-cyan-300 mt-4"
    >
      {/* AI pulse */}
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-400" />
      </span>

      <span>{text}</span>
    </motion.div>
  );
}
