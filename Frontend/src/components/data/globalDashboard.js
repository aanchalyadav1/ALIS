export const GLOBAL_DASHBOARD = {
  stats: {
    totalRequests: 1248,
    eligibilityRate: 72,
    avgLoanSize: "₹18.6L",
    lowRiskProfiles: 62,
  },
  loanTypes: [
    { name: "Home Loan", value: 42 },
    { name: "Education Loan", value: 18 },
    { name: "Personal Loan", value: 16 },
    { name: "Business Loan", value: 14 },
    { name: "Vehicle / Gold", value: 10 },
  ],
  riskBuckets: {
    low: 62,
    medium: 26,
    high: 12,
  },
  systemFeed: [
    "VerificationAgent validated PAN & income",
    "UnderwritingAgent marked profile as low-risk",
    "SanctionAgent generated loan guidance",
    "User initiated Home Loan inquiry (₹35L)",
  ],
  observations: [
    "Home loans dominate mid-income profiles",
    "Education loans show higher student intent",
    "Low-risk users prefer longer tenures",
  ],
};
