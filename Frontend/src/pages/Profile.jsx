import ProfileHeader from "../components/profile/ProfileHeader";
import LoanSummary from "../components/profile/LoanSummary";
import AIInsights from "../components/profile/AIInsights";
import ActivityTimeline from "../components/profile/ActivityTimeline";
import { useLoanSession } from "../context/LoanSessionContext";

export default function Profile() {
  const { session } = useLoanSession();

  return (
    <div className="max-w-6xl mx-auto px-4 pt-24 pb-16 space-y-8">
      <ProfileHeader />

      <LoanSummary session={session} />

      <AIInsights insights={session.activityLog || []} />

      <ActivityTimeline logs={session.activityLog || []} />
    </div>
  );
}
