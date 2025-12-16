import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Profile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#05060a] text-white px-6 pt-24">
      <h1 className="text-2xl font-semibold mb-4">Profile</h1>

      <div className="rounded-xl bg-white/5 border border-white/10 p-6 max-w-md">
        <p className="text-white/80">
          <strong>Name:</strong> {user?.name}
        </p>
        <p className="text-white/80 mt-2">
          <strong>Email:</strong> {user?.email || "Guest"}
        </p>

        <button
          onClick={() => {
            logout();
            navigate("/");
          }}
          className="mt-6 w-full py-2 rounded-lg bg-red-500/20 text-red-400 border border-red-500/40 hover:bg-red-500/30 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Profile;
