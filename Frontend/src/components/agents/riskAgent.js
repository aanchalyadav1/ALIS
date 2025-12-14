export function riskAgent(input) {
  const riskLevel = input.length > 40 ? "Low" : "Medium";

  return {
    risk: riskLevel,
    log: `Risk Agent assessed profile as ${riskLevel} risk`,
  };
}
