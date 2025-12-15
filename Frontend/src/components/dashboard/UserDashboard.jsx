import StatGrid from "./StatGrid";
import ReadinessMeter from "./ReadinessMeter";
import LoanTypeChart from "./LoanTypeChart";
import RiskChart from "./RiskChart";
import RecentActivity from "./RecentActivity";
import NextSteps from "./NextSteps";
import ActivityFeed from "./ActivityFeed";
import SanctionCard from "../sanction/SanctionCard";

export default function UserDashboard({ session }) {
  const {
    intent,
    risk,
    eligibility,
    sanction,
    readinessScore = 0,
    activityLog = []
  } = session;

  return (
    <>
      {/* USER SUMMARY */}
      <StatGrid session={session} />

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

      {/* GUIDANCE */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentActivity activity={activityLog} />
        <NextSteps eligibility={eligibility} readinessScore={readinessScore} />
      </div>

      {/* AGENT TRACE */}
      <ActivityFeed logs={activityLog} />
    </>
  );
}
