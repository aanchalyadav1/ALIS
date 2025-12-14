export default function NextSteps({ session }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
      <h3 className="text-lg font-medium text-white mb-4">
        Recommended Next Steps
      </h3>

      <ul className="space-y-3 text-sm text-white/70">
        {!session.intent && (
          <li>• Describe your loan requirement in chat</li>
        )}
        {session.intent && !session.eligibility && (
          <li>• Improve eligibility with income or document details</li>
        )}
        {session.eligibility && (
          <li>• Upload documents to proceed safely</li>
        )}
        {session.readinessScore < 70 && (
          <li>• Reduce risk by adjusting tenure or amount</li>
        )}
        {session.readinessScore >= 70 && (
          <li>• You’re close to application readiness</li>
        )}
      </ul>
    </div>
  );
}
