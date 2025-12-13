import dotenv from "dotenv";

export function loadEnv() {
  dotenv.config();
  const required = [
    "GROQ_API_KEY",
    "FIREBASE_PROJECT_ID",
    "FIREBASE_CLIENT_EMAIL",
    "FIREBASE_PRIVATE_KEY"
  ];
  required.forEach(key => {
    if (!process.env[key]) {
      throw new Error(`Missing env variable: ${key}`);
    }
  });
}
