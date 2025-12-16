import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user } = useAuth();

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LEFT — LOGO + TEAM */}
        <div className="flex items-center gap-3">
          <span className="text-cyan-400 font-bold text-lg">ALIS</span>

          {/* TEAM LOGO */}
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-xs font-bold text-black">
            VC
          </div>

          <span className="hidden sm:block text-xs text-white/50">
            VisionCoders
          </span>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-5 text-sm text-white/80">
          {!user ? (
            <>
              <NavLink to="/login" className="hover:text-cyan-400">
                Login
              </NavLink>

              <NavLink
                to="/register"
                className="px-4 py-2 rounded-lg border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition"
              >
                Create Account
              </NavLink>
            </>
          ) : (
            <>
              <NavLink to="/" className="hover:text-cyan-400">Home</NavLink>
              <NavLink to="/chat" className="hover:text-cyan-400">Chat</NavLink>
              <NavLink to="/documents" className="hover:text-cyan-400">Documents</NavLink>
              <NavLink to="/dashboard" className="hover:text-cyan-400">Dashboard</NavLink>
              <NavLink to="/profile" className="hover:text-cyan-400">Profile</NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
