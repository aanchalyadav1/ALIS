import StatCard from "../components/dashboard/StatCard";
import LoanTypeChart from "../components/dashboard/LoanTypeChart";
import RiskChart from "../components/dashboard/RiskChart";

export default function Dashboard() {
  return (
    <div className="pt-20 max-w-6xl mx-auto grid gap-6">
      <div className="grid md:grid-cols-4 gap-4">
        <StatCard title="Eligibility Rate" value="72%" />
        <StatCard title="Avg Loan ₹" value="8.4L" />
        <StatCard title="Low Risk" value="61%" />
        <StatCard title="Processing Time" value="1.2 min" />
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <LoanTypeChart />
        <RiskChart />
      </div>
    </div>
  );
}
