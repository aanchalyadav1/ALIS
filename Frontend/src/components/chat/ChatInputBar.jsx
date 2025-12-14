import { useState } from "react";
import { useChat } from "../../context/ChatContext";

export default function ChatInputBar() {
  const { sendMessage, thinking } = useChat();
  const [input, setInput] = useState("");

  function handleSend() {
    if (!input.trim()) return;
    sendMessage(input);
    setInput("");
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#020617]/90 backdrop-blur border-t border-white/10">
      <div className="max-w-3xl mx-auto px-4 py-3 flex gap-3">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Describe your loan requirement (amount, income, purpose)…"
          disabled={thinking}
          className="flex-1 rounded-lg bg-white/10 border border-white/10 px-4 py-3 text-sm outline-none focus:border-cyan-400"
        />

        <button
          onClick={handleSend}
          disabled={thinking}
          className="px-5 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 transition font-medium text-black disabled:opacity-50"
        >
          Send
        </button>
      </div>
    </div>
  );
}
