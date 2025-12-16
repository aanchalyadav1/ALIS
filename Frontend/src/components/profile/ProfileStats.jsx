export default function ProfileStats({ profile }) {
  const income = Number(profile.income || 0);

  let risk = "Unknown";
  let readiness = "Low";

  if (income > 80000) {
    risk = "Low";
    readiness = "High";
  } else if (income > 30000) {
    risk = "Medium";
    readiness = "Medium";
  } else if (income > 0) {
    risk = "High";
    readiness = "Low";
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-2">
      <h3 className="text-sm text-white/60">Loan Signals</h3>

      <div className="text-sm">
        <span className="text-white/60">Estimated Risk:</span>{" "}
        <span className="text-cyan-400">{risk}</span>
      </div>

      <div className="text-sm">
        <span className="text-white/60">Readiness:</span>{" "}
        <span className="text-emerald-400">{readiness}</span>
      </div>
    </div>
  );
}
