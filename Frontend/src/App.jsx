import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import BackgroundLayer from "./components/layout/BackgroundLayer";

// Pages
import Landing from "./pages/Landing";
import Chat from "./pages/Chat";
import Dashboard from "./pages/Dashboard";
import Documents from "./pages/Documents";
import About from "./pages/About";

export default function App() {
  return (
    <BrowserRouter>
      {/* Global background */}
      <BackgroundLayer />

      {/* Top navigation */}
      <Navbar />

      {/* Page routing */}
      <Routes>
        {/* Home */}
        <Route path="/" element={<Landing />} />

        {/* Core product flows */}
        <Route path="/chat" element={<Chat />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Informational */}
        <Route path="/about" element={<About />} />

        {/* Fallback (optional but recommended) */}
        <Route
          path="*"
          element={
            <div className="min-h-screen pt-32 text-center text-white/70">
              Page not found
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
