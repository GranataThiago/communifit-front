import Image from 'next/image'
import { BsEnvelope, BsPencil } from 'react-icons/bs';
import { Post } from '../Post'
import { Material } from '../Material';

export const CommunityScreen = () => {
  return (
    <section className='bg-primary h-screen'>
        <div className='bg-primary w-full h-32'></div>

        <div className="rounded-t-lg h-full bg-white px-6 flex flex-col gap-4">
            <header className=''>
                <div className='flex items-center justify-between'>
                    <div className="flex gap-4 relative">
                        <Image className="absolute -top-7 rounded-full border-4 border-white" src="https://i.pravatar.cc/300" alt="fortys" width={96} height={96}/>
                        <div className="ml-28">
                            <p className='text-2xl font-bold'>Gorilla&apos;s</p>
                            <p className='text-md font-light text-gray-400'>Community</p>
                        </div>
                    </div>
                    <div className='flex gap-2'>
                        <BsEnvelope className='text-gray-400 text-lg'/>
                        <BsPencil className='text-gray-400 text-lg'></BsPencil>
                    </div>
                </div>
                <div className='mt-4 leading-5'>
                    Descripcion corta tipo bio twitter que explique que verga pasa aca y algunos datos extras entendes?. tipo nasty, no se que mas poner porque esto es un ejemplo entendes pibe.
                </div>
            </header>

            <nav className='bg-white'>
                <ul className='flex gap-4 font-medium text-lg'>
                    <li className='border-b border-primary'>Posts</li>
                    <li>Material</li>
                </ul>
            </nav>

            <div className='flex flex-col gap-4'>
                <Post></Post>
                <Material></Material>
            </div>
        </div>
    </section>
  )
}
