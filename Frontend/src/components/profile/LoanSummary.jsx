export default function LoanSummary({ session }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
      <Card label="Intent" value={session.intent || "—"} />
      <Card label="Risk" value={session.risk || "—"} />
      <Card
        label="Eligibility"
        value={
          session.eligibility === null
            ? "—"
            : session.eligibility
            ? "Eligible"
            : "Review Needed"
        }
      />
      <Card
        label="Readiness"
        value={`${session.readinessScore || 0}%`}
      />
    </div>
  );
}

function Card({ label, value }) {
  return (
    <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
      <p className="text-xs text-white/60">{label}</p>
      <p className="text-lg font-semibold mt-1">{value}</p>
    </div>
  );
}
