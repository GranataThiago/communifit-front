"use client";

import * as z from "zod";

import React, { useState } from "react";

import { Button } from "../../../../components/ui/button";
import ForgotPasswordLink from "./ForgotPasswordLink";
import { Form } from "../../../../components/ui/form";
import LoginFormFields from "./LoginFormFields";
import { LoginUserResponse } from "../../../../../interfaces";
import useErrorLoginMessageStore from "../../../../hooks/errorMessage/useErrorMessageLogin";
import { useForm } from "react-hook-form";
import useLoader from "../../../../hooks/loader/useLoader";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import loginUser from "../../../../../services/auth/login";

type LoginForm = {
	email: string;
	password: string;
};

export const LoginForm = () => {
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

		const response: LoginUserResponse = await loginUser(email, password);
		if (!response) {
			setMessageError(errorLoginMessage);
			setIsLoading(false);
			return;
		}

		if (!response.ok) {
			setMessageError(response.message ?? errorLoginMessage);
			setIsLoading(false);
			return;
		}

		router.replace("/");
		setIsLoading(false);
	};

	return (
		<Form {...form}>
			<form
				className={`w-full flex flex-col gap-6 bg-secondary-light p-6 rounded-xl`}
				onSubmit={(e) => {
					e.preventDefault();
					form.handleSubmit(onLogin)(e);
				}}
			>
				<LoginFormFields form={form} />
				<ForgotPasswordLink />
				{messageError != "" && <p className='text-red-500 text-xs md:text-sm'>{messageError}</p>}
				<Button variant='filled' className="w-full h-10 xs:h-12" type='submit' aria-label='Continue with login'>
					Continue
				</Button>
			</form>
		</Form>
	);
};
