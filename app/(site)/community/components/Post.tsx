import Image from 'next/image'
import { BsPencil } from 'react-icons/bs'

export const Post = () => {
  return (
    <div className='flex flex-col gap-2'>
        <div className="flex justify-between items-center ">
            <div className="flex gap-2">
                <Image className="rounded-full w-12 h-12" src="https://i.pravatar.cc/300" alt="fortys" width={32} height={32}/>
                <p className='font-bold text-lg flex flex-col'>
                    Esteban Fernandez
                    <span className='text-gray-400 text-sm font-medium'>11:20</span>
                </p>
            </div>

            <BsPencil className='text-gray-400'></BsPencil>
        </div>

        <p className='font-normal'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, dolores voluptate, cum at, maxime fuga vero fugit voluptas nostrum nisi nihil repellat!</p>
        <p className='text-sm text-gray-400'>Add comment</p>
    </div>
  )
}
