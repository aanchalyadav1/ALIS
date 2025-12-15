import { motion } from "framer-motion";
import useProfile from "../hooks/useProfile";
import ProfileHeader from "../components/profile/ProfileHeader";
import ProfileDetailsCard from "../components/profile/ProfileDetailsCard";
import ProfileStats from "../components/profile/ProfileStats";
import ProfileActivity from "../components/profile/ProfileActivity";

export default function Profile() {
  const { profile, updateProfile } = useProfile();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-6xl mx-auto px-4 pt-24 pb-16 space-y-10"
    >
      <ProfileHeader profile={profile} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ProfileDetailsCard
          profile={profile}
          onSave={updateProfile}
        />
        <ProfileStats />
      </div>

      <ProfileActivity />
    </motion.div>
  );
}
