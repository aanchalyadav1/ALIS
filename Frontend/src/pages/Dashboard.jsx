import { useLoanSession } from "../context/LoanSessionContext";

import StatGrid from "../components/dashboard/StatGrid";
import ReadinessMeter from "../components/dashboard/ReadinessMeter";
import LoanTypeChart from "../components/dashboard/LoanTypeChart";
import RiskChart from "../components/dashboard/RiskChart";
import RecentActivity from "../components/dashboard/RecentActivity";
import NextSteps from "../components/dashboard/NextSteps";
import ActivityFeed from "../components/dashboard/ActivityFeed";
import SanctionCard from "../components/sanction/SanctionCard";

export default function Dashboard() {
  const { session } = useLoanSession();

  // ✅ SAFETY GUARD (prevents white screen)
  if (!session) {
    return (
      <div className="pt-24 text-center text-white/60">
        Loading dashboard…
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 pt-24 pb-16 space-y-8">

      {/* ======================
         TOP STATS
      ====================== */}
      <StatGrid session={session} />

      {/* ======================
         READINESS + SANCTION
      ====================== */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ReadinessMeter score={session.readinessScore} />
        <SanctionCard sanction={session.sanction} />
      </div>

      {/* ======================
         ANALYTICS
      ====================== */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <LoanTypeChart intent={session.intent} />
        <RiskChart risk={session.risk} />
      </div>

      {/* ======================
         ACTIVITY + NEXT STEPS
      ====================== */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentActivity activity={session.activityLog} />
        <NextSteps
          eligibility={session.eligibility}
          readinessScore={session.readinessScore}
        />
      </div>

      {/* ======================
         AGENT TRACE (OPTIONAL)
      ====================== */}
      <ActivityFeed logs={session.activityLog} />

    </div>
  );
}
