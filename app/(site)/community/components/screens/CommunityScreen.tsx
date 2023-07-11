import Image from 'next/image'
import { BsEnvelope, BsPencil } from 'react-icons/bs';
import { Post } from '../Post'
import { Material } from '../Material';
import instance from '../../../../api';
import { useEffect, useState } from 'react';
import { Community } from '../../../../../interfaces/community';

const getCommunity = async(): Promise<Community> => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return {
        posts: [
            {
                fullname: "Tomás Hernández",
                username: "tomihq",
                body: "Hello Gorillas 2.0!",
                datepublished: "2023-07-11T03:00:00.000Z"
            }
        ],
        image: '',
        name: 'Gorillas',
        description: 'Lorem Ipsum Dolor sit amet. www.youtube.com/@MichayDev'
    };
}

export const CommunityScreen = async() => {

    const community: Community = await getCommunity();
    

    return (
        <section className='bg-primary h-screen'>
            <div className='bg-primary w-full h-32'></div>

            <div className="rounded-t-lg h-full bg-white px-6 flex flex-col gap-4">
                <header className=''>
                    <div className='flex items-center justify-between'>
                        <div className="flex gap-4 relative">
                            <Image className="absolute -top-7 rounded-full border-4 border-white" src="https://i.pravatar.cc/300" alt="fortys" width={96} height={96}/>
                            <div className="ml-28">
                                <p className='text-2xl font-bold'>{community.name}</p>
                                <p className='text-md font-light text-gray-400'>Community</p>
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <BsEnvelope className='text-gray-400 text-lg'/>
                            <BsPencil className='text-gray-400 text-lg'></BsPencil>
                        </div>
                    </div>
                    <div className='mt-4 leading-5'>
                        {community.description}
                    </div>
                </header>

                <nav className='bg-white'>
                    <ul className='flex gap-4 font-medium text-lg'>
                        <li className='border-b border-primary'>Posts</li>
                        <li>Material</li>
                    </ul>
                </nav>

                <div className='flex flex-col gap-4'>
                    {
                        community.posts.map((post, index) => (<Post key={index} {...post} />))
                    }
                </div>
            </div>
        </section>
  )
}
