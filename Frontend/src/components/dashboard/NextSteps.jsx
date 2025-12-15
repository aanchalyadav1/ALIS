export default function NextSteps({ eligibility, readinessScore }) {
  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
      <h2 className="text-lg font-medium mb-4">
        Recommended Next Steps
      </h2>

      {eligibility === false && (
        <p className="text-sm text-red-400">
          Improve eligibility: income proof, co-applicant, or credit history.
        </p>
      )}

      {eligibility && readinessScore < 70 && (
        <p className="text-sm text-yellow-400">
          Strengthen profile before applying.
        </p>
      )}

      {eligibility && readinessScore >= 70 && (
        <p className="text-sm text-green-400">
          You appear ready to proceed with documentation.
        </p>
      )}

      {eligibility === null && (
        <p className="text-sm text-white/50">
          Start chat to receive guidance.
        </p>
      )}
    </div>
  );
}
