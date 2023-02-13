'use client'

import React from 'react'
import { useForm } from 'react-hook-form';
import Link from 'next/link';

type LoginForm = {
    email: string;
    password: string;
}


export const LoginForm = () => {

    const { handleSubmit, formState: { errors }, register } = useForm<LoginForm>();

    const onLogin = (formData: LoginForm) => {
        console.log({formData})
    }

  return (
    <form className='w-full flex flex-col gap-4' onSubmit={handleSubmit(onLogin)}>
        <div className='flex flex-col w-full'>
            <label htmlFor="email">Email address</label>
            <input {...register('email')} className='border rounded-full p-2' type="text" name='email' />
        </div>

        <div className='flex flex-col w-full'>
            <label htmlFor="password">Password</label>
            <input {...register('password')} className='border rounded-full p-2' type="password" name='password' />
        </div>

        <button type='submit' className='bg-primary text-white rounded-full w-full py-3'>Continue</button>
        <Link className='text-right w-full mt-0' href={'/auth/forgot-password'}><p>Forgot password?</p></Link>
    </form>
  )
}
