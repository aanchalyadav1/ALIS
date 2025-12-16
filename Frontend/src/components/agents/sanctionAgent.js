// src/components/agents/sanctionAgent.js

export function generateSanction(intent, risk) {
  if (!intent) return null;

  if (risk === "high") {
    return {
      amount: "₹2–5 Lakh",
      tenure: "5–10 years",
      interest: "12–16%",
    };
  }

  if (intent === "education_loan") {
    return {
      amount: "₹15–25 Lakh",
      tenure: "10–20 years",
      interest: "8–10%",
    };
  }

  if (intent === "home_loan") {
    return {
      amount: "₹30–60 Lakh",
      tenure: "15–30 years",
      interest: "8.5–9.5%",
    };
  }

  if (intent === "business_loan") {
    return {
      amount: "₹10–40 Lakh",
      tenure: "5–15 years",
      interest: "11–15%",
    };
  }

  return {
    amount: "₹5–10 Lakh",
    tenure: "3–7 years",
    interest: "10–14%",
  };
}
