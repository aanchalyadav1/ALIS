import { useState } from "react";
import { useChat } from "../../context/ChatContext";

export default function ChatInputBar() {
  const [input, setInput] = useState("");
  const { sendMessage, thinking } = useChat();

  return (
    <div className="flex gap-2 mt-4">
      <input
        disabled={thinking}
        value={input}
        onChange={e => setInput(e.target.value)}
        className="flex-1 p-2 rounded bg-black/30"
        placeholder="Describe your loan requirement…"
      />
      <button
        disabled={thinking}
        onClick={() => { sendMessage(input); setInput(""); }}
        className="px-4 bg-cyan-400 text-black rounded"
      >
        Send
      </button>
    </div>
  );
}
