export default function AIInsights({ insights }) {
  return (
    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
      <h2 className="text-lg font-medium mb-4">
        AI Profile Insights
      </h2>

      <ul className="space-y-2 text-sm text-white/70">
        {insights.length === 0 && (
          <li>No insights generated yet</li>
        )}

        {insights.map((log, i) => (
          <li key={i}>• {log.message}</li>
        ))}
      </ul>
    </div>
  );
}
