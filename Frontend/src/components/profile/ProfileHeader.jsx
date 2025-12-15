import { motion } from "framer-motion";
import { useAuth } from "../../context/AuthContext";

export default function ProfileHeader() {
  const { user, logout } = useAuth();

  const initials =
    user?.email?.charAt(0)?.toUpperCase() || "U";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
    >
      {/* LEFT — USER INFO */}
      <div className="flex items-center gap-4">
        {/* Avatar */}
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center text-black font-semibold text-lg shadow-lg">
          {initials}
        </div>

        {/* Identity */}
        <div>
          <h1 className="text-xl font-semibold text-white">
            {user?.email || "User"}
          </h1>
          <p className="text-sm text-white/60">
            Your personal loan intelligence profile
          </p>
        </div>
      </div>

      {/* RIGHT — LOGOUT */}
      <button
        onClick={logout}
        className="px-4 py-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition text-sm"
      >
        Logout
      </button>
    </motion.div>
  );
}
