export default function ActivityTimeline({ logs }) {
  if (!logs.length) return null;

  return (
    <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
      <h2 className="text-lg font-medium text-white mb-4">
        Activity Timeline
      </h2>

      <ul className="space-y-2 text-sm text-white/60">
        {logs.map((log, i) => (
          <li key={i}>
            {log.agent ? (
              <span className="text-violet-400">{log.agent}</span>
            ) : (
              "User"
            )}
            : {log.message || log.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
