import React from 'react'
import { Controller } from 'react-hook-form'
import { ForgotPasswordFormStep } from '../page'

const InsertCodeStep = ({register, control}:ForgotPasswordFormStep) => {

  
  return (
    <div className='flex flex-row w-full items-center justify-center gap-3'>
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className='flex items-center justify-center text-center'>
            <Controller
              name={`code.number${index}`}
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="number"
                  min="0"
                  max="1"
                  className='w-[80px] h-[80px] text-5xl  rounded-xl border-2 border-gray-300  text-center'
                />
              )}
            />
          </div>
        ))}
    </div>
  )
}

export default InsertCodeStep