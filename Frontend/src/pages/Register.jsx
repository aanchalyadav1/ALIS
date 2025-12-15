import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleRegister(e) {
    e.preventDefault();
    setError("");

    try {
      await register(email, password);
      navigate("/dashboard");
    } catch (err) {
      setError("Account already exists or weak password");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#05060a]">
      <form
        onSubmit={handleRegister}
        className="w-full max-w-md p-8 rounded-2xl bg-white/5 border border-white/10 space-y-6"
      >
        <h1 className="text-2xl font-semibold text-white">
          Create Account
        </h1>

        {error && <p className="text-red-400 text-sm">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password (min 6 chars)"
          className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold"
        >
          Register
        </button>
      </form>
    </div>
  );
}
