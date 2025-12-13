import { useState } from "react";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  async function send() {
    const res = await fetch("https://YOUR_BACKEND_URL/api/v1/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ input })
    });
    const data = await res.json();
    setMessages([...messages, { user: input }, { ai: data.message || "..." }]);
    setInput("");
  }

  return (
    <div className="pt-20 max-w-3xl mx-auto">
      <div className="space-y-3">
        {messages.map((m, i) => (
          <div key={i}>
            {m.user && <div className="text-right">{m.user}</div>}
            {m.ai && <div className="text-left text-primary">{m.ai}</div>}
          </div>
        ))}
      </div>
      <div className="flex mt-4">
        <input
          className="flex-1 p-2 bg-card-dark"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={send} className="px-4 bg-primary text-black">
          Send
        </button>
      </div>
    </div>
  );
}
