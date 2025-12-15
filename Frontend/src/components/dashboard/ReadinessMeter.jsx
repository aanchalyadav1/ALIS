export default function ReadinessMeter({ score = 0 }) {
  const level =
    score >= 70 ? "High Readiness"
    : score >= 40 ? "Moderate Readiness"
    : "Low Readiness";

  const color =
    score >= 70 ? "#22c55e"
    : score >= 40 ? "#f59e0b"
    : "#f43f5e";

  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur card-hover">
      <h2 className="text-lg font-medium text-white mb-4">
        Loan Readiness Score
      </h2>

      <div className="flex items-center gap-6">
        <div className="relative w-32 h-32">
          <svg className="w-full h-full">
            <circle
              cx="64"
              cy="64"
              r="56"
              stroke="rgba(255,255,255,0.1)"
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
              className="transition-all duration-700"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-semibold text-white">
              {score}%
            </span>
            <span className="text-xs text-white/60">{level}</span>
          </div>
        </div>

        <p className="text-sm text-white/60 max-w-sm">
          Based on intent clarity, risk indicators, and eligibility signals
          detected by ALIS agents.
        </p>
      </div>
    </div>
  );
}
