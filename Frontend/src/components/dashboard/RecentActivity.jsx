export default function RecentActivity({ activity = [] }) {
  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
      <h2 className="text-lg font-medium mb-4">
        Recent Activity
      </h2>

      {activity.length === 0 ? (
        <p className="text-sm text-white/40">
          No activity yet.
        </p>
      ) : (
        <ul className="space-y-2 text-sm">
          {activity.slice(-5).map((a, i) => (
            <li key={i} className="text-white/70">
              • {a.message || a.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
