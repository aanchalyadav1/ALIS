import { useLoanSession } from "../../context/LoanSessionContext";

export default function DashboardHero() {
  const { session } = useLoanSession();

  const statusText =
    session.intent
      ? `ALIS has analyzed your loan profile`
      : `Start a chat to generate your loan intelligence report`;

  return (
    <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 to-transparent p-6 backdrop-blur">
      <h1 className="text-2xl font-semibold text-white mb-2">
        Loan Intelligence Overview
      </h1>
      <p className="text-white/70">{statusText}</p>
    </div>
  );
}
