import React from "react";

export default function MessageList({ messages }) {
  return (
    <ul data-testid="message-list">
      {messages.map((message, index) => (
        <li key={index}>{message}</li>
      ))}
    </ul>
  );
}
