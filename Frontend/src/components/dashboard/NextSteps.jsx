export default function NextSteps({ session }) {
  let advice = "Start by describing your loan requirement in chat.";

  if (session.readinessScore >= 70) {
    advice =
      "You appear ready to proceed. Upload documents or explore sanction guidance.";
  } else if (session.readinessScore >= 40) {
    advice =
      "Some signals look good. Additional details or documents may improve readiness.";
  }

  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur">
      <h2 className="text-lg font-medium text-white mb-4">
        Recommended Next Steps
      </h2>

      <p className="text-sm text-white/60 mb-4">
        {advice}
      </p>

      <ul className="text-sm text-white/50 space-y-2">
        <li>• Upload relevant documents</li>
        <li>• Review eligibility insights</li>
        <li>• Proceed to guided application when ready</li>
      </ul>
    </div>
  );
}
