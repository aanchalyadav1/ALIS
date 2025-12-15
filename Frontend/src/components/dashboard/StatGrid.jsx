import StatCard from "./StatCard";

export default function StatGrid({ session }) {
  if (!session) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      <StatCard label="Loan Intent" value={session.intent ?? "—"} />
      <StatCard label="Risk Level" value={session.risk ?? "—"} />
      <StatCard
        label="Eligibility"
        value={
          session.eligibility === null
            ? "—"
            : session.eligibility
            ? "Likely Eligible"
            : "Needs Review"
        }
      />
    </div>
  );
}
