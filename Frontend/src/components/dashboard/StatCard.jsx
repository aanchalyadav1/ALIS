export default function StatCard({ title, value, note }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur">
      <p className="text-sm text-white/60">{title}</p>
      <h3 className="text-2xl font-semibold mt-2">{value}</h3>
      <p className="text-xs text-white/50 mt-1">{note}</p>
    </div>
  );
}
