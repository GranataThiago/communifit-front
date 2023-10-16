import React, { InputHTMLAttributes, Ref } from "react";

import { UseFormRegisterReturn } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	variant: InputVariant;
}

type InputVariant = "outlined" | "filled" | "text";

type InputStyles = { [key: string]: string };

const inputVariants: InputStyles = {
	filled: "w-full bg-gray-100 p-2 rounded-xl",
	outlined:
		"w-full rounded-2xl border border-[1px] border-[#BBB] h-11 p-2 focus:outline-none",
};

export const Input = ({ variant, className, name, ...props }: InputProps) => {
	return (
		<input
			className={`${inputVariants[variant]} ${className}`}
			{...props}
			id={name}
		/>
	);
};

interface LabeledInputProps {
	variant: InputVariant;
	label: string;
	name: string;
	type: string;
	ref?: null;
	register?: UseFormRegisterReturn;
}

export const LabeledInput = ({ label, ...props }: LabeledInputProps) => {
	return (
		<div className='flex flex-col w-full'>
			<label
				htmlFor={props.name}
				className='pb-1 text-black text-base font-semibold tracking-[-0.0255rem] leading-[1.375rem]'
			>
				{label}
			</label>
			<Input {...props} />
		</div>
	);
};

interface LabeledTextareaProps {
	variant: InputVariant;
	label: string;
	name: string;
	ref?: null;
}

export const LabeledTextarea = ({ label, ...props }: LabeledTextareaProps) => {
	return (
		<div className='flex flex-col w-full'>
			<label htmlFor={props.name} className='pl-2'>
				{label}
			</label>
			<textarea {...props} className={`${inputVariants[props.variant]}`} />
		</div>
	);
};
