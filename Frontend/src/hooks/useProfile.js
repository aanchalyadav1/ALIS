import { useEffect, useState } from "react";

const DEFAULT_PROFILE = {
  name: "",
  email: "",
  phone: "",
  city: "",
  employment: "",
  loanPurpose: "",
};

export default function useProfile() {
  const [profile, setProfile] = useState(DEFAULT_PROFILE);

  useEffect(() => {
    const saved = localStorage.getItem("alis_profile");
    if (saved) {
      setProfile(JSON.parse(saved));
    }
  }, []);

  const updateProfile = (updates) => {
    const updated = { ...profile, ...updates };
    setProfile(updated);
    localStorage.setItem("alis_profile", JSON.stringify(updated));
  };

  return { profile, updateProfile };
}
