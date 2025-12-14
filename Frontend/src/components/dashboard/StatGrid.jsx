export default function StatGrid({ session }) {
  const items = [
    {
      label: "Loan Intent",
      value: session.intent || "—"
    },
    {
      label: "Risk Level",
      value: session.risk || "—"
    },
    {
      label: "Eligibility",
      value: session.eligibility ? "Eligible" : "Needs Review"
    },
    {
      label: "Agent Status",
      value: session.agentStatus
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-5"
        >
          <div className="text-sm text-white/60">
            {item.label}
          </div>
          <div className="text-lg font-semibold text-white mt-1">
            {item.value}
          </div>
        </div>
      ))}
    </div>
  );
}
