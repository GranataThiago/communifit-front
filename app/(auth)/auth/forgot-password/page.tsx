'use client';
import { Button, montserrat } from "../../../components";
import Logo from "../../../components/Company/Logo";
import { useState } from "react";
import InsertEmailStep from "./components/InsertEmailStep";
import { Control, UseFormRegister, useForm } from "react-hook-form";
import Link from "next/link";
import { EMAIL_REGEX } from "../../../../utils";
import { changePassword, recoverPassword, verifyCode } from "../../../../services/users/recoverPassword";
import Loading from "../../../(site)/loading";
import InsertCodeStep from "./components/InsertCodeStep";
import toast from "react-hot-toast";
import ChangePasswordStep from "./components/ChangePasswordStep";
import { useRouter } from "next/navigation";

export type ForgotPasswordForm = {
  email: string;
  password: string;
  confirmPassword:string;

};

export interface ForgotPasswordFormStep {
  register: UseFormRegister<ForgotPasswordForm>;
  control: Control<ForgotPasswordForm, any>;
}

//TODO: AGREGAR UN MIDDLEWARE QUE SI ESTÁ LOGUEADO LO MANDE A LA HOME. (Acá no, directamente crear un middleware.)
export default function ForgotPasswordPage() {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);
  const [code, setCode] = useState(['', '', '', '']); 
  const router = useRouter();


  const {
    handleSubmit,
    formState: { errors },
    register,
    control,
    getValues,
  } = useForm<ForgotPasswordForm>({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: ""
    },
  });


  const onNextStep = async() => {
    const response = handleValidations();
    if(!response) return; 
    
    switch(currentStep){
      case 0:
        setIsLoading(true);
        const response = await recoverPassword({email: getValues("email")}); 
        if(!response || response.status_code !== "code_sent"){
          console.log("Error")
        }else{
          setCurrentStep((prev) => prev+1)
        }
        setIsLoading(false);
        return; 
      case 1:
        setIsLoading(true);
        const responseVerifyCode = await verifyCode({email:getValues("email"), code})
        if(responseVerifyCode?.status_code !== 'valid_code'){
          console.log("Código invalido")
        }else {
          setCurrentStep((prev) => prev+1)
        }
        setIsLoading(false);
        return; 
      case 2:
          setIsLoading(true);
          const responseChangePassword = await changePassword({email:"hernandeztomas584@gmail.com", code, password: getValues('password'), confirmPassword: getValues('confirmPassword')})
           if(responseChangePassword?.status_code !== 'password_changed'){
            console.log("Error de contraseña")
          }else {
            alert("Contraseña modificada correctamente, lo redigiremos a la pantalla de login en 3 segundos");
            setTimeout(() => {
              router.push('/auth/login')
            }, 3000)
          } 
          setIsLoading(false);
          return; 
    }

    
  };

  const getButton = () => {
    switch(currentStep){
      case 0:
       return 'Send Code';
      case 1:
        return "Verify Code"
      case 2: 
        return "Set new password"
        
    }
    
  
  }

  const displayCurrentTitle = () => {
    switch(currentStep){
      case 0: 
        return 'First step: Enter your email'
      case 1:
        return 'Second step: Enter the validation code that we sent to your email'
      case 2:
        return 'Last step: Set your new password'
    }
  }

  const displayCurrentStep = () => {
   
    const baseProps = {
      register,
      control,
    };

    

    switch (currentStep) {
      case 0:
        return <InsertEmailStep  {...baseProps} />; 
      case 1:
        return <InsertCodeStep code={code} setCode={setCode} {...baseProps} />;
      case 2:
        return <ChangePasswordStep {...baseProps} />; 
  
    }
  };

  const handleValidations = () => {
     if(currentStep == 0){
     const email = getValues("email");
      if(!EMAIL_REGEX.test(email)) {
        return false;
      }
      
    } 

     if(currentStep == 1){
      code.forEach(digit => {
        if(!digit || digit.length != 0){
          toast.error("All digits must be filled")
          return false;
        }
      });
    } 

    //TODO VALIDACIONES DE CONTRASEÑA con regex del BACKEND.
    return true;
  }

  return (
    <div className={`flex flex-col items-center  w-full h-screen p-6 relative ${montserrat.className}`}>
      <div className="pt-8">
        <Logo/>
      </div>
      <h1 className="py-2 pb-8 text-black text-xl font-semibold">Forgot Password</h1>
      <h2 className="py-2 pb-8 text-black text-lg font-semibold" aria-label={displayCurrentTitle()}>{displayCurrentTitle()}</h2>
      {displayCurrentStep()}
      
      <div className="absolute px-6 bottom-14 w-full flex flex-col items-center gap-6">
      <Button 
        variant="filled" 
        className="relative" 
        onClick={onNextStep}
        aria-label={getButton()}
      >
          {isLoading ? <Loading containerClasses="h-8" spinnerClasses="h-6 w-6 border-2 border-gray-400" />:getButton()}
      </Button>
        <Link
          className="w-fit h-fit"
          href={"/auth/login"}
          aria-label="Back to login page"
        >
          Back to{" "}
          <strong className="text-custom-gray font-semibold">login</strong>
        </Link>
      </div>
      
      
    </div>
  )
}
