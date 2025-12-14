export default function SanctionCard({ sanction, readiness }) {
  if (!sanction) return null;

  return (
    <div className="mt-6 rounded-2xl border border-cyan-500/30 bg-cyan-500/10 backdrop-blur p-6 space-y-4">
      <h3 className="text-lg font-semibold text-cyan-300">
        AI Sanction Preview
      </h3>

      <p className="text-sm text-white/70">
        Based on your profile, income signals, and risk assessment,
        ALIS agents suggest the following guidance.
      </p>

      <div className="grid grid-cols-2 gap-4 text-sm">
        <Info label="Suggested Amount" value={sanction.amount} />
        <Info label="Tenure" value={sanction.tenure} />
        <Info label="Estimated EMI" value={sanction.emi} />
        <Info label="Interest Range" value={sanction.interest} />
      </div>

      <div className="pt-3 text-xs text-white/60">
        Readiness Score:{" "}
        <span className="text-cyan-300 font-medium">
          {readiness}%
        </span>
      </div>

      <div className="text-xs text-white/50">
        This is guidance-only intelligence, not a final bank sanction.
      </div>
    </div>
  );
}

function Info({ label, value }) {
  return (
    <div className="rounded-lg bg-black/30 p-3 border border-white/10">
      <div className="text-white/50 text-xs">{label}</div>
      <div className="font-medium text-white">{value}</div>
    </div>
  );
}
