export default function ActivityTimeline({ logs }) {
  return (
    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
      <h2 className="text-lg font-medium mb-4">
        Loan Journey Timeline
      </h2>

      <ul className="space-y-3 text-sm text-white/70">
        {logs.length === 0 && <li>No activity yet</li>}

        {logs.map((log, i) => (
          <li key={i}>
            <span className="text-cyan-400">
              {log.agent || "System"}:
            </span>{" "}
            {log.message}
          </li>
        ))}
      </ul>
    </div>
  );
}
