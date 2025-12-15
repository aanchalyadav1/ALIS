export default function ProfileStats() {
  const stats = [
    { label: "Sessions Analyzed", value: "12" },
    { label: "Loan Types Viewed", value: "5" },
    { label: "Readiness Score", value: "78%" },
  ];

  return (
    <div className="space-y-4">
      {stats.map((s) => (
        <div
          key={s.label}
          className="rounded-xl bg-white/5 border border-white/10 p-4"
        >
          <div className="text-sm text-white/60">{s.label}</div>
          <div className="text-xl font-semibold text-white mt-1">
            {s.value}
          </div>
        </div>
      ))}
    </div>
  );
}
