export function sanctionAgent(intent, risk) {
  let amount = "₹0";
  let tenure = "—";

  if (intent === "education") {
    amount = "₹12,00,000";
    tenure = "10 years";
  } else if (intent === "home") {
    amount = "₹45,00,000";
    tenure = "20 years";
  } else if (intent === "business") {
    amount = "₹25,00,000";
    tenure = "7 years";
  }

  return {
    sanction: {
      amount,
      tenure,
      risk,
    },
    log: `Sanction Agent prepared indicative sanction of ${amount}`,
  };
}
