import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/globals.css";

import { ThemeProvider } from "./context/ThemeContext.jsx";
import { ChatProvider } from "./context/ChatContext.jsx";
import { LoanSessionProvider } from "./context/LoanSessionContext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <LoanSessionProvider>
          <ChatProvider>
            <App />
          </ChatProvider>
        </LoanSessionProvider>
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>
);
