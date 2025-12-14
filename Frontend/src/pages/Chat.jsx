import { useEffect, useState } from "react";
import ChatBubble from "../components/chat/ChatBubble";
import TypingIndicator from "../components/chat/TypingIndicator";
import AgentStatus from "../components/chat/AgentStatus";
import ChatInputBar from "../components/chat/ChatInputBar";

const GREETING = {
  role: "assistant",
  text: "Hello, I’m ALIS — your AI loan officer.\n\nI can help you understand loan eligibility, affordability, and approval logic based on your profile.\n\nWhat would you like to explore today?"
};

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [thinking, setThinking] = useState(false);
  const [agentStatus, setAgentStatus] = useState("");
  const [history, setHistory] = useState([]);

  // Greet on first load
  useEffect(() => {
    startNewChat();
    // eslint-disable-next-line
  }, []);

  function startNewChat() {
    if (messages.length > 0) {
      setHistory(prev => [
        {
          id: Date.now(),
          preview: messages.find(m => m.role === "user")?.text || "Loan inquiry",
          messages
        },
        ...prev
      ]);
    }
    setMessages([GREETING]);
  }

  async function handleSend(text) {
    const userMsg = { role: "user", text };
    setMessages(prev => [...prev, userMsg]);

    setAgentStatus("Analyzing your input…");
    setThinking(true);

    // Simulated AI delay (UX-first, backend-ready)
    setTimeout(() => {
      setAgentStatus("Evaluating loan context…");

      setTimeout(() => {
        setThinking(false);
        setAgentStatus("");

        setMessages(prev => [
          ...prev,
          {
            role: "assistant",
            text:
              "Thanks for sharing. Based on what you’ve said, I can guide you through eligibility and next steps.\n\nTo proceed, tell me:\n• Your profession\n• Approximate monthly income\n• Loan type you’re considering"
          }
        ]);
      }, 900);
    }, 700);
  }

  return (
    <div className="min-h-screen pt-16 flex">

      {/* ================= LEFT — HISTORY ================= */}
      <aside className="hidden md:flex w-64 border-r border-white/10 bg-black/40 backdrop-blur flex-col">
        <div className="p-4 border-b border-white/10">
          <button
            onClick={startNewChat}
            className="w-full px-3 py-2 rounded-md bg-cyan-500 hover:bg-cyan-400 transition text-sm font-medium text-black"
          >
            + New Chat
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-3 space-y-2 text-sm">
          {history.length === 0 && (
            <p className="text-white/50 text-xs">
              Your previous chats will appear here.
            </p>
          )}

          {history.map(h => (
            <div
              key={h.id}
              className="rounded-md border border-white/10 p-2 text-white/70 hover:bg-white/5 cursor-pointer"
            >
              {h.preview}
            </div>
          ))}
        </div>
      </aside>

      {/* ================= RIGHT — CHAT ================= */}
      <main className="flex-1 flex flex-col">

        {/* HEADER */}
        <div className="px-6 py-4 border-b border-white/10">
          <h2 className="text-lg font-semibold">ALIS — AI Loan Officer</h2>
          <p className="text-sm text-white/60">
            Secure session • Guidance-first • India-focused
          </p>
        </div>

        {/* MESSAGES */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
          {messages.map((m, i) => (
            <ChatBubble key={i} role={m.role} text={m.text} />
          ))}

          {agentStatus && <AgentStatus text={agentStatus} />}
          {thinking && <TypingIndicator />}
        </div>

        {/* INPUT */}
        <ChatInputBar onSend={handleSend} />
      </main>
    </div>
  );
}
