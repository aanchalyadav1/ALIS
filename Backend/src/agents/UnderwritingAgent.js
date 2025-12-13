import { LOANS, emiEligibility } from "../services/loanRules.in.js";

export function UnderwritingAgent(ctx) {
  const rule = LOANS[ctx.loanType];
  if (!rule) return { error: "Unsupported loan type" };

  const maxEmi = emiEligibility(ctx.income, rule.secured);
  return {
    eligible: ctx.requestedEmi <= maxEmi,
    risk: ctx.requestedEmi <= maxEmi * 0.8 ? "Low" : "Medium"
  };
}
