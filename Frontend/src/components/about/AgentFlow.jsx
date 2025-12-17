import { motion } from "framer-motion";
import { FaUserCheck, FaBrain, FaShieldAlt, FaFileAlt } from "react-icons/fa";

const agents = [
  { icon: FaUserCheck, name: "Intent Agent", desc: "Understands user goal & loan intent" },
  { icon: FaFileAlt, name: "Document Agent", desc: "Checks document readiness & gaps" },
  { icon: FaShieldAlt, name: "Risk Agent", desc: "Evaluates credit & repayment risk" },
  { icon: FaBrain, name: "Decision Agent", desc: "Generates final insights & guidance" },
];

export default function AgentFlow() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {agents.map((agent, i) => (
        <motion.div
          key={agent.name}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.15 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-white/5 border border-white/10 p-6 text-center"
        >
          <div className="h-12 w-12 mx-auto mb-4 flex items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
            <agent.icon size={24} />
          </div>
          <h3 className="text-white font-medium">{agent.name}</h3>
          <p className="text-sm text-white/60 mt-2">{agent.desc}</p>
        </motion.div>
      ))}
    </div>
  );
}
