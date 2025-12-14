export default function ReadinessMeter() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
      <h2 className="text-lg font-medium text-white">
        Loan Readiness Score
      </h2>
      <p className="text-sm text-white/60 mt-1">
        Based on income signals, document completeness, and risk factors.
      </p>

      <div className="mt-6">
        <div className="w-full h-3 rounded-full bg-white/10 overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-cyan-600"
            style={{ width: "72%" }}
          />
        </div>

        <div className="mt-3 flex justify-between text-sm">
          <span className="text-white/60">Current</span>
          <span className="text-cyan-400 font-medium">72% — Good</span>
        </div>
      </div>
    </div>
  );
}
