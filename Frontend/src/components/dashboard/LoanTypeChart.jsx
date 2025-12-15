export default function LoanTypeChart({ intent }) {
  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
      <h2 className="text-lg font-medium mb-2">
        Detected Loan Type
      </h2>

      <p className="text-xl font-semibold text-cyan-400">
        {intent ?? "Not identified yet"}
      </p>

      <p className="text-sm text-white/60 mt-2">
        Identified based on user input patterns.
      </p>
    </div>
  );
}
