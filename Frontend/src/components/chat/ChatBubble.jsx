export default function ChatBubble({ role, text }) {
  const isUser = role === "user";

  return (
    <div
      className={`max-w-[80%] px-4 py-3 rounded-xl text-sm leading-relaxed fade-in ${
        isUser
          ? "ml-auto chat-user"
          : "mr-auto chat-ai"
      }`}
    >
      {text.split("\n").map((line, i) => (
        <p key={i} className="whitespace-pre-wrap">
          {line}
        </p>
      ))}
    </div>
  );
}
