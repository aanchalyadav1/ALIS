// src/components/documents/DocumentCard.jsx
import DocumentStatus from "./DocumentStatus";

export default function DocumentCard({
  label,
  docType,
  hint,
  status = "not_uploaded", // not_uploaded | uploaded | verified
  onUpload,
  disabled = false,
}) {
  const isUploaded = status === "uploaded" || status === "verified";

  return (
    <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-5 flex flex-col gap-3">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h4 className="font-medium">{label}</h4>
          <p className="text-xs text-white/60 mt-1">{hint}</p>
        </div>
        <DocumentStatus status={status} />
      </div>

      <div className="pt-2">
        <button
          disabled={disabled}
          onClick={() => onUpload?.(docType)}
          className={`px-4 py-2 rounded-lg text-sm transition
            ${disabled
              ? "bg-white/10 text-white/40 cursor-not-allowed"
              : isUploaded
                ? "border border-white/20 text-white/80 hover:border-white/40"
                : "bg-cyan-500 text-black hover:bg-cyan-400"
            }`}
        >
          {isUploaded ? "Replace document" : "Upload document"}
        </button>
      </div>
    </div>
  );
                    }
