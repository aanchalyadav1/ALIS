import { motion } from "framer-motion";
import { SiPython, SiScikitlearn } from "react-icons/si";

export default function MLCredibility() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-2xl bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/20 p-8"
    >
      <h3 className="text-2xl font-semibold text-white mb-4">
        ML-Powered Eligibility Engine
      </h3>

      <p className="text-white/70 mb-6">
        ALIS uses a machine learning model trained on simulated historical loan data
        to estimate eligibility, affordability, and approval probability.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex items-start gap-4">
          <SiPython size={32} className="text-cyan-400" />
          <div>
            <h4 className="text-white font-medium">Python-based ML Pipeline</h4>
            <p className="text-sm text-white/60">
              Feature engineering, preprocessing, and inference logic
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <SiScikitlearn size={32} className="text-cyan-400" />
          <div>
            <h4 className="text-white font-medium">Scikit-learn Model</h4>
            <p className="text-sm text-white/60">
              Classification model for eligibility & risk scoring
            </p>
          </div>
        </div>
      </div>

      <p className="text-xs text-white/50 mt-6">
        Demo note: Model logic is simulated for hackathon demonstration purposes.
      </p>
    </motion.div>
  );
}
