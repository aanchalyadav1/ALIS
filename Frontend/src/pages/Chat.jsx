import { motion } from "framer-motion";

export default function Chat() {
  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">

        {/* LEFT — SESSION CONTEXT */}
        <aside className="hidden lg:block lg:col-span-1">
          <div className="sticky top-24 rounded-xl border border-white/10 bg-white/5 backdrop-blur p-4">
            <h3 className="text-sm font-semibold mb-2">Session Context</h3>
            <p className="text-xs text-white/60 mb-3">
              Profile: Not specified
            </p>
            <button className="w-full text-sm px-3 py-2 rounded-md bg-white/10 hover:bg-white/15 transition">
              Upload Documents
            </button>

            <p className="mt-4 text-xs text-white/40">
              ALIS adapts as your profile changes over time.
            </p>
          </div>
        </aside>

        {/* CENTER — AI CORE */}
        <main className="lg:col-span-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur p-6"
          >
            <h2 className="text-lg font-semibold mb-1">
              ALIS — AI Loan Officer
            </h2>
            <p className="text-sm text-white/70 mb-6">
              Guidance-first • India-focused • Secure session
            </p>

            {/* AI MESSAGE */}
            <div className="rounded-xl bg-black/40 border border-white/10 p-4 mb-6">
              <p className="text-sm leading-relaxed text-white/80">
                Hello, I’m <span className="text-cyan-400">ALIS</span> — your AI loan officer.
                <br /><br />
                I help you understand <b>eligibility</b>, <b>affordability</b>, and
                <b> approval logic</b> before you apply.
                <br /><br />
                Choose a loan type below or describe your requirement in your own words.
              </p>
            </div>

            {/* QUICK ACTIONS */}
            <div className="flex flex-wrap gap-3">
              {[
                "Education Loan",
                "Home Loan",
                "Personal Loan",
                "Business Loan",
                "Vehicle Loan",
              ].map((item) => (
                <button
                  key={item}
                  className="px-4 py-2 rounded-full border border-white/15 text-sm text-white/80 hover:bg-white/10 hover:border-white/30 transition"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
}
