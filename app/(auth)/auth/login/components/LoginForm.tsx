"use client";

import * as z from "zod";

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
} from "../../../../components/ui/form";
import React, { useState } from "react";

import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import Link from "next/link";
import LoaderLogo from "../../../../components/LoaderLogo/LoaderLogo";
import { LoginUserResponse } from "../../../../../interfaces";
import { montserrat } from "../../../../components/fonts";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useUserContext } from "../../../../../context/UserContext/UserContext";
import { zodResolver } from "@hookform/resolvers/zod";

type LoginForm = {
	email: string;
	password: string;
};

export const LoginForm = () => {
	const { login } = useUserContext();

	const formSchema = z.object({
		email: z.string(),
		password: z.string(),
	});

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
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

	if (isLoading) {
		return <LoaderLogo />;
	}
	return (
		<Form {...form}>
			<form
				className={`w-full flex flex-col gap-4 pt-2 ${montserrat.className}`}
				onSubmit={form.handleSubmit(onLogin)}
			>
				<FormField
					rules={{
						required: "The email is required.",
					}}
					control={form.control}
					name='email'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Your email adress</FormLabel>
							<FormControl>
								<Input
									{...field}
									placeholder='Mail@example.com'
									variant='outlined'
								/>
							</FormControl>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='password'
					rules={{
						required: "The password is required.",
					}}
					render={({ field }) => (
						<FormItem>
							<FormLabel>Password</FormLabel>
							<FormControl>
								<Input
									{...field}
									placeholder='Enter your password...'
									variant='outlined'
								/>
							</FormControl>
						</FormItem>
					)}
				/>
				<Link
					className='text-right text-sm font-normal tracking-[-0.0255rem] leading-[1.375rem]'
					href='/auth/forgot-password'
				>
					Forgot password?
				</Link>
				{messageError != "" && <p className='text-red-500'>{messageError}</p>}
				<Button variant='filled' type='submit'>
					Continue
				</Button>
			</form>
		</Form>
	);
};
