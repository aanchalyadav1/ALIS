import { useState } from "react";
import AgentOrb from "./AgentOrb";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";

/**
 * DEMO USER PROFILE
 * -----------------
 * For finals/demo, profile is hardcoded.
 * Later this can come from Profile / Auth context.
 */
const userProfile = {
  role: "student",
  education: "B.Tech CSE",
  employment: "unemployed",
  income: 0,
};

export default function ChatLayout() {
  const [messages, setMessages] = useState([
    {
      role: "agent",
      text:
        "Hello, I’m ALIS Loan Assistant. I analyze loan eligibility and risks based on your profile before you apply."
    }
  ]);

  function handleSend(text) {
    if (!text.trim()) return;

    const query = text.toLowerCase();
    let reply = "";

    /* ===============================
       STUDENT-BASED DECISION LOGIC
       =============================== */

    if (userProfile.role === "student") {

      // 🎓 EDUCATION LOAN
      if (query.includes("education")) {
        reply =
          "Education loans are designed for students. You are eligible with a co-applicant (parent/guardian). Eligibility depends on institute reputation, course type, and co-applicant income.";
      }

      // 🏠 HOME LOAN
      else if (query.includes("home")) {
        reply =
          "Home loans require stable monthly income. As a student without earnings, you are not eligible independently. A salaried co-applicant would be mandatory.";
      }

      // 🚗 CAR / VEHICLE LOAN
      else if (query.includes("car") || query.includes("vehicle")) {
        reply =
          "Vehicle loans require repayment capacity. As a student, eligibility is low unless a working co-applicant with sufficient income is added.";
      }

      // 💳 PERSONAL LOAN
      else if (query.includes("personal")) {
        reply =
          "Personal loans are unsecured and income-based. As a student, approval chances are very low unless a salaried co-applicant is involved.";
      }

      // ❓ UNKNOWN / GENERIC QUERY
      else {
        reply =
          "Please specify the loan type (education, home, personal, or car). I will evaluate eligibility based on your student profile.";
      }
    }

    /* ===============================
       UPDATE CHAT
       =============================== */
    setMessages((prev) => [
      ...prev,
      { role: "user", text },
      { role: "agent", text: reply }
    ]);
  }

  return (
    <div className="max-w-6xl mx-auto px-4 pt-24 pb-10">
      {/* HEADER */}
      <div className="mb-6 flex items-center gap-4">
        <AgentOrb />
        <div>
          <h1 className="text-xl font-semibold text-white">
            ALIS — Loan Assistant
          </h1>
          <p className="text-sm text-white/60">
            Explainable · Profile-aware · Demo Mode
          </p>
        </div>
      </div>

      {/* CHAT BOX */}
      <div className="flex flex-col h-[65vh] rounded-2xl bg-white/5 border border-white/10">
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {messages.map((msg, i) => (
            <ChatMessage key={i} role={msg.role} text={msg.text} />
          ))}
        </div>

        <ChatInput onSend={handleSend} />
      </div>
    </div>
  );
}
