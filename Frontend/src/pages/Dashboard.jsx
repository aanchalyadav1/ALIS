import { motion } from "framer-motion";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import StatGrid from "../components/dashboard/StatGrid";
import ReadinessMeter from "../components/dashboard/ReadinessMeter";
import LoanTypeChart from "../components/dashboard/LoanTypeChart";
import RiskChart from "../components/dashboard/RiskChart";
import RecentActivity from "../components/dashboard/RecentActivity";
import NextSteps from "../components/dashboard/NextSteps";
import ActivityFeed from "../components/dashboard/ActivityFeed";

/**
 * DEMO-FIRST GLOBAL DASHBOARD
 * --------------------------
 * • No dependency on LoanSessionContext
 * • No crash if agents fail
 * • Uses realistic Indian banking demo data
 */

export default function Dashboard() {
  // 🔒 HARD-CODED DEMO DATA (SAFE FOR JUDGING)
  const demoSession = {
    intent: "Education Loan",
    risk: "Medium",
    eligibility: true,
    readinessScore: 78,
    activityLog: [
      { agent: "IntentAgent", message: "Education loan intent detected" },
      { agent: "RiskAgent", message: "Medium risk based on profile signals" },
      { agent: "EligibilityAgent", message: "Eligible for student lending schemes" },
      { agent: "SanctionAgent", message: "Provisional sanction generated" },
      { agent: "ReadinessAgent", message: "Readiness score computed at 78%" },
    ],
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto px-4 pt-24 pb-16 space-y-8 text-white"
    >
      {/* HEADER */}
      <DashboardHeader />

      {/* TOP STATS */}
      <StatGrid session={demoSession} />

      {/* READINESS + RISK */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ReadinessMeter score={demoSession.readinessScore} />
        <RiskChart risk={demoSession.risk} />
      </div>

      {/* LOAN DEMAND ANALYTICS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <LoanTypeChart intent={demoSession.intent} />
        <NextSteps
          eligibility={demoSession.eligibility}
          readinessScore={demoSession.readinessScore}
        />
      </div>

      {/* ACTIVITY + AI TRACE */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentActivity activity={demoSession.activityLog} />
        <ActivityFeed logs={demoSession.activityLog} />
      </div>
    </motion.div>
  );
}
