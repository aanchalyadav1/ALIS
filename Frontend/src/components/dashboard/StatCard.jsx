export default function StatCard({ label, value }) {
  return (
    <div className="rounded-xl bg-white/5 border border-white/10 p-5 backdrop-blur">
      <div className="text-sm text-white/50">{label}</div>
      <div className="mt-2 text-lg font-medium text-white">
        {value}
      </div>
    </div>
  );
}
