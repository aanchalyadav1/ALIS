import { motion } from "framer-motion";
import StatCard from "./StatCard";

export default function StatGrid({ stats }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      <StatCard label="Loan Requests" value={stats.loanRequests} />
      <StatCard label="Eligibility Rate" value={stats.eligibilityRate} />
      <StatCard label="Avg Loan Size" value={stats.avgLoan} />
      <StatCard label="High Risk Profiles" value={stats.highRisk} />
    </div>
  );
}
