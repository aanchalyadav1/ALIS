// src/agents/agentOrchestrator.js

/**
 * Agentic Loan Intelligence Orchestrator
 * -------------------------------------
 * This simulates multiple AI agents working together:
 * - Intent Agent
 * - Risk Agent
 * - Eligibility Agent
 * - Sanction Agent
 * - Readiness Agent
 *
 * Frontend-safe, explainable, hackathon-ready
 */

export async function runAgents(userInput) {
  // Simulate async agent execution
  await delay(1200);

  const activityLog = [];

  // -----------------------------
  // 1️⃣ INTENT AGENT
  // -----------------------------
  const intent = detectIntent(userInput);
  activityLog.push({
    agent: "IntentAgent",
    message: `Detected loan intent: ${intent}`
  });

  await delay(600);

  // -----------------------------
  // 2️⃣ RISK AGENT
  // -----------------------------
  const risk = assessRisk(userInput, intent);
  activityLog.push({
    agent: "RiskAgent",
    message: `Assessed risk profile: ${risk}`
  });

  await delay(600);

  // -----------------------------
  // 3️⃣ ELIGIBILITY AGENT
  // -----------------------------
  const eligibility = checkEligibility(intent, risk);
  activityLog.push({
    agent: "EligibilityAgent",
    message: eligibility
      ? "User appears eligible based on provided signals"
      : "Eligibility uncertain — needs more verification"
  });

  await delay(600);

  // -----------------------------
  // 4️⃣ SANCTION AGENT
  // -----------------------------
  const sanction = eligibility
    ? generateSanction(intent, risk)
    : null;

  if (sanction) {
    activityLog.push({
      agent: "SanctionAgent",
      message: `Generated sanction guidance for ${intent}`
    });
  }

  // -----------------------------
  // 5️⃣ READINESS AGENT
  // -----------------------------
  const readinessScore = calculateReadiness(intent, risk, eligibility);
  activityLog.push({
    agent: "ReadinessAgent",
    message: `Computed readiness score: ${readinessScore}%`
  });

  // -----------------------------
  // FINAL OUTPUT
  // -----------------------------
  return {
    intent,
    risk,
    eligibility,
    sanction,
    readinessScore,
    activityLog
  };
}

/* ======================================================
   AGENT HELPERS
====================================================== */

function detectIntent(input) {
  const text = input.toLowerCase();

  if (text.includes("education")) return "Education Loan";
  if (text.includes("home")) return "Home Loan";
  if (text.includes("business")) return "Business Loan";
  if (text.includes("personal")) return "Personal Loan";
  if (text.includes("vehicle") || text.includes("car")) return "Vehicle Loan";

  return "General Loan Inquiry";
}

function assessRisk(input, intent) {
  const text = input.toLowerCase();

  // naive risk heuristics for demo
  if (text.includes("low income") || text.includes("no job")) {
    return "High";
  }

  if (intent === "Education Loan") {
    return "Medium";
  }

  if (intent === "Home Loan" || intent === "Business Loan") {
    return "Low";
  }

  return "Medium";
}

function checkEligibility(intent, risk) {
  if (risk === "High") return false;
  if (intent === "General Loan Inquiry") return false;
  return true;
}

function generateSanction(intent, risk) {
  switch (intent) {
    case "Education Loan":
      return {
        amount: "₹10,00,000",
        tenure: "8 years",
        emi: "₹14,500 / month",
        interest: "8.5% – 10.5%"
      };

    case "Home Loan":
      return {
        amount: "₹35,00,000",
        tenure: "20 years",
        emi: "₹29,800 / month",
        interest: "8.9% – 9.6%"
      };

    case "Business Loan":
      return {
        amount: "₹15,00,000",
        tenure: "5 years",
        emi: "₹31,200 / month",
        interest: "11% – 14%"
      };

    case "Personal Loan":
      return {
        amount: "₹5,00,000",
        tenure: "3 years",
        emi: "₹16,100 / month",
        interest: "12% – 18%"
      };

    case "Vehicle Loan":
      return {
        amount: "₹7,50,000",
        tenure: "5 years",
        emi: "₹15,400 / month",
        interest: "9% – 11%"
      };

    default:
      return null;
  }
}

function calculateReadiness(intent, risk, eligibility) {
  let score = 40;

  if (eligibility) score += 30;
  if (risk === "Low") score += 20;
  if (risk === "Medium") score += 10;

  if (intent !== "General Loan Inquiry") score += 10;

  return Math.min(score, 95);
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
