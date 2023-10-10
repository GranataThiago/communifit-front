import Link from 'next/link';
import { SocialMediaForm } from "../components/SocialMediaForm";
import { useUserContext } from "../../../../context/UserContext";
import { useRouter } from "next/navigation";
import Onboarding from "./components/Onboarding/Onboarding";

const RegisterPage = () => {
  return (
    <section className='flex flex-col justify-between items-center w-full h-screen p-12'>
        <Onboarding />
    </section>
  )
}

export default RegisterPage