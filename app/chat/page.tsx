import React from 'react'
import { ChatCard } from '../../components/ChatCard';

const ChatPage = () => {
  return (
    <section className='bg-primary h-screen'>
        <div className='bg-primary w-full h-32 grid content-center p-6'>
          <input type="text" placeholder='Search Trainers...' className='bg-gray-100 p-1 rounded-lg w-full'/>
        </div>

        <div className="rounded-t-lg h-full bg-white p-6 flex flex-col gap-4">
          <ChatCard />
        </div>
    </section>
  )
}

export default ChatPage