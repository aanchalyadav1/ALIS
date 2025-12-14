export default function RecentActivity({ activity = [] }) {
  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur">
      <h2 className="text-lg font-medium text-white mb-4">
        Agent Activity
      </h2>

      <ul className="space-y-3 text-sm text-white/60">
        {activity.length === 0 && (
          <li>No activity yet. Start a chat to see agents in action.</li>
        )}

        {activity.map((item, idx) => (
          <li key={idx}>
            <span className="text-cyan-400">{item.agent}:</span>{" "}
            {item.message}
          </li>
        ))}
      </ul>
    </div>
  );
}
