import { useState } from "react";
import Viewers from "./components/Viewers";

function App() {
  const [messages, setMessages] = useState([]);
  function handleSend(newMessage) {
    setMessages([...messages, newMessage]);
  }
  return (
    <>
      <Viewers viewer={"YUXEL"} />
    </>
  );
}

export default App;
