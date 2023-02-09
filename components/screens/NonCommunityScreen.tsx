import React from 'react'
import { CommunityCard } from '../CommunityCard';

export const NonCommunityScreen = () => {
  return (
    <section className='p-6'>
        <input type="text" placeholder='Search Trainers...' className='bg-gray-100 p-1 rounded-lg w-full'/>

        <p className='mt-6 text-3xl font-bold'>Recommended for you</p>

        <div className="flex flex-col gap-6 mt-6">
            <CommunityCard></CommunityCard>
            <CommunityCard></CommunityCard>
            <CommunityCard></CommunityCard>
        </div>
    </section>
  )
}
