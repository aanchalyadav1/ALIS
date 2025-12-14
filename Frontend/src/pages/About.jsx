export default function About() {
  return (
    <section className="min-h-screen bg-[#05060a] text-white px-6 py-20">
      <div className="max-w-5xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-10 backdrop-blur">

        <h2 className="text-3xl font-bold text-center mb-3">
          How ALIS Works
        </h2>

        <p className="text-center text-white/60 max-w-2xl mx-auto mb-14">
          ALIS is an AI-powered loan intelligence system designed to guide users
          before they apply — not sell loans.
        </p>

        <div className="space-y-6">
          {[
            ["Understand", "Reads intent, income & context"],
            ["Verify", "Checks PAN, income & documents"],
            ["Underwrite", "AI-driven eligibility & risk logic"],
            ["Guide", "Sanction-style clarity without pressure"],
          ].map(([title, desc], i) => (
            <div
              key={title}
              className="flex gap-4 items-start bg-white/5 border border-white/10 rounded-xl p-5"
            >
              <div className="w-8 h-8 rounded-full bg-cyan-500 text-black font-bold flex items-center justify-center">
                {i + 1}
              </div>
              <div>
                <h3 className="font-semibold">{title}</h3>
                <p className="text-sm text-white/60">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center border-t border-white/10 pt-6">
          <p className="text-xs text-white/40 tracking-wide">
            BUILT BY VISIONCODERS
          </p>
          <p className="text-sm text-white/50 mt-2">
            Ethical AI · India-first · Trust over conversion
          </p>
        </div>
      </div>
    </section>
  );
}
