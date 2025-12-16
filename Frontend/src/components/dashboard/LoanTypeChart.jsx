export default function LoanTypeChart() {
  const data = [
    { label: "Education", value: 30 },
    { label: "Home", value: 25 },
    { label: "Personal", value: 20 },
    { label: "Business", value: 15 },
    { label: "Vehicle", value: 10 },
  ];

  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
      <h2 className="text-lg font-medium mb-4">
        Loan Type Demand Distribution
      </h2>

      {data.map((d) => (
        <div key={d.label} className="mb-3">
          <div className="flex justify-between text-sm text-white/70">
            <span>{d.label}</span>
            <span>{d.value}%</span>
          </div>
          <div className="h-2 bg-white/10 rounded mt-1">
            <div
              className="h-2 bg-cyan-400 rounded"
              style={{ width: `${d.value}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
