import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext(null);

const DEFAULT_PROFILE = {
  name: "",
  age: "",
  city: "",
  profession: "",
  monthlyIncome: "",
};

export function UserProvider({ children }) {
  const [profile, setProfile] = useState(() => {
    const saved = localStorage.getItem("alis_profile");
    return saved ? JSON.parse(saved) : DEFAULT_PROFILE;
  });

  useEffect(() => {
    localStorage.setItem("alis_profile", JSON.stringify(profile));
  }, [profile]);

  return (
    <UserContext.Provider value={{ profile, setProfile }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const ctx = useContext(UserContext);
  if (!ctx) {
    throw new Error("useUser must be used inside UserProvider");
  }
  return ctx;
}
