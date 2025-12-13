import { routeAgent } from "../services/agentRouter.js";

export async function ALISCore(input, context) {
  return routeAgent(input, context);
}
