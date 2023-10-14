"use client";

import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Link from "next/link";
import { Button, LabeledInput } from "../../../../components";
import { montserrat } from "../../../../components/fonts";
import { useRouter } from "next/navigation";
import { useUserContext } from "../../../../../context/UserContext";

type LoginForm = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const { login } = useUserContext();

  const {
    handleSubmit,
    formState: { errors },
    register,
    control,
  } = useForm<LoginForm>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onLogin = async (formData: LoginForm) => {
    setIsLoading(true);
    const { email, password } = formData;
    const success = await login(email, password);
    if (success) {
      router.replace("/");
    }
  };

  return (
    <form
      className={`w-full flex flex-col gap-4 pt-2 ${montserrat.className}`}
      onSubmit={handleSubmit(onLogin)}
    >
      <Controller
        control={control}
        name="email"
        render={({ field }) => (
          <LabeledInput
            {...field}
            id="Email address"
            ref={null}
            name="Email address"
            label="Email address"
            type="email"
            variant="outlined"
          ></LabeledInput>
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({ field }) => (
          <LabeledInput
            {...field}
            id="Password"
            ref={null}
            name="Password"
            label="Password"
            type="password"
            variant="outlined"
          ></LabeledInput>
        )}
      />

      <Button
        type="submit"
        variant="filled"
        isLoading={isLoading}
        data-testid="login"
      >
        Login
      </Button>
      <Link
        className="text-right w-full mt-0"
        href={"/auth/forgot-password"}
        data-testid="text-footer"
      >
        <p>Forgot password?</p>
      </Link>
    </form>
  );
};
