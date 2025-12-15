import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#05060a]">
      <div className="bg-white/5 border border-white/10 p-8 rounded-2xl w-full max-w-sm space-y-4">
        <h1 className="text-xl font-semibold">Login</h1>

        <input className="input" placeholder="Email" />
        <input className="input" placeholder="Password" type="password" />

        <button className="btn-primary w-full">
          Login
        </button>

        <button
          onClick={() => navigate("/")}
          className="text-sm text-cyan-400 w-full"
        >
          Continue as Guest
        </button>
      </div>
    </div>
  );
}
