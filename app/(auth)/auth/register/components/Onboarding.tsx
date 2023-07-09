'use client'

import { useContext, useState } from 'react'
import { RegisterForm } from './RegisterForm';
import { Control, useForm, UseFormRegister } from 'react-hook-form';
import { AccountTypeStep } from './AccountTypeStep';
import { PersonalInfoStep } from './PersonalInfoStep';
import { FinalStep } from './FinalStep';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { inter, montserrat } from '../../../../components/fonts';
import { UserContext } from '../../../../../context/UserContext';

export type RegisterForm = {
    fullName: string;
    username: string;
    email: string;
    password: string;
    type: string;
    objective: string;
    gender: string;
    birthdate: {
      day: number;
      month: number;
      year: number;
    }
}

export interface RegisterFormStep{
    register: UseFormRegister<RegisterForm>,
    control: Control<RegisterForm, any>
}

export const Onboarding = () => {
  const router = useRouter();
  const [ currentStep, setCurrentStep ] = useState<number>(0);
  const { register: registerUser } = useContext(UserContext);

  const { handleSubmit, formState: { errors }, register, control, getValues } = useForm<RegisterForm>({
    defaultValues: {
      email: '',
      fullName: '',
      username: '',
      password: '',
      objective: '',
      birthdate: {
        day: 1,
        month: 1,
        year: 2023
      },
      gender: '',
      type: ''
    }
  });

  const onNextStep = () => {
    setCurrentStep(prevStep => prevStep + 1);
  }

  const displayCurrentStep = () => {
    const baseProps = {
        register,
        control
    }

    switch(currentStep){
        case 0: 
          return <AccountTypeStep {...baseProps}/>
        case 1: 
          return <PersonalInfoStep {...baseProps} />
        case 2:
          return <RegisterForm {...baseProps} />
        default:
          return <FinalStep />
    }
  }


  const onRegister = (formData: RegisterForm) => {
      const { birthdate: { day, month, year } } = formData;
      
      const birthdate = new Date(year, month, day);
      
      registerUser({
        ...formData,
        birthdate,
      });
  }


  return (
    <form  className='w-full flex flex-col justify-center gap-4 flex-1' onSubmit={handleSubmit(onRegister)}>
        <h1 className={`text-4xl font-bold mb-10 text-center ${montserrat.className}`}>Communi<span className={`${montserrat.className} text-primary`}>fit</span>.</h1>
        
        { displayCurrentStep() }
        <button type={currentStep === 4 ? 'submit' : 'button'} className='bg-primary text-white rounded-full w-full py-3' onClick={onNextStep}>Continue</button>
        {
          currentStep === 0 
          ? <p className='text-center'>Already have an account? <Link href={'/auth/login'}><strong>Sign In</strong></Link></p> 
          : null
        }
    </form>
  )
}
