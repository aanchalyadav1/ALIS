export default function ProfileField({ label, value, onChange }) {
  return (
    <div className="space-y-1">
      <label className="text-xs text-white/60">
        {label}
      </label>

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={`Enter ${label.toLowerCase()}`}
        className="w-full px-3 py-2 rounded-lg bg-black/40 border border-white/10 text-white focus:outline-none focus:border-cyan-400 transition"
      />
    </div>
  );
}
