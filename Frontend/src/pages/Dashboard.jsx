import { useLoanSession } from "../context/LoanSessionContext";
import GlobalOverview from "../components/dashboard/GlobalOverview";
import UserDashboard from "../components/dashboard/UserDashboard";

export default function Dashboard() {
  const { session } = useLoanSession();

  return (
    <div className="max-w-7xl mx-auto px-4 pt-24 pb-16 space-y-12">

      {/* GLOBAL INTELLIGENCE */}
      <div className="space-y-3">
        <p className="section-label">Platform Intelligence</p>
        <GlobalOverview />
      </div>

      <div className="soft-divider" />

      {/* USER INTELLIGENCE */}
      {session?.intent ? (
        <div className="space-y-3">
          <p className="section-label">Your Loan Intelligence</p>
          <UserDashboard session={session} />
        </div>
      ) : (
        <div className="glass-card p-10 text-center text-white/60">
          Start a conversation with ALIS to unlock personalized insights.
        </div>
      )}

    </div>
  );
}
