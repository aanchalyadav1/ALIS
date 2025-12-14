export function eligibilityAgent(intent) {
  const eligible = intent !== "general";

  return {
    eligible,
    log: eligible
      ? "Eligibility Agent: Profile eligible for assessment"
      : "Eligibility Agent: Insufficient clarity for eligibility",
  };
}
