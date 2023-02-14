import Link from 'next/link';
import Image from 'next/image';
import Message from '../components/Message'
import { BsArrowLeftShort, BsCameraVideo, BsTelephone } from 'react-icons/bs'

export default function ChatPage(){
  return (
    <section className='p-6'>
        <div className='pb-2 border-b border-gray-200 flex items-center gap-4'>
            <Link href={'/chat'}>
                <BsArrowLeftShort />
            </Link>

            <div className='flex flex-row gap-2'>
                <Image className="rounded-full w-12 h-12" src="https://i.pravatar.cc/300" alt="fortys" width={32} height={32}/>
                <div>
                    <p className='text-black'>Emanuel Pantone</p>
                    <p className='text-primary'>Online</p>
                </div>
            </div>

            <div className='ml-auto flex gap-4 text-gray-400'>
                <BsCameraVideo />
                <BsTelephone />
            </div>
        </div>
        <div className='flex flex-col gap-4 mt-2'>
            <Message message='Hey! Welcome to the community' sender={false} />
            <Message message='Your workout plan is currently in development, lmk if you need something' sender={false} />
            <Message message='Hi! Glad to be here' sender={true} />
            <Message message='Ill be looking arround and let you know if I need something' sender={true} />
        </div>

        <div className='bg-white fixed bottom-0 right-0 px-6 w-full h-24 flex justify-center items-center'>
            <input type="text" placeholder='Type here' className='w-full p-2' />
        </div>
    </section>
  )
}
