import { motion } from "framer-motion";

export default function SanctionCard({ onDownload }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-8 bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur"
    >
      <h3 className="text-lg font-semibold mb-2">
        Loan Sanction Summary
      </h3>

      <p className="text-sm text-white/60 mb-4">
        This is a system-generated sanction preview based on verified inputs.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
        <div>
          <span className="text-white/50">Applicant Name</span>
          <p>Masked Applicant</p>
        </div>

        <div>
          <span className="text-white/50">Loan Type</span>
          <p>Home Loan</p>
        </div>

        <div>
          <span className="text-white/50">Approved Amount</span>
          <p>₹35,00,000</p>
        </div>

        <div>
          <span className="text-white/50">Tenure</span>
          <p>20 Years</p>
        </div>

        <div>
          <span className="text-white/50">Interest Rate</span>
          <p>8.75% p.a.</p>
        </div>

        <div>
          <span className="text-white/50">Risk Category</span>
          <p>Low Risk</p>
        </div>
      </div>

      <div className="mt-6 flex gap-4">
        <button
          onClick={onDownload}
          className="px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 transition font-medium text-black"
        >
          Download Sanction Letter (PDF)
        </button>

        <span className="text-xs text-white/40 self-center">
          * Non-editable • Auto-generated
        </span>
      </div>
    </motion.div>
  );
}
