import { useProfile } from "../../context/ProfileContext";
import ProfileField from "./ProfileField";

export default function ProfileCard() {
  const { profile, updateProfile } = useProfile();

  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur space-y-6">
      <ProfileField
        label="You are a"
        value={profile.role}
        options={["Student", "Salaried", "Business"]}
        onChange={(v) => updateProfile({ role: v.toLowerCase() })}
      />

      <ProfileField
        label="Monthly Income Range"
        value={profile.incomeRange}
        options={[
          "Below ₹25,000",
          "₹25,000 – ₹50,000",
          "₹50,000 – ₹1,00,000",
          "Above ₹1,00,000",
        ]}
        onChange={(v) => updateProfile({ incomeRange: v })}
      />

      <ProfileField
        label="Credit Confidence"
        value={profile.creditComfort}
        options={[
          "No credit history",
          "Some credit history",
          "Good credit score",
          "Excellent credit score",
        ]}
        onChange={(v) => updateProfile({ creditComfort: v })}
      />

      {profile.completed && (
        <div className="text-emerald-400 text-sm font-medium">
          ✔ Profile complete — ALIS agents will now personalize decisions
        </div>
      )}
    </div>
  );
}
