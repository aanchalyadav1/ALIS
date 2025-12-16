import { motion } from "framer-motion";
import StatGrid from "../components/dashboard/StatGrid";
import LoanTypeChart from "../components/dashboard/LoanTypeChart";
import RiskChart from "../components/dashboard/RiskChart";
import ActivityFeed from "../components/dashboard/ActivityFeed";

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-24 pb-16 space-y-10 text-white">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-2xl font-semibold">Loan Intelligence Dashboard</h1>
        <p className="text-white/60 text-sm">
          Real-time overview of Indian lending patterns & risk signals
        </p>
      </motion.div>

      {/* STATS */}
      <StatGrid />

      {/* CHARTS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <LoanTypeChart />
        <RiskChart />
      </div>

      {/* ACTIVITY */}
      <ActivityFeed />
    </div>
  );
}
