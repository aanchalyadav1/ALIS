import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useAuth } from "../context/AuthContext";

import ProfileHeader from "../components/profile/ProfileHeader";
import ProfileDetailsCard from "../components/profile/ProfileDetailsCard";
import ProfileProgress from "../components/profile/ProfileProgress";
import ProfileStats from "../components/profile/ProfileStats";
import ProfileActivity from "../components/profile/ProfileActivity";

export default function Profile() {
  const { user, logout } = useAuth();

  const STORAGE_KEY = `alis-profile-${user?.id || "guest"}`;

  const [profile, setProfile] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved
      ? JSON.parse(saved)
      : {
          name: user?.name || "",
          age: "",
          city: "",
          profession: "",
          income: "",
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
      {/* HEADER */}
      <ProfileHeader profile={profile} onLogout={logout} />

      {/* PROGRESS + STATS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ProfileProgress profile={profile} />
        <ProfileStats profile={profile} />
      </div>

      {/* EDITABLE DETAILS */}
      <ProfileDetailsCard
        profile={profile}
        setProfile={setProfile}
      />

      {/* ACTIVITY */}
      <ProfileActivity />
    </motion.div>
  );
}
