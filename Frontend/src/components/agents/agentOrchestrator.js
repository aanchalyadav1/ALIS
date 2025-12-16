import { detectIntent } from "./IntentAgent";
import { assessRisk } from "./riskAgent";
import { checkEligibility } from "./eligibilityAgent";
import { generateSanction } from "./sanctionAgent";

/**
 * Main orchestrator used by LoanSessionContext
 * This MUST return a full session object
 */
export async function runAgents(userInput, profile = {}) {
  // Simulate async multi-agent reasoning
  await new Promise((r) => setTimeout(r, 1200));

  const intent = detectIntent(userInput);
  const risk = assessRisk(profile);
  const eligibility = checkEligibility(profile, intent);
  const sanction = generateSanction(intent, eligibility, risk);

  return {
    intent,
    risk,
    eligibility,
    sanction,
    readinessScore: eligibility ? 72 : 38,
    activityLog: [
      { agent: "IntentAgent", message: `Detected intent: ${intent}` },
      { agent: "RiskAgent", message: `Risk assessed as ${risk}` },
      {
        agent: "EligibilityAgent",
        message: eligibility ? "User eligible" : "User not eligible"
      },
      { agent: "SanctionAgent", message: "Sanction generated" }
    ]
  };
}
