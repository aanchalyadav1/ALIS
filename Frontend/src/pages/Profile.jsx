import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#05060a] pt-24 px-4 text-white"
    >
      <div className="max-w-3xl mx-auto">

        {/* PROFILE CARD */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur">
          <div className="flex items-center gap-4">
            {/* AVATAR */}
            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-xl font-semibold">
              {user?.name?.charAt(0) || "G"}
            </div>

            {/* USER INFO */}
            <div>
              <h2 className="text-xl font-semibold">
                {user?.name || "Guest User"}
              </h2>
              <p className="text-sm text-white/60">
                {user?.email || "Guest Session"}
              </p>
            </div>
          </div>

          {/* META INFO */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 text-sm">
            <div className="bg-white/5 rounded-lg p-4">
              <p className="text-white/50">Role</p>
              <p className="font-medium">
                {user?.guest ? "Guest" : "Registered User"}
              </p>
            </div>

            <div className="bg-white/5 rounded-lg p-4">
              <p className="text-white/50">Session Type</p>
              <p className="font-medium">Demo Mode</p>
            </div>
          </div>

          {/* ACTIONS */}
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={() => navigate("/dashboard")}
              className="px-4 py-2 rounded-md bg-cyan-500 text-black font-medium hover:bg-cyan-400 transition"
            >
              Go to Dashboard
            </button>

            <button
              onClick={() => navigate("/chat")}
              className="px-4 py-2 rounded-md border border-white/20 text-white/80 hover:bg-white/10 transition"
            >
              Open Chat
            </button>

            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-md border border-red-500/40 text-red-400 hover:bg-red-500/10 transition"
            >
              Logout
            </button>
          </div>
        </div>

        {/* FOOT NOTE */}
        <p className="text-center text-xs text-white/40 mt-6">
          ALIS Demo Profile • Hackathon Build • VisionCoders
        </p>
      </div>
    </motion.div>
  );
}
