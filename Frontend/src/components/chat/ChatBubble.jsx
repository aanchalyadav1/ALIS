import { useTheme } from "../../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      className="border border-white/20 px-3 py-1 rounded"
    >
      {theme === "dark" ? "Light" : "Dark"}
    </button>
  );
}
