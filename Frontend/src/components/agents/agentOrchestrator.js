/**
 * Agentic Loan Intelligence Orchestrator
 * Frontend-safe, hackathon-ready
 */

export async function runAgents(input, profile = {}) {
  await delay(800);

  const activityLog = [];

  // 1️⃣ INTENT AGENT
  const intent = detectIntent(input);
  activityLog.push({
    agent: "IntentAgent",
    message: `Detected intent: ${intent}`,
  });

  await delay(400);

  // 2️⃣ RISK AGENT
  const risk = assessRisk(input, profile);
  activityLog.push({
    agent: "RiskAgent",
    message: `Risk classified as ${risk}`,
  });

  await delay(400);

  // 3️⃣ ELIGIBILITY AGENT
  const eligibility = risk !== "High";
  activityLog.push({
    agent: "EligibilityAgent",
    message: eligibility
      ? "User appears eligible"
      : "Eligibility requires further verification",
  });

  await delay(400);

  // 4️⃣ SANCTION AGENT
  const sanction = eligibility ? generateSanction(intent) : null;
  if (sanction) {
    activityLog.push({
      agent: "SanctionAgent",
      message: "Sanction guidance generated",
    });
  }

  // 5️⃣ READINESS AGENT
  const readinessScore = calculateReadiness(risk, eligibility);
  activityLog.push({
    agent: "ReadinessAgent",
    message: `Readiness score computed: ${readinessScore}%`,
  });

  return {
    intent,
    risk,
    eligibility,
    sanction,
    readinessScore,
    activityLog,
  };
}

/* ================= HELPERS ================= */

function detectIntent(input = "") {
  const text = input.toLowerCase();
  if (text.includes("education")) return "Education Loan";
  if (text.includes("home")) return "Home Loan";
  if (text.includes("business")) return "Business Loan";
  if (text.includes("personal")) return "Personal Loan";
  if (text.includes("vehicle") || text.includes("car")) return "Vehicle Loan";
  return "General Loan Inquiry";
}

function assessRisk(input, profile) {
  const text = input.toLowerCase();
  if (text.includes("no income") || text.includes("unemployed")) return "High";
  if (profile.income && profile.income > 800000) return "Low";
  return "Medium";
}

function generateSanction(intent) {
  switch (intent) {
    case "Education Loan":
      return {
        amount: "₹10,00,000",
        tenure: "8 years",
        emi: "₹14,500 / month",
        interest: "8.5% – 10.5%",
      };
    case "Home Loan":
      return {
        amount: "₹35,00,000",
        tenure: "20 years",
        emi: "₹29,800 / month",
        interest: "8.9% – 9.6%",
      };
    case "Business Loan":
      return {
        amount: "₹15,00,000",
        tenure: "5 years",
        emi: "₹31,200 / month",
        interest: "11% – 14%",
      };
    case "Personal Loan":
      return {
        amount: "₹5,00,000",
        tenure: "3 years",
        emi: "₹16,100 / month",
        interest: "12% – 18%",
      };
    case "Vehicle Loan":
      return {
        amount: "₹7,50,000",
        tenure: "5 years",
        emi: "₹15,400 / month",
        interest: "9% – 11%",
      };
    default:
      return null;
  }
}

function calculateReadiness(risk, eligibility) {
  let score = 40;
  if (eligibility) score += 30;
  if (risk === "Low") score += 20;
  if (risk === "Medium") score += 10;
  return Math.min(score, 95);
}

function delay(ms) {
  return new Promise((res) => setTimeout(res, ms));
}
