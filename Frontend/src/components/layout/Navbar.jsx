import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Navbar() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const linkClass =
    "text-sm text-white/70 hover:text-white transition";

  const activeClass =
    "text-sm text-cyan-400 font-medium";

  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur bg-black/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* LOGO */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src="/logo.svg" alt="ALIS" className="h-6 w-6" />
          <span className="text-white font-semibold tracking-wide">
            ALIS
          </span>
        </div>

        {/* NAV LINKS */}
        <nav className="flex items-center gap-6">

          {/* PUBLIC */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? activeClass : linkClass
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/chat"
            className={({ isActive }) =>
              isActive ? activeClass : linkClass
            }
          >
            Chat
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? activeClass : linkClass
            }
          >
            About
          </NavLink>

          {/* AUTH-BASED */}
          {!user ? (
            <button
              onClick={() => navigate("/chat")}
              className="ml-4 px-4 py-1.5 rounded-lg bg-cyan-500 text-black text-sm font-medium hover:bg-cyan-400 transition"
            >
              Try ALIS Now
            </button>
          ) : (
            <>
              <NavLink
                to="/documents"
                className={({ isActive }) =>
                  isActive ? activeClass : linkClass
                }
              >
                Documents
              </NavLink>

              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive ? activeClass : linkClass
                }
              >
                Dashboard
              </NavLink>

              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  isActive ? activeClass : linkClass
                }
              >
                Profile
              </NavLink>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
