import { motion } from "framer-motion";

export default function TypingIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex items-center gap-3 text-sm text-white/60 mt-4"
    >
      <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center">
        <span className="animate-pulse text-cyan-400">●</span>
      </div>
      <span>ALIS is analyzing your financial profile…</span>
    </motion.div>
  );
}
