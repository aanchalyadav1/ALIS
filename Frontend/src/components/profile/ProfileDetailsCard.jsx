export default function ProfileDetailsCard({ profile, setProfile }) {
  function update(field, value) {
    setProfile((p) => ({ ...p, [field]: value }));
  }

  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-6 space-y-4">
      <h3 className="text-lg font-medium">Personal Details</h3>

      {[
        ["name", "Full Name"],
        ["age", "Age"],
        ["city", "City"],
        ["profession", "Profession"],
        ["loanPreference", "Loan Preference"],
      ].map(([key, label]) => (
        <input
          key={key}
          value={profile[key]}
          onChange={(e) => update(key, e.target.value)}
          placeholder={label}
          className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2 text-sm outline-none focus:border-cyan-400/40"
        />
      ))}

      <p className="text-xs text-white/40">
        Changes are saved locally (demo mode).
      </p>
    </div>
  );
}
