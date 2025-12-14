import { motion } from "framer-motion";

export default function HeroScene() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      
      {/* OUTER GLOW */}
      <motion.div
        className="absolute w-60 h-60 rounded-full bg-cyan-400/30 blur-3xl"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      {/* CORE */}
      <motion.div
        className="w-44 h-44 rounded-full bg-cyan-500 shadow-[0_0_40px_rgba(34,211,238,0.6)]"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      />

      {/* RING */}
      <motion.div
        className="absolute w-56 h-56 rounded-full border border-cyan-400/40"
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}
