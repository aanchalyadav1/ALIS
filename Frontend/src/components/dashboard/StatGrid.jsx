import StatCard from "./StatCard";

/**
 * GLOBAL DASHBOARD STATS (DEMO SAFE)
 * Includes Document Readiness card
 */

export default function StatGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-6">

      {/* CORE STATS */}
      <StatCard label="Loan Requests" value="1.2M+" />
      <StatCard label="Eligibility Rate" value="62%" />
      <StatCard label="Avg Loan Size" value="₹9.4L" />
      <StatCard label="High Risk Profiles" value="18%" />

      {/* DOCUMENT READINESS */}
      <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-center">
        <h3 className="text-sm text-white/60">Document Readiness</h3>
        <div className="text-4xl font-bold text-cyan-400 mt-2">62%</div>
        <p className="text-xs text-white/50 mt-1">
          2 documents pending upload
        </p>
      </div>

    </div>
  );
}
