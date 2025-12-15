export default function ProfileHeader({ user }) {
  return (
    <div className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur">
      <div className="w-14 h-14 rounded-full bg-cyan-500 flex items-center justify-center text-black font-bold">
        {user.email?.[0]?.toUpperCase() || "U"}
      </div>

      <div>
        <h1 className="text-lg font-semibold text-white">
          {user.email}
        </h1>
        <p className="text-sm text-white/60">
          ALIS Profile • Secure Session
        </p>
      </div>
    </div>
  );
}
