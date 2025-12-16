import { useEffect, useState } from "react";
import AgentOrb from "./AgentOrb";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import SanctionCard from "../sanction/SanctionCard";
import { useLoanSession } from "../../context/LoanSessionContext";

export default function ChatLayout() {
  const ctx = useLoanSession();

  // 🛑 HARD GUARD — prevents blank page
  if (!ctx || !ctx.session) {
    return (
      <div className="pt-24 text-center text-white/60">
        Initializing ALIS session…
      </div>
    );
  }

  const { session, startAnalysis } = ctx;

  const [messages, setMessages] = useState([
    {
      role: "agent",
      text:
        "Hello, I’m ALIS — your Agentic Loan Intelligence system. Tell me about the loan you’re considering, and I’ll guide you clearly."
    }
  ]);

  function handleSend(text) {
    if (!text.trim()) return;

    setMessages((prev) => [...prev, { role: "user", text }]);
    startAnalysis(text);
  }

  useEffect(() => {
    if (session.agentStatus === "completed") {
      setMessages((prev) => [
        ...prev,
        {
          role: "agent",
          text:
            "I’ve completed the analysis using multiple loan intelligence agents. Please review the sanction guidance below."
        }
      ]);
    }
  }, [session.agentStatus]);

  return (
    <div className="max-w-6xl mx-auto px-4 pt-24 pb-10">
      {/* HEADER */}
      <div className="mb-6 flex items-center gap-4">
        <AgentOrb />
        <div>
          <h1 className="text-xl font-semibold text-white">
            ALIS — Agentic Loan Intelligence
          </h1>
          <p className="text-sm text-white/60">
            Explainable · Guidance-first · Secure session
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

          {session.agentStatus === "running" && (
            <ChatMessage
              role="agent"
              text="Analyzing your profile using multiple loan agents…"
            />
          )}

          {/* SANCTION PREVIEW (SAFE) */}
          {session.agentStatus === "completed" && session.sanction && (
            <SanctionCard
              sanction={session.sanction}
              readiness={session.readinessScore || 0}
            />
          )}
        </div>

        {/* QUICK ACTIONS */}
        <div className="px-4 pb-3 flex gap-2 flex-wrap">
          {[
            "Education Loan",
            "Home Loan",
            "Business Loan",
            "Personal Loan",
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
