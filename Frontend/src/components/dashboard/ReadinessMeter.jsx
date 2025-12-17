export default function ReadinessMeter({ score }) {
  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
      <h3 className="text-sm text-white/70 mb-2">
        System Readiness Index
      </h3>
      <p className="text-4xl font-bold text-emerald-400">{score}%</p>
      <p className="text-xs text-white/50 mt-1">
        Based on documents, risk & eligibility signals
      </p>
    </div>
  );
}
