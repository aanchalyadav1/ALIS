// src/components/documents/DocumentSection.jsx
import DocumentCard from "./DocumentCard";

export default function DocumentSection({
  title,
  description,
  items = [],
  userDocs = [],
  loading = false,
}) {
  function resolveStatus(type) {
    const found = userDocs.find(d => d.docType === type);
    return found ? found.status : "not_uploaded";
  }

  function handleUpload(docType) {
    // UploadModal will be wired next
    console.log("Upload requested:", docType);
  }

  return (
    <section className="space-y-4">
      <div>
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-sm text-white/60">{description}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map(item => (
          <DocumentCard
            key={item.type}
            label={item.label}
            docType={item.type}
            hint={item.hint}
            status={resolveStatus(item.type)}
            disabled={loading}
            onUpload={handleUpload}
          />
        ))}
      </div>
    </section>
  );
}
