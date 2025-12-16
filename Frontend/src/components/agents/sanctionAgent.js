// src/components/agents/sanctionAgent.js

export function generateSanction(intent, risk) {
  if (risk === "high") {
    return { amount: "₹2–5 Lakh", tenure: "5–10 years" };
  }

  if (intent === "education_loan") {
    return { amount: "₹15–25 Lakh", tenure: "10–20 years" };
  }

  return { amount: "₹5–10 Lakh", tenure: "5–15 years" };
}
