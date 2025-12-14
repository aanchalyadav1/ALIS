export default function RecentActivity() {
  const items = [
    "Education loan intent analyzed",
    "Risk profile classified as low–moderate",
    "Salary range verified",
    "Document checklist generated",
    "Sanction preview eligibility unlocked",
  ];

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
      <h2 className="text-lg font-medium text-white mb-4">
        Recent Activity
      </h2>

      <ul className="space-y-3 text-sm text-white/60">
        {items.map((item, i) => (
          <li key={i}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}
