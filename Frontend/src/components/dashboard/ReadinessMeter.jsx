export default function ReadinessMeter({ score = 0 }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
      <h2 className="text-lg font-medium text-white mb-2">
        Loan Readiness Score
      </h2>

      <div className="w-full h-3 rounded-full bg-white/10 overflow-hidden">
        <div
          className="h-full bg-cyan-400 transition-all"
          style={{ width: `${score}%` }}
        />
      </div>

      <p className="text-sm text-white/60 mt-2">
        {score}% — Based on intent, risk, and eligibility signals
      </p>
    </div>
  );
}
