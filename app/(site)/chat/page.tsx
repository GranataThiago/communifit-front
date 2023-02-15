import React from 'react'
import { Input } from '../../components/Input';
import { ChatCard } from './components/ChatCard';

const getChats = async() => {

  const chats = [
    {
      user: 'James Lopez',
      message: "Here's your new weekly workout, hope you like it"
    },
    {
      user: 'Emanuel Antón',
      message: "Thanks!"
    },
    {
      user: 'Ignacio Fortys',
      message: "I just got a new PR in Bench Press!"
    }
  ]
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return chats;
}

export default async function ChatListPage() {

  const chats = await getChats();

  return (
    <section className='bg-primary h-screen'>
        <div className='bg-primary w-full h-32 grid content-center p-6'>
          <Input variant='filled' type="text" placeholder='Search messages...'  />
        </div>

        <div className="rounded-t-lg h-full bg-white p-6 flex flex-col gap-4">
          {
            chats.map(chat => (
              <ChatCard key={chat.user} {...chat}/>
            ))
          }
        </div>
    </section>
  )
}
