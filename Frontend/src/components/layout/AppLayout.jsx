import Navbar from "./Navbar";
import BackgroundLayer from "./BackgroundLayer";

export default function AppLayout({ children }) {
  return (
    <div className="min-h-screen relative">
      {/* Global background */}
      <BackgroundLayer />

      {/* Fixed top navigation */}
      <Navbar />

      {/* Page content offset for fixed navbar */}
      <main className="pt-16">
        {children}
      </main>
    </div>
  );
}
