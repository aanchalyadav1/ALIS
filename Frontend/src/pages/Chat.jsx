import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import ChatBubble from "../components/chat/ChatBubble";
import TypingIndicator from "../components/chat/TypingIndicator";
import AgentStatus from "../components/chat/AgentStatus";
import ChatInputBar from "../components/chat/ChatInputBar";

const GREETING_TEXT = `Hello, I’m ALIS — your AI loan officer.

I help you understand loan eligibility, affordability, and approval logic before you apply.

You can start by choosing a loan type below or describing your requirement in your own words.`;

const LOAN_CHIPS = [
  { label: "Education Loan", value: "education loan" },
  { label: "Home Loan", value: "home loan" },
  { label: "Personal Loan", value: "personal loan" },
  { label: "Business Loan", value: "business loan" },
  { label: "Vehicle Loan", value: "vehicle loan" },
];

export default function Chat() {
  const navigate = useNavigate();

  const [messages, setMessages] = useState([]);
  const [thinking, setThinking] = useState(false);
  const [agentStatus, setAgentStatus] = useState("");
  const [profile, setProfile] = useState(null); // student / salaried / business
  const [step, setStep] = useState(0);

  // Greet on load
  useEffect(() => {
    setMessages([
      {
        role: "assistant",
        text: GREETING_TEXT,
      },
    ]);
  }, []);

  function addMessage(role, text) {
    setMessages(prev => [...prev, { role, text }]);
  }

  function handleChipClick(value) {
    handleUserMessage(`I want to explore a ${value}`);
  }

  function detectProfile(text) {
    const t = text.toLowerCase();
    if (t.includes("student")) return "Student";
    if (t.includes("salaried") || t.includes("job")) return "Salaried Professional";
    if (t.includes("business") || t.includes("self employed")) return "Business Owner";
    return null;
  }

  async function handleUserMessage(text) {
    addMessage("user", text);

    const detected = detectProfile(text);
    if (detected && !profile) {
      setProfile(detected);
    }

    setThinking(true);
    setAgentStatus("Analyzing your details…");

    setTimeout(() => {
      setAgentStatus("Evaluating loan context…");

      setTimeout(() => {
        setThinking(false);
        setAgentStatus("");

        // STEP-BASED GUIDANCE
        if (step === 0) {
          addMessage(
            "assistant",
            `Thanks for sharing.${profile ? ` I see you’re a ${profile}.` : ""}

To guide you better, please tell me:
• Your monthly income (approximate)
• Loan amount you’re considering`
          );
          setStep(1);
          return;
        }

        if (step === 1) {
          addMessage(
            "assistant",
            `Got it. Based on your inputs, you appear suitable to proceed further.

Next, you can:
• Upload documents for verification
• Or continue exploring options before applying`
          );
          setStep(2);
          return;
        }

        if (step >= 2) {
          addMessage(
            "assistant",
            `You can upload documents anytime to strengthen your eligibility.

Let me know how you’d like to proceed.`
          );
        }
      }, 900);
    }, 700);
  }

  return (
    <div className="min-h-screen pt-16 flex">

      {/* ================= LEFT — CONTEXT PANEL ================= */}
      <aside className="hidden md:flex w-64 border-r border-white/10 bg-black/40 backdrop-blur flex-col">
        <div className="p-4 border-b border-white/10 space-y-2">
          <div className="text-sm font-medium">Session Context</div>

          <div className="text-xs text-white/60">
            Profile: {profile || "Not specified"}
          </div>

          <button
            onClick={() => navigate("/documents")}
            className="mt-3 w-full px-3 py-2 rounded-md border border-white/15 text-xs text-white/80 hover:border-white/30 transition"
          >
            Upload Documents
          </button>
        </div>

        <div className="p-4 text-xs text-white/50">
          ALIS adapts as your profile changes over time.
        </div>
      </aside>

      {/* ================= RIGHT — CHAT ================= */}
      <main className="flex-1 flex flex-col">

        {/* HEADER */}
        <div className="px-6 py-4 border-b border-white/10">
          <h2 className="text-lg font-semibold">ALIS — AI Loan Officer</h2>
          <p className="text-sm text-white/60">
            Guidance-first • India-focused • Secure session
          </p>
        </div>

        {/* MESSAGES */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">

          {messages.map((m, i) => (
            <ChatBubble key={i} role={m.role} text={m.text} />
          ))}

          {/* QUICK LOAN CHIPS (ONLY AT START) */}
          {messages.length === 1 && (
            <div className="flex flex-wrap gap-2">
              {LOAN_CHIPS.map(chip => (
                <button
                  key={chip.value}
                  onClick={() => handleChipClick(chip.value)}
                  className="px-3 py-1.5 rounded-full border border-white/15 text-xs text-white/70 hover:text-white hover:border-white/30 transition"
                >
                  {chip.label}
                </button>
              ))}
            </div>
          )}

          {agentStatus && <AgentStatus text={agentStatus} />}
          {thinking && <TypingIndicator />}
        </div>

        {/* INPUT */}
        <ChatInputBar
          onSend={handleUserMessage}
          thinking={thinking}
        />
      </main>
    </div>
  );
}
