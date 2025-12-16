export default function ProfileDetailsCard({ profile, setProfile }) {
  function update(field, value) {
    setProfile((p) => ({ ...p, [field]: value }));
  }

  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-6 space-y-4">
      <h2 className="text-lg font-medium">Personal Details</h2>

      {[
        ["name", "Full Name"],
        ["age", "Age"],
        ["city", "City"],
        ["profession", "Profession"],
        ["income", "Annual Income"],
      ].map(([key, label]) => (
        <div key={key}>
          <label className="text-xs text-white/60">{label}</label>
          <input
            value={profile[key]}
            onChange={(e) => update(key, e.target.value)}
            className="w-full mt-1 bg-black/30 border border-white/10 rounded-lg px-3 py-2 text-sm outline-none focus:border-cyan-400/40"
          />
        </div>
      ))}
    </div>
  );
}
