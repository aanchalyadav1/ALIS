import { useLoanSession } from "../context/LoanSessionContext";

export default function Dashboard() {
  console.log("🧪 Dashboard mounted");

  const ctx = useLoanSession();
  console.log("🧪 LoanSessionContext =", ctx);

  return (
    <div style={{ paddingTop: 120, color: "white" }}>
      <h1>DASHBOARD LOADED</h1>
      <pre>{JSON.stringify(ctx, null, 2)}</pre>
    </div>
  );
}
