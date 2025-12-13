import { SalesAgent } from "../agents/SalesAgent.js";
import { VerificationAgent } from "../agents/VerificationAgent.js";
import { UnderwritingAgent } from "../agents/UnderwritingAgent.js";

export function routeAgent(_, context) {
  if (!context.loanType) return SalesAgent();
  if (!context.verified) return VerificationAgent(context);
  return UnderwritingAgent(context);
}
