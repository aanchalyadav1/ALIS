export default function ProfileProgress({ profile }) {
  const fields = ["name", "age", "city", "profession", "income"];
  const filled = fields.filter((f) => profile[f]).length;
  const percent = Math.round((filled / fields.length) * 100);

  return (
    <div className="rounded-2xl border border-white/10
                    bg-white/5 p-6 col-span-1">
      <h3 className="text-sm text-white/60 mb-2">
        Profile Completion
      </h3>

      <div className="text-3xl font-semibold text-cyan-400">
        {percent}%
      </div>

      <div className="w-full h-2 bg-white/10 rounded-full mt-3">
        <div
          className="h-2 bg-cyan-400 rounded-full transition-all"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
