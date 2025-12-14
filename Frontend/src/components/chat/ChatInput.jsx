import { useState } from "react";

export default function ChatInput({ onSend }) {
  const [value, setValue] = useState("");

  function submit() {
    if (!value.trim()) return;
    onSend(value);
    setValue("");
  }

  return (
    <div className="p-4 border-t border-white/10 bg-black/30 rounded-b-2xl">
      <div className="flex gap-2">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && submit()}
          placeholder="Describe your loan requirement..."
          className="flex-1 bg-black/40 text-white placeholder:text-white/40 text-sm px-4 py-2 rounded-xl outline-none border border-white/10 focus:border-cyan-400/40"
        />
        <button
          onClick={submit}
          className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black text-sm font-medium transition"
        >
          Send
        </button>
      </div>
    </div>
  );
}
