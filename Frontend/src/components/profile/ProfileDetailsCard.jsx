export default function ProfileDetailsCard({ profile, setProfile }) {
  function update(field, value) {
    setProfile((p) => ({ ...p, [field]: value }));
  }

  return (
    <div className="rounded-2xl border border-white/10
                    bg-white/5 p-6 space-y-4">
      <h2 className="text-lg font-medium">
        Personal Information
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input label="Full Name" value={profile.name}
               onChange={(v) => update("name", v)} />

        <Input label="Age" value={profile.age}
               onChange={(v) => update("age", v)} />

        <Input label="City" value={profile.city}
               onChange={(v) => update("city", v)} />

        <Input label="Profession" value={profile.profession}
               onChange={(v) => update("profession", v)} />

        <Input label="Monthly Income (₹)"
               value={profile.income}
               onChange={(v) => update("income", v)} />
      </div>
    </div>
  );
}

function Input({ label, value, onChange }) {
  return (
    <div>
      <label className="text-xs text-white/50">
        {label}
      </label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full px-3 py-2 rounded-lg
                   bg-black/40 border border-white/10
                   text-white text-sm
                   focus:border-cyan-400 outline-none"
      />
    </div>
  );
}
