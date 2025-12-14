export default function About() {
  return (
    <section className="min-h-screen bg-[#05060a] text-white px-6 py-20">
      <div className="max-w-5xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-10 backdrop-blur">

        <h2 className="text-3xl font-bold text-center mb-3">
          How ALIS Works
        </h2>

        <p className="text-center text-white/60 max-w-2xl mx-auto mb-12">
          ALIS is not a bank. It’s an AI-powered loan intelligence system designed
          to guide you before you apply.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              title: "Understand",
              desc: "Listens to your intent, income & context",
            },
            {
              title: "Verify",
              desc: "Checks PAN, income & documents",
            },
            {
              title: "Underwrite",
              desc: "AI-driven eligibility & risk logic",
            },
            {
              title: "Guide",
              desc: "Sanction-style clarity without pressure",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-cyan-400/40 hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-white/60 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center border-t border-white/10 pt-6">
          <p className="text-xs text-white/40 tracking-wide">
            BUILT BY VISIONCODERS
          </p>
          <p className="text-sm text-white/50 mt-2">
            ALIS is built for trust, not conversion pressure.
          </p>
        </div>
      </div>
    </section>
  );
}
