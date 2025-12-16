import { createContext, useContext, useState } from "react";
import { runAgents } from "../components/agents/agentOrchestrator";

const LoanSessionContext = createContext(null);

export function LoanSessionProvider({ children }) {
  const [session, setSession] = useState({
    intent: null,
    risk: null,
    eligibility: null,
    sanction: null,
    readinessScore: 0,
    activityLog: [],
    agentStatus: "idle"
  });

  const startAnalysis = async (input) => {
    setSession((prev) => ({
      ...prev,
      agentStatus: "running"
    }));

    const result = await runAgents(input);

    setSession({
      ...result,
      agentStatus: "completed"
    });
  };

  return (
    <LoanSessionContext.Provider
      value={{ session, startAnalysis }}
    >
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
