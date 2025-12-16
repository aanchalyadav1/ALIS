export default function ProfileStats({ profile }) {
  const income = Number(profile.income || 0);

  let risk = "Unknown";
  if (income > 80000) risk = "Low";
  else if (income > 30000) risk = "Medium";
  else if (income > 0) risk = "High";

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-2">
      <h3 className="text-sm text-white/60">Profile Intelligence</h3>

      <div className="text-sm">
        <span className="text-white/60">Estimated Risk:</span>{" "}
        <span className="text-cyan-400">{risk}</span>
      </div>

      <div className="text-sm">
        <span className="text-white/60">Loan Readiness:</span>{" "}
        <span className="text-emerald-400">
          {income ? "In Progress" : "Incomplete"}
        </span>
      </div>
    </div>
  );
}
