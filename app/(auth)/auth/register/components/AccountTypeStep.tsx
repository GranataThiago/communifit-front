import { Controller } from "react-hook-form";
import { RadioCard } from "../../../../components";
import React from "react";
import { RegisterFormStep } from "./Onboarding";
import { montserrat } from "../../../../components/fonts";

const accountTypeOptions = [
	{
		label: "I'm a member, looking for a community.",
		value: "member",
	},
	{
		label: "I'm a trainer, looking for members.",
		value: "trainer",
	},
];

export const AccountTypeStep = ({ register, control }: RegisterFormStep) => {
	return (
		<div className={`flex-1 ${montserrat.className}`}>
			<p className='font-bold text-xl'>Hi stranger!</p>
			<p className='font-medium text-lg' data-testid='join'>
				Join as <span className='text-primary'>trainer</span> or{" "}
				<span className='text-primary'>member</span>?
			</p>

			<div className='flex flex-col gap-2 mt-8' data-testid='member-radio'>
				<Controller
					name='type'
					control={control}
					render={({ field }) => (
						<fieldset {...field} name="type" className="flex flex-col gap-5">
							{accountTypeOptions.map((type, index) => (
								<div role="button" key={type.value} aria-label={`Select type ${type.value}`} {...field} tabIndex={index+1}> 
									<RadioCard
										{...field}
										key={type.value}
										ref={null}
										id={type.value}
										value={type.value}
										label={type.label}
										height={60}
										tabIndex={index+1}
										/>
								</div>
								))}
						</fieldset>
					)}
				/>

				
			</div>
		</div>
	);
};
