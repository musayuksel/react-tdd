import React, { useState } from "react";

export default function NewMessageForm() {
  const [inputMessage, setInputMessage] = useState("");
  function handleSendButtonClick() {
    console.log("send button clicked");
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
