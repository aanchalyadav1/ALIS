import { motion } from "framer-motion";

export default function ChatBubble({ role, text }) {
  const isAI = role !== "user";

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex ${isAI ? "justify-start" : "justify-end"}`}
    >
      <div
        className={`max-w-[85%] rounded-xl px-4 py-3 text-sm leading-relaxed
        ${
          isAI
            ? "bg-white/10 border border-white/10 backdrop-blur text-white"
            : "bg-cyan-500 text-black"
        }`}
      >
        {text}
      </div>
    </motion.div>
  );
}
