'use client'

import React, { useEffect } from 'react'
import { montserrat } from '../../../components/fonts'
import { Input, LabeledInput, LabeledTextarea } from '../../../components/Input';
import { Controller, useForm } from 'react-hook-form';
import { Button } from '../../../components/Button';

type RevisionForm = {
    pics: File[],
    weight: string;
    observations: string;
}

export const RevisionScreen = () => {

    const { handleSubmit, formState: { errors }, register, control, getValues, watch } = useForm<RevisionForm>();

    console.log(watch('pics'))

    const onRevisionSent = (formValues: RevisionForm) => {
        console.log(formValues)
    }

    
  return (
    <main className={`bg-secondary flex flex-col gap-8 ${montserrat.className}`}>
        <header className="flex justify-between p-6 pb-0">
            <div className="greetings">
                <p className="font-semibold text-lg">Upload your progress for week 3</p>
            </div>
        </header>

        <form onSubmit={handleSubmit(onRevisionSent)} className='px-6 flex flex-col gap-4'>
            <div className='pics'>
                <label className="w-full h-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-md border-2 border-dashed">
                    <span className="mt-auto mb-auto text-gray-300">Upload your photo...</span>
                    <input {...register('pics')} type='file' multiple className='w-100 h-100 opacity-0'/>
                </label>
            </div>


            <Controller
                name='weight'
                control={control}
                defaultValue=''
                render={({field}) => (
                    <LabeledInput {...field} ref={null} label='Weight' variant='outlined' type='number'/>
                )}
            />

            <Controller
                name='observations'
                control={control}
                defaultValue=''
                render={({field}) => (
                    <LabeledTextarea {...field} ref={null} label='Observations' variant='outlined'/>
                )}
            />
            
            <Button className='mt-4' type='submit' variant='filled'>Sent</Button>
        </form>

    </main>
  )
}
