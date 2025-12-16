import { motion } from "framer-motion";

export default function StatCard({ label, value }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="rounded-2xl bg-white/5 border border-white/10 
                 p-6 hover:bg-white/10 transition"
    >
      <p className="text-sm text-white/60">{label}</p>
      <p className="text-2xl font-semibold text-white mt-2">
        {value}
      </p>
    </motion.div>
  );
}
