import { motion } from "framer-motion";
import StatCard from "./StatCard";

export default function StatGrid({ session = {} }) {
  const { intent, risk, eligibility } = session;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="grid grid-cols-1 sm:grid-cols-3 gap-6"
    >
      <StatCard
        label="Loan Intent"
        value={intent || "—"}
        accent="cyan"
      />
      <StatCard
        label="Risk Level"
        value={risk || "—"}
        accent={risk === "High" ? "amber" : "emerald"}
      />
      <StatCard
        label="Eligibility"
        value={
          eligibility === null
            ? "—"
            : eligibility
            ? "Likely Eligible"
            : "Needs Review"
        }
        accent={eligibility ? "emerald" : "amber"}
      />
    </motion.div>
  );
}
