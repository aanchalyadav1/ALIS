import { createContext, useContext, useState } from "react";
import { useUser } from "./UserContext";

const ChatContext = createContext(null);

export function ChatProvider({ children }) {
  const { profile } = useUser();

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hello, I’m ALIS — your Agentic Loan Intelligence system. Tell me about the loan you’re considering.",
    },
  ]);

  function sendMessage(userMessage) {
    const newMessages = [
      ...messages,
      { role: "user", content: userMessage },
    ];

    const aiReply = generateAIReply(userMessage, profile);

    setMessages([
      ...newMessages,
      { role: "assistant", content: aiReply },
    ]);
  }

  return (
    <ChatContext.Provider value={{ messages, sendMessage }}>
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  return useContext(ChatContext);
}

/* 🧠 AI LOGIC (PROFILE-AWARE) */
function generateAIReply(message, profile) {
  const name = profile.name || "there";
  const profession = profile.profession || "your profession";
  const income = profile.income || "your income";

  if (message.toLowerCase().includes("education")) {
    return `Thanks ${name}. Based on your profile as a ${profession}, an education loan is suitable. I’ll evaluate eligibility once income and course details are clear.`;
  }

  if (message.toLowerCase().includes("home")) {
    return `Got it ${name}. Home loans depend heavily on income stability. Currently, your recorded income is ${income}. I’ll guide you accordingly.`;
  }

  if (message.toLowerCase().includes("personal")) {
    return `Personal loans are quicker but risk-based. I’ll assess your readiness using your profile and intent.`;
  }

  return `Thanks ${name}. I’m analyzing your request using your profile details. Please tell me the loan type (education, home, personal, business).`;
}
