export default function LifeStageCard() {
  return (
    <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-violet-500/10 border border-white/10">
      <h2 className="text-lg font-medium text-white mb-2">
        Life Stage & Goals
      </h2>

      <p className="text-sm text-white/70 mb-4">
        ALIS adapts recommendations as your career evolves.
      </p>

      <div className="flex flex-wrap gap-3">
        <span className="px-3 py-1 rounded-full bg-white/10 text-sm text-white/80">
          🎓 Student
        </span>
        <span className="px-3 py-1 rounded-full bg-white/10 text-sm text-white/80">
          💼 Future Salaried
        </span>
        <span className="px-3 py-1 rounded-full bg-white/10 text-sm text-white/80">
          🏠 Home Buyer (Later)
        </span>
      </div>
    </div>
  );
}
