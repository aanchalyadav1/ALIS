import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { motion } from "framer-motion";

export default function DashboardHeader() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center justify-between mb-6"
    >
      {/* LEFT */}
      <div>
        <h1 className="text-2xl font-semibold text-white">
          Loan Intelligence Dashboard
        </h1>
        <p className="text-sm text-white/60">
          Platform-wide insights & AI-driven analytics
        </p>
      </div>

      {/* RIGHT — USER MENU */}
      <div className="relative group">
        <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition">
          <span className="text-sm font-medium">
            {user?.name || "User"}
          </span>
          <span className="text-xs opacity-60">▾</span>
        </button>

        {/* DROPDOWN */}
        <div className="absolute right-0 mt-2 w-40 rounded-xl bg-[#0b0d14] border border-white/10 shadow-xl opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition">
          <button
            onClick={() => navigate("/profile")}
            className="w-full text-left px-4 py-2 text-sm text-white/80 hover:bg-white/10"
          >
            My Profile
          </button>

          <button
            onClick={logout}
            className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-white/10"
          >
            Logout
          </button>
        </div>
      </div>
    </motion.div>
  );
}
