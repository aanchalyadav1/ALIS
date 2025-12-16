import { motion } from "framer-motion";

export default function ProfileHeader({ profile, onLogout }) {
  const initials = profile.name
    ? profile.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .slice(0, 2)
        .toUpperCase()
    : "AL";

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="flex items-center justify-between
                 rounded-2xl border border-white/10
                 bg-white/5 p-6"
    >
      <div className="flex items-center gap-4">
        <div className="h-14 w-14 rounded-full
                        bg-cyan-500/20 flex items-center
                        justify-center text-xl font-semibold
                        text-cyan-400">
          {initials}
        </div>

        <div>
          <h1 className="text-xl font-semibold">
            {profile.name || "Your Profile"}
          </h1>
          <p className="text-sm text-white/60">
            {profile.profession || "Add professional details"}
          </p>
        </div>
      </div>

      <button
        onClick={onLogout}
        className="px-4 py-2 rounded-lg
                   border border-red-400/40
                   text-red-400 text-sm
                   hover:bg-red-400/10 transition"
      >
        Logout
      </button>
    </motion.div>
  );
}
