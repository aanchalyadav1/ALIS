import { useLoanSession } from "../context/LoanSessionContext";

import GlobalOverview from "../components/dashboard/GlobalOverview";
import UserDashboard from "../components/dashboard/UserDashboard";

export default function Dashboard() {
  const { session } = useLoanSession();

  return (
    <div className="max-w-7xl mx-auto px-4 pt-24 pb-16 space-y-10">
      {/* PROJECT LEVEL STATS */}
      <GlobalOverview />

      {/* USER LEVEL STATS (SAFE) */}
      {session?.intent ? (
        <UserDashboard session={session} />
      ) : (
        <div className="text-center text-white/60 text-sm">
          Start a conversation with ALIS to unlock your personalized dashboard.
        </div>
      )}
    </div>
  );
}
