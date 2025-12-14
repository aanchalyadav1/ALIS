import StatCard from "./StatCard";

export default function StatGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard
        title="Risk Profile"
        value="Low–Moderate"
        note="Healthy repayment indicators"
      />
      <StatCard
        title="Loan Intent"
        value="Education"
        note="Most recent interaction"
      />
      <StatCard
        title="Documents Ready"
        value="6 / 10"
        note="Upload more to strengthen case"
      />
      <StatCard
        title="Approval Speed"
        value="Fast"
        note="Low-risk profiles convert faster"
      />
    </div>
  );
}
