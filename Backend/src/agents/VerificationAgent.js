import { isValidPAN } from "../utils/validators.js";

export function VerificationAgent(ctx) {
  if (!isValidPAN(ctx.pan || "")) {
    return { error: "Invalid PAN format" };
  }
  return { verified: true, confidence: 80 };
}
