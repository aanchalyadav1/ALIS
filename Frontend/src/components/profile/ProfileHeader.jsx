import { motion } from "framer-motion";

export default function ProfileHeader({ profile }) {
  const name = profile?.name || "Your Profile";

  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <motion.div
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-6"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 text-lg font-bold">
        {initials}
      </div>

      <div>
        <h1 className="text-xl font-semibold">{name}</h1>
        <p className="text-sm text-white/60">
          {profile?.profession || "Add professional details"}
        </p>
      </div>
    </motion.div>
  );
}
