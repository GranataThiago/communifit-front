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
	outlined:
		"w-full rounded-2xl border border-[1px] border-[#BBB] h-11 p-2 focus:outline-none",
};
const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ variant, className, name, type, ...props }, ref) => {
		return (
			<input
				type={type}
				className={`${inputVariants[variant]} ${cn(
					"flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
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
