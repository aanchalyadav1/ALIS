export default function ProfileStats({ profile }) {
  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-6 space-y-3">
      <h3 className="text-sm text-white/60">Profile Snapshot</h3>

      <div className="text-sm">
        <span className="text-white/40">Life Stage:</span>{" "}
        <span className="text-emerald-400">
          {profile.age < 25 ? "Student / Early Career" : "Professional"}
        </span>
      </div>

      <div className="text-sm">
        <span className="text-white/40">Preferred Loan:</span>{" "}
        <span className="text-cyan-400">{profile.loanPreference}</span>
      </div>

      <div className="text-sm">
        <span className="text-white/40">Income Stability:</span>{" "}
        <span className="text-yellow-400">
          {profile.profession.includes("Student")
            ? "Future Income"
            : "Variable"}
        </span>
      </div>
    </div>
  );
}
