import React, { InputHTMLAttributes, Ref } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant: InputVariant;
  ref?: any;
}

type InputVariant = "outlined" | "filled" | "text";

type InputStyles = { [key: string]: string };

const inputVariants: InputStyles = {
  filled: "w-full bg-gray-100 p-2 rounded-xl",
  outlined: "w-full border rounded-xl p-2  border-gray-300",
};

export const Input = ({ variant, className, ...props }: InputProps) => {
  return (
    <input className={`${inputVariants[variant]} ${className}`} {...props} />
  );
};

interface LabeledInputProps {
  variant: InputVariant;
  label: string;
  name: string;
  type: string;
  ref?: any;
  id?: string;
}

export const LabeledInput = ({ label, ...props }: LabeledInputProps) => {
  return (
    <div className="flex flex-col w-full">
      <label htmlFor={props.name} className="pb-1">
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
    <div className="flex flex-col w-full">
      <label htmlFor={props.name} className="pl-2">
        {label}
      </label>
      <textarea
        {...props}
        className={`${inputVariants[props.variant]}`}
      ></textarea>
    </div>
  );
};
