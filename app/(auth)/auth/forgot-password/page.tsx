'use client';
import { Button, montserrat } from "../../../components";
import Logo from "../../../components/Company/Logo";
import { useState } from "react";
import InsertEmailStep from "./components/InsertEmailStep";
import { Control, UseFormRegister, useForm } from "react-hook-form";
import Link from "next/link";
import { EMAIL_REGEX } from "../../../../utils";
import { recoverPassword } from "../../../../services/users/recoverPassword";
import Loading from "../../../(site)/loading";
import InsertCodeStep from "./components/InsertCodeStep";

export type ForgotPasswordForm = {
  email: string;
  code: {
    [key: string]: number;
  }
};

export interface ForgotPasswordFormStep {
  register: UseFormRegister<ForgotPasswordForm>;
  control: Control<ForgotPasswordForm, any>;
}


export default function ForgotPasswordPage() {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);

  const {
    handleSubmit,
    formState: { errors },
    register,
    control,
    getValues,
  } = useForm<ForgotPasswordForm>({
    defaultValues: {
      email: "",
    },
  });

  const onNextStep = async() => {
    console.log(getValues('code'))
    const response = handleValidations();
    if(!response) return; 

    switch(currentStep){
      case 0:
        setIsLoading(true);
        const response = await recoverPassword({email: getValues("email")});
        setIsLoading(false);
    }
    
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const getButton = () => {
    let title: string = 'Send Code';
    switch(currentStep){
      case 0:
        title = 'Send Code';
        
    }
    
    return {
      title,
      onNextStep
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
        return <InsertCodeStep {...baseProps} />;
      /* case 2:
        return <ChangePasswordStep {...baseProps} />; */ 
  
    }
  };

  const handleValidations = () => {
    if(currentStep == 0){
     const email = getValues("email");
      if(!EMAIL_REGEX.test(email)){
          return false;
      }
    }
    return true;
  }

  return (
    <div className={`flex flex-col items-center  w-full h-screen p-6 relative ${montserrat.className}`}>
      <div className="pt-8">
        <Logo/>
      </div>
      <h1 className="py-2 pb-8 text-black text-xl font-semibold">Forgot Password</h1>
      {displayCurrentStep()}
      
      <div className="absolute px-6 bottom-14 w-full flex flex-col items-center gap-6">
      <Button 
        variant="filled" 
        className="relative" 
        onClick={onNextStep}
      >
          {isLoading ? <Loading/>:getButton().title}
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
