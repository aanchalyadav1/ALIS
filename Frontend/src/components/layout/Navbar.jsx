import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Navbar() {
  const { user, logout, continueAsGuest } = useAuth();
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-white/10 bg-[#05060a]/80 backdrop-blur">
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between text-white">

        {/* LOGO */}
        <div
          className="font-semibold tracking-wide cursor-pointer"
          onClick={() => navigate("/")}
        >
          <span className="text-cyan-400">ALIS</span>
        </div>

        {/* NAV ACTIONS */}
        {!user ? (
          /* 🔓 NOT LOGGED IN */
          <div className="flex items-center gap-4 text-sm">
            {/* TRY ALIS AS GUEST */}
            <button
              onClick={() => {
                continueAsGuest();
                navigate("/chat");
              }}
              className="px-4 py-2 rounded-lg bg-cyan-500 text-black font-medium hover:bg-cyan-400 transition"
            >
              Try ALIS
            </button>

            {/* LOGIN */}
            <Link
              to="/login"
              className="px-4 py-2 rounded-lg border border-white/20 hover:border-white/40 transition"
            >
              Login
            </Link>

            {/* REGISTER */}
            <Link
              to="/register"
              className="px-4 py-2 rounded-lg border border-emerald-400/40 text-emerald-400 hover:border-emerald-400 transition"
            >
              Create Account
            </Link>
          </div>
        ) : (
          /* 🔐 LOGGED IN OR GUEST */
          <div className="flex items-center gap-6 text-sm">
            <Link to="/" className="hover:text-cyan-400">Home</Link>
            <Link to="/chat" className="hover:text-cyan-400">Chat</Link>
            <Link to="/documents" className="hover:text-cyan-400">Documents</Link>
            <Link to="/dashboard" className="hover:text-cyan-400">Dashboard</Link>

            {/* LOGOUT */}
            <button
              onClick={() => {
                logout();
                navigate("/");
              }}
              className="text-red-400 hover:text-red-300 transition"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
