import { motion } from "framer-motion";

export default function TechCard({ icon: Icon, name, description }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 260 }}
      className="rounded-2xl bg-white/5 border border-white/10 p-6 text-center backdrop-blur-xl hover:border-cyan-400/40"
    >
      <div className="h-14 w-14 mx-auto mb-4 flex items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
        <Icon size={28} />
      </div>

      <h3 className="text-white font-medium">{name}</h3>
      <p className="text-sm text-white/60 mt-2">{description}</p>
    </motion.div>
  );
}
