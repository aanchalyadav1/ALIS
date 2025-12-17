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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-6xl mx-auto px-4 pt-24 pb-16 space-y-8 text-white"
    >
      <ProfileHeader profile={profile} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ProfileProgress profile={profile} />
        <ProfileStats profile={profile} />
      </div>

      <ProfileDetailsCard profile={profile} setProfile={setProfile} />

      <ProfileInsights profile={profile} />

      <ProfileActivity />
    </motion.div>
  );
    }
