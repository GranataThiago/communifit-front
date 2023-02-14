import React from 'react'
import { Input } from '../../components/Input';
import { ChatCard } from './components/ChatCard';

export default function ChatListPage() {
  return (
    <section className='bg-primary h-screen'>
        <div className='bg-primary w-full h-32 grid content-center p-6'>
          <Input variant='filled' type="text" placeholder='Search messages...'  />
        </div>

        <div className="rounded-t-lg h-full bg-white p-6 flex flex-col gap-4">
          <ChatCard/>
        </div>
    </section>
  )
}
