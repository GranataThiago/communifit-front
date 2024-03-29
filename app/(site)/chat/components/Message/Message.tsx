import React from "react";

interface MessageProps {
  message: string;
  sender: boolean;
}

const Message = ({ message, sender }: MessageProps) => {
  return (
    <div
      className={`rounded-lg p-2 ${
        sender
          ? "bg-primary text-secondary-dark ml-auto rounded-br-none"
          : "bg-surface-light text-secondary-dark mr-auto rounded-bl-none"
      }`}
      data-testid="text"
    >
      <p>{message}</p>
    </div>
  );
};

export default Message;
