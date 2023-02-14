import React from 'react'

interface MessageProps{
    message: string;
    sender: boolean;
}

const Message = ({ message, sender }: MessageProps) => {
  return (
    <div className={`rounded-t-lg p-2 ${sender ? 'bg-primary text-white ml-auto rounded-bl-md' : 'bg-gray-300 text-black mr-auto rounded-br-md'}`}>
        <p>{message}</p>
    </div>
  )
}

export default Message