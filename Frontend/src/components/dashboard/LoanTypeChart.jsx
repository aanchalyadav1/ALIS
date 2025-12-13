import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";

const data = [
  { name: "Home Loan", value: 38 },
  { name: "Personal Loan", value: 22 },
  { name: "Education Loan", value: 14 },
  { name: "Business Loan", value: 16 },
  { name: "Vehicle / Gold Loan", value: 10 }
];

const COLORS = ["#38bdf8", "#22d3ee", "#818cf8", "#facc15", "#fb7185"];

export default function LoanTypeChart() {
  return (
    <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/10">
      <h3 className="text-lg font-semibold mb-1">
        Loan Type Demand Distribution
      </h3>
      <p className="text-sm opacity-60 mb-4">
        Based on AI-analyzed user intent patterns
      </p>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              innerRadius={60}
              outerRadius={100}
              paddingAngle={3}
              dataKey="value"
            >
              {data.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                background: "#020617",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 8
              }}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
