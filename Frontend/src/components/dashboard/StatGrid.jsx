import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import StatCard from "./StatCard";

export default function StatGrid() {
  const navigate = useNavigate();

  const readiness = 62;

  // COLOR LOGIC
  const readinessColor =
    readiness < 50
      ? "text-red-400"
      : readiness < 75
      ? "text-yellow-400"
      : "text-emerald-400";

  const barColor =
    readiness < 50
      ? "bg-red-400"
      : readiness < 75
      ? "bg-yellow-400"
      : "bg-emerald-400";

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">

      {/* SYSTEM STATS */}
      <StatCard label="Loan Requests" value="1.2M+" />
      <StatCard label="Eligibility Rate" value="62%" />
      <StatCard label="Avg Loan Size" value="₹9.4L" />
      <StatCard label="High Risk Profiles" value="18%" />

      {/* DOCUMENT READINESS — CLICKABLE */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        onClick={() => navigate("/documents")}
        className="cursor-pointer p-6 rounded-2xl bg-white/5 
                   border border-white/10 hover:bg-white/10 transition"
      >
        <h3 className="text-sm text-white/60">
          Document Readiness
        </h3>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-4xl font-bold mt-2 ${readinessColor}`}
        >
          {readiness}%
        </motion.div>

        {/* PROGRESS BAR */}
        <div className="mt-4 h-2 w-full bg-white/10 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${readiness}%` }}
            transition={{ duration: 0.7 }}
            className={`h-full ${barColor}`}
          />
        </div>

        <p className="text-xs text-white/50 mt-2">
          2 documents pending upload
        </p>
      </motion.div>

    </div>
  );
          }
