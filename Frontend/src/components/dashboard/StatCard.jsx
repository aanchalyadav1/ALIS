import { motion } from "framer-motion";

export default function StatCard({ label, value }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="rounded-2xl bg-white/5 border border-white/10 p-5"
    >
      <p className="text-sm text-white/60">{label}</p>
      <p className="text-3xl font-semibold mt-2 text-cyan-400">
        {value}
      </p>
    </motion.div>
  );
}
