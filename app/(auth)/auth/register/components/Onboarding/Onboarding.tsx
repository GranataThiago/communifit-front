"use client";

import { useContext, useState } from "react";
import { Control, useForm, UseFormRegister } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { inter, montserrat } from "../../../../../components/fonts";
import { UserContext } from "../../../../../../context/UserContext";
import { Button } from "../../../../../components";
import { UserTypes } from "../../../../../../interfaces/user";
import { AccountTypeStep } from "../AccountTypeStep/AccountTypeStep";
import { PersonalInfoStep } from "../PersonalInfoStep/PersonalInfoStep";
import { RegisterForm } from "../RegisterForm/RegisterForm";
import { FinalStep } from "../FinalStep/FinalStep";

export type RegisterForm = {
	fullName: string;
	username: string;
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
				return <RegisterForm {...baseProps} />;
			default:
				return <FinalStep />;
		}
	};

	const onRegister = (formData: RegisterForm) => {
		const {
			birthdate: { day, month, year },
		} = formData;

		const birthdate = new Date(year, month, day);

		registerUser({
			...formData,
			birthdate,
		});
	};

	return (
		<form
			className='w-full flex flex-col justify-center gap-4 flex-1 py-4'
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
				variant='filled'
				type={currentStep === 4 ? "submit" : "button"}
				onClick={onNextStep}
			>
				Continue
			</Button>
			{currentStep === 0 ? (
				<p className='text-center py-4'>
					Already have an account?{" "}
					<Link href={"/auth/login"}>
						<strong>Sign In</strong>
					</Link>
				</p>
			) : null}
		</form>
	);
};
