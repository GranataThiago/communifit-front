'use client'

import React from 'react'
import { useForm, Controller } from 'react-hook-form';
import Link from 'next/link';
import { Button } from '../../../../components';
import { LabeledInput } from '../../../../components/Input';

type LoginForm = {
    email: string;
    password: string;
}


export const LoginForm = () => {

    const { handleSubmit, formState: { errors }, register, control } = useForm<LoginForm>({
        defaultValues: {
            email: '',
            password: ''
        }
    });

    const onLogin = (formData: LoginForm) => {
        console.log({formData})
    }

  return (
    <form className='w-full flex flex-col gap-4' onSubmit={handleSubmit(onLogin)}>
        <Controller
            control={control}
            name='email'
            render={({field}) => (
                <LabeledInput
                    {...field}
                    ref={null}
                    label='Email address'
                    type='email'
                    variant='outlined'
                ></LabeledInput>
            )}
        />

        <Controller
            control={control}
            name='password'
            render={({field}) => (
                <LabeledInput
                    {...field}
                    ref={null}
                    label='Password'
                    type='password'
                    variant='outlined'
                ></LabeledInput>
            )}
        />

        <Button type='submit' variant='filled'>Login</Button>
        <Link className='text-right w-full mt-0' href={'/auth/forgot-password'}><p>Forgot password?</p></Link>
    </form>
  )
}
