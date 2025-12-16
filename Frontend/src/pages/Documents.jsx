const CATEGORIES = [
  {
    title: "Identity Documents",
    docs: ["PAN Card", "Aadhaar (Masked)"],
  },
  {
    title: "Income Proof",
    docs: ["Salary Slip", "Bank Statement", "ITR"],
  },
  {
    title: "Education Loan Docs",
    docs: ["Admission Letter", "Fee Receipt"],
  },
];

export default function Documents() {
  return (
    <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 text-white space-y-10">
      <div>
        <h1 className="text-2xl font-semibold">Document Vault</h1>
        <p className="text-sm text-white/60">
          Securely manage documents required across loan applications
        </p>
      </div>

      {CATEGORIES.map((c) => (
        <div
          key={c.title}
          className="rounded-2xl bg-white/5 border border-white/10 p-6"
        >
          <h2 className="text-lg font-medium mb-4">{c.title}</h2>
          <ul className="space-y-2 text-sm text-white/70">
            {c.docs.map((d) => (
              <li key={d}>• {d}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
