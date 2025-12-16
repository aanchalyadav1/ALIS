// SAFE STUB — frontend only, no crashes

export async function runAgents(input) {
  // simulate thinking
  await new Promise((r) => setTimeout(r, 800));

  return {
    intent: "General Loan Inquiry",
    risk: "Medium",
    eligibility: true,
    sanction: {
      amount: "₹10,00,000",
      tenure: "10 years",
      emi: "₹13,500 / month",
      interest: "9.5% – 11%"
    },
    readinessScore: 72,
    agentStatus: "completed",
    activityLog: [
      {
        agent: "IntentAgent",
        message: "Detected general loan intent"
      },
      {
        agent: "RiskAgent",
        message: "Medium risk profile based on limited inputs"
      },
      {
        agent: "SanctionAgent",
        message: "Generated indicative sanction guidance"
      }
    ]
  };
}
