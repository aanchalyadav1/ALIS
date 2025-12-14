import { motion } from "framer-motion";

const agents = [
  { name: "Intent Agent", desc: "Understands user loan requirement" },
  { name: "Eligibility Agent", desc: "Evaluates income & documents" },
  { name: "Risk Agent", desc: "Assesses approval risk & limits" },
  { name: "Advisor Agent", desc: "Guides user with next steps" },
];

export default function AgentFlow({ active = 0 }) {
  return (
    <div className="grid md:grid-cols-4 gap-4">
      {agents.map((agent, i) => (
        <motion.div
          key={i}
          animate={{ opacity: i <= active ? 1 : 0.4 }}
          className={`p-4 rounded-xl border ${
            i <= active
              ? "border-cyan-500/40 bg-cyan-500/10"
              : "border-white/10 bg-white/5"
          }`}
        >
          <h4 className="text-white text-sm font-medium">
            {agent.name}
          </h4>
          <p className="text-xs text-white/60 mt-1">
            {agent.desc}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
