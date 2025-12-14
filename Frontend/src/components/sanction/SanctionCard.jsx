import { useLoanSession } from "../../context/LoanSessionContext";

export default function SanctionCard() {
  const { session } = useLoanSession();
  const sanction = session.sanction;

  if (!sanction) return null;

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 mt-8">
      <h2 className="text-lg font-semibold text-white mb-2">
        Sanction Guidance (Preview)
      </h2>

      <p className="text-sm text-white/60 mb-6">
        This is AI-generated guidance based on provided inputs.  
        It is <span className="text-white">not</span> a final bank sanction.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Item label="Suggested Amount" value={sanction.amount} />
        <Item label="Tenure" value={sanction.tenure} />
        <Item label="Estimated EMI" value={sanction.emi} />
        <Item label="Interest Range" value={sanction.interest} />
      </div>

      <div className="mt-6 text-xs text-white/40">
        Final approval depends on document verification, credit checks,
        and lender policies.
      </div>
    </div>
  );
}

function Item({ label, value }) {
  return (
    <div className="rounded-xl border border-white/10 bg-black/30 p-4">
      <div className="text-xs text-white/50">{label}</div>
      <div className="mt-1 text-sm font-medium text-white">
        {value}
      </div>
    </div>
  );
}
