export default function ProfileActivity() {
  const demo = [
    "Viewed education loan options",
    "Uploaded PAN document",
    "Checked loan readiness score",
    "Explored home loan eligibility",
  ];

  return (
    <div className="rounded-2xl border border-white/10
                    bg-white/5 p-6">
      <h2 className="text-lg font-medium mb-4">
        Recent Activity
      </h2>

      <ul className="space-y-2 text-sm text-white/70">
        {demo.map((item, i) => (
          <li key={i}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}
