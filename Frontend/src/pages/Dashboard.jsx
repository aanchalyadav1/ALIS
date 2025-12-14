import StatCard from "../components/dashboard/StatCard";
import LoanTypeChart from "../components/dashboard/LoanTypeChart";
import RiskChart from "../components/dashboard/RiskChart";
import ActivityFeed from "../components/dashboard/ActivityFeed";

export default function Dashboard() {
  return (
    <div className="min-h-screen pt-20 px-4 pb-16">
      <div className="max-w-7xl mx-auto space-y-10">

        {/* HEADER */}
        <div>
          <h2 className="text-2xl font-semibold">
            ALIS Insights Dashboard
          </h2>
          <p className="text-sm text-white/60">
            Real-time intelligence from loan interactions
          </p>
        </div>

        {/* KPI CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Loan Requests"
            value="1,248"
            note="Across all loan categories"
          />
          <StatCard
            title="Eligibility Rate"
            value="72%"
            note="AI-approved applicants"
          />
          <StatCard
            title="Low Risk Profiles"
            value="62%"
            note="Strong credit & income signals"
          />
          <StatCard
            title="Avg. Loan Size"
            value="₹18.6L"
            note="Home & business dominant"
          />
        </div>

        {/* CHARTS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <LoanTypeChart />
          <RiskChart />
        </div>

        {/* ACTIVITY FEED */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ActivityFeed />
          </div>

          {/* INSIGHT PANEL */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur">
            <h3 className="text-lg font-medium mb-3">
              AI Observations
            </h3>
            <ul className="text-sm text-white/60 space-y-3">
              <li>• Home loans dominate mid-income profiles</li>
              <li>• Students show higher education loan intent</li>
              <li>• Salaried users convert faster than self-employed</li>
              <li>• Low-risk users prefer shorter tenures</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}
