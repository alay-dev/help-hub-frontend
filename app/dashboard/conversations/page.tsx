import Chat from "@/app/dashboard/conversations/_views/chat";
import ConversationList from "@/app/dashboard/conversations/_views/conversation-list";
import Profile from "@/app/dashboard/conversations/_views/profile";

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
