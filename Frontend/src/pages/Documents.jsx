// src/pages/Documents.jsx
import { useEffect, useMemo, useState } from "react";
import DocumentSection from "../components/documents/DocumentSection";
import { fetchUserDocuments } from "../services/api";
import { useAuth } from "../context/AuthContext";

const CATEGORIES = [
  {
    key: "identity",
    title: "Identity",
    description: "Used to verify identity and basic eligibility",
    docs: [
      { type: "PAN", label: "PAN Card", hint: "Required for most loan types" },
      { type: "AADHAAR", label: "Aadhaar (Masked)", hint: "Address verification" },
    ],
  },
  {
    key: "income",
    title: "Income / Employment",
    description: "Helps assess repayment capacity",
    docs: [
      { type: "SALARY_SLIP", label: "Salary Slip", hint: "Recent 1–3 months preferred" },
      { type: "BANK_STATEMENT", label: "Bank Statement", hint: "Shows income flow" },
      { type: "ITR", label: "ITR (Optional)", hint: "Useful for higher limits" },
    ],
  },
  {
    key: "education",
    title: "Education",
    description: "Required for education loans",
    docs: [
      { type: "OFFER_LETTER", label: "Admission / Offer Letter", hint: "Confirms enrollment" },
      { type: "FEE_STRUCTURE", label: "Fee Structure", hint: "Loan amount estimation" },
    ],
  },
  {
    key: "assets",
    title: "Assets / Collateral",
    description: "Used for secured loans",
    docs: [
      { type: "PROPERTY_PAPERS", label: "Property Papers", hint: "Home loans / LAP" },
      { type: "GOLD_VALUATION", label: "Gold Valuation", hint: "Gold loans" },
      { type: "VEHICLE_RC", label: "Vehicle RC", hint: "Vehicle loans" },
    ],
  },
];

export default function Documents() {
  const { user } = useAuth();
  const [docs, setDocs] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔐 HARD AUTH GUARD (prevents blank screen)
  if (!user) {
    return (
      <div className="pt-24 text-center text-white/60">
        Please login to manage your documents.
      </div>
    );
  }

  useEffect(() => {
    let mounted = true;

    async function loadDocs() {
      try {
  const res = [];

        if (mounted) setDocs(Array.isArray(res) ? res : []);
      } catch (err) {
        console.error("Document fetch failed:", err);
        if (mounted) setDocs([]);
      } finally {
        if (mounted) setLoading(false);
      }
    }

    loadDocs();
    return () => {
      mounted = false;
    };
  }, []);

  const stats = useMemo(() => {
    const uploaded = docs.filter(
      (d) => d.status === "uploaded" || d.status === "verified"
    ).length;

    const verified = docs.filter((d) => d.status === "verified").length;

    const totalPossible = CATEGORIES.reduce(
      (sum, cat) => sum + cat.docs.length,
      0
    );

    return {
      uploaded,
      verified,
      pending: Math.max(totalPossible - uploaded, 0),
      totalPossible,
    };
  }, [docs]);

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto space-y-10">

        {/* HEADER */}
        <div>
          <h1 className="text-2xl font-semibold text-white">
            Your Documents
          </h1>
          <p className="text-sm text-white/60 mt-1 max-w-2xl">
            Securely store and reuse documents across loan applications.
            Upload now or later — ALIS will guide you when they’re required.
          </p>
        </div>

        {/* STATUS OVERVIEW */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <StatusCard label="Uploaded" value={stats.uploaded} />
          <StatusCard label="Verified" value={stats.verified} />
          <StatusCard label="Pending" value={stats.pending} />
          <StatusCard label="Possible" value={stats.totalPossible} />
        </div>

        {/* DOCUMENT SECTIONS */}
        <div className="space-y-8">
          {CATEGORIES.map((cat) => (
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

        {/* FOOTER NOTE */}
        <div className="text-xs text-white/40 pt-6">
          Documents are encrypted and used only to assist your loan journey.
          This demo environment does not share files externally.
        </div>
      </div>
    </div>
  );
}

/* -------------------------
   STATUS CARD
------------------------- */
function StatusCard({ label, value }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-4">
      <div className="text-sm text-white/60">{label}</div>
      <div className="text-2xl font-semibold text-white mt-1">
        {value}
      </div>
    </div>
  );
}
