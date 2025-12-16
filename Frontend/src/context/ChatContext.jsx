import { createContext, useContext, useState } from "react";

const ChatContext = createContext(null);

export function ChatProvider({ children }) {
  const [messages, setMessages] = useState([]);

  const getProfileContext = () => {
    try {
      const profile = JSON.parse(localStorage.getItem("alis-profile"));
      if (!profile) return null;

      return {
        name: profile.name,
        age: profile.age,
        city: profile.city,
        profession: profile.profession,
        income: profile.income,
      };
    } catch {
      return null;
    }
  };

  return (
    <ChatContext.Provider
      value={{
        messages,
        setMessages,
        getProfileContext,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}

export const useChat = () => useContext(ChatContext);
