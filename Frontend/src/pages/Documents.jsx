import { useEffect, useMemo, useState } from "react";
import DocumentSection from "../components/documents/DocumentSection";

const CATEGORIES = [
  {
    key: "identity",
    title: "Identity Documents",
    description: "Used to verify identity and basic eligibility",
    docs: [
      { type: "PAN", label: "PAN Card", hint: "Required for most loans" },
      { type: "AADHAAR", label: "Aadhaar (Masked)", hint: "Address verification" },
    ],
  },
  {
    key: "income",
    title: "Income / Employment",
    description: "Helps assess repayment capacity",
    docs: [
      { type: "SALARY_SLIP", label: "Salary Slip", hint: "Last 1–3 months" },
      { type: "BANK_STATEMENT", label: "Bank Statement", hint: "Income flow proof" },
      { type: "ITR", label: "ITR (Optional)", hint: "Higher eligibility" },
    ],
  },
  {
    key: "assets",
    title: "Assets / Collateral",
    description: "Required for secured loans",
    docs: [
      { type: "PROPERTY", label: "Property Papers", hint: "Home / LAP loans" },
      { type: "VEHICLE_RC", label: "Vehicle RC", hint: "Vehicle loans" },
    ],
  },
];

export default function Documents() {
  const [docs, setDocs] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ MOCK USER DOCUMENTS (SAFE FOR DEMO)
  useEffect(() => {
    setTimeout(() => {
      setDocs([
        { type: "PAN", status: "uploaded" },
        { type: "AADHAAR", status: "verified" },
        { type: "SALARY_SLIP", status: "pending" },
      ]);
      setLoading(false);
    }, 800);
  }, []);

  const stats = useMemo(() => {
    const uploaded = docs.filter(d => d.status === "uploaded" || d.status === "verified").length;
    const verified = docs.filter(d => d.status === "verified").length;
    const total = CATEGORIES.reduce((a, c) => a + c.docs.length, 0);

    return {
      uploaded,
      verified,
      pending: Math.max(total - uploaded, 0),
      total,
    };
  }, [docs]);

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto space-y-10">

        {/* HEADER */}
        <div>
          <h1 className="text-2xl font-semibold text-white">
            Document Vault
          </h1>
          <p className="text-sm text-white/60 mt-1">
            Upload once. Reuse across loan journeys.
          </p>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <StatusCard label="Uploaded" value={stats.uploaded} />
          <StatusCard label="Verified" value={stats.verified} />
          <StatusCard label="Pending" value={stats.pending} />
          <StatusCard label="Total" value={stats.total} />
        </div>

        {/* SECTIONS */}
        <div className="space-y-8">
          {CATEGORIES.map(cat => (
            <DocumentSection
              key={cat.key}
              title={cat.title}
              description={cat.description}
              items={cat.docs}
              userDocs={docs}
              loading={loading}
            />
          ))}
        </div>

        {/* FOOTER */}
        <p className="text-xs text-white/40">
          Demo environment · Documents are not shared externally
        </p>
      </div>
    </div>
  );
}

function StatusCard({ label, value }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">
      <div className="text-sm text-white/60">{label}</div>
      <div className="text-2xl font-semibold text-white mt-1">{value}</div>
    </div>
  );
}
