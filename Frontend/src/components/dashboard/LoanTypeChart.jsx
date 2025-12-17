import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const COLORS = ["#38bdf8", "#22c55e", "#facc15", "#fb7185", "#a78bfa"];

export default function LoanTypeChart({ data }) {
  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-6 h-[320px]">
      <h3 className="text-sm text-white/70 mb-4">
        Loan Demand Distribution
      </h3>

      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={data} dataKey="value" innerRadius={60} outerRadius={100}>
            {data.map((_, i) => (
              <Cell key={i} fill={COLORS[i % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
