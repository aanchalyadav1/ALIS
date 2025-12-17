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
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6"
    >
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-cyan-400 blur-xl opacity-30 animate-pulse" />
        <div className="relative h-16 w-16 rounded-full bg-cyan-500/20 flex items-center justify-center text-2xl font-semibold text-cyan-400">
          {initials}
        </div>
      </div>

      <div>
        <h1 className="text-2xl font-semibold">{profile.name}</h1>
        <p className="text-sm text-white/60">
          {profile.profession} · {profile.city}
        </p>
      </div>
    </motion.div>
  );
}
