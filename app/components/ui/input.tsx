import * as React from "react";

import { cn } from "../../lib/utils";

type InputStyles = { [key: string]: string };
type InputVariant = "outlined" | "filled" | "text";

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	variant: InputVariant;
}
const inputVariants: InputStyles = {
	filled: "w-full bg-gray-100 p-2 rounded-xl",
	outlined: "w-full rounded-2xl  h-11 p-2 focus:outline-none",
};
const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ variant, className, name, type, ...props }, ref) => {
		return (
			<input
				type={type}
				className={`${cn(
					inputVariants[variant],
					"flex h-10 w-full rounded-md bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-placeholder placeholder:font-extralight focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 text-white",
					className
				)}`}
				name={name}
				id={name}
				ref={ref}
				{...props}
			/>
		);
	}
);
Input.displayName = "Input";

export { Input };
