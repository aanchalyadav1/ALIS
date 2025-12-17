
import { motion } from "framer-motion";

/* COMPONENTS */
import DashboardHeader from "../components/dashboard/DashboardHeader";
import StatGrid from "../components/dashboard/StatGrid";
import LoanTypeChart from "../components/dashboard/LoanTypeChart";
import RiskChart from "../components/dashboard/RiskChart";
import ReadinessMeter from "../components/dashboard/ReadinessMeter";
import ActivityFeed from "../components/dashboard/ActivityFeed";
import DocumentReadiness from "../components/dashboard/DocumentReadiness";
import AISummary from "../components/dashboard/AISummary";

/**
 * GLOBAL SYSTEM DASHBOARD (DEMO MODE)
 * ----------------------------------
 * ✔ No auth dependency
 * ✔ No LoanSessionContext
 * ✔ No agent execution
 * ✔ 100% safe for deployment
 */

export default function Dashboard() {
  /* 🔐 DEMO DATA — SYSTEM LEVEL */
  const demoStats = {
    loanRequests: "1.28M",
    eligibilityRate: "62%",
    avgLoan: "₹9.4L",
    highRisk: "18%",
  };

  const loanDistribution = [
    { name: "Education", value: 32 },
    { name: "Home", value: 28 },
    { name: "Personal", value: 18 },
    { name: "Business", value: 14 },
    { name: "Vehicle", value: 8 },
  ];

  const riskData = [
    { label: "Low Risk", value: 54 },
    { label: "Medium Risk", value: 28 },
    { label: "High Risk", value: 18 },
  ];

  const activityLog = [
    { agent: "IntentAgent", message: "Education loan demand increased by 12%" },
    { agent: "RiskAgent", message: "High-risk profiles rose in unsecured loans" },
    { agent: "EligibilityAgent", message: "62% applications met base criteria" },
    { agent: "SanctionAgent", message: "Avg sanction ₹9.4L this week" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#05060a] text-white"
    >
      <div className="max-w-7xl mx-auto px-4 pt-24 pb-16 space-y-10">

        {/* HEADER */}
        <DashboardHeader />

        {/* KPI STRIP */}
        <StatGrid stats={demoStats} />

        {/* CHARTS ROW */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <LoanTypeChart data={loanDistribution} />
          <RiskChart data={riskData} />
        </div>

        {/* SYSTEM HEALTH */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <ReadinessMeter score={62} />
          <DocumentReadiness />
          <AISummary />
        </div>

        {/* ACTIVITY */}
        <ActivityFeed logs={activityLog} />

        {/* FOOTER TRUST */}
        <div className="text-xs text-white/50 text-center pt-6">
          Data shown is anonymized & simulated for demo purposes · RBI-aligned logic
        </div>
      </div>
    </motion.div>
  );
}
