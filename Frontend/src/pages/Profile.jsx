import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const { logout } = useAuth();
const navigate = useNavigate();

<button
  onClick={() => {
    logout();
    navigate("/");
  }}
  className="mt-8 px-6 py-2 rounded-xl bg-red-500/10 text-red-400 border border-red-500/30"
>
  Logout
</button>
