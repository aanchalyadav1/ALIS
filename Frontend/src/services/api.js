// src/services/api.js

/* ================================
   CONFIG
================================ */
const BASE_URL = "https://alis-lcdx.onrender.com"; // NO trailing slash

/* ================================
   CHAT API
================================ */
export async function sendChatMessage(input) {
  const res = await fetch(`${BASE_URL}/api/v1/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ input }),
  });

  if (!res.ok) {
    throw new Error("Failed to send chat message");
  }

  return res.json();
}

/* ================================
   DOCUMENT VAULT APIs
================================ */
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  where,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

const auth = getAuth();
const db = getFirestore();
const storage = getStorage();

/**
 * Fetch all documents uploaded by current user
 */
export async function fetchUserDocuments() {
  const user = auth.currentUser;
  if (!user) return [];

  const q = query(
    collection(db, "documents"),
    where("userId", "==", user.uid)
  );

  const snap = await getDocs(q);

  return snap.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }));
}

/**
 * Upload a document to Firebase Storage + save metadata to Firestore
 */
export async function uploadDocument(docType, file) {
  const user = auth.currentUser;
  if (!user) throw new Error("User not authenticated");

  const storagePath = `documents/${user.uid}/${docType}`;
  const storageRef = ref(storage, storagePath);

  // Upload file
  await uploadBytes(storageRef, file);

  // Get download URL
  const downloadURL = await getDownloadURL(storageRef);

  // Save metadata
  await addDoc(collection(db, "documents"), {
    userId: user.uid,
    docType,
    fileName: file.name,
    storagePath,
    downloadURL,
    status: "uploaded",
    uploadedAt: serverTimestamp(),
  });

  return { success: true };
}
