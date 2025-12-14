// src/components/documents/UploadModal.jsx
import { useState } from "react";
import { uploadDocument } from "../../services/api";

export default function UploadModal({ open, onClose, docType }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (!open) return null;

  async function handleSubmit() {
    if (!file) {
      setError("Please select a file");
      return;
    }

    setLoading(true);
    setError("");

    try {
      await uploadDocument(docType, file);
      onClose(true);
    } catch (e) {
      setError("Upload failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-xl border border-white/10 bg-black/90 backdrop-blur p-6 space-y-4">
        <h3 className="text-lg font-medium">Upload {docType}</h3>

        <input
          type="file"
          accept=".pdf,.jpg,.jpeg,.png"
          onChange={e => setFile(e.target.files[0])}
          className="block w-full text-sm text-white/70"
        />

        {error && <p className="text-sm text-red-400">{error}</p>}

        <div className="flex justify-end gap-3 pt-2">
          <button
            onClick={() => onClose(false)}
            className="px-4 py-2 text-sm text-white/70 hover:text-white"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="px-5 py-2 rounded-lg bg-cyan-500 text-black text-sm font-medium hover:bg-cyan-400 disabled:opacity-50"
          >
            {loading ? "Uploading…" : "Upload"}
          </button>
        </div>
      </div>
    </div>
  );
}
