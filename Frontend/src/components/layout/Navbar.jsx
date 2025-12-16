import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Navbar() {
  const { user } = useAuth();

  return (
    <nav className="h-14 px-6 flex items-center justify-between bg-neutral-900 text-white">
      {/* LEFT — TEAM LOGO */}
      <div className="font-semibold text-lg text-cyan-400">
        VisionCoders
      </div>

      {/* RIGHT — NAV LINKS */}
      {!user ? (
        // 🔓 NOT LOGGED IN
        <div className="flex gap-4 items-center">
          <Link to="/login" className="hover:text-cyan-400">
            Login
          </Link>
          <Link
            to="/register"
            className="px-3 py-1.5 rounded-md bg-cyan-500 text-black font-medium"
          >
            Create Account
          </Link>
        </div>
      ) : (
        // 🔐 LOGGED IN
        <div className="flex gap-6 items-center text-sm">
          <Link to="/" className="hover:text-cyan-400">
            Home
          </Link>
          <Link to="/dashboard" className="hover:text-cyan-400">
            Dashboard
          </Link>
          <Link to="/chat" className="hover:text-cyan-400">
            Chat
          </Link>
          <Link to="/documents" className="hover:text-cyan-400">
            Documents
          </Link>
          <Link to="/about" className="hover:text-cyan-400">
            About
          </Link>
          <Link to="/profile" className="hover:text-cyan-400">
            Profile
          </Link>
        </div>
      )}
    </nav>
  );
}
