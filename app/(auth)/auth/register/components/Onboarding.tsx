"use client";

import { Control, UseFormRegister, useForm } from "react-hook-form";
import {  montserrat } from "../../../../components/fonts";
import { useContext, useState } from "react";

import { AccountTypeStep } from "./AccountTypeStep";
import { Button } from "../../../../components/ui/button";
import { FinalStep } from "./FinalStep";
import Link from "next/link";
import { PersonalInfoStep } from "./PersonalInfoStep";
import { RegisterFormComponent } from "./RegisterForm";
import { UserContext } from "../../../../../context/UserContext";
import { IRegisterUser, UserTypes } from "../../../../../interfaces/user";
import { useRouter } from "next/navigation";
import { errorCodes } from "../../../../../helpers/error-codes";
import useLoader from "../../../../hooks/loader/useLoader";
import Logo from "../../../../components/Company/Logo";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

export type RegisterForm = {
  username: string;
  fullname: string;
  email: string;
  password: string;
  type: UserTypes;
  objective: string;
  gender: string;
  birthdate: {
    day: number;
    month: number;
    year: number;
  };
};

export interface RegisterFormStep {
  register: UseFormRegister<RegisterForm>;
  control: Control<RegisterForm, any>;
}

interface OnBoardingProps {
  currentStepMock?: number;
}

const STEPS = ['Select Type', 'Personal Info', 'Account Info']

export const Onboarding = (props: OnBoardingProps) => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState<number>(
    props.currentStepMock ?? 0,
  );
  const {isLoading, setIsLoading} = useLoader();
  const { register: registerUser } = useContext(UserContext);

  const {
    handleSubmit,
    formState: { errors },
    register,
    control,
    getValues,
  } = useForm<RegisterForm>({
    defaultValues: {
      email: "",
      fullname: "",
      username: "",
      password: "",
      objective: "",
      birthdate: {
        day: 1,
        month: 1,
        year: 2023,
      },
      gender: "",
      type: "member",
    },
  });

  const onNextStep = () => {
    if (currentStep > 3) {
      router.push("/");
    }
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const onPrevStep = () => {
    if(currentStep === 0) return;
    setCurrentStep((prevStep) => prevStep - 1);
  }

  const displayCurrentStep = () => {
    const baseProps = {
      register,
      control,
    };

    switch (currentStep) {
      case 0:
        return <AccountTypeStep {...baseProps} />;
      case 1:
        return <PersonalInfoStep {...baseProps} />;
      case 2:
        return <RegisterFormComponent {...baseProps} />;
      default:
        return <FinalStep />;
    }
  };
  
  const onRegister = async (formData: RegisterForm) => {

    setIsLoading(true);

    const {
      birthdate: { day, month, year },
    } = formData;

    const birthdate = new Date(year, month, day);
    const SAFE_USER: IRegisterUser = {
      ...formData,
      birthdate,
    };

    const response = await registerUser(SAFE_USER);
    setIsLoading(false);
    if (response.ok) {
      onNextStep();
      setTimeout(() => {
        router.push("/");
      }, 3000); 
    } else {
      const errorMessage = errorCodes[response.status_code] || errorCodes['default'];
      alert(errorMessage);
    }
  };

  return (
    <form
      className="w-full flex flex-col justify-center gap-4 flex-1 py-4 text-surface-light "
      onSubmit={handleSubmit(onRegister)}
    >
      <div className="mx-auto">
        <Logo></Logo>
      </div>

      <div className="flex flex-row justify-between w-full">
        <Button className="w-16 p-0 h-8" type="button" variant={'text'} onClick={onPrevStep}>
          <BsArrowLeftShort />
        </Button>

        <Button className="w-16 p-0 h-8" type="button" variant={'text'} onClick={onNextStep}>
          <BsArrowRightShort />
        </Button>
      </div>

      {displayCurrentStep()}

      <Button
        disabled={isLoading}
        variant="filled"
        type={currentStep === 2 ? "submit" : "button"}
        onClick={currentStep === 2 ? undefined : onNextStep}
      >
        {
          currentStep === 2
          ? 'Submit'
          : 'Continue'
        }
      </Button>
      {currentStep === 0 ? (
        <p className="text-center py-4">
          Already have an account?{" "}
          <Link href={"/auth/login"}>
            <strong>Sign In</strong>
          </Link>
        </p>
      ) : null}
    </form>
  );
};
