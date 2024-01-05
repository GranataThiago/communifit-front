import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
} from "../../../../components/ui/form";

import { Controller } from "react-hook-form";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import { RegisterFormStep } from "./Onboarding";
import dynamic from "next/dynamic";
import { poppins } from "../../../../components/fonts";

const SocialMediaForm = dynamic(
	() => import("../../components/SocialMediaForm")
);
export const RegisterFormComponent = ({
	register,
	control,
}: RegisterFormStep) => {
	return (
		<div
			className={`flex-1 flex flex-col justify-center gap-8 ${poppins.className}`}
		>
			<FormField
				rules={{
					required: "The fullName is required.",
				}}
				control={control}
				name='fullName'
				render={({ field }) => (
					<FormItem>
						<FormLabel>Full name</FormLabel>
						<FormControl>
							<Input
								placeholder='Your full name'
								{...field}
								ref={null}
								variant='outlined'
								type='text'
							/>
						</FormControl>
					</FormItem>
				)}
			/>

			<FormField
				rules={{
					required: "The username is required.",
				}}
				control={control}
				name='username'
				render={({ field }) => (
					<FormItem>
						<FormLabel>Username</FormLabel>
						<FormControl>
							<Input
								placeholder='Your username'
								{...field}
								ref={null}
								variant='outlined'
								type='text'
							/>
						</FormControl>
					</FormItem>
				)}
			/>

			<FormField
				rules={{
					required: "The email is required.",
				}}
				control={control}
				name='email'
				render={({ field }) => (
					<FormItem>
						<FormLabel>Your email address</FormLabel>
						<FormControl>
							<Input
								{...field}
								ref={null}
								placeholder='mail@example.com'
								variant='outlined'
								type='email'
							/>
						</FormControl>
					</FormItem>
				)}
			/>

			<FormField
				control={control}
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
								type='password'
							/>
						</FormControl>
					</FormItem>
				)}
			/>
			{/* <SocialMediaForm /> */}
		</div>
	);
};
