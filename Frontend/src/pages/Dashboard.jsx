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
  const ctx = useLoanSession();

  if (!ctx || !ctx.session) {
    return (
      <div className="pt-24 text-center text-white/60">
        Initializing loan intelligence…
      </div>
    );
  }

  const {
    intent = null,
    risk = null,
    eligibility = null,
    sanction = null,
    readinessScore = 0,
    activityLog = [],
  } = ctx.session;

  return (
    <div className="max-w-7xl mx-auto px-4 pt-24 pb-16 space-y-8 text-white">

      <h1 className="text-2xl font-semibold">
        Loan Intelligence Dashboard
      </h1>

      {/* TOP STATS */}
      <StatGrid session={ctx.session} />

      {/* READINESS + SANCTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ReadinessMeter score={readinessScore} />
        <SanctionCard sanction={sanction} />
      </div>

      {/* ANALYTICS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <LoanTypeChart intent={intent} />
        <RiskChart risk={risk} />
      </div>

      {/* ACTIVITY + NEXT STEPS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentActivity activity={activityLog} />
        <NextSteps
          eligibility={eligibility}
          readinessScore={readinessScore}
        />
      </div>

      {/* AGENT TRACE */}
      <ActivityFeed logs={activityLog} />

    </div>
  );
}
