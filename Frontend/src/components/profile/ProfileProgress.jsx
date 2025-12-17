export default function ProfileProgress({ profile }) {
  const fields = ["name", "age", "city", "profession", "loanPreference"];
  const filled = fields.filter((f) => profile[f]).length;
  const score = Math.round((filled / fields.length) * 100);

  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
      <h3 className="text-sm text-white/60">Profile Strength</h3>
      <div className="text-4xl font-bold text-cyan-400 mt-2">{score}%</div>
      <p className="text-xs text-white/50 mt-1">
        Complete your profile to improve AI guidance
      </p>
    </div>
  );
}
