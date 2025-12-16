import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    navigate("/login");
    return null;
  }

  return (
    <div className="min-h-screen pt-24 px-6 text-white">
      <div className="max-w-xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur">

        <h2 className="text-xl font-semibold mb-4">Profile</h2>

        <div className="space-y-2 text-white/80">
          <p><span className="text-white/50">Name:</span> {user.name}</p>
          {user.email && (
            <p><span className="text-white/50">Email:</span> {user.email}</p>
          )}
          {user.guest && (
            <p className="text-yellow-400 text-sm">Guest Session</p>
          )}
        </div>

        <button
          onClick={() => {
            logout();
            navigate("/");
          }}
          className="mt-6 w-full py-2 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500 hover:text-white transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
