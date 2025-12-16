import ChatLayout from "../components/chat/ChatLayout";
import { useChat } from "../context/ChatContext";

export default function Chat() {
  const { getProfileContext } = useChat();   // ✅ hook INSIDE component
  const profileContext = getProfileContext();

  return (
    <div className="min-h-[calc(100vh-64px)] bg-[#05060a]">
      <ChatLayout profileContext={profileContext} />
    </div>
  );
}
