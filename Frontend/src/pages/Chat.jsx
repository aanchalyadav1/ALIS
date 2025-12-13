import { useChat } from "../context/ChatContext";
import ChatBubble from "../components/chat/ChatBubble";
import AgentStatus from "../components/chat/AgentStatus";
import TypingIndicator from "../components/chat/TypingIndicator";
import ChatInputBar from "../components/chat/ChatInputBar";

export default function Chat() {
  const { messages, thinking, agentStatus } = useChat();

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

        {/* CHAT AREA */}
        <div className="space-y-4">
          {messages.map((m, i) => (
            <ChatBubble
              key={i}
              role={m.role}
              text={m.text}
            />
          ))}

          {agentStatus && (
            <AgentStatus text={agentStatus} />
          )}

          {thinking && <TypingIndicator />}
        </div>
      </div>

      {/* INPUT BAR */}
      <ChatInputBar />
    </div>
  );
}
