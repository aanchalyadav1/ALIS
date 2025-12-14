export default function Chat() {
  return (
    <div className="min-h-screen bg-[#05060a] text-white flex">

      {/* LEFT CONTEXT */}
      <aside className="hidden lg:block w-[260px] border-r border-white/10 p-5">
        <h3 className="text-sm text-white/60 mb-2">Session Context</h3>
        <p className="text-xs text-white/40 mb-4">Profile: Not specified</p>

        <button className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-cyan-400 transition">
          Upload Documents
        </button>

        <p className="mt-4 text-xs text-white/30">
          ALIS adapts as your profile changes over time.
        </p>
      </aside>

      {/* MAIN */}
      <main className="flex-1 p-6 flex justify-center">
        <div className="w-full max-w-4xl flex flex-col gap-4">

          {/* AI MESSAGE */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <h2 className="font-semibold mb-1">ALIS — AI Loan Officer</h2>
            <p className="text-sm text-white/60">
              Hello, I’m ALIS. I guide you through eligibility, affordability,
              and approval logic before you apply.
            </p>
          </div>

          {/* OPTIONS */}
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              "Education Loan",
              "Home Loan",
              "Personal Loan",
              "Business Loan",
              "Vehicle Loan",
            ].map((loan) => (
              <button
                key={loan}
                className="px-4 py-2 rounded-full border border-white/20 text-sm hover:border-cyan-400 hover:text-cyan-400 transition"
              >
                {loan}
              </button>
            ))}
          </div>

          {/* INPUT MOCK */}
          <div className="mt-auto bg-white/5 border border-white/10 rounded-xl p-3 flex gap-3">
            <input
              disabled
              placeholder="Describe your loan requirement…"
              className="flex-1 bg-transparent outline-none text-white/60 text-sm"
            />
            <button className="px-4 py-2 bg-cyan-500 text-black rounded-lg font-semibold opacity-60 cursor-not-allowed">
              Send
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
