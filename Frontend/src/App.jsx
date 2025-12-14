import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import BackgroundLayer from "./components/layout/BackgroundLayer";

import Landing from "./pages/Landing";
import Chat from "./pages/Chat";
import Documents from "./pages/Documents";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Apply from "./pages/Apply";

export default function App() {
  return (
    <BrowserRouter>
      <BackgroundLayer />
      <Navbar />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />

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
