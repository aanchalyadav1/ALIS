import { createContext, useContext, useState } from "react";
import { runAgents } from "../components/agents/agentOrchestrator";

const LoanSessionContext = createContext(null);

export function LoanSessionProvider({ children }) {
  const [session, setSession] = useState({
    agentStatus: "idle",
    intent: null,
    risk: null,
    eligibility: null,
    sanction: null,
    readinessScore: 0,
    activityLog: [],
  });

  const startAnalysis = async (input) => {
    setSession((prev) => ({
      ...prev,
      agentStatus: "running",
      activityLog: [...prev.activityLog, { agent: "User", message: input }],
    }));

    try {
      const result = await runAgents(input);

      setSession({
        agentStatus: "completed",
        ...result,
      });
    } catch (e) {
      console.error("Agent pipeline failed:", e);
      setSession((prev) => ({
        ...prev,
        agentStatus: "error",
      }));
    }
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
