export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#05060a]">
      <div className="bg-white/5 border border-white/10 p-8 rounded-2xl w-full max-w-sm space-y-4">
        <h1 className="text-xl font-semibold">Create Account</h1>

        <input className="input" placeholder="Name" />
        <input className="input" placeholder="Email" />
        <input className="input" placeholder="Password" type="password" />

        <button className="btn-primary w-full">
          Register
        </button>
      </div>
    </div>
  );
}
