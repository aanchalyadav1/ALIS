
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import ProfileHeader from "../components/profile/ProfileHeader";
import ProfileProgress from "../components/profile/ProfileProgress";
import ProfileStats from "../components/profile/ProfileStats";
import ProfileDetailsCard from "../components/profile/ProfileDetailsCard";
import ProfileInsights from "../components/profile/ProfileInsights";
import ProfileActivity from "../components/profile/ProfileActivity";

const STORAGE_KEY = "alis-profile-demo";

export default function Profile() {
  const [profile, setProfile] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved
      ? JSON.parse(saved)
      : {
          name: "Aanchal Yadav",
          age: 20,
          city: "Indore",
          profession: "B.Tech CSE Student",
          income: "",
          loanPreference: "Education Loan",
        };
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
  }, [profile]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-[#0b0f14] text-white"
    >
      <div className="max-w-6xl mx-auto px-4 pt-24 pb-16 space-y-8">
        {/* HEADER */}
        <ProfileHeader profile={profile} />

        {/* PROGRESS + STATS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <ProfileProgress profile={profile} />
          <ProfileStats profile={profile} />
        </div>

        {/* EDITABLE DETAILS */}
        <ProfileDetailsCard profile={profile} setProfile={setProfile} />

        {/* AI INSIGHTS */}
        <ProfileInsights profile={profile} />

        {/* ACTIVITY */}
        <ProfileActivity />
      </div>
    </motion.div>
  );
}
