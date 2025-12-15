import ProfileField from "./ProfileField";

export default function ProfileDetailsCard({ profile, setProfile }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4">
      <h2 className="text-lg font-medium">Personal Details</h2>

      <ProfileField
        label="Name"
        value={profile.name}
        onChange={(v) => setProfile({ ...profile, name: v })}
      />

      <ProfileField
        label="Age"
        value={profile.age}
        onChange={(v) => setProfile({ ...profile, age: v })}
      />

      <ProfileField
        label="City"
        value={profile.city}
        onChange={(v) => setProfile({ ...profile, city: v })}
      />

      <ProfileField
        label="Profession"
        value={profile.profession}
        onChange={(v) => setProfile({ ...profile, profession: v })}
      />

      <ProfileField
        label="Monthly Income (₹)"
        value={profile.income}
        onChange={(v) => setProfile({ ...profile, income: v })}
      />
    </div>
  );
}
