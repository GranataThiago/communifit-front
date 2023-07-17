'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link'
import { BsHouseDoor, BsChat, BsSearch, BsPerson } from 'react-icons/bs'

export const Menu = () => {

    const pathname = usePathname();

    return (
        <nav className='w-full py-4 px-6 fixed bottom-0 right-0 bg-white z-50'>
            <ul className='w-full flex justify-between text-xl'>
                <li className={`hover:text-gray-700 hover:cursor-pointer ${(pathname === '/' ? 'text-primary' : 'text-black')}`}>
                    <Link href={'/'}>
                        <BsHouseDoor></BsHouseDoor>
                    </Link>
                </li>
                <li className={`hover:text-gray-700 hover:cursor-pointer ${(pathname === '/chat' ? 'text-primary' : 'text-black')}`}>
                    <Link href={'/chat'}>
                        <BsChat></BsChat>
                    </Link>
                </li>
                <li className={`hover:text-gray-700 hover:cursor-pointer ${(pathname === '/community' ? 'text-primary' : 'text-black')}`}>
                    <Link href={'/community/' + 'gorillas'}>
                        <BsSearch></BsSearch> {/* TODO: Si tiene una comunidad, BsPeople, sino BsSearch */  }
                    </Link>
                </li>
                <li className={`hover:text-gray-700 hover:cursor-pointer ${(pathname === '/profile' ? 'text-primary' : 'text-black')}`}>
                    <Link href={'/profile'}>
                        <BsPerson></BsPerson>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
