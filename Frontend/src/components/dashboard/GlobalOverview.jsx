import StatCard from "./StatCard";

export default function GlobalOverview() {
  return (
    <div>
      <h2 className="text-xl font-semibold text-white mb-4">
        Platform Insights
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <StatCard label="Loan Types Supported" value="Education, Home, Business, Personal" />
        <StatCard label="AI Agents" value="5 Specialized Agents" />
        <StatCard label="Approach" value="Explainable · Guidance-first" />
      </div>
    </div>
  );
}
