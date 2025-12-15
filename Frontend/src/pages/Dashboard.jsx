import { useLoanSession } from "../context/LoanSessionContext";
import { globalStats } from "../data/globalStats";

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

  return (
    <div className="max-w-7xl mx-auto px-4 pt-24 pb-16 space-y-10">
      {/* 🔹 GLOBAL SYSTEM STATS */}
      <StatGrid global stats={globalStats} />

      {/* 🔹 USER-SPECIFIC */}
      {session?.intent ? (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ReadinessMeter score={session.readinessScore || 0} />
            <SanctionCard sanction={session.sanction} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <LoanTypeChart data={globalStats.loanTypeDistribution} />
            <RiskChart data={globalStats.riskDistribution} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <RecentActivity activity={session.activityLog || []} />
            <NextSteps
              eligibility={session.eligibility}
              readinessScore={session.readinessScore}
            />
          </div>

          <ActivityFeed logs={session.activityLog || []} />
        </>
      ) : (
        <div className="text-center text-white/60 py-12">
          Start a chat with ALIS to see personalized insights.
        </div>
      )}
    </div>
  );
}
