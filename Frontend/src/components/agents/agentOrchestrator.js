import { intentAgent } from "./intentAgent";
import { riskAgent } from "./riskAgent";
import { eligibilityAgent } from "./eligibilityAgent";
import { sanctionAgent } from "./sanctionAgent";

export async function runAgents(input) {
  const activityLog = [];

  const intentRes = intentAgent(input);
  activityLog.push({ agent: "Intent", text: intentRes.log });

  const riskRes = riskAgent(input);
  activityLog.push({ agent: "Risk", text: riskRes.log });

  const eligibilityRes = eligibilityAgent(intentRes.intent);
  activityLog.push({ agent: "Eligibility", text: eligibilityRes.log });

  const sanctionRes = sanctionAgent(intentRes.intent, riskRes.risk);
  activityLog.push({ agent: "Sanction", text: sanctionRes.log });

  return {
    intent: intentRes.intent,
    risk: riskRes.risk,
    eligibility: eligibilityRes.eligible,
    sanction: sanctionRes.sanction,
    readinessScore: eligibilityRes.eligible ? 72 : 30,
    activityLog,
  };
}
