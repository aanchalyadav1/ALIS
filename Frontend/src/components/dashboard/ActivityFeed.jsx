export default function ActivityFeed({ logs = [] }) {
  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
      <h2 className="text-lg font-medium mb-4">
        Agent Trace
      </h2>

      {logs.length === 0 ? (
        <p className="text-sm text-white/40">
          Agent activity will appear here.
        </p>
      ) : (
        <ul className="space-y-2 text-sm">
          {logs.map((log, i) => (
            <li key={i} className="text-white/70">
              <span className="text-cyan-400">
                {log.agent}:
              </span>{" "}
              {log.message}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
