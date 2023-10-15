"use client";

import { Controller, useForm } from "react-hook-form";
import React, { useState } from "react";

import { Button } from "../../../../components";
import { LabeledInput } from "../../../../components/Input";
import Link from "next/link";
import LoaderLogo from "../../../../components/LoaderLogo/LoaderLogo";
import { LoginUserResponse } from "../../../../../interfaces";
import { montserrat } from "../../../../components/fonts";
import { useRouter } from "next/navigation";
import { useUserContext } from "../../../../../context/UserContext/UserContext";

type LoginForm = {
	email: string;
	password: string;
};

type FieldName = "email" | "password";
type FieldVariant = "outlined" | "filled" | "text";

export const LoginForm = () => {
	const { login } = useUserContext();

	const {
		handleSubmit,
		formState: { errors, isValid },
		control,
		register,
		reset,
	} = useForm<LoginForm>({
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const router = useRouter();

	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [messageError, setMessageError] = useState<string>("");

	// Change for error not generic
	const errorLoginMessage: string =
		"An error has occurred, we apologize for any inconvenience.";

	const onLogin = async (formData: LoginForm) => {
		setIsLoading(true);
		const { email, password } = formData;

		try {
			const response: LoginUserResponse | null = await login(email, password);

			if (!response) {
				setMessageError(errorLoginMessage);
				return;
			}

			if (response && response.message) {
				setMessageError(response.message);
				return;
			}

			router.replace("/");

			reset();
		} catch (error) {
			setMessageError(errorLoginMessage);
			return;
		} finally {
			setIsLoading(false);
		}
	};

	const validationRules = {
		email: {
			label: "Email address",
			type: "email",
			variant: "outlined",
		},
		password: {
			label: "Password",
			type: "password",
			variant: "outlined",
		},
	};

	if (isLoading) {
		return <LoaderLogo />;
	}

	return (
		<form
			className={`w-full flex flex-col gap-4 pt-2 ${montserrat.className}`}
			onSubmit={handleSubmit(onLogin)}
		>
			{Object.entries(validationRules).map(([fieldName, fieldProps]) => (
				<React.Fragment key={fieldName}>
					<Controller
						control={control}
						name={fieldName as FieldName}
						render={({ field }) => (
							<LabeledInput
								{...field}
								ref={null}
								label={fieldProps.label}
								type={fieldProps.type}
								variant={fieldProps.variant as FieldVariant}
								register={register(fieldName as FieldName)}
							/>
						)}
					/>
					{errors[fieldName as FieldName] && (
						<p className='text-red-500'>
							{errors[fieldName as FieldName]?.message}
						</p>
					)}
				</React.Fragment>
			))}
			<Link
				className='text-right mt-0 text-sm font-semibold'
				href='/auth/forgot-password'
			>
				Forgot password?
			</Link>
			{messageError != "" && <p className='text-red-500'>{messageError}</p>}
			<Button
				type='submit'
				variant='filled'
				canSubmit={!isValid}
				aria-label={isValid ? "disabled" : ""}
			>
				Login
			</Button>
		</form>
	);
};
