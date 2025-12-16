import { useAuth } from "../context/AuthContext";
import { motion } from "framer-motion";

export default function Profile() {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-[#05060a] text-white px-4 pt-24 pb-16 max-w-4xl mx-auto">
      <motion.div
        initial={{opacity:0,y:20}}
        animate={{opacity:1,y:0}}
        className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-6"
      >
        <div className="flex items-center gap-4">
          <div className="h-16 w-16 rounded-full bg-cyan-500/20 flex items-center justify-center text-xl font-bold text-cyan-400">
            {user?.name?.[0] || "U"}
          </div>
          <div>
            <h2 className="text-xl font-semibold">{user?.name}</h2>
            <p className="text-sm text-white/60">{user?.email || "Guest user"}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input className="bg-black/30 p-3 rounded-lg" placeholder="Age" />
          <input className="bg-black/30 p-3 rounded-lg" placeholder="City" />
          <input className="bg-black/30 p-3 rounded-lg" placeholder="Profession" />
          <input className="bg-black/30 p-3 rounded-lg" placeholder="Monthly Income" />
        </div>

        <button
          onClick={logout}
          className="w-full py-3 rounded-xl bg-red-500/20 hover:bg-red-500/30 text-red-300 transition"
        >
          Logout
        </button>
      </motion.div>
    </div>
  );
}
