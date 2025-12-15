import { motion } from "framer-motion";

export default function ProfileHeader({ profile }) {
  const initials =
    profile.name
      ?.split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase() || "U";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex items-center gap-5"
    >
      <div className="w-16 h-16 rounded-full bg-cyan-500 flex items-center justify-center text-black text-xl font-bold">
        {initials}
      </div>

      <div>
        <h1 className="text-2xl font-semibold text-white">
          {profile.name || "Your Profile"}
        </h1>
        <p className="text-sm text-white/60">
          Manage your personal loan intelligence
        </p>
      </div>
    </motion.div>
  );
}
