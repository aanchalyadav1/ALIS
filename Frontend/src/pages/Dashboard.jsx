// src/pages/Dashboard.jsx
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

  // 🔐 HARD SAFETY
  const session = ctx?.session || {};

  const {
    intent = "—",
    risk = "—",
    eligibility = null,
    sanction = null,
    readinessScore = 0,
    activityLog = [],
  } = session;

  return (
    <div className="max-w-7xl mx-auto px-4 pt-24 pb-16 space-y-10">

      {/* ===== GLOBAL PLATFORM STATS ===== */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-4">
          Platform Loan Intelligence
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <StatCard label="Total Loan Requests" value="12,480+" />
          <StatCard label="Eligibility Rate" value="62%" />
          <StatCard label="Avg Loan Size" value="₹9.6L" />
          <StatCard label="High Risk Profiles" value="18%" />
        </div>
      </section>

      {/* ===== USER SESSION SNAPSHOT ===== */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-4">
          Your Current Analysis
        </h2>

        <StatGrid session={{ intent, risk, eligibility }} />
      </section>

      {/* ===== READINESS + SANCTION ===== */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ReadinessMeter score={readinessScore} />
        <SanctionCard sanction={sanction} />
      </section>

      {/* ===== ANALYTICS ===== */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <LoanTypeChart intent={intent} />
        <RiskChart risk={risk} />
      </section>

      {/* ===== ACTIVITY & NEXT STEPS ===== */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentActivity activity={activityLog} />
        <NextSteps
          eligibility={eligibility}
          readinessScore={readinessScore}
        />
      </section>

      {/* ===== AGENT REASONING ===== */}
      <section>
        <ActivityFeed logs={activityLog} />
      </section>
    </div>
  );
}

/* -------------------------
   LOCAL STAT CARD (SAFE)
------------------------- */
function StatCard({ label, value }) {
  return (
    <div className="rounded-xl bg-white/5 border border-white/10 p-4">
      <div className="text-sm text-white/60">{label}</div>
      <div className="text-2xl font-semibold text-white mt-1">
        {value}
      </div>
    </div>
  );
}
