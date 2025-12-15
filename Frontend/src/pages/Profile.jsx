
import { motion } from "framer-motion";

import ProfileHeader from "../components/profile/ProfileHeader";
import ProfileDetailsCard from "../components/profile/ProfileDetailsCard";
import ProfileStats from "../components/profile/ProfileStats";
import ProfileProgress from "../components/profile/ProfileProgress";
import ProfileActivity from "../components/profile/ProfileActivity";
import LifeStageCard from "../components/profile/LifeStageCard";

export default function Profile() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="max-w-6xl mx-auto px-4 pt-24 pb-16 space-y-10"
    >
      {/* HEADER */}
      <ProfileHeader />

      {/* PROFILE CORE */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Editable details */}
        <ProfileDetailsCard />

        {/* Progress + stats */}
        <div className="space-y-6">
          <ProfileProgress />
          <ProfileStats />
        </div>
      </div>

      {/* LIFE STAGE */}
      <LifeStageCard />

      {/* ACTIVITY */}
      <ProfileActivity />
    </motion.div>
  );
}
