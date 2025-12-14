export default function ChatMessage({ role, text }) {
  const isUser = role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[75%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
          isUser
            ? "bg-cyan-500/20 text-cyan-200 border border-cyan-500/30"
            : "bg-white/10 text-white/80 border border-white/10"
        }`}
      >
        {text}
      </div>
    </div>
  );
}
