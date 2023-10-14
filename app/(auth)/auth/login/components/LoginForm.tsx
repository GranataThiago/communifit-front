"use client";

import { Controller, useForm } from "react-hook-form";
import React, { useState } from "react";

import { Button } from "../../../../components";
import { LabeledInput } from "../../../../components/Input";
import Link from "next/link";
import { LoaderSpinner } from "../../../../components/LoaderSpinner/LoaderSpinner";
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

	const [isLoading, setIsLoading] = useState(false);
	const [messageError, setMessageError] = useState("");

	// Change for error not generic
	const errorLoginMessage: string =
		"An error has occurred, we apologize for any inconvenience.";

	const onLogin = async (formData: LoginForm) => {
		setIsLoading(true);
		const { email, password } = formData;

		try {
			const response: LoginUserResponse = await login(email, password);
			console.log(response);
			if (!response) {
				setMessageError(errorLoginMessage);
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
			rules: {
				required: "The email is required.",
				pattern: {
					value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zAZ0-9-.]+$/,
					message: "Invalid email address",
				},
			},
		},
		password: {
			label: "Password",
			type: "password",
			variant: "outlined",
			rules: {
				required: "The password is required",
			},
		},
	};

	if (isLoading) {
		return <LoaderSpinner />;
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
								register={register(fieldName as FieldName, {
									...fieldProps.rules,
								})}
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
			<Button type='submit' variant='filled' canSubmit={!isValid}>
				Login
			</Button>
		</form>
	);
};
