export default function ActivityFeed({ logs = [] }) {
  if (!Array.isArray(logs) || logs.length === 0) {
    return (
      <div className="glass-card p-6 text-white/60">
        Agent activity will appear here once ALIS starts reasoning.
      </div>
    );
  }

  return (
    <div className="glass-card p-6 space-y-4">
      <h2 className="text-lg font-medium text-white">
        AI Reasoning Timeline
      </h2>

      <div className="space-y-3">
        {logs.map((log, i) => (
          <div
            key={i}
            className="text-sm text-white/70 leading-relaxed"
          >
            <span className="text-cyan-400 font-mono">
              [{log.agent || "Agent"}]
            </span>{" "}
            {log.message || "Processing step completed."}
          </div>
        ))}
      </div>
    </div>
  );
}
