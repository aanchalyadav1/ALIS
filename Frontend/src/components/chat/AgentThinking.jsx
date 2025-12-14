export default function AgentThinking({ status }) {
  if (status !== "running") return null;

  const steps = [
    "Intent Agent identifying loan type",
    "Verification Agent validating profile",
    "Underwriting Agent assessing risk",
    "Eligibility Agent computing readiness",
    "Sanction Agent preparing guidance"
  ];

  return (
    <div className="mt-2 space-y-2 text-sm text-white/60">
      {steps.map((step, i) => (
        <div key={i} className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span>{step}</span>
        </div>
      ))}
    </div>
  );
}
