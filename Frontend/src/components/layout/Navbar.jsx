import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0b0f14] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/team_logo.png" alt="Team Logo" className="h-8 w-8" />
          <span className="text-lg font-semibold text-white">ALIS</span>
        </Link>

        {/* LINKS */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          <NavLink to="/" className="text-white/70 hover:text-white">Home</NavLink>
          <NavLink to="/chat" className="text-white/70 hover:text-white">Chat</NavLink>
          <NavLink to="/documents" className="text-white/70 hover:text-white">Documents</NavLink>
          <NavLink to="/dashboard" className="text-white/70 hover:text-white">Dashboard</NavLink>

          {!user && (
            <>
              <NavLink to="/login" className="text-cyan-400">Login</NavLink>
              <NavLink
                to="/register"
                className="px-4 py-1.5 rounded-lg bg-cyan-500 text-black font-medium"
              >
                Create Account
              </NavLink>
            </>
          )}

          {user && (
            <div className="relative group">
              <button className="flex items-center gap-2 text-white">
                <div className="h-8 w-8 rounded-full bg-cyan-500 flex items-center justify-center text-black font-semibold">
                  {user.name?.[0] || "U"}
                </div>
              </button>

              <div className="absolute right-0 mt-2 w-40 bg-[#111827] rounded-xl border border-white/10 shadow-lg hidden group-hover:block">
                <NavLink
                  to="/profile"
                  className="block px-4 py-2 text-sm text-white/80 hover:bg-white/10"
                >
                  View Profile
                </NavLink>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-white/10"
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
