import { createContext, useContext, useState } from "react";
import { useUser } from "./UserContext";

const LoanSessionContext = createContext(null);

export function LoanSessionProvider({ children }) {
  const { profile } = useUser();

  const [signals, setSignals] = useState({
    intent: null,
    risk: "Unknown",
    readiness: "Low",
    eligibility: null,
  });

  function updateSignals(intent) {
    let risk = "Medium";
    let readiness = "Low";

    if (profile.income > 30000) readiness = "Medium";
    if (profile.income > 60000) readiness = "High";

    setSignals({
      intent,
      risk,
      readiness,
      eligibility: readiness === "High" ? "Likely" : "Pending",
    });
  }

  return (
    <LoanSessionContext.Provider value={{ signals, updateSignals }}>
      {children}
    </LoanSessionContext.Provider>
  );
}

export function useLoanSession() {
  return useContext(LoanSessionContext);
}
