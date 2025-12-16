import { motion } from "framer-motion";

export default function ProfileHeader({ profile }) {
  const initials = profile.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-6"
    >
      <div className="h-14 w-14 rounded-full bg-cyan-500/20 flex items-center justify-center text-xl font-semibold text-cyan-400">
        {initials}
      </div>

      <div>
        <h1 className="text-xl font-semibold">{profile.name}</h1>
        <p className="text-white/60 text-sm">
          {profile.profession} · {profile.city}
        </p>
      </div>
    </motion.div>
  );
}
