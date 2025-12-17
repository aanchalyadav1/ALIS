export default function ProfileInsights({ profile }) {
  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-6 space-y-3">
      <h3 className="text-lg font-medium">AI Insights</h3>

      <ul className="text-sm text-white/70 space-y-2">
        <li>• Education loans align well with your age profile</li>
        <li>• EMI stress expected to be low for long-tenure loans</li>
        <li>• Documentation readiness: Medium</li>
        <li>• You may benefit from government-backed schemes</li>
      </ul>
    </div>
  );
}
