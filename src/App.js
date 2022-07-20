import { useState } from "react";
import MessageList from "./components/MessageList";
import NewMessageForm from "./components/NewMessageForm";

function App() {
  const [messages, setMessages] = useState([]);
  function handleSend(newMessage) {
    setMessages([...messages, newMessage]);
  }
  return (
    <>
      <NewMessageForm onSend={handleSend} />
      <MessageList messages={messages} />
    </>
  );
}

export default App;
