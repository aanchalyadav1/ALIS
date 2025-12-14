export default function NextSteps() {
  return (
    <div className="lg:col-span-2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
      <h2 className="text-lg font-medium text-white mb-4">
        Recommended Next Steps
      </h2>

      <ul className="space-y-3 text-sm text-white/70">
        <li>• Upload bank statements to improve income verification</li>
        <li>• Add collateral details to unlock secured loan options</li>
        <li>• Generate a sanction preview after document completion</li>
        <li>• Explore alternative tenures for lower EMI</li>
      </ul>

      <div className="mt-6 flex flex-wrap gap-4">
        <button className="px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 transition font-medium text-black">
          Continue with ALIS
        </button>
        <button className="px-6 py-3 rounded-lg border border-white/15 hover:border-white/30 transition text-white/80">
          Upload Documents
        </button>
      </div>
    </div>
  );
}
