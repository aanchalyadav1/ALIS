import { useNavigate } from "react-router-dom";

export default function Apply() {
  const navigate = useNavigate();

  // Demo logic — later this comes from backend / Firestore
  const documentsReady = true; // toggle false to see blocked state

  return (
    <div className="min-h-screen pt-24 px-6 pb-24">
      <div className="max-w-4xl mx-auto space-y-12">

        {/* HEADER */}
        <div>
          <h1 className="text-2xl font-semibold">
            Apply for Loan
          </h1>
          <p className="text-sm text-white/60 mt-1">
            Review your readiness before proceeding further.
          </p>
        </div>

        {/* STATUS CARD */}
        <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-6 space-y-4">
          <h2 className="text-lg font-medium">
            Application Status
          </h2>

          {documentsReady ? (
            <>
              <p className="text-sm text-white/70">
                Your documents are available for verification.
                You may proceed with the loan application.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => navigate("/documents")}
                  className="px-5 py-2 rounded-lg border border-white/15 text-sm text-white/80 hover:border-white/30 transition"
                >
                  Review Documents
                </button>

                <button
                  disabled
                  className="px-5 py-2 rounded-lg bg-cyan-500/70 text-sm font-medium text-black cursor-not-allowed"
                >
                  Submit Application (Demo)
                </button>
              </div>

              <p className="text-xs text-white/50 pt-2">
                * Application submission is disabled in demo mode.
                Sanction letters are generated only after verification.
              </p>
            </>
          ) : (
            <>
              <p className="text-sm text-white/70">
                Required documents are missing.
                Please upload them to continue.
              </p>

              <button
                onClick={() => navigate("/documents")}
                className="mt-3 px-5 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 transition font-medium text-black"
              >
                Upload Documents
              </button>
            </>
          )}
        </div>

        {/* LOAN SAFETY NOTE */}
        <div className="rounded-xl border border-white/10 bg-black/40 p-5 text-sm text-white/60">
          ALIS does not issue real loan approvals.
          All outputs are advisory and for guidance only.
          Final decisions are made by financial institutions.
        </div>

      </div>
    </div>
  );
}
