export default function ReadinessMeter({ score = 0 }) {
  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur">
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
              stroke="#38bdf8"
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
          This score reflects how prepared you are based on intent clarity,
          risk signals, and eligibility indicators.
        </p>
      </div>
    </div>
  );
}

