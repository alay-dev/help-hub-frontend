import Chat from "@/app/conversations/_views/chat";
import ConversationList from "@/app/conversations/_views/conversation-list";
import Profile from "@/app/conversations/_views/profile";

const Conversations = () => {
  return (
    <section className="flex gap-5 mt-4 pb-8">
      <ConversationList />
      <Chat />
      <Profile />
    </section>
  );
};

export default Conversations;
