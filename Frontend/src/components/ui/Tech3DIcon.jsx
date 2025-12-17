import { motion } from "framer-motion";

export default function Tech3DIcon({ icon: Icon, name, desc }) {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.06 }}
      transition={{ type: "spring", stiffness: 180, damping: 14 }}
      className="group relative flex flex-col items-center gap-3"
    >
      {/* 3D GLASS TILE */}
      <div
        className="
          relative h-20 w-20 rounded-2xl
          bg-gradient-to-br from-[#1a2233] to-[#0b0f14]
          border border-white/10
          shadow-[0_20px_50px_rgba(0,0,0,0.7)]
          flex items-center justify-center
        "
      >
        {/* Glow layer */}
        <div
          className="
            absolute inset-0 rounded-2xl
            bg-cyan-400/10 blur-xl opacity-0
            group-hover:opacity-100 transition
          "
        />

        {/* Icon */}
        <Icon className="relative text-4xl text-cyan-400" />
      </div>

      {/* Text */}
      <p className="text-sm font-medium text-white">{name}</p>
      {desc && <p className="text-xs text-white/50 text-center">{desc}</p>}
    </motion.div>
  );
}
