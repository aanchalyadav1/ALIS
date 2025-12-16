export default function ActivityFeed() {
  const logs = [
    "Education loans surged during admission season",
    "Home loan approvals increased in Tier-2 cities",
    "Higher risk detected in unsecured personal loans",
    "NBFC lending activity increased this quarter",
  ];

  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
      <h2 className="text-lg font-medium mb-4">
        System Activity & AI Observations
      </h2>

      <ul className="space-y-2 text-sm text-white/70">
        {logs.map((l, i) => (
          <li key={i}>• {l}</li>
        ))}
      </ul>
    </div>
  );
}
