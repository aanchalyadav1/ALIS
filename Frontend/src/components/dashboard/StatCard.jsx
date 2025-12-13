export default function StatCard({ title, value }) {
  return (
    <div className="p-4 bg-white/10 rounded">
      <div className="text-sm opacity-70">{title}</div>
      <div className="text-2xl font-semibold">{value}</div>
    </div>
  );
}
