export default function ProfileField({ label, value, onChange }) {
  return (
    <div>
      <label className="text-sm text-white/60">{label}</label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 outline-none focus:border-cyan-400"
      />
    </div>
  );
}
