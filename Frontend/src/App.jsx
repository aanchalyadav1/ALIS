import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

function Home() {
  return (
    <div className="h-screen flex items-center justify-center text-white text-2xl">
      HOME PAGE WORKING
    </div>
  );
}

export default function App() {
  const { user } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
