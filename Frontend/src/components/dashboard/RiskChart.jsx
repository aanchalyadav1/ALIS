export default function RiskChart({ risk }) {
  const color =
    risk === "Low"
      ? "text-green-400"
      : risk === "Medium"
      ? "text-yellow-400"
      : risk === "High"
      ? "text-red-400"
      : "text-white/40";

  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
      <h2 className="text-lg font-medium mb-2">
        Risk Assessment
      </h2>

      <p className={`text-2xl font-semibold ${color}`}>
        {risk ?? "Pending"}
      </p>

      <p className="text-sm text-white/60 mt-2">
        Evaluated from income signals and loan type.
      </p>
    </div>
  );
}
