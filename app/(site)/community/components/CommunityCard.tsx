import Image from 'next/image'
import { BsPeople } from 'react-icons/bs'

export const CommunityCard = () => {
  return (
    <div className='flex gap-2'>
        <Image className="rounded-full w-20 h-20" src="https://i.pravatar.cc/300" alt="fortys" width={32} height={32}/>
    
        <div className='my-auto'>
            <p className='text-2xl font-bold'>Tomás Mazza</p>
            <div className="flex gap-2 items-center text-primary">
                ★★★★☆
                <p className='flex gap-2 items-center text-gray-400'><BsPeople></BsPeople> 44 members</p>
            </div>
        </div>

        <p className='self-center ml-auto text-xl'>&#62;</p>
    </div>
  )
}
