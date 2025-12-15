import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";

import Landing from "./pages/Landing";
import Chat from "./pages/Chat";
import Dashboard from "./pages/Dashboard";
import Documents from "./pages/Documents";
import Profile from "./pages/Profile";
import About from "./pages/About";

import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* 🔐 AUTH ROUTES (NO NAVBAR) */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* 🌐 APP ROUTES (WITH NAVBAR & BACKGROUND) */}
        <Route
          path="/*"
          element={
            <AppLayout>
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/documents" element={<Documents />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </AppLayout>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}
