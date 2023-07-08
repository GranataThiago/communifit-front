import React, { InputHTMLAttributes, ReactNode } from 'react'

// interface RadioCardProps{
//     name: string;
//     id: string;
//     value: string;
//     label: string;
//     className?: string;
//     children?: React.ReactNode
// }

interface RadioCardProps extends InputHTMLAttributes<HTMLInputElement>{
    label: string,
    height?: number;
    icon?: ReactNode;
    ref: any;
}

export const RadioCard = ({ label, children, icon, height, ...props }: RadioCardProps) => {
  return (
    <label className={`border border-gray-400 w-full flex flex-col items-center justify-center relative rounded-lg h-${height}`} htmlFor={props.id}>
        {icon ? icon : null}
        <input className='absolute top-2 right-2' type="radio" {...props}/>
        <div className='w-4/5 font-semibold text-xl text-center'>{label}</div>
    </label>
  )
}

const Icon = (icon: React.ReactNode) => ( <>{icon}</> );

RadioCard.Icon = Icon;