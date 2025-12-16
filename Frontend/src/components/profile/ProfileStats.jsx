export default function ProfileStats() {
  const stats = [
    { label: "Loan Queries", value: "4" },
    { label: "Risk Category", value: "Medium" },
    { label: "Eligibility Status", value: "Likely Eligible" },
  ];

  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-6 space-y-4">
      <h2 className="text-lg font-medium">Loan Intelligence Summary</h2>
      {stats.map((s) => (
        <div key={s.label} className="flex justify-between text-sm">
          <span className="text-white/60">{s.label}</span>
          <span>{s.value}</span>
        </div>
      ))}
    </div>
  );
}
