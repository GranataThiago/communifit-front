import React from 'react'
import { BsGenderFemale, BsGenderMale } from 'react-icons/bs';
import { RegisterFormStep } from './Onboarding';

export const PersonalInfoStep = ({ register }: RegisterFormStep) => {
  return (
    <div className='flex-1'>
        <p className='font-bold text-xl'>Gender</p>
        <p className='font-medium text-lg'>Select an <span className="text-primary">option</span></p>

        <div className='flex gap-2'>
          <div className='border border-gray-400 w-full h-60 flex flex-col items-center justify-center relative rounded-lg'>
              <BsGenderMale className='text-5xl'/>
              <input {...register('gender')}  className='absolute top-2 right-2' type="radio" name='gender' id='men' value='men'/>
              <label className='font-semibold text-xl text-center' htmlFor="men">Men</label>
          </div>

          <div className='border border-gray-400 w-full h-60 flex flex-col items-center justify-center relative rounded-lg'>
              <BsGenderFemale className='text-5xl'/>
              <input {...register('gender')}  className='absolute top-2 right-2' type="radio" name='gender' id='women' value='women'/>
              <label className='font-semibold text-xl text-center' htmlFor="women">Women</label>
          </div>
        </div>

        <div className='w-full mt-6'>
            <p className='font-bold text-xl mb-2'>Birthday</p>
            <div className='flex justify-between w-full gap-2'>
              <input {...register('birthdate.day')} className='text-center flex-1 w-0 border border-gray-400 rounded-lg p-1' type="number" placeholder='Day' />
              <input {...register('birthdate.month')} className='text-center flex-1 w-0 border border-gray-400 rounded-lg p-1' type="number" placeholder='Month' />
              <input {...register('birthdate.year')} className='text-center flex-1 w-0 border border-gray-400 rounded-lg p-1' type="number" placeholder='Year' />
            </div>
        </div>

    </div>
  )
}
