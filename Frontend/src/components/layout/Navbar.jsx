import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const linkBase =
    "text-sm transition hover:text-white";
  const active =
    "text-cyan-400";
  const inactive =
    "text-white/70";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-black/70 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto h-full px-4 flex items-center justify-between">

        {/* LOGO */}
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-3 cursor-pointer"
        >
          <img
            src="/team_logo.png"
            alt="VisionCoders"
            className="h-8 w-auto object-contain"
          />
          <span className="font-semibold tracking-wide text-white hidden sm:block">
            ALIS
          </span>
        </div>

        {/* NAV LINKS */}
        <div className="hidden md:flex items-center gap-6">
          {!user && (
            <>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? active : inactive}`
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? active : inactive}`
                }
              >
                About
              </NavLink>
            </>
          )}

          {user && (
            <>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? active : inactive}`
                }
              >
                Dashboard
              </NavLink>

              <NavLink
                to="/documents"
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? active : inactive}`
                }
              >
                Documents
              </NavLink>
            </>
          )}
        </div>

        {/* RIGHT ACTION */}
        <div className="flex items-center gap-3">
          {!user ? (
            <button
              onClick={() => navigate("/chat")}
              className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black text-sm font-semibold transition"
            >
              Try ALIS
            </button>
          ) : (
            <button
              onClick={logout}
              className="px-4 py-2 rounded-lg border border-white/20 hover:border-white/40 text-white/80 text-sm transition"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
