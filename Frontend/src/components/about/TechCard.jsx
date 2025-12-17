
import { motion } from "framer-motion";

export default function TechCard({ icon: Icon, title, description }) {
  return (
    <motion.div
      whileHover={{
        rotateX: 8,
        rotateY: -8,
        scale: 1.05
      }}
      transition={{ type: "spring", stiffness: 180, damping: 15 }}
      className="relative group perspective-[1200px]"
    >
      <div className="rounded-2xl bg-gradient-to-br from-white/10 to-white/5 
                      border border-white/10 p-6 h-full
                      shadow-[0_20px_40px_rgba(0,0,0,0.6)]
                      backdrop-blur-md">

        {/* Glow */}
        <div className="absolute inset-0 rounded-2xl 
                        bg-cyan-500/10 opacity-0 group-hover:opacity-100 
                        transition duration-500 blur-xl" />

        {/* Content */}
        <div className="relative z-10 text-center space-y-3">
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="text-5xl text-cyan-400 mx-auto"
          >
            <Icon />
          </motion.div>

          <h4 className="font-semibold">{title}</h4>
          <p className="text-sm text-white/60">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}
