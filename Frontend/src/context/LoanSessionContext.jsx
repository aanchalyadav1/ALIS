import { createContext, useContext, useState } from "react";
import { runAgents } from "../agents/agentOrchestrator.js";

const LoanSessionContext = createContext(null);

export function LoanSessionProvider({ children }) {
  const [session, setSession] = useState({
    agentStatus: "idle", // idle | running | completed
    intent: null,
    risk: null,
    eligibility: null,
    sanction: null,
    readinessScore: null,
    activityLog: []
  });

  async function startAnalysis(input, profile = {}) {
    setSession((prev) => ({
      ...prev,
      agentStatus: "running"
    }));

    const result = await runAgents(input, profile);

    setSession({
      agentStatus: "completed",
      ...result
    });
  }

  return (
    <LoanSessionContext.Provider value={{ session, startAnalysis }}>
      {children}
    </LoanSessionContext.Provider>
  );
}

export function useLoanSession() {
  const ctx = useContext(LoanSessionContext);
  if (!ctx) {
    throw new Error("useLoanSession must be used inside LoanSessionProvider");
  }
  return ctx;
}
