import { useEffect, useState } from "react";

const DEFAULT_PROFILE = {
  name: "",
  age: "",
  city: "",
  profession: "",
  income: "",
};

export function useProfile() {
  const [profile, setProfile] = useState(DEFAULT_PROFILE);

  // Load on mount
  useEffect(() => {
    const stored = localStorage.getItem("alis_profile");
    if (stored) {
      setProfile(JSON.parse(stored));
    }
  }, []);

  // Save on change
  useEffect(() => {
    localStorage.setItem("alis_profile", JSON.stringify(profile));
  }, [profile]);

  return { profile, setProfile };
}
