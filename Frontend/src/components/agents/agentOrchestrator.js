// src/components/agents/agentOrchestrator.js

import { detectIntent } from "./IntentAgent";
import { assessRisk } from "./riskAgent";
import { checkEligibility } from "./eligibilityAgent";
import { generateSanction } from "./sanctionAgent";

export default async function agentOrchestrator(input, profile = {}) {
  const intent = detectIntent(input);
  const risk = assessRisk(profile);
  const eligible = checkEligibility(profile, intent);

  if (!eligible) {
    return {
      intent,
      risk,
      eligible: false,
      sanction: null
    };
  }

  const sanction = generateSanction(intent, risk);

  return {
    intent,
    risk,
    eligible: true,
    sanction
  };
}
