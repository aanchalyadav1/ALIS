import { motion } from "framer-motion";

export default function ProfileProgress({ profile }) {
  const fields = ["name", "age", "city", "profession", "income"];
  const filled = fields.filter((f) => profile[f]).length;
  const percent = Math.round((filled / fields.length) * 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl border border-white/10 bg-white/5 p-6"
    >
      <h3 className="text-sm text-white/60 mb-2">Profile Completion</h3>

      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-cyan-400 transition-all"
          style={{ width: `${percent}%` }}
        />
      </div>

      <p className="text-xs text-white/50 mt-2">{percent}% completed</p>
    </motion.div>
  );
}
