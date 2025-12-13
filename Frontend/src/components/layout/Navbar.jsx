import { useTheme } from "../../context/ThemeContext.jsx";

export default function Navbar() {
  const { theme, toggle } = useTheme();
  return (
    <nav className="fixed w-full h-16 backdrop-blur bg-black/40 border-b border-white/5 z-50 flex items-center px-6 justify-between">
      <span className="font-semibold text-primary">ALIS</span>
      <button onClick={toggle} className="px-3 py-1 border rounded">
        {theme === "dark" ? "Light" : "Dark"}
      </button>
    </nav>
  );
}
