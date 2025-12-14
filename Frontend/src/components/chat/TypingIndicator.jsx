export default function TypingIndicator() {
  return (
    <div className="flex items-center gap-2 mt-3 text-white/50 text-sm">
      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce" />
      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce [animation-delay:150ms]" />
      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce [animation-delay:300ms]" />
      <span className="ml-2">ALIS is thinking</span>
    </div>
  );
}
