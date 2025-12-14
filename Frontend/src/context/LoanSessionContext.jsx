import { createContext, useContext, useState } from "react";

const LoanSessionContext = createContext();

export function LoanSessionProvider({ children }) {
  const [session, setSession] = useState({
    agentStatus: "idle", // idle | analyzing | completed
    intent: null,
    risk: null,
    eligibility: null,
    sanction: null
  });

  // 🔹 This is where ALL AGENTS are triggered
  async function startAnalysis(userInput) {
    setSession((s) => ({ ...s, agentStatus: "analyzing" }));

    // ---- AGENT SIMULATION (replace with backend later) ----
    const intent =
      userInput.toLowerCase().includes("home") ? "Home Loan" :
      userInput.toLowerCase().includes("education") ? "Education Loan" :
      userInput.toLowerCase().includes("business") ? "Business Loan" :
      "General Loan";

    const risk = Math.random() > 0.6 ? "Low" : "Medium";

    const eligibility = risk !== "High";

    const sanction = eligibility
      ? { amount: "₹15–25 Lakhs", tenure: "10–20 years" }
      : null;

    setTimeout(() => {
      setSession({
        agentStatus: "completed",
        intent,
        risk,
        eligibility,
        sanction
      });
    }, 1200);
  }

  return (
    <LoanSessionContext.Provider value={{ session, startAnalysis }}>
      {children}
    </LoanSessionContext.Provider>
  );
}

export function useLoanSession() {
  return useContext(LoanSessionContext);
}
