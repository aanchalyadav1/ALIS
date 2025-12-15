export default function StatCard({ label, value }) {
  return (
    <div className="glass-card p-6">
      <p className="text-xs text-white/50 uppercase tracking-wider">
        {label}
      </p>
      <p className="mt-2 text-xl font-semibold text-white">
        {value}
      </p>
    </div>
  );
}
