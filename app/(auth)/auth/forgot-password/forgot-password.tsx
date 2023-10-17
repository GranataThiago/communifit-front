"use client";

import { Control, UseFormRegister, useForm } from "react-hook-form";
import { EMAIL_REGEX, PASSWORD_REGEX } from "../../../../utils";
import {
	changePassword,
	recoverPassword,
	verifyCode,
} from "../../../../services/users/recoverPassword";

import { Button } from "../../../components/ui/button";
import ChangePasswordStep from "./components/ChangePasswordStep";
import { ErrorIcon } from "react-hot-toast";
import InsertCodeStep from "./components/InsertCodeStep";
import InsertEmailStep from "./components/InsertEmailStep";
import Link from "next/link";
import Loading from "../../../(site)/loading";
import Logo from "../../../components/Company/Logo";
import { montserrat } from "../../../components";
import { renderToast } from "../../../providers/ToasterProvider";
import { useRouter } from "next/navigation";
import { useState } from "react";

export type ForgotPasswordForm = {
  email: string;
  password: string;
  confirmPassword: string;
};

export interface ForgotPasswordFormStep {
  register: UseFormRegister<ForgotPasswordForm>;
  control: Control<ForgotPasswordForm, any>;
  errors?: any;
  isValid: boolean;
}

//TODO: AGREGAR UN MIDDLEWARE QUE SI ESTÁ LOGUEADO LO MANDE A LA HOME. (Acá no, directamente crear un middleware.)
export const ForgotPassword = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);
  const [code, setCode] = useState(["", "", "", ""]);
  const router = useRouter();

  const {
    handleSubmit,
    formState: { errors, isValid },
    register,
    control,
    getValues,
  } = useForm<ForgotPasswordForm>({
    defaultValues: {
      email: localStorage.getItem('email') || "",
      password: "",
      confirmPassword: "",
    },
  });

  const onNextStep = async () => {
    const response = handleValidations();
    if (!response) return;

    switch (currentStep) {
      case 0:
        setIsLoading(true);
        const response = await recoverPassword({ email: getValues("email").toLowerCase().trim() });
        if (!response || response.status_code !== "code_sent") {
          renderToast("Oops, something went wrong", <ErrorIcon />);
        } else {
          localStorage.setItem("email", getValues("email"))  
          setCurrentStep((prev) => prev + 1);
        }
        setIsLoading(false);
        return;
      case 1:
        setIsLoading(true);
        const responseVerifyCode = await verifyCode({
          email: getValues("email"),
          code,
        });
        if (responseVerifyCode?.status_code !== "valid_code") {
          renderToast("Invalid code", <ErrorIcon />);
        } else {
          setCurrentStep((prev) => prev + 1);
        }
        setIsLoading(false);
        return;
      case 2:
        setIsLoading(true);
        if (!PASSWORD_REGEX.test(getValues("password"))) {
          setIsLoading(false);
          return renderToast(
            "Password must have at least 8 characters, including one uppercase letter, one lowercase letter, and at least 2 digits.",
            <ErrorIcon />,
          );
        }
        const responseChangePassword = await changePassword({
          email: getValues("email").toLowerCase().trim(),
          code,
          password: getValues("password"),
          confirmPassword: getValues("confirmPassword"),
        });
        if (responseChangePassword?.status_code !== "password_changed") {
          renderToast(
            "Oops, something went wrong. Please, refresh the page.",
            <ErrorIcon />,
          );
        } else {
          alert(
            "Contraseña modificada correctamente, lo redigiremos a la pantalla de login en 3 segundos",
          );
          setTimeout(() => {
            localStorage.removeItem('email')
            router.push("/auth/login");
          }, 3000);
        }
        setIsLoading(false);
        return;
    }
  };

  const getButton = () => {
    switch (currentStep) {
      case 0:
        return "Send Code";
      case 1:
        return "Verify Code";
      case 2:
        return "Set new password";
    }
  };

  const displayCurrentTitle = () => {
    switch (currentStep) {
      case 0:
        return "First step: Enter your email";
      case 1:
        return "Second step: Enter the validation code that we sent to your email";
      case 2:
        return "Last step: Set your new password";
    }
  };

  const displayCurrentStep = () => {
    const baseProps = {
      register,
      control,
      errors,
      isValid,
      getValues,
    };

    switch (currentStep) {
      case 0:
        return <InsertEmailStep {...baseProps} />;
      case 1:
        return <InsertCodeStep code={code} setCode={setCode} {...baseProps} />;
      case 2:
        return <ChangePasswordStep {...baseProps} />;
    }
  };

  const handleValidations = () => {
    if (currentStep == 0) {
      const email = getValues("email");
      if (!EMAIL_REGEX.test(email)) {
        return false;
      }
    }

    if (currentStep == 1) {
      code.forEach((digit) => {
        if (!digit || digit.length != 0) {
          return false;
        }
      });
    }

    //TODO VALIDACIONES DE CONTRASEÑA con regex del BACKEND.
    return true;
  };

  return (
    <div
      className={`flex flex-col items-center  w-full h-screen p-6 relative ${montserrat.className}`}
    >
      <div className="pt-8">
        <Logo />
      </div>
      <h1 className="py-2 pb-8 text-black text-xl font-semibold">
        Forgot Password
      </h1>
      <h2
        className="py-2 pb-8 text-black text-lg font-semibold"
        aria-label={displayCurrentTitle()}
      >
        {displayCurrentTitle()}
      </h2>
      {displayCurrentStep()}

      <div className="absolute px-6 bottom-14 w-full flex flex-col items-center gap-6">
        <Button
          variant="filled"
          className="relative"
          onClick={onNextStep}
          aria-label={getButton()}
        >
          {isLoading ? (
            <Loading
              containerClasses="h-8"
              spinnerClasses="h-6 w-6 border-2 border-gray-400"
            />
          ) : (
            getButton()
          )}
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
  );
};
