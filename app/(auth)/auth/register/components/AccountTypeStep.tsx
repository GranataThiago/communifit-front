import Link from 'next/link'
import React from 'react'
import { RegisterFormStep } from './Onboarding'

export const AccountTypeStep = ({ register }: RegisterFormStep) => {
  return (
    <div className='flex-1'>
        <p className='font-bold text-xl'>Hi stranger!</p>
        <p className='font-medium text-lg'>Join as <span className="text-primary">trainer</span> or <span className="text-primary">member</span>?</p>

        <div className="flex flex-col gap-2 mt-8">
          <div className='border border-gray-400 w-full h-40 flex items-center justify-center relative rounded-lg'>
              <input {...register('type')} className='absolute top-2 right-2' type="radio" name='type' id='member' value='member'/>
              <label className='font-semibold text-xl text-center' htmlFor="member">I&apos;m a member, looking for a community.</label>
          </div>

          <div className='border border-gray-400 w-full h-40 flex items-center justify-center relative rounded-lg'>
              <input {...register('type')} className='absolute top-2 right-2' type="radio" name='type' id='trainer' value='trainer'/>
              <label className='font-semibold text-xl text-center' htmlFor="trainer">I&apos;m a trainer, looking for members.</label>
          </div>
        </div>

    </div>
  )
}
