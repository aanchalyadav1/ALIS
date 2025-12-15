import { useProfile } from "../../context/ProfileContext";

export default function ProfileProgress() {
  const { profile } = useProfile();

  const steps = [
    profile.role,
    profile.incomeRange,
    profile.creditComfort,
  ].filter(Boolean).length;

  const percent = Math.round((steps / 3) * 100);

  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
      <div className="flex justify-between text-sm text-white/60 mb-2">
        <span>Profile Completion</span>
        <span>{percent}%</span>
      </div>
      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-cyan-400 transition-all"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
