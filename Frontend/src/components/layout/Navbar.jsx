import ThemeToggle from "../ui/ThemeToggle";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full h-16 backdrop-blur bg-black/40 border-b border-white/10 z-50 flex items-center justify-between px-6">
      <div className="flex items-center gap-3">
        <img src="/team_logo.png" className="h-8" />
        <span className="font-semibold tracking-wide">ALIS</span>
      </div>
      <ThemeToggle />
    </nav>
  );
}
