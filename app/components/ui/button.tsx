import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils/utils";

const buttonVariants = cva(
	"inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
	{
		variants: {
			variant: {
				filled: "bg-primary text-white h-[3.25rem] rounded-[1.6875rem]",
				outlined:
					"border border-primary rounded-full py-3 font-[500] text-white h-[3.25rem] rounded-[1.6875rem]",
				text: "bg-transparent text-primary rounded-full py-3 font-[500]",
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
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, canSubmit, ...props }, ref) => {
		const Comp = asChild ? Slot : "button";
		return (
			<Comp
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
