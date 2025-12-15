export default function ProfileProgress({ profile }) {
  const fields = Object.values(profile);
  const completed = fields.filter(v => v && v !== "").length;
  const percent = Math.round((completed / fields.length) * 100);

  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
      <div className="flex justify-between mb-2">
        <span className="text-sm text-white/60">Profile Completion</span>
        <span className="text-sm text-cyan-400">{percent}%</span>
      </div>

      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-cyan-400"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
