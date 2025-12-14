// src/components/layout/Navbar.jsx
import { NavLink } from "react-router-dom";
import ThemeToggle from "../ui/ThemeToggle";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 h-16 z-50 backdrop-blur bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">

        {/* LEFT — LOGO */}
        <div className="flex items-center gap-3">
          <img
            src="/team_logo.png"
            alt="VisionCoders"
            className="h-8 w-auto"
          />
          <span className="font-semibold tracking-wide">
            ALIS
          </span>
        </div>

        {/* CENTER — NAV LINKS */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-cyan-400"
                : "text-white/70 hover:text-white"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/chat"
            className={({ isActive }) =>
              isActive
                ? "text-cyan-400"
                : "text-white/70 hover:text-white"
            }
          >
            Chat
          </NavLink>

          <NavLink
            to="/documents"
            className={({ isActive }) =>
              isActive
                ? "text-cyan-400"
                : "text-white/70 hover:text-white"
            }
          >
            Documents
          </NavLink>

          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? "text-cyan-400"
                : "text-white/70 hover:text-white"
            }
          >
            Dashboard
          </NavLink>
        </div>

        {/* RIGHT — THEME */}
        <ThemeToggle />
      </div>
    </nav>
  );
}
