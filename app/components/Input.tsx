import React, { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    variant: InputVariant
}

type InputVariant = 'outlined'|'filled'|'text';

type InputStyles = { [key: string]: string };

const inputVariants: InputStyles = {
    filled: 'w-full bg-gray-100 p-2 rounded-full',
    outlined: 'w-full border rounded-full p-2',
}

export const Input = ({ variant, className, ...props }: InputProps) => {
  return (
    <input className={`${inputVariants[variant]} ${className}`} {...props}/>
  )
}

const Label = () => {
    return(
        <label></label>
    )
}

Input.Label = Label;