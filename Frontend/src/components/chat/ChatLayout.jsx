import { useEffect, useState } from "react";
import AgentOrb from "./AgentOrb";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import AgentThinking from "./AgentThinking";
import { useLoanSession } from "../../context/LoanSessionContext";

export default function ChatLayout() {
  const { session, startAnalysis } = useLoanSession();

  const [messages, setMessages] = useState([
    {
      role: "agent",
      text:
        "Hello, I’m ALIS — your AI Loan Officer. Tell me about the loan you’re considering, and I’ll guide you step by step."
    }
  ]);

  function handleSend(text) {
    if (!text.trim()) return;

    // Show user message instantly
    setMessages((prev) => [...prev, { role: "user", text }]);

    // Trigger full agent pipeline
    startAnalysis(text);
  }

  // When agents complete → push explanation into chat
  useEffect(() => {
    if (session.agentStatus === "completed") {
      const reply = `
Here’s what my agents found:

• Loan Intent: ${session.intent || "—"}
• Risk Level: ${session.risk || "—"}
• Eligibility: ${session.eligibility ? "Eligible" : "Needs Review"}
• Readiness Score: ${session.readinessScore || 0}%

${
  session.sanction
    ? `• Suggested Amount: ${session.sanction.amount}
• Tenure: ${session.sanction.tenure}`
    : ""
}

This is guidance-only intelligence — not a final bank sanction.
      `.trim();

      setMessages((prev) => [...prev, { role: "agent", text: reply }]);
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
            Explainable · India-first · Secure session
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

          {/* AGENT THINKING STATE */}
          {session.agentStatus === "running" && (
            <AgentThinking status={session.agentStatus} />
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
