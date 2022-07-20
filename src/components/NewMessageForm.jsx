import React from "react";

export default function NewMessageForm() {
  return (
    <>
      <input data-testid="messageText" type="text" />
      <button data-testid="sendButton">Send</button>
    </>
  );
}
