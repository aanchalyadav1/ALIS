import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppLayout from "./components/layout/AppLayout";

import Landing from "./pages/Landing";
import Chat from "./pages/Chat";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />

          {/* AUTH */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}
