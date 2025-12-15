export default function LoanSummary({ session }) {
  if (!session || !session.intent) {
    return (
      <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-white/60">
        No loan analysis yet. Talk to ALIS to begin.
      </div>
    );
  }

  return (
    <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
      <h2 className="text-lg font-medium text-white mb-4">
        Current Loan Intelligence
      </h2>

      <div className="grid sm:grid-cols-3 gap-4 text-sm">
        <div>
          <p className="text-white/50">Intent</p>
          <p className="text-white">{session.intent}</p>
        </div>
        <div>
          <p className="text-white/50">Risk</p>
          <p className="text-white">{session.risk}</p>
        </div>
        <div>
          <p className="text-white/50">Readiness</p>
          <p className="text-white">{session.readinessScore}%</p>
        </div>
      </div>
    </div>
  );
}
