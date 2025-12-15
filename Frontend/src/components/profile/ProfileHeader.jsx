import { motion } from "framer-motion";

export default function ProfileHeader({ profile }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl border border-white/10 bg-white/5 p-6"
    >
      <h1 className="text-2xl font-semibold">
        {profile.name || "Your Profile"}
      </h1>

      <p className="text-white/60 mt-1">
        {profile.profession || "Add your professional details"}
      </p>
    </motion.div>
  );
}
