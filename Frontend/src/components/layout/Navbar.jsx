import { NavLink } from "react-router-dom";
import ThemeToggle from "../ui/ThemeToggle";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass =
    "text-sm text-white/70 hover:text-cyan-400 transition";

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur bg-black/50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* LEFT — BRAND */}
        <div className="flex items-center gap-3">
          <img src="/team_logo.png" className="h-8" alt="VisionCoders" />
          <span className="font-semibold tracking-wide">ALIS</span>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-6">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/chat" className={linkClass}>Chat</NavLink>
          <NavLink to="/documents" className={linkClass}>Documents</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <ThemeToggle />
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-xl"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-black/90 border-t border-white/10 px-6 py-4 space-y-4">
          <NavLink onClick={() => setOpen(false)} to="/" className={linkClass}>Home</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/chat" className={linkClass}>Chat</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/documents" className={linkClass}>Documents</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/about" className={linkClass}>About</NavLink>
          <ThemeToggle />
        </div>
      )}
    </nav>
  );
}
