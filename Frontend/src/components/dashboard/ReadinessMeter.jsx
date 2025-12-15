import { motion } from "framer-motion";

export default function ReadinessMeter({ score = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="rounded-2xl bg-gradient-to-br from-cyan-500/10 to-violet-500/10
                 border border-white/10 p-6 backdrop-blur"
    >
      <h2 className="text-lg font-semibold text-white mb-2">
        Loan Readiness Score
      </h2>
      <p className="text-xs text-white/50 mb-5">
        How prepared you are for approval based on AI analysis
      </p>

      <div className="flex items-center gap-6">
        <div className="relative w-32 h-32">
          <svg className="w-full h-full">
            <circle
              cx="64"
              cy="64"
              r="56"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="10"
              fill="none"
            />
            <motion.circle
              cx="64"
              cy="64"
              r="56"
              stroke="#22d3ee"
              strokeWidth="10"
              fill="none"
              strokeDasharray="351"
              initial={{ strokeDashoffset: 351 }}
              animate={{
                strokeDashoffset: 351 - (score / 100) * 351,
              }}
              transition={{ duration: 1 }}
              transform="rotate(-90 64 64)"
            />
          </svg>

          <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-white">
            {score}%
          </div>
        </div>

        <div className="space-y-2 text-sm text-white/70">
          <p>✔ Eligibility signals</p>
          <p>✔ Risk assessment</p>
          <p>✔ Intent clarity</p>
        </div>
      </div>
    </motion.div>
  );
}
