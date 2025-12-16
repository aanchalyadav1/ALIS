// src/components/layout/Navbar.jsx
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 z-50 w-full bg-[#05060a]/80 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* LEFT — LOGO */}
        <Link to="/" className="text-white font-semibold text-lg">
          VisionCoders
        </Link>

        {/* RIGHT — AUTH AWARE */}
        <div className="flex items-center gap-4">
          {!user ? (
            <>
              <button
                onClick={() => navigate("/login")}
                className="text-sm text-white/80 hover:text-white"
              >
                Login
              </button>

              <button
                onClick={() => navigate("/register")}
                className="px-4 py-2 rounded-lg bg-cyan-500 text-black text-sm font-semibold"
              >
                Create Account
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => navigate("/dashboard")}
                className="text-sm text-white/80 hover:text-white"
              >
                Dashboard
              </button>

              <button
                onClick={() => navigate("/profile")}
                className="text-sm text-white/80 hover:text-white"
              >
                Profile
              </button>

              <button
                onClick={() => {
                  logout();
                  navigate("/");
                }}
                className="text-sm text-red-400 hover:text-red-300"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
