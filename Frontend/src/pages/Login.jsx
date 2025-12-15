import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#05060a] px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md rounded-2xl bg-white/5 border border-white/10 p-8 backdrop-blur"
      >
        <h1 className="text-2xl font-semibold text-white mb-2">
          Welcome back to ALIS
        </h1>
        <p className="text-sm text-white/60 mb-6">
          Sign in to continue your loan intelligence journey
        </p>

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white outline-none"
          />

          <button
            className="w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition text-black font-medium"
            onClick={() => navigate("/dashboard")}
          >
            Login
          </button>
        </div>

        <p className="text-xs text-white/50 mt-6 text-center">
          New to ALIS?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-cyan-400 cursor-pointer"
          >
            Create an account
          </span>
        </p>
      </motion.div>
    </div>
  );
}
