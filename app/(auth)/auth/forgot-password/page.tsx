import Link from "next/link";
import { Button, Input, montserrat } from "../../../components";

export default function ForgotPasswordPage() {
  return (
    <div className={`flex flex-col items-center  w-full h-screen p-6 relative ${montserrat.className}`}>
      {/* <div className="max-w-[580px] h-auto">
         <Image alt="CommuniFit logo" fill={true}/>
      </div> */}
      <h1 className="py-12 text-black text-xl">Forgot Password</h1>
      <form aria-label="Reset password form" className="w-full">
        <div aria-label="Email" className="flex flex-col justify-center  w-full">
          <label htmlFor="email" className="text-base text-black">Enter your email address</label>
          <Input id="email" placeholder="Your email here..." variant={'outlined'} autoComplete="false"/>
        </div>
      </form>

      <div className="absolute px-6 bottom-14 w-full flex flex-col items-center gap-6">
        <Button variant="filled" className="relative ">
          Send Code
        </Button>
        <Link 
          className="w-fit h-fit"
          href={'/auth/login'} 
          aria-label="Back to login page"
        >Back to <strong className="text-custom-gray font-semibold">login</strong></Link>
      </div>
    </div>
  )
}
