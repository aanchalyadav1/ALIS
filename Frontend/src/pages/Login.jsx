import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function submit(e) {
    e.preventDefault();
    try {
      login({ email, password });
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#05060a] px-4">
      <motion.form
        onSubmit={submit}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md rounded-2xl bg-white/5 border border-white/10 p-8 backdrop-blur"
      >
        <h1 className="text-2xl font-semibold text-white mb-6">
          Login to ALIS
        </h1>

        {error && (
          <p className="text-red-400 text-sm mb-3">{error}</p>
        )}

        <input
          required
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white outline-none"
        />

        <input
          required
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-6 rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white outline-none"
        />

        <button
          type="submit"
          className="w-full py-3 rounded-xl bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition"
        >
          Login
        </button>

        <p className="text-xs text-white/50 mt-4">
          Demo login: yadavaanchal2005@gmail.com / Aanchal@123
        </p>
      </motion.form>
    </div>
  );
}
