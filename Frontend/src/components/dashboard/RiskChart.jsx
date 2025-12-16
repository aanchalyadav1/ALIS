export default function RiskChart() {
  const risks = [
    { label: "Low Risk", value: 55, color: "bg-emerald-400" },
    { label: "Medium Risk", value: 27, color: "bg-yellow-400" },
    { label: "High Risk", value: 18, color: "bg-red-400" },
  ];

  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
      <h2 className="text-lg font-medium mb-4">
        Credit Risk Classification
      </h2>

      {risks.map((r) => (
        <div key={r.label} className="mb-3">
          <div className="flex justify-between text-sm text-white/70">
            <span>{r.label}</span>
            <span>{r.value}%</span>
          </div>
          <div className="h-2 bg-white/10 rounded mt-1">
            <div
              className={`h-2 ${r.color} rounded`}
              style={{ width: `${r.value}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
