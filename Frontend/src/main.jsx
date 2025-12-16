import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/globals.css";

import { UserProvider } from "./context/UserContext";
import { AuthProvider } from "./context/AuthContext.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { LoanSessionProvider } from "./context/LoanSessionContext";
import { ChatProvider } from "./context/ChatContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProvider>
    <AuthProvider>
      <ThemeProvider>
        <LoanSessionProvider>
          <ChatProvider>
            <App />
          </ChatProvider>
        </LoanSessionProvider>
      </ThemeProvider>
    </AuthProvider>
  </UserProvider>
);
