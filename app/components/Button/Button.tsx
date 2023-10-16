import React, { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	variant: ButtonVariant;
	canSubmit?: boolean;
}

type ButtonVariant = "outlined" | "filled" | "text";

type ButtonStyles = { [key: string]: string };

const buttonVariants: ButtonStyles = {
	filled: "bg-primary text-white h-[3.25rem] rounded-[1.6875rem] w-full",
	outlined:
		"border border-primary text-white rounded-full w-full py-3 font-[500] disabled:border-gray-500",
	text: "bg-transparent text-primary rounded-full w-full py-3 font-[500] disabled:text-gray-500",
};

export const Button = ({
	children,
	variant,
	canSubmit = false,
	className = "",
	...props
}: ButtonProps) => {
	return (
		<button
			className={`${buttonVariants[variant]} ${className}`}
			{...props}
			disabled={canSubmit}
		>
			{children}
		</button>
	);
};
