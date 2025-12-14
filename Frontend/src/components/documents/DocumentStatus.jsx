// src/components/documents/DocumentStatus.jsx
export default function DocumentStatus({ status }) {
  const map = {
    not_uploaded: {
      label: "Not uploaded",
      className: "bg-white/10 text-white/60",
    },
    uploaded: {
      label: "Uploaded",
      className: "bg-cyan-500/20 text-cyan-300",
    },
    verified: {
      label: "Verified",
      className: "bg-emerald-500/20 text-emerald-300",
    },
  };

  const cfg = map[status] || map.not_uploaded;

  return (
    <span
      className={`text-xs px-3 py-1 rounded-full border border-white/10 ${cfg.className}`}
    >
      {cfg.label}
    </span>
  );
}
