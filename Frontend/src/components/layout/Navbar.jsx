import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 
                    bg-black/70 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto h-full px-4 
                      flex items-center justify-between">

        {/* LOGO */}
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-3 cursor-pointer"
        >
          <img
            src="/team_logo.png"
            alt="VisionCoders"
            className="h-8 w-auto"
          />
          <span className="text-white font-semibold tracking-wide">
            ALIS
          </span>
        </div>

        {/* NAV */}
        <div className="flex items-center gap-6 text-sm">

          <NavLink to="/" className="nav-link">Home</NavLink>
          <NavLink to="/about" className="nav-link">About</NavLink>

          {user && (
            <>
              <NavLink to="/chat" className="nav-link">Chat</NavLink>
              <NavLink to="/documents" className="nav-link">Documents</NavLink>
              <NavLink to="/dashboard" className="nav-link">Dashboard</NavLink>
            </>
          )}

          {!user ? (
            <>
              <button
                onClick={() => navigate("/login")}
                className="px-4 py-2 rounded-lg 
                           border border-white/20 text-white/80
                           hover:border-white/40 transition"
              >
                Login
              </button>

              <button
                onClick={() => navigate("/register")}
                className="px-4 py-2 rounded-lg 
                           bg-cyan-500 text-black font-medium
                           hover:bg-cyan-400 transition"
              >
                Create Account
              </button>
            </>
          ) : (
            <div className="relative group">
              <button className="px-4 py-2 rounded-lg 
                                 bg-white/10 text-white">
                Profile
              </button>

              <div className="absolute right-0 mt-2 w-40 
                              bg-black border border-white/10 
                              rounded-lg hidden group-hover:block">
                <button
                  onClick={() => navigate("/profile")}
                  className="w-full text-left px-4 py-2 
                             hover:bg-white/10 text-sm"
                >
                  View Profile
                </button>
                <button
                  onClick={logout}
                  className="w-full text-left px-4 py-2 
                             hover:bg-white/10 text-sm text-red-400"
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
