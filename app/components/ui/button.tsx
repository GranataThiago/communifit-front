import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";
import { poppins } from "../fonts";

const buttonVariants = cva(
	`${poppins.className} font-bold inline-flex items-center justify-center rounded-md text-lg font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer hover:brightness-105 tranisiton all`,
	{
		variants: {
			variant: {
				customize: "",
				filled: "bg-primary text-secondary h-[3.25rem] rounded-xl",
				outlined:
					"border-2 border-highlight rounded-xl py-3 text-highlight h-[3.25rem] rounded-xl",
				text: "bg-transparent text-primary rounded-xl py-3",
			},
			size: {
				default: "w-full",
			},
		},
		defaultVariants: {
			variant: "filled",
			size: "default",
		},
	}
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
	canSubmit?: boolean;
	variant?: any;
	size?:any;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, canSubmit, ...props }, ref) => {
		const Comp = asChild ? Slot : "button";
		return (
			<Comp
				role='button'
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				disabled={canSubmit}
				{...props}
			/>
		);
	}
);
Button.displayName = "Button";

export { Button, buttonVariants };
