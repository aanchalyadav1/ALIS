export default function AIInsights({ insights }) {
  if (!insights.length) return null;

  return (
    <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
      <h2 className="text-lg font-medium text-white mb-4">
        AI Reasoning & Insights
      </h2>

      <ul className="space-y-2 text-sm text-white/70">
        {insights.map((log, i) => (
          <li key={i}>
            <span className="text-cyan-400">•</span>{" "}
            {log.message || log.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
