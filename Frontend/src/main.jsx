import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/globals.css";

import { ThemeProvider } from "./context/ThemeContext.jsx";
import { ChatProvider } from "./context/ChatContext.jsx";
import { LoanSessionProvider } from "./context/LoanSessionContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <LoanSessionProvider>
      <ChatProvider>
        <App />
      </ChatProvider>
    </LoanSessionProvider>
  </ThemeProvider>
);
