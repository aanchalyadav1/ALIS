
import { useEffect, useState } from "react";
import AgentOrb from "./AgentOrb";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import SanctionCard from "../sanction/SanctionCard";
import { useLoanSession } from "../../context/LoanSessionContext";

export default function ChatLayout() {
  const { session, startAnalysis } = useLoanSession();
  const [messages, setMessages] = useState([
    {
      role: "agent",
      text:
        "Hello, I’m ALIS — your Agentic Loan Intelligence system. Tell me about your loan need.",
    },
  ]);

  const handleSend = (text) => {
    if (!text?.trim()) return;
    setMessages((prev) => [...prev, { role: "user", text }]);
    startAnalysis(text);
  };

  useEffect(() => {
    if (session.agentStatus === "completed") {
      setMessages((prev) => [
        ...prev,
        {
          role: "agent",
          text:
            "Analysis complete. Review your loan readiness and sanction guidance below.",
        },
      ]);
    }
  }, [session.agentStatus]);

  return (
    <div className="max-w-6xl mx-auto px-4 pt-24 pb-10">
      <div className="mb-6 flex items-center gap-4">
        <AgentOrb />
        <div>
          <h1 className="text-xl font-semibold text-white">
            ALIS — Agentic Loan Intelligence
          </h1>
          <p className="text-sm text-white/60">
            Explainable · Guidance-first · Secure
          </p>
        </div>
      </div>

      <div className="flex flex-col h-[65vh] rounded-2xl bg-white/5 border border-white/10">
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {messages.map((m, i) => (
            <ChatMessage key={i} role={m.role} text={m.text} />
          ))}

          {session.agentStatus === "running" && (
            <ChatMessage
              role="agent"
              text="Running loan intelligence agents…"
            />
          )}

          {session.agentStatus === "completed" && session.sanction && (
            <SanctionCard
              sanction={session.sanction}
              readiness={session.readinessScore}
            />
          )}
        </div>

        <ChatInput onSend={handleSend} />
      </div>
    </div>
  );
}
