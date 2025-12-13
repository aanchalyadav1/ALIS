import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { risk: "Low Risk", users: 62 },
  { risk: "Medium Risk", users: 26 },
  { risk: "High Risk", users: 12 }
];

export default function RiskChart() {
  return (
    <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/10">
      <h3 className="text-lg font-semibold mb-1">
        Credit Risk Classification
      </h3>
      <p className="text-sm opacity-60 mb-4">
        UnderwritingAgent risk bucket analysis
      </p>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="risk" />
            <YAxis />
            <Tooltip
              contentStyle={{
                background: "#020617",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 8
              }}
            />
            <Bar
              dataKey="users"
              radius={[6, 6, 0, 0]}
              fill="#38bdf8"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
