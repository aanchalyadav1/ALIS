import { Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing.jsx";
import Chat from "./pages/Chat.jsx";
import About from "./pages/About.jsx";
import Documents from "./pages/Documents.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Profile from "./pages/Profile.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/about" element={<About />} />
      <Route path="/documents" element={<Documents />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}
