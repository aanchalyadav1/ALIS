import { motion } from "framer-motion";

export default function ProfileHeader({ profile = {} }) {
  const name = profile.name || "User";
  const profession = profile.profession || "Add professional details";

  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <motion.div
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-6"
    >
      {/* Avatar */}
      <div className="h-14 w-14 rounded-full bg-gradient-to-br from-cyan-400/30 to-emerald-400/30 
                      flex items-center justify-center text-xl font-semibold text-cyan-400">
        {initials}
      </div>

      {/* Info */}
      <div>
        <h1 className="text-xl font-semibold text-white">
          {name}
        </h1>
        <p className="text-white/60 text-sm">
          {profession}
        </p>
      </div>
    </motion.div>
  );
}
