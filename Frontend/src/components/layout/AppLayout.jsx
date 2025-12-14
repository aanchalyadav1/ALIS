import Navbar from "./Navbar";
import BackgroundLayer from "./BackgroundLayer";

export default function AppLayout({ children }) {
  return (
    <div className="min-h-screen relative bg-[#05060a] text-white">
      <BackgroundLayer />
      <Navbar />

      {/* Single source of spacing */}
      <main className="pt-16">
        {children}
      </main>
    </div>
  );
}
