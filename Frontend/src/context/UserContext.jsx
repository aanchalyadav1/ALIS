import { createContext, useContext, useState } from "react";

const UserContext = createContext(null);

export function UserProvider({ children }) {
  const [profile, setProfile] = useState(() => {
    const saved = localStorage.getItem("alis-profile");
    return saved
      ? JSON.parse(saved)
      : {
          name: "Guest User",
          age: 20,
          city: "Indore",
          profession: "Student",
          income: 0,
        };
  });

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
