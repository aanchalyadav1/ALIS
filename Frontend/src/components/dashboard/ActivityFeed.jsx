import { motion } from "framer-motion";

export default function ActivityFeed({ logs = [] }) {
  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
      <h2 className="text-lg font-semibold text-white mb-4">
        AI Reasoning Timeline
      </h2>

      {logs.length === 0 && (
        <p className="text-sm text-white/50">
          Agent reasoning will appear after analysis.
        </p>
      )}

      <div className="space-y-3">
        {logs.map((log, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
            className="text-sm"
          >
            <span className="text-cyan-400 font-medium">
              {log.agent}
            </span>
            <span className="text-white/60"> — {log.message}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
