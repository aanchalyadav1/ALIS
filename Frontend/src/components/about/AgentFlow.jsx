import { motion } from "framer-motion";
import {
  FaUserCheck,
  FaFileAlt,
  FaShieldAlt,
  FaBrain,
} from "react-icons/fa";

const flow = [
  {
    icon: FaUserCheck,
    title: "Intent Agent",
    desc: "Understands loan intent, profile & user goal",
  },
  {
    icon: FaFileAlt,
    title: "Document Agent",
    desc: "Analyzes document readiness & missing proofs",
  },
  {
    icon: FaShieldAlt,
    title: "Risk Agent",
    desc: "Evaluates repayment risk & stability signals",
  },
  {
    icon: FaBrain,
    title: "Decision Agent",
    desc: "Generates explainable guidance & next steps",
  },
];

export default function AgentFlow() {
  return (
    <div className="space-y-6">
      {flow.map((step, i) => (
        <motion.div
          key={step.title}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.2 }}
          viewport={{ once: true }}
          className="flex items-start gap-4 rounded-xl bg-white/5 border border-white/10 p-5"
        >
          <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400">
            <step.icon size={20} />
          </div>

          <div>
            <h4 className="text-white font-medium">{step.title}</h4>
            <p className="text-sm text-white/60">{step.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
