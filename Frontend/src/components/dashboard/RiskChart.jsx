import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function RiskChart({ data }) {
  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-6 h-[320px]">
      <h3 className="text-sm text-white/70 mb-4">
        Credit Risk Classification
      </h3>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="label" />
          <Tooltip />
          <Bar dataKey="value" fill="#38bdf8" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
