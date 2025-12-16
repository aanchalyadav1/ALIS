export default function ProfileStats({ profile }) {
  return (
    <div className="rounded-2xl border border-white/10
                    bg-white/5 p-6 col-span-2 grid
                    grid-cols-2 gap-4 text-sm">
      <Stat label="City" value={profile.city || "—"} />
      <Stat label="Age" value={profile.age || "—"} />
      <Stat label="Profession" value={profile.profession || "—"} />
      <Stat label="Income (₹)" value={profile.income || "—"} />
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div>
      <div className="text-white/50">{label}</div>
      <div className="font-medium">{value}</div>
    </div>
  );
}
