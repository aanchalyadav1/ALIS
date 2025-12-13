import { createContext, useContext, useState } from "react";
import { sendChatMessage } from "../services/api";

const ChatContext = createContext();

export function ChatProvider({ children }) {
  const [messages, setMessages] = useState([
    { role: "ai", text: "Hello, I am ALIS. Tell me about your loan requirement." }
  ]);
  const [agentStatus, setAgentStatus] = useState(null);
  const [thinking, setThinking] = useState(false);

  async function sendMessage(text) {
    setMessages(m => [...m, { role: "user", text }]);
    setThinking(true);

    setAgentStatus("VerificationAgent validating information…");
    setTimeout(() => setAgentStatus("UnderwritingAgent evaluating eligibility…"), 1200);

    const data = await sendChatMessage(text);

    setMessages(m => [...m, { role: "ai", text: data.message }]);
    setThinking(false);
    setAgentStatus(null);
  }

  return (
    <ChatContext.Provider value={{ messages, sendMessage, thinking, agentStatus }}>
      {children}
    </ChatContext.Provider>
  );
}

export const useChat = () => useContext(ChatContext);
