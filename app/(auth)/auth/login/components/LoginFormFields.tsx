import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../../../../components/ui/form";

import { Input } from "../../../../components/ui/input";
import React from "react";
import { UseFormReturn } from "react-hook-form";

type LoginFormFieldsProps = {
	form: UseFormReturn<any>;
};

const LoginFormFields: React.FC<LoginFormFieldsProps> = ({ form }) => {
	return (
		<>
			<FormField
				control={form.control}
				name='email'
				render={({ field }) => (
					<FormItem>
						<FormLabel>Your email address</FormLabel>
						<FormControl>
							<Input
								{...field}
								placeholder='mail@example.com'
								variant='outlined'
								type='email'
							/>
						</FormControl>
						<FormMessage />
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
								type='password'
							/>
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
		</>
	);
};

export default LoginFormFields;
