import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Register() {
  const { registerWithEmail } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister(e) {
    e.preventDefault();
    await registerWithEmail(email, password);
    navigate("/profile");
  }

  return (
    <div className="min-h-screen pt-24 flex items-center justify-center">
      <form
        onSubmit={handleRegister}
        className="w-full max-w-md bg-white/5 border border-white/10 p-8 rounded-2xl space-y-4"
      >
        <h1 className="text-xl font-semibold text-white">Create Account</h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded-lg bg-black/40 border border-white/10 text-white"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded-lg bg-black/40 border border-white/10 text-white"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full py-3 rounded-lg bg-cyan-500 text-black font-medium">
          Register
        </button>
      </form>
    </div>
  );
}
