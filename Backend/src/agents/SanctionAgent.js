export function SanctionAgent(ctx) {
  return {
    referenceId: `ALIS-${Date.now()}`,
    approvedAmount: ctx.amount,
    demo: true
  };
}
