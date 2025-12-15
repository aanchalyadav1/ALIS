export default function StatCard({ label, value, accent = "cyan" }) {
  const colors = {
    cyan: "text-cyan-400",
    emerald: "text-emerald-400",
    amber: "text-amber-400",
  };

  return (
    <div className="rounded-xl bg-white/5 border border-white/10 p-5">
      <div className="text-xs uppercase tracking-wider text-white/50">
        {label}
      </div>
      <div className={`mt-2 text-2xl font-semibold ${colors[accent]}`}>
        {value}
      </div>
    </div>
  );
}
