import React, { ButtonHTMLAttributes, ReactNode } from 'react'
import { AiOutlineLoading } from 'react-icons/ai';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode,
    variant: ButtonVariant,
    isLoading?: boolean,
}

type ButtonVariant = 'outlined'|'filled'|'text';

type ButtonStyles = { [key: string]: string };

const buttonVariants: ButtonStyles = {
    filled: 'bg-primary text-white rounded-full w-full py-3 font-[500] disabled:bg-gray-500',
    outlined: 'border border-primary text-white rounded-full w-full py-3 font-[500] disabled:border-gray-500',
    text: 'bg-transparent text-primary rounded-full w-full py-3 font-[500] disabled:text-gray-500'
}

export const Button = ({ children, variant, isLoading = false, className = '', ...props}: ButtonProps) => {
  return (
    <button className={`${buttonVariants[variant]} ${className}`} {...props} disabled={isLoading}>
        { children }
    </button>
  )
}
