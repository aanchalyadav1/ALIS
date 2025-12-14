import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";

import Landing from "./pages/Landing";
import Chat from "./pages/Chat";
import Documents from "./pages/Documents";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}
