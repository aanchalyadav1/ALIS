import ProfileHeader from "../components/profile/ProfileHeader";
import LifeStageCard from "../components/profile/LifeStageCard";
import LoanSummary from "../components/profile/LoanSummary";
import AIInsights from "../components/profile/AIInsights";
import ActivityTimeline from "../components/profile/ActivityTimeline";
import { useLoanSession } from "../context/LoanSessionContext";
import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const { session } = useLoanSession();
  const { user } = useAuth();

  // 🔐 Auth guard
  if (!user) {
    return (
      <div className="pt-24 text-center text-white/60">
        Please login to view your profile.
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 pt-24 pb-16 space-y-10">

      {/* IDENTITY */}
      <ProfileHeader user={user} />

      {/* LIFE STAGE */}
      <LifeStageCard />

      {/* CURRENT LOAN INTELLIGENCE */}
      <LoanSummary session={session} />

      {/* AI EXPLANATIONS */}
      <AIInsights insights={session?.activityLog || []} />

      {/* HISTORY */}
      <ActivityTimeline logs={session?.activityLog || []} />

    </div>
  );
}
