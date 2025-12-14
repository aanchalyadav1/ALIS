import { motion } from "framer-motion";

export default function HeroOrb() {
  return (
    <div className="relative flex items-center justify-center h-48">
      {/* Outer glow */}
      <motion.div
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-40 h-40 rounded-full bg-cyan-400/20 blur-2xl"
      />

      {/* Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute w-32 h-32 rounded-full border border-cyan-400/40"
      />

      {/* Core */}
      <div className="relative w-24 h-24 rounded-xl bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center shadow-xl">
        <span className="text-black font-bold tracking-widest text-xl">
          VC
        </span>
      </div>
    </div>
  );
}
