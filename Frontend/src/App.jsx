import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";

function Home() {
  return (
    <div className="pt-24 h-screen flex items-center justify-center text-white text-2xl">
      HOME PAGE WORKING
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
