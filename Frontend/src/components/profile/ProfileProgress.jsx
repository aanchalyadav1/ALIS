export default function ProfileProgress() {
  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
      <h2 className="text-lg font-medium mb-4">Profile Completion</h2>
      <div className="h-3 bg-white/10 rounded">
        <div className="h-3 bg-cyan-400 rounded w-[75%]" />
      </div>
      <p className="text-xs text-white/60 mt-2">
        Complete your profile to improve loan guidance accuracy.
      </p>
    </div>
  );
}
