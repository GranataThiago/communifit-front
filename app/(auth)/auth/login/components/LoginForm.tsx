'use client'

import React from 'react'
import { useForm, Controller } from 'react-hook-form';
import Link from 'next/link';
import { Button } from '../../../../components';
import { LabeledInput } from '../../../../components/Input';
import { montserrat } from '../../../../components/fonts';
import { useUserContext } from '../../../../../context/UserContext/UserContext';
import { useRouter } from 'next/navigation';

type LoginForm = {
    email: string;
    password: string;
}


export const LoginForm = () => {

    const router = useRouter();
    const { login } = useUserContext();

    const { handleSubmit, formState: { errors }, register, control } = useForm<LoginForm>({
        defaultValues: {
            email: '',
            password: ''
        }
    });

    const onLogin = async(formData: LoginForm) => {
        const { email, password } = formData;
        const success = await login(email, password);
        if(success){
            router.replace('/');
        }
    }

    return (
        <form className={`w-full flex flex-col gap-4 ${montserrat.className}`} onSubmit={handleSubmit(onLogin)}>
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
