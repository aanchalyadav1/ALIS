import { useState } from "react";
import AgentOrb from "./AgentOrb";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";

export default function ChatLayout() {
  const [messages, setMessages] = useState([
    {
      role: "agent",
      text:
        "Hello, I’m ALIS — your AI Loan Officer. I help you understand eligibility, affordability, and approval logic before you apply."
    }
  ]);

  function handleSend(text) {
    if (!text.trim()) return;

    setMessages((prev) => [
      ...prev,
      { role: "user", text },
      {
        role: "agent",
        text:
          "Thanks for sharing. I’ll guide you step by step using India-focused loan logic — no pressure, no forced applications."
      }
    ]);
  }

  return (
    <div className="max-w-6xl mx-auto px-4 pt-24 pb-10">
      {/* HEADER */}
      <div className="mb-6 flex items-center gap-4">
        <AgentOrb />
        <div>
          <h1 className="text-xl font-semibold text-white">
            ALIS — AI Loan Officer
          </h1>
          <p className="text-sm text-white/60">
            Guidance-first · India-focused · Secure session
          </p>
        </div>
      </div>

      {/* CHAT CONTAINER */}
      <div className="flex flex-col h-[65vh] rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
        {/* MESSAGES */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {messages.map((msg, i) => (
            <ChatMessage key={i} role={msg.role} text={msg.text} />
          ))}
        </div>

        {/* QUICK ACTIONS */}
        <div className="px-4 pb-3 flex gap-2 flex-wrap">
          {[
            "Education Loan",
            "Home Loan",
            "Personal Loan",
            "Business Loan",
            "Vehicle Loan"
          ].map((item) => (
            <button
              key={item}
              onClick={() => handleSend(item)}
              className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 transition"
            >
              {item}
            </button>
          ))}
        </div>

        {/* INPUT */}
        <ChatInput onSend={handleSend} />
      </div>
    </div>
  );
}
