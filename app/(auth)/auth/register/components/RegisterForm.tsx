import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../../../../components/ui/form";

import { Input } from "../../../../components/ui/input";
import { RegisterFormStep } from "./Onboarding";
import { montserrat } from "../../../../components/fonts";
import { PASSWORD_REGEX } from "../../../../../utils";


export const RegisterFormComponent = ({
	register,
	control,
}: RegisterFormStep) => {
	return (
		<div
			className={`flex-1 flex flex-col justify-center gap-8 ${montserrat.className}`}
		>
			<FormField
				rules={{
					required: "The fullname is required.",
				}}
				control={control}
				name='fullname'
				render={({ field }) => (
					<FormItem>
						<FormLabel>Full name</FormLabel>
						<FormControl>
							<Input placeholder="Your full name" {...field} ref={null} variant='dark' type='text' />
						</FormControl>
						<FormMessage>
							{ control.getFieldState('fullname').isDirty && control.getFieldState('fullname').error?.message }
						</FormMessage>
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
							<Input placeholder="Your username" {...field} ref={null} variant='dark' type='text' />
						</FormControl>
						<FormMessage>
							{ control.getFieldState('username').isDirty && control.getFieldState('username').error?.message }
						</FormMessage>
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
								variant='dark'
								type='email'
							/>
						</FormControl>
						<FormMessage>
							{ control.getFieldState('email').isDirty && control.getFieldState('email').error?.message }
						</FormMessage>
					</FormItem>
				)}
			/>

			<FormField
				control={control}
				name='password'
				rules={{
					required: "The password is required.",
					pattern: { value: PASSWORD_REGEX, message: "Must be at least 8 characters with at least one uppercase letter, one lowercase letter, and two digits. Avoid spaces." }
				}}
				render={({ field }) => (
					<FormItem>
						<FormLabel>Password</FormLabel>
						<FormControl>
							<Input
								{...field}
								placeholder='Enter your password...'
								variant='dark'
								type='password'
							/>
						</FormControl>
						<FormMessage>
							{ control.getFieldState('password').isDirty && control.getFieldState('password').error?.message }
						</FormMessage>
					</FormItem>
				)}
			/>
			{/* <SocialMediaForm /> */}
		</div>
	);
};
