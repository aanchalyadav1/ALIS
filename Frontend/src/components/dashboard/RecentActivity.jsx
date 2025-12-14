
export default function RecentActivity({ activity = [] }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
      <h3 className="text-lg font-medium text-white mb-4">
        Agent Activity Log
      </h3>

      <div className="space-y-3 text-sm">
        {activity.length === 0 && (
          <p className="text-white/40">
            No activity yet. Start a chat to generate insights.
          </p>
        )}

        {activity.map((item, i) => (
          <div
            key={i}
            className="text-white/70 border-l-2 border-cyan-400/30 pl-3"
          >
            {item.text || item.type}
          </div>
        ))}
      </div>
    </div>
  );
}
