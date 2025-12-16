import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "../../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between text-white">
        {/* LOGO */}
        <Link to="/" className="font-bold text-lg text-cyan-400">
          ALIS
        </Link>

        {/* LINKS */}
        <div className="flex items-center gap-5 text-sm">
          <Link to="/" className="hover:text-cyan-400">Home</Link>
          <Link to="/about" className="hover:text-cyan-400">About</Link>

          {user && (
            <>
              <Link to="/chat" className="hover:text-cyan-400">Chat</Link>
              <Link to="/documents" className="hover:text-cyan-400">Documents</Link>
              <Link to="/dashboard" className="hover:text-cyan-400">Dashboard</Link>
              <Link to="/profile" className="hover:text-cyan-400">Profile</Link>
            </>
          )}

          {!user ? (
            <Link
              to="/login"
              className="px-3 py-1.5 rounded bg-cyan-500 text-black font-medium"
            >
              Login
            </Link>
          ) : (
            <button
              onClick={logout}
              className="px-3 py-1.5 rounded bg-red-500/80 hover:bg-red-600"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </motion.nav>
  );
}
