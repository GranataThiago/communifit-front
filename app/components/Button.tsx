import React, { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode,
    variant: ButtonVariant,
}

type ButtonVariant = 'outlined'|'filled'|'text';

type ButtonStyles = { [key: string]: string };

const buttonVariants: ButtonStyles = {
    filled: 'bg-primary text-white rounded-full w-full py-3',
    outlined: 'border border-primary text-white rounded-full w-full py-3',
    text: 'bg-transparent text-primary rounded-full w-full py-3'
}

export const Button = ({ children, variant, className,...props}: ButtonProps) => {
  return (
    <button className={`${buttonVariants[variant]} ${className}`} {...props}>{children}</button>
  )
}
