import { useLoanSession } from "../context/LoanSessionContext";

import DashboardHero from "../components/dashboard/DashboardHero";
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

  if (!session) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 pt-24 pb-16 space-y-10">

      <DashboardHero />

      <StatGrid session={session} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ReadinessMeter score={session.readinessScore || 0} />
        <SanctionCard sanction={session.sanction} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <LoanTypeChart intent={session.intent} />
        <RiskChart risk={session.risk} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <NextSteps
          eligibility={session.eligibility}
          readinessScore={session.readinessScore}
        />
        <RecentActivity activity={session.activityLog} />
      </div>

      <ActivityFeed logs={session.activityLog} />

    </div>
  );
}
