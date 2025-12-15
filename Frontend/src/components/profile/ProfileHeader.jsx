export default function ProfileHeader() {
  return (
    <div className="flex items-center gap-5 bg-white/5 border border-white/10 p-6 rounded-2xl">
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-black font-bold text-xl">
        G
      </div>

      <div>
        <h1 className="text-xl font-semibold">Guest User</h1>
        <p className="text-sm text-white/60">
          Temporary profile · Register to save progress
        </p>
      </div>
    </div>
  );
}
