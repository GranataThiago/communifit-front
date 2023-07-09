import React from 'react'
import { Controller } from 'react-hook-form';
import { BsGenderFemale, BsGenderMale } from 'react-icons/bs';
import { RadioCard } from '../../../../components/RadioCard';
import { RegisterFormStep } from './Onboarding';
import { montserrat } from '../../../../components/fonts';

const gendersOptions = [
  {
    label: 'Men',
    value: 'men',
    icon: <BsGenderMale className='text-5xl'/>
  },
  {
    label: 'Women',
    value: 'Women',
    icon: <BsGenderFemale className='text-5xl'/>
  }
]

export const PersonalInfoStep = ({ register, control }: RegisterFormStep) => {
  return (
    <div className={`flex-1 ${montserrat.className}`}>
        <p className='font-bold text-xl'>Gender</p>
        <p className='font-medium text-lg'>Select an <span className="text-primary">option</span></p>

        <Controller
            name='gender'
            control={control}
            render={({ field }) => (
              <div className='flex gap-2'>
              {
                gendersOptions.map((gender) => (
                  <RadioCard
                    {...field}
                    icon={gender.icon}
                    key={gender.value}
                    ref={null}
                    id={gender.value}
                    value={gender.value}
                    label={gender.label}
                    height={60}
                  ></RadioCard>
                ))
                }
              </div>
            )}
          />



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
