// src/components/agents/eligibilityAgent.js

export function checkEligibility(profile = {}, intent) {
  if (!profile.age || profile.age < 18) return false;
  if (!intent || intent === "unknown") return false;
  return true;
}
