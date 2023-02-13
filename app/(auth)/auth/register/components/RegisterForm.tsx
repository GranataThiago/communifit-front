
import { SocialMediaForm } from '../../components/SocialMediaForm';
import { RegisterFormStep } from './Onboarding';

export const RegisterForm = ({ register }: RegisterFormStep) => {

  return (
    <div className='flex-1 flex flex-col justify-center gap-8'>
        <div className='flex flex-col w-full'>
            <label htmlFor="fullName">Full name</label>
            <input {...register('fullName')} className='border rounded-full p-2' type="text" name='fullName' />
        </div>

        <div className='flex flex-col w-full'>
            <label htmlFor="email">Email address</label>
            <input {...register('email')} className='border rounded-full p-2' type="text" name='email' />
        </div>

        <div className='flex flex-col w-full'>
            <label htmlFor="password">Password</label>
            <input {...register('password')} className='border rounded-full p-2' type="password" name='password' />
        </div>

        <SocialMediaForm />
    </div>
  )
}
