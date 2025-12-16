import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Navbar() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const linkClass = ({ isActive }) =>
    `px-3 py-2 text-sm rounded-md transition ${
      isActive
        ? "text-cyan-400"
        : "text-white/70 hover:text-white"
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0b0f1a]/90 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* ✅ LEFT — LOGO + ALIS (ALWAYS VISIBLE) */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/team_logo.png"
            alt="VisionCoders"
            className="h-9 w-9 rounded-md"
          />
          <div className="leading-tight">
            <div className="text-white font-semibold tracking-wide">
              ALIS
            </div>
            <div className="text-xs text-white/50">
              Agentic Loan Intelligence System
            </div>
          </div>
        </Link>

        {/* ✅ RIGHT — NAVIGATION */}
        <div className="flex items-center gap-4">

          {/* 🔓 NOT LOGGED IN */}
          {!user && (
            <>
              <NavLink to="/login" className={linkClass}>
                Login
              </NavLink>

              <NavLink
                to="/register"
                className="px-4 py-2 text-sm rounded-md bg-cyan-500 text-black font-medium hover:bg-cyan-400 transition"
              >
                Create Account
              </NavLink>
            </>
          )}

          {/* 🔐 LOGGED IN */}
          {user && (
            <>
              <NavLink to="/" className={linkClass}>
                Home
              </NavLink>

              <NavLink to="/chat" className={linkClass}>
                Chat
              </NavLink>

              <NavLink to="/documents" className={linkClass}>
                Documents
              </NavLink>

              <NavLink to="/dashboard" className={linkClass}>
                Dashboard
              </NavLink>

              <NavLink
                to="/profile"
                className="px-4 py-2 text-sm rounded-md border border-cyan-400/40 text-cyan-400 hover:bg-cyan-400/10 transition"
              >
                Profile
              </NavLink>
            </>
          )}

        </div>
      </div>
    </nav>
  );
}
