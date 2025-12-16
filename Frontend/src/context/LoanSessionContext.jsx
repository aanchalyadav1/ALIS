import { createContext, useContext, useState } from "react";
import { runAgents } from "../agents/agentOrchestrator";

const LoanSessionContext = createContext(null);

export function LoanSessionProvider({ children }) {
  const [session, setSession] = useState({
    userInput: "",
    intent: null,
    risk: null,
    eligibility: null,
    sanction: null,
    readinessScore: 0,
    activityLog: [],
    agentStatus: "idle",
  });

  const startAnalysis = async (input) => {
    setSession((prev) => ({
      ...prev,
      userInput: input,
      agentStatus: "running",
    }));

    const result = await runAgents(input);

    setSession((prev) => ({
      ...prev,
      ...result,
      agentStatus: "completed",
    }));
  };

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
