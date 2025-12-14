import { useChat } from "../context/ChatContext";
import ChatBubble from "../components/chat/ChatBubble";
import AgentStatus from "../components/chat/AgentStatus";
import TypingIndicator from "../components/chat/TypingIndicator";
import ChatInputBar from "../components/chat/ChatInputBar";
import SanctionCard from "../components/sanction/SanctionCard";
import SanctionPreview from "../components/sanction/SanctionPreview";

export default function Chat() {
  const { messages, thinking, agentStatus } = useChat();

  const showSanction = messages.length >= 6;

  function handleDownload() {
    // This will call your backend PDF endpoint later
    window.open(
      "https://YOUR_BACKEND_URL/api/v1/sanction/pdf",
      "_blank"
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-28 px-4">
      <div className="max-w-3xl mx-auto">

        {/* HEADER */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold">
            ALIS — AI Loan Officer
          </h2>
          <p className="text-sm text-white/60">
            Secure session • India-first underwriting intelligence
          </p>
        </div>

        {/* CHAT */}
        <div className="space-y-4">
          {messages.map((m, i) => (
            <ChatBubble key={i} role={m.role} text={m.text} />
          ))}

          {agentStatus && <AgentStatus text={agentStatus} />}
          {thinking && <TypingIndicator />}
        </div>

        {/* SANCTION SECTION */}
        {showSanction && (
          <>
            <SanctionCard onDownload={handleDownload} />
            <SanctionPreview />
          </>
        )}
      </div>

      <ChatInputBar />
    </div>
  );
}
