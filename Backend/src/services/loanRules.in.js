export const LOANS = {
  personal: { min: 5000, max: 1000000, secured: false },
  home: { min: 200000, max: 50000000, secured: true },
  education: { min: 100000, max: 10000000, secured: false },
  car: { min: 300000, max: 2500000, secured: true },
  gold: { min: 10000, max: 5000000, secured: true },
  business: { min: 200000, max: 20000000, secured: false },
  agriculture: { min: 25000, max: 5000000, secured: true }
};

export function emiEligibility(income, secured) {
  return secured ? income * 0.6 : income * 0.45;
}
