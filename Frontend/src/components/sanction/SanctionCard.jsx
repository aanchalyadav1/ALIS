export default function SanctionCard({ sanction }) {
  if (!sanction) {
    return (
      <div className="glass-card p-6 text-white/60">
        Sanction guidance will appear once eligibility is confirmed.
      </div>
    );
  }

  return (
    <div className="glass-card p-6 space-y-4 relative">
      <span className="absolute top-4 right-4 text-[10px] px-2 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-400/20">
        AI Generated
      </span>

      <h3 className="text-lg font-medium text-white">
        Sanction Guidance
      </h3>

      <div className="text-sm text-white/70 space-y-1">
        <p>Amount: <span className="text-white">{sanction.amount}</span></p>
        <p>Tenure: <span className="text-white">{sanction.tenure}</span></p>
        <p>EMI: <span className="text-white">{sanction.emi}</span></p>
        <p>Interest: <span className="text-white">{sanction.interest}</span></p>
      </div>

      <p className="text-[11px] text-white/40">
        This is guidance-only intelligence, not a final bank sanction.
      </p>
    </div>
  );
}
