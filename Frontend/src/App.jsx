import { Routes, Route } from "react-router-dom";

/* Pages */
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import About from "./pages/About";
import Documents from "./pages/Documents";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";

/* Components */
import Navbar from "./components/layout/Navbar";

export default function App() {
  return (
    <div className="min-h-screen bg-[#05060a] text-white">
      {/* NAVBAR ALWAYS VISIBLE */}
      <Navbar />

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/about" element={<About />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}
