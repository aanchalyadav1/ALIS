import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext(null);

const STORAGE_KEY = "alis-user-profile";

export function UserProvider({ children }) {
  const [profile, setProfile] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved
        ? JSON.parse(saved)
        : {
            name: "",
            age: "",
            city: "",
            profession: "",
            income: "",
            avatar: "",
          };
    } catch {
      return {
        name: "",
        age: "",
        city: "",
        profession: "",
        income: "",
        avatar: "",
      };
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
  }, [profile]);

  return (
    <UserContext.Provider value={{ profile, setProfile }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used inside UserProvider");
  }
  return context;
}
