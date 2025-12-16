import { useAuth } from "./context/AuthContext";

export default function App() {
  const { user } = useAuth();

  return (
    <div
      style={{
        background: "#05060a",
        color: "white",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "26px",
      }}
    >
      {user ? "USER LOGGED IN" : "NO USER — AUTH OK"}
    </div>
  );
}
