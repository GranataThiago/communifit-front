import React from 'react'
import { Input } from '../../../../components/Input';
import { CommunityCard } from '../CommunityCard';

export const NonCommunityScreen = () => {
  return (
    <section className='p-6'>
        <Input variant='filled' type="text" placeholder='Search Trainers...'  />

        <p className='mt-6 text-3xl font-bold'>Recommended for you</p>

        <div className="flex flex-col gap-6 mt-6">
            <CommunityCard></CommunityCard>
            <CommunityCard></CommunityCard>
            <CommunityCard></CommunityCard>
        </div>
    </section>
  )
}
