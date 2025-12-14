import { NavLink } from "react-router-dom";
import ThemeToggle from "../ui/ThemeToggle";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 h-16 z-50 bg-black/70 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto h-full px-4 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <img
            src="/team_logo.png"
            alt="VisionCoders"
            className="h-8 w-auto object-contain select-none"
            draggable="false"
          />
          <span className="font-semibold tracking-wide hidden sm:block">
            ALIS
          </span>
        </div>

        {/* NAV LINKS */}
        <div className="hidden md:flex gap-6 text-sm">
          {[
            { to: "/", label: "Home" },
            { to: "/chat", label: "Chat" },
            { to: "/documents", label: "Documents" },
            { to: "/dashboard", label: "Dashboard" },
            { to: "/about", label: "About" },
          ].map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `transition ${
                  isActive
                    ? "text-cyan-400"
                    : "text-white/70 hover:text-white"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* RIGHT */}
        <ThemeToggle />
      </div>
    </nav>
  );
}
