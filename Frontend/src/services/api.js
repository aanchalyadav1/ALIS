const BASE_URL = "https://alis-lcdx.onrender.com/";

export async function sendChatMessage(input) {
  const res = await fetch(`${BASE_URL}/api/v1/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ input })
  });
  return res.json();
}
