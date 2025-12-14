import { motion } from "framer-motion";

export default function Sanction() {
  return (
    <div className="min-h-screen bg-[#05060a] pt-24 px-6">
      <div className="max-w-4xl mx-auto">

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-semibold text-white mb-6"
        >
          Sanction Preview
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-6">

          {/* LEFT */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-white mb-4">Loan Summary</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Loan Type: <b className="text-white">Education Loan</b></li>
              <li>Estimated Amount: ₹6L – ₹9L</li>
              <li>Tenure: 7 years</li>
              <li>Estimated EMI: ₹11,800</li>
            </ul>
          </div>

          {/* RIGHT */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-white mb-4">AI Reasoning</h3>
            <ul className="text-sm text-white/60 space-y-2">
              <li>✔ Stable guardian income</li>
              <li>✔ Approved university category</li>
              <li>⚠ Limited credit history</li>
            </ul>

            <div className="mt-4 p-3 rounded-lg bg-cyan-500/10 text-cyan-300 text-xs">
              This is not a sanction letter. It is an AI-generated
              eligibility preview to help you decide responsibly.
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
