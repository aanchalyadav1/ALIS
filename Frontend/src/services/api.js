// src/services/api.js

const BASE_URL = "https://alis-lcdx.onrender.com";

/* ================================
   CHAT API
================================ */
export async function sendChatMessage(input) {
  const res = await fetch(`${BASE_URL}/api/v1/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ input }),
  });

  if (!res.ok) {
    throw new Error("Chat request failed");
  }

  return res.json();
}

/* ================================
   DOCUMENT VAULT APIs
================================ */

// fetch user documents
export async function fetchUserDocuments() {
  const res = await fetch(`${BASE_URL}/api/v1/documents`, {
    credentials: "include",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch documents");
  }

  return res.json();
}

// upload document
export async function uploadDocument(docType, file) {
  const formData = new FormData();
  formData.append("docType", docType);
  formData.append("file", file);

  const res = await fetch(`${BASE_URL}/api/v1/documents/upload`, {
    method: "POST",
    body: formData,
    credentials: "include",
  });

  if (!res.ok) {
    throw new Error("Document upload failed");
  }

  return res.json();
}
