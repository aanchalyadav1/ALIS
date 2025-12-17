export default function ActivityFeed({ logs }) {
  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
      <h3 className="text-sm text-white/70 mb-4">
        AI Activity Timeline
      </h3>

      <div className="space-y-3">
        {logs.map((log, i) => (
          <div key={i} className="text-sm text-white/70">
            <span className="text-cyan-400">{log.agent}</span> — {log.message}
          </div>
        ))}
      </div>
    </div>
  );
}
