import React, { useState } from "react";

export default function NewMessageForm({ onSend }) {
  const [inputMessage, setInputMessage] = useState("");
  function handleSendButtonClick() {
    onSend(inputMessage);
    setInputMessage("");
  }
  return (
    <>
      <input
        value={inputMessage}
        onChange={(e) => {
          setInputMessage(e.target.value);
        }}
        data-testid="messageText"
        type="text"
      />
      <button onClick={handleSendButtonClick} data-testid="sendButton">
        Send
      </button>
    </>
  );
}
