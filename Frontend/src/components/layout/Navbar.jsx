import { NavLink, useNavigate } from "react-router-dom";
import ThemeToggle from "../ui/ThemeToggle";

export default function Navbar() {
  const navigate = useNavigate();

  const linkClass = ({ isActive }) =>
    `text-sm transition ${
      isActive
        ? "text-cyan-400"
        : "text-white/70 hover:text-white"
    }`;

  return (
    <nav className="fixed top-0 w-full h-16 z-50 backdrop-blur bg-black/50 border-b border-white/10">
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">

        {/* LEFT — LOGO */}
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-3 cursor-pointer"
        >
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
        <div className="hidden md:flex items-center gap-6">
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
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
        </div>

        {/* RIGHT — ACTIONS */}
        <div className="flex items-center gap-4">
          {/* Future auth placeholder */}
          <button
            className="hidden sm:block px-4 py-1.5 rounded-md border border-white/15 text-sm text-white/70 hover:text-white hover:border-white/30 transition"
          >
            Login
          </button>

          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
