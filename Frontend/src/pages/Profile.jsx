import { motion } from "framer-motion";

import ProfileHeader from "../components/profile/ProfileHeader";
import ProfileDetailsCard from "../components/profile/ProfileDetailsCard";
import ProfileProgress from "../components/profile/ProfileProgress";
import ProfileStats from "../components/profile/ProfileStats";
import ProfileActivity from "../components/profile/ProfileActivity";

import { useUser } from "../context/UserContext";

export default function Profile() {
  const { profile, setProfile } = useUser();

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-6xl mx-auto px-4 pt-24 pb-16 space-y-8 text-white"
    >
      {/* Header */}
      <ProfileHeader profile={profile} />

      {/* Progress + Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ProfileProgress profile={profile} />
        <ProfileStats profile={profile} />
      </div>

      {/* Editable Details */}
      <ProfileDetailsCard
        profile={profile}
        setProfile={setProfile}
      />

      {/* Activity */}
      <ProfileActivity />
    </motion.div>
  );
}
