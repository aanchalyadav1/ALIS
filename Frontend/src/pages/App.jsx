import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-24 px-6">
      <div className="max-w-5xl mx-auto space-y-24">

        {/* HERO */}
        <section className="space-y-6">
          <p className="text-sm uppercase tracking-widest text-cyan-400">
            About ALIS
          </p>

          <h1 className="text-4xl sm:text-5xl font-semibold leading-tight">
            India’s AI Loan Officer
          </h1>

          <p className="text-lg text-white/70 max-w-3xl">
            ALIS — Agentic Loan Intelligence System — is designed to help
            individuals understand loans clearly before applying.
            No pressure. No selling. Just intelligent guidance.
          </p>
        </section>

        {/* WHY ALIS */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Why ALIS Exists</h2>
          <p className="text-white/70">
            Loans are often rejected without explanation. Eligibility criteria
            are unclear, risk is hidden, and users are forced to apply blindly.
          </p>
          <p className="text-white/70">
            ALIS exists to reverse that experience — by explaining eligibility,
            risk, and approval logic before you commit.
          </p>
        </section>

        {/* AGENTS */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold">How ALIS Thinks</h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "Understanding Agent",
                desc: "Listens to your intent, background, income, and loan goals."
              },
              {
                title: "Verification Agent",
                desc: "Validates documents, income patterns, and identity signals."
              },
              {
                title: "Underwriting Agent",
                desc: "Evaluates eligibility, affordability, and credit risk."
              },
              {
                title: "Sanction Agent",
                desc: "Generates approval-style guidance and next steps."
              }
            ].map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-6"
              >
                <h3 className="font-medium text-lg">{a.title}</h3>
                <p className="text-sm text-white/60 mt-2">{a.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* WHO IT IS FOR */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Who ALIS Is For</h2>
          <ul className="list-disc pl-6 text-white/70 space-y-2">
            <li>Students planning education loans</li>
            <li>Salaried professionals seeking personal or home loans</li>
            <li>Business owners exploring MSME or working capital loans</li>
            <li>Individuals transitioning careers or income profiles</li>
          </ul>
        </section>

        {/* WHAT IT IS / IS NOT */}
        <section className="grid sm:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-3">ALIS Is</h3>
            <ul className="text-white/70 space-y-2">
              <li>• Guidance-first AI system</li>
              <li>• RBI-aware logic engine</li>
              <li>• Secure by design</li>
              <li>• Built for Indian lending context</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">ALIS Is Not</h3>
            <ul className="text-white/70 space-y-2">
              <li>• A bank or lender</li>
              <li>• Selling or promoting loans</li>
              <li>• Forcing applications</li>
              <li>• Replacing human decision-making</li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center pt-12">
          <p className="text-white/60 mb-6">
            ALIS helps you understand your loan journey — before you apply.
          </p>
          <a
            href="/chat"
            className="inline-block px-8 py-4 rounded-lg bg-cyan-500 hover:bg-cyan-400 transition font-medium text-black"
          >
            Start a Conversation with ALIS
          </a>
        </section>

      </div>
    </div>
  );
        }
