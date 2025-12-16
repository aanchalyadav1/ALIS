// src/components/agents/riskAgent.js

export function assessRisk(profile = {}) {
  if (!profile.income || profile.income < 15000) return "high";
  if (profile.income < 40000) return "medium";
  return "low";
}
