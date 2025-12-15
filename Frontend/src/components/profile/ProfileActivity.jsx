export default function ProfileActivity() {
  const activities = [
    "Viewed Education Loan eligibility",
    "Checked readiness score",
    "Uploaded PAN document",
    "Reviewed sanction guidance",
  ];

  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
      <h2 className="text-lg font-medium text-white mb-4">
        Recent Activity
      </h2>

      <ul className="space-y-3 text-sm text-white/70">
        {activities.map((a, i) => (
          <li key={i}>• {a}</li>
        ))}
      </ul>
    </div>
  );
}
