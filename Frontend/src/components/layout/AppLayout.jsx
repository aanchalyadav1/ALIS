import Navbar from "../components/layout/Navbar";
import BackgroundLayer from "../components/layout/BackgroundLayer";

export default function AppLayout({ children }) {
  return (
    <div className="min-h-screen relative">
      <BackgroundLayer />
      <Navbar />
      {/* OFFSET for fixed navbar */}
      <main className="pt-16">
        {children}
      </main>
    </div>
  );
}
