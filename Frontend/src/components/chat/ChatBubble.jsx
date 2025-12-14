import { motion } from "framer-motion";

export default function ChatBubble({ role, text }) {
  const isUser = role === "user";

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex ${isUser ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`max-w-[85%] sm:max-w-[70%] px-4 py-3 rounded-xl text-sm leading-relaxed ${
          isUser
            ? "bg-cyan-500 text-black rounded-br-none"
            : "bg-white/5 border border-white/10 text-white rounded-bl-none"
        }`}
      >
        {text}
      </div>
    </motion.div>
  );
}
