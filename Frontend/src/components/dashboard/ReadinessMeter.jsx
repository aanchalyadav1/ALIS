
export default function ReadinessMeter({ score }) {
  return (
    <div className="p-6 rounded-xl bg-white/5 border border-white/10">
      <h3 className="text-lg font-medium mb-2">Loan Readiness</h3>
      <div className="w-full h-3 rounded-full bg-white/10 overflow-hidden">
        <div
          className="h-full bg-cyan-400 transition-all"
          style={{ width: `${score || 0}%` }}
        />
      </div>
      <p className="mt-2 text-sm text-white/60">
        Current readiness score: {score || 0}%
      </p>
    </div>
  );
}
