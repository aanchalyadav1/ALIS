import { useUser } from "../../context/UserContext";

export default function ProfileDetailsCard() {
  const { profile, setProfile } = useUser();

  function updateField(key, value) {
    setProfile((prev) => ({ ...prev, [key]: value }));
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h2 className="mb-4 text-lg font-semibold">Personal Details</h2>

      {[
        ["name", "Name"],
        ["age", "Age"],
        ["city", "City"],
        ["profession", "Profession"],
        ["monthlyIncome", "Monthly Income (₹)"],
      ].map(([key, label]) => (
        <div key={key} className="mb-4">
          <label className="mb-1 block text-sm text-white/60">{label}</label>
          <input
            value={profile[key] || ""}
            onChange={(e) => updateField(key, e.target.value)}
            className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-white outline-none focus:border-cyan-500"
          />
        </div>
      ))}
    </div>
  );
}
