"use client";

import { useContext, useEffect, useState } from "react";
import { Control, useForm, UseFormRegister } from "react-hook-form";
import { AccountTypeStep } from "../AccountTypeStep";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { inter, montserrat } from "../../../../../components/fonts";
import { UserContext } from "../../../../../../context/UserContext";
import { Button } from "../../../../../components";
import { RegisterUser, UserTypes } from "../../../../../../interfaces/user";
import { PersonalInfoStep } from "../PersonalInfoStep/PersonalInfoStep";
import { RegisterFormComponent } from "../RegisterForm/RegisterForm";
import { FinalStep } from "../FinalStep/FinalStep";

export type RegisterForm = {
  username: string;
  fullName: string;
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

export const Onboarding = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState<number>(0);
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
      fullName: "",
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
    if(currentStep >= 3){
      console.log('Last Step')
    }
    setCurrentStep((prevStep) => prevStep + 1);
  };

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

  const onRegister = (formData: RegisterForm) => {
    console.log('on register')
    return;
    const {
      birthdate: { day, month, year },
    } = formData;

    const birthdate = new Date(year, month, day);

    const SAFE_USER: RegisterUser = {
      ...formData,
      birthdate,
    };

    registerUser(SAFE_USER);
  };

  return (
    <form
      className="w-full flex flex-col justify-center gap-4 flex-1 py-4"
      onSubmit={handleSubmit(onRegister)}
    >
      <h1
        className={`text-4xl font-bold mb-10 text-center ${montserrat.className}`}
      >
        Communi
        <span className={`${montserrat.className} text-primary`}>fit</span>.
      </h1>

      {displayCurrentStep()}
      <Button
        variant="filled"
        type={currentStep === 4 ? "submit" : "button"}
        onClick={onNextStep}
      >
        Continue
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
