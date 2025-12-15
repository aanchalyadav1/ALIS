export default function ProfileField({
  label,
  value,
  options,
  onChange,
}) {
  return (
    <div>
      <p className="text-sm text-white/70 mb-2">{label}</p>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const active = value === opt || value === opt.toLowerCase();
          return (
            <button
              key={opt}
              onClick={() => onChange(opt)}
              className={`px-4 py-2 rounded-xl text-sm transition ${
                active
                  ? "bg-cyan-500 text-black"
                  : "bg-white/5 border border-white/10 text-white/70 hover:bg-white/10"
              }`}
            >
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}
