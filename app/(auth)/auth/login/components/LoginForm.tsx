"use client";

import * as z from "zod";

import React, { useState } from "react";

import { Button } from "../../../../components/ui/button";
import ForgotPasswordLink from "./ForgotPasswordLink/ForgotPasswordLink";
import { Form } from "../../../../components/ui/form";
import LoginFormFields from "./LoginFormFields/LoginFormFields";
import { LoginUserResponse } from "../../../../../interfaces";
import useErrorLoginMessageStore from "../../../../hooks/errorMessage/useErrorMessageLogin";
import { useForm } from "react-hook-form";
import useLoader from "../../../../hooks/loader/useLoader";
import { useRouter } from "next/navigation";
import { useUserContext } from "../../../../../context/UserContext/UserContext";
import { zodResolver } from "@hookform/resolvers/zod";

type LoginForm = {
	email: string;
	password: string;
};

export const LoginForm = () => {
	const { login } = useUserContext();

	const setIsLoading = useLoader((state) => state.setIsLoading);
	const messageError = useErrorLoginMessageStore((state) => state.messageError);
	const setMessageError = useErrorLoginMessageStore(
		(state) => state.setMessageError
	);

	const formSchema = z.object({
		email: z.string().min(2, {
			message: "Email is required.",
		}),
		password: z.string().min(2, {
			message: "Password is required.",
		}),
	});

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const router = useRouter();

	// Change for error not generic
	const errorLoginMessage: string =
		"An error has occurred, we apologize for any inconvenience.";

	const onLogin = async (formData: z.infer<typeof formSchema>) => {
		setIsLoading(true);
		const { email, password } = formData;

		const response: LoginUserResponse = await login(email, password);

		if (!response) {
			setMessageError(errorLoginMessage);
			setIsLoading(false);
			return;
		}

		if (!response.ok && response.message) {
			setMessageError(response.message);
			setIsLoading(false);
			return;
		}

		router.replace("/");
		setIsLoading(false);
	};

	return (
		<Form {...form}>
			<form
				className={`w-full flex flex-col gap-4 pt-2`}
				onSubmit={(e) => {
					e.preventDefault();
					form.handleSubmit(onLogin)(e);
				}}
			>
				<LoginFormFields form={form} />
				<ForgotPasswordLink />
				{messageError != "" && <p className='text-red-500'>{messageError}</p>}
				<Button variant='filled' type='submit' aria-label='Continue with login'>
					Continue
				</Button>
			</form>
		</Form>
	);
};
