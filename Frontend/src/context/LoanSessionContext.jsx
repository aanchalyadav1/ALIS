import { createContext, useContext, useState } from "react";
import { runAgents } from "../agents/agentOrchestrator";

const LoanSessionContext = createContext();

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
      activityLog: [
        ...prev.activityLog,
        { type: "USER_INPUT", text: input }
      ],
    }));

    const result = await runAgents(input);

    setSession((prev) => ({
      ...prev,
      ...result,
      agentStatus: "completed",
      activityLog: [
        ...prev.activityLog,
        ...result.activityLog,
      ],
    }));
  };

  const resetSession = () => {
    setSession({
      userInput: "",
      intent: null,
      risk: null,
      eligibility: null,
      sanction: null,
      readinessScore: 0,
      activityLog: [],
      agentStatus: "idle",
    });
  };

  return (
    <LoanSessionContext.Provider
      value={{ session, startAnalysis, resetSession }}
    >
      {children}
    </LoanSessionContext.Provider>
  );
}

export const useLoanSession = () => useContext(LoanSessionContext);
