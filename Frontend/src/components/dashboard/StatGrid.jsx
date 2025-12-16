import StatCard from "./StatCard";

export default function StatGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      <StatCard label="Loan Requests" value="1.2M+" />
      <StatCard label="Eligibility Rate" value="62%" />
      <StatCard label="Avg Loan Size" value="₹9.4L" />
      <StatCard label="High Risk Profiles" value="18%" />
    </div>
  );
}
