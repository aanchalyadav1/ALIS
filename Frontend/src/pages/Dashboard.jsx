export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 pt-24 pb-16 space-y-10">

      <header>
        <h1 className="text-2xl font-semibold text-white">
          Platform Loan Intelligence
        </h1>
        <p className="text-sm text-white/60 mt-1">
          Aggregated insights from demo loan interactions
        </p>
      </header>

      {/* GLOBAL STATS */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        <Stat label="Total Loan Requests" value="12,480+" />
        <Stat label="Eligibility Rate" value="62%" />
        <Stat label="Avg Loan Size" value="₹9.6L" />
        <Stat label="High Risk Profiles" value="18%" />
      </div>

      {/* PLACEHOLDERS */}
      <Card title="Loan Type Demand Distribution">
        Demo visualization (static)
      </Card>

      <Card title="Credit Risk Classification">
        Demo visualization (static)
      </Card>

      <Card title="System Activity Feed">
        Demo activity logs
      </Card>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-xl bg-white/5 border border-white/10 p-5">
      <div className="text-xs text-white/60">{label}</div>
      <div className="text-2xl font-semibold text-white mt-1">{value}</div>
    </div>
  );
}

function Card({ title, children }) {
  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
      <h2 className="text-lg font-medium text-white mb-2">{title}</h2>
      <p className="text-sm text-white/60">{children}</p>
    </div>
  );
}
