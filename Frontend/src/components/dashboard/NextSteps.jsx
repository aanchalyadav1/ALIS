export default function NextSteps({ eligibility }) {
  return (
    <div className="p-6 rounded-xl bg-white/5 border border-white/10">
      <h3 className="text-lg font-medium mb-4">Recommended Next Steps</h3>
      <ul className="space-y-2 text-sm text-white/70">
        {eligibility ? (
          <>
            <li>• Upload income documents</li>
            <li>• Add co-applicant (optional)</li>
            <li>• Proceed to formal application</li>
          </>
        ) : (
          <>
            <li>• Reduce loan amount</li>
            <li>• Improve credit duration</li>
            <li>• Add guarantor or collateral</li>
          </>
        )}
      </ul>
    </div>
  );
}
