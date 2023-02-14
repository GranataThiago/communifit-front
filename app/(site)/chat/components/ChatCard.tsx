import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const ChatCard = () => {
  return (
    <Link className='flex justify-between' href={'/chat/pantone'}>
        <Image className="rounded-full w-16 h-16" src="https://i.pravatar.cc/300" alt="fortys" width={32} height={32}/>

        <div className='my-auto w-2/3'>
            <p className='text-xl font-bold'>Emanuel Pantone</p>
            <p className=' text-gray-600 text-md whitespace-nowrap overflow-hidden text-ellipsis'>Here&apos;s your new weekly workout, hope you like it</p>
        </div>

        <div className='my-auto'>
            <p className='text-gray-400'>12:39</p>
        </div>

    </Link>
  )
}
