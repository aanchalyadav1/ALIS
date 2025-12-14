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

      {/* MAIN CHAT */}
      <main className="flex-1 p-6 flex justify-center">
        <div className="w-full max-w-4xl bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur min-h-[420px]">

          <h2 className="text-xl font-semibold mb-1">
            ALIS — AI Loan Officer
          </h2>
          <p className="text-sm text-white/50 mb-6">
            Guidance-first · India-focused · Secure session
          </p>

          <p className="text-white/70 max-w-2xl">
            Hello, I’m ALIS — your AI loan officer.  
            I help you understand loan eligibility, affordability, and approval
            logic before you apply.
          </p>

          <p className="text-white/70 mt-2">
            Start by choosing a loan type or describe your requirement.
          </p>

          <div className="flex flex-wrap gap-3 justify-center mt-6">
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
        </div>
      </main>
    </div>
  );
}
