import { motion } from "framer-motion";
import { useProfile } from "../../hooks/useProfile";
import ProfileField from "./ProfileField";

export default function ProfileDetailsCard() {
  const { profile, setProfile } = useProfile();

  const updateField = (key, value) => {
    setProfile(prev => ({ ...prev, [key]: value }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="lg:col-span-2 rounded-2xl bg-white/5 border border-white/10 p-6 space-y-6"
    >
      <h2 className="text-lg font-semibold text-white">
        Personal Details
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <ProfileField
          label="Full Name"
          value={profile.name}
          onChange={(v) => updateField("name", v)}
        />

        <ProfileField
          label="Age"
          value={profile.age}
          onChange={(v) => updateField("age", v)}
        />

        <ProfileField
          label="City"
          value={profile.city}
          onChange={(v) => updateField("city", v)}
        />

        <ProfileField
          label="Profession"
          value={profile.profession}
          onChange={(v) => updateField("profession", v)}
        />

        <ProfileField
          label="Monthly Income"
          value={profile.income}
          onChange={(v) => updateField("income", v)}
        />
      </div>
    </motion.div>
  );
}
