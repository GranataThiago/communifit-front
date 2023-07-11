import Link from 'next/link';
import { SocialMediaForm } from '../components/SocialMediaForm';
import { Onboarding } from './components/Onboarding';
import { useUserContext } from '../../../../context/UserContext';

const RegisterPage = () => {

  const { user } = useUserContext();

  return (
    <section className='flex flex-col justify-between items-center w-full h-screen p-12'>
        <Onboarding />
    </section>
  )
}

export default RegisterPage