import React from 'react'
import { RegisterFormStep } from './Onboarding'

export const GoalStep = ({ register }: RegisterFormStep) => {
  return (
    <div className='flex-1'>
        <p className='font-bold text-xl'>Objective</p>
        <p className='font-medium text-lg'>What is your <span className="text-primary">goal</span>?</p>

        <div className="flex flex-col gap-2 mt-8">
            <div className='border border-gray-400 w-full h-24 flex items-center justify-center relative rounded-lg'>
                <input {...register('objective')}  className='absolute top-2 right-2' type="radio" name='objective' id='lose' value='lose'/>
                <label className='font-semibold text-xl text-center' htmlFor="lose">Lose weight</label>
            </div>

            <div className='border border-gray-400 w-full h-24 flex items-center justify-center relative rounded-lg'>
                <input {...register('objective')}  className='absolute top-2 right-2' type="radio" name='objective' id='mantain' value='mantain'/>
                <label className='font-semibold text-xl text-center' htmlFor="mantain">Mantain</label>
            </div>

            <div className='border border-gray-400 w-full h-24 flex items-center justify-center relative rounded-lg'>
                <input {...register('objective')}  className='absolute top-2 right-2' type="radio" name='objective' id='gain' value='gain'/>
                <label className='font-semibold text-xl text-center' htmlFor="gain">Gain weight</label>
            </div>

            <div className='border border-gray-400 w-full h-24 flex items-center justify-center relative rounded-lg'>
                <input {...register('objective')}  className='absolute top-2 right-2' type="radio" name='objective' id='undefined' value='undefined'/>
                <label className='font-semibold text-xl text-center' htmlFor="undefined">I&apos;m not sure</label>
            </div>
        </div>
    </div>
  )
}
