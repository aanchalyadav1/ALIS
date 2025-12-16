import { motion } from "framer-motion";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis } from "recharts";

const docs = [
  { name: "PAN Card", status: "uploaded", impact: "High" },
  { name: "Aadhaar", status: "verified", impact: "High" },
  { name: "Salary Slip", status: "pending", impact: "Very High" },
  { name: "Bank Statement", status: "uploaded", impact: "Medium" },
  { name: "ITR (Optional)", status: "pending", impact: "Medium" },
];

const pieData = [
  { name: "Uploaded", value: 2 },
  { name: "Verified", value: 1 },
  { name: "Pending", value: 2 },
];

const barData = [
  { stage: "No Docs", score: 52 },
  { stage: "Core Docs", score: 68 },
  { stage: "All Docs", score: 82 },
];

export default function Documents() {
  const completed = docs.filter(d => d.status !== "pending").length;
  const readiness = Math.round((completed / docs.length) * 100);

  return (
    <div className="min-h-screen bg-[#05060a] text-white px-4 pt-24 pb-16 max-w-7xl mx-auto space-y-10">

      {/* HEADER */}
      <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}}>
        <h1 className="text-3xl font-bold">📂 Document Vault</h1>
        <p className="text-white/60 mt-1">
          AI-powered document readiness for faster approvals
        </p>
      </motion.div>

      {/* READINESS */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        initial={{opacity:0}} animate={{opacity:1}}
      >
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
          <h3 className="text-sm text-white/60 mb-2">Document Readiness</h3>
          <div className="text-5xl font-bold text-cyan-400">{readiness}%</div>
          <p className="text-xs text-white/50 mt-1">
            Upload income docs to boost approval
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
          <PieChart width={220} height={180}>
            <Pie
              data={pieData}
              dataKey="value"
              innerRadius={45}
              outerRadius={70}
            >
              <Cell fill="#22d3ee" />
              <Cell fill="#22c55e" />
              <Cell fill="#f59e0b" />
            </Pie>
          </PieChart>
        </div>

        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
          <BarChart width={220} height={180} data={barData}>
            <XAxis dataKey="stage" hide />
            <Bar dataKey="score" fill="#22d3ee" />
          </BarChart>
        </div>
      </motion.div>

      {/* AI INSIGHT */}
      <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">
        💡 AI Insight: Uploading Salary Slip increases approval chances by ~15%
      </div>

      {/* DOCUMENT CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {docs.map((doc, i) => (
          <motion.div
            key={doc.name}
            initial={{opacity:0,y:10}}
            animate={{opacity:1,y:0}}
            transition={{delay:i*0.05}}
            className="p-5 rounded-2xl bg-white/5 border border-white/10"
          >
            <h3 className="font-semibold">{doc.name}</h3>
            <p className="text-xs text-white/50 mt-1">
              Impact: <span className="text-cyan-400">{doc.impact}</span>
            </p>
            <p className="text-sm mt-2">
              Status:{" "}
              <span className={
                doc.status === "pending"
                  ? "text-yellow-400"
                  : "text-green-400"
              }>
                {doc.status}
              </span>
            </p>
            <button className="mt-4 px-4 py-2 text-sm rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 transition">
              Upload document
            </button>
          </motion.div>
        ))}
      </div>

    </div>
  );
}
