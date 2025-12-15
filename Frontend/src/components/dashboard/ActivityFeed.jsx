export default function ActivityFeed({ logs = [] }) {
  if (!logs.length) {
    return (
      <div className="rounded-2xl bg-white/5 border border-white/10 p-6 text-white/60">
        Agent activity will appear here after analysis.
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-6 space-y-4">
      <h2 className="text-lg font-medium text-white">
        AI Reasoning Timeline
      </h2>

      {logs.map((log, i) => (
        <div key={i} className="text-sm text-white/70">
          <span className="text-cyan-400">{log.agent}</span>
          {" — "}
          {log.message}
        </div>
      ))}
    </div>
  );
}
