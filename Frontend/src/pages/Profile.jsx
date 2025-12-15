import { useAuth } from "../context/AuthContext";
import { useLoanSession } from "../context/LoanSessionContext";

export default function Profile() {
  const { user, logout } = useAuth();
  const { session } = useLoanSession();

  return (
    <div className="max-w-6xl mx-auto px-4 pt-24 pb-16 space-y-8">

      {/* USER HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-white">
            {user.email}
          </h1>
          <p className="text-sm text-white/60">
            Your loan intelligence dashboard
          </p>
        </div>

        <button
          onClick={logout}
          className="px-4 py-2 rounded-lg bg-red-500/10 text-red-400 text-sm hover:bg-red-500/20"
        >
          Logout
        </button>
      </div>

      {/* USER INTELLIGENCE */}
      <pre className="text-xs text-white/70 bg-white/5 p-4 rounded-xl overflow-auto">
        {JSON.stringify(session, null, 2)}
      </pre>

    </div>
  );
}
