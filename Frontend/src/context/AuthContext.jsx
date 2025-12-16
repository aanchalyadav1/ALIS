import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

const USERS_KEY = "alis-demo-users";
const SESSION_KEY = "alis-demo-session";

// default demo user (YOU)
const DEFAULT_USERS = [
  {
    id: "u1",
    name: "Aanchal Yadav",
    email: "yadavaanchal2005@gmail.com",
    password: "Aanchal@123",
  },
];

export function AuthProvider({ children }) {
  const [users, setUsers] = useState(() => {
    const saved = localStorage.getItem(USERS_KEY);
    return saved ? JSON.parse(saved) : DEFAULT_USERS;
  });

  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem(SESSION_KEY);
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    if (user) {
      localStorage.setItem(SESSION_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(SESSION_KEY);
    }
  }, [user]);

  // LOGIN
  const login = ({ email, password }) => {
    const found = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!found) {
      throw new Error("Invalid email or password");
    }

    setUser({
      id: found.id,
      name: found.name,
      email: found.email,
    });
  };

  // REGISTER
  const register = ({ name, email, password }) => {
    const exists = users.some((u) => u.email === email);
    if (exists) {
      throw new Error("User already exists");
    }

    const newUser = {
      id: "u" + Date.now(),
      name,
      email,
      password,
    };

    setUsers((prev) => [...prev, newUser]);
    setUser({
      id: newUser.id,
      name,
      email,
    });
  };

  // GUEST
  const continueAsGuest = () => {
    setUser({
      id: "guest",
      name: "Guest User",
      guest: true,
    });
  };

  // LOGOUT
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider
      value={{ user, login, register, logout, continueAsGuest }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return ctx;
}
