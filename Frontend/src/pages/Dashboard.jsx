import ReadinessMeter from "../components/dashboard/ReadinessMeter";
import StatGrid from "../components/dashboard/StatGrid";
import LoanTypeChart from "../components/dashboard/LoanTypeChart";
import RiskChart from "../components/dashboard/RiskChart";
import NextSteps from "../components/dashboard/NextSteps";
import RecentActivity from "../components/dashboard/RecentActivity";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#05060a] pt-24 px-6 pb-32">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* HEADER */}
        <div>
          <h1 className="text-3xl font-semibold text-white">
            Loan Intelligence Dashboard
          </h1>
          <p className="mt-2 text-white/60 max-w-3xl">
            A real-time view of your loan readiness, risk posture,
            and next best actions — continuously analyzed by ALIS.
          </p>
        </div>

        {/* READINESS */}
        <ReadinessMeter />

        {/* STATS */}
        <StatGrid />

        {/* CHARTS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <LoanTypeChart />
          <RiskChart />
        </div>

        {/* NEXT STEPS + ACTIVITY */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <NextSteps />
          <RecentActivity />
        </div>

      </div>
    </div>
  );
}
