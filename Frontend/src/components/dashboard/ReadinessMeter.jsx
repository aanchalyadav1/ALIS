export default function ReadinessMeter({ score = 0 }) {
  const color =
    score >= 75 ? "#22c55e" :
    score >= 50 ? "#eab308" :
    "#ef4444";

  return (
    <div className="glass-card p-6">
      <h3 className="text-lg font-medium text-white mb-4">
        Loan Readiness Score
      </h3>

      <div className="flex items-center gap-6">
        <div className="relative w-32 h-32">
          <svg className="w-full h-full">
            <circle
              cx="64"
              cy="64"
              r="56"
              stroke="rgba(255,255,255,0.15)"
              strokeWidth="10"
              fill="none"
            />
            <circle
              cx="64"
              cy="64"
              r="56"
              stroke={color}
              strokeWidth="10"
              fill="none"
              strokeDasharray={`${(score / 100) * 351} 351`}
              transform="rotate(-90 64 64)"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-2xl font-semibold text-white">
            {score}%
          </div>
        </div>

        <p className="text-sm text-white/60 max-w-sm">
          AI-evaluated preparedness based on intent clarity,
          risk signals, and eligibility indicators.
        </p>
      </div>
    </div>
  );
}
