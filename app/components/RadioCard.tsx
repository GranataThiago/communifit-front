import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import React, { InputHTMLAttributes, ReactNode } from "react";

import { Input } from "./ui/input";
import { Label } from "./ui/label";

interface RadioCardProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string;
	height?: number;
	icon?: ReactNode;
	ref: React.Ref<any>;
}

export const RadioCard = ({
	label,
	children,
	icon,
	height,
	...props
}: RadioCardProps) => {
	return (
		<Card
			className={`relative border border-primary block h-full p-4 w-full items-center justify-center rounded-lg h-${height} `}
		>
			<CardContent className="h-full p-0 flex flex-col items-center flex-shrink flex-grow justify-center">
				<CardTitle className='w-full text-center grid place-items-center h-full'>
					<Label
						htmlFor={props.id}
						className=' font-semibold xxs:text-sm xs:text-lg cursor-pointer h-full flex flex-col items-center justify-center w-full'
					>
						{icon ? icon : null}
						{label}
					</Label>
				</CardTitle>
				<Input
					variant='outlined'
					className='absolute top-2 right-2 h-[1rem] w-[1rem]'
					type='radio'
					name={props.name}
					{...props}
				/>
			</CardContent>
		</Card>
	);
};

const Icon = (icon: React.ReactNode) => <>{icon}</>;

RadioCard.Icon = Icon;
