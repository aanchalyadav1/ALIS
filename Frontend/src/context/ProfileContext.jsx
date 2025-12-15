import { createContext, useContext, useState } from "react";

const ProfileContext = createContext();

const DEFAULT_PROFILE = {
  name: "",
  role: "",            // student | salaried | business
  incomeRange: "",
  employmentType: "",
  creditComfort: "",
  goals: [],
  completed: false,
};

export function ProfileProvider({ children }) {
  const [profile, setProfile] = useState(DEFAULT_PROFILE);

  const updateProfile = (updates) => {
    setProfile((prev) => ({
      ...prev,
      ...updates,
      completed: checkCompletion({ ...profile, ...updates }),
    }));
  };

  const resetProfile = () => setProfile(DEFAULT_PROFILE);

  return (
    <ProfileContext.Provider
      value={{ profile, updateProfile, resetProfile }}
    >
      {children}
    </ProfileContext.Provider>
  );
}

function checkCompletion(p) {
  return (
    p.role &&
    p.incomeRange &&
    p.creditComfort
  );
}

export const useProfile = () => useContext(ProfileContext);
