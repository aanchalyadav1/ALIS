// src/components/agents/IntentAgent.js

export function detectIntent(input) {
  if (!input) return "unknown";

  const text = input.toLowerCase();

  if (text.includes("education")) return "education_loan";
  if (text.includes("home")) return "home_loan";
  if (text.includes("business")) return "business_loan";
  if (text.includes("vehicle")) return "vehicle_loan";
  if (text.includes("personal")) return "personal_loan";

  return "general_loan";
}
