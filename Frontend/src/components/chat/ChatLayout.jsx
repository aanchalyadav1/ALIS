import { useState } from "react";
import AgentOrb from "./AgentOrb";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";

export default function ChatLayout() {
  const [messages, setMessages] = useState([
    {
      role: "agent",
      text:
        "Hello, I’m ALIS. I help explain loan eligibility, risk, and options before you apply."
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
          "Based on Indian lending trends, your query suggests moderate eligibility. Education and income stability will strongly influence approval."
      }
    ]);
  }

  return (
    <div className="max-w-6xl mx-auto px-4 pt-24 pb-10">
      <div className="mb-6 flex items-center gap-4">
        <AgentOrb />
        <div>
          <h1 className="text-xl font-semibold text-white">
            ALIS — Doan Assistant
          </h1>
          <p className="text-sm text-white/60">
            Demo intelligence · Explainable · Safe
          </p>
        </div>
      </div>

      <div className="flex flex-col h-[65vh] rounded-2xl bg-white/5 border border-white/10">
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {messages.map((m, i) => (
            <ChatMessage key={i} role={m.role} text={m.text} />
          ))}
        </div>

        <ChatInput onSend={handleSend} />
      </div>
    </div>
  );
}
