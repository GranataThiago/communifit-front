import React from "react";
import { Control, Controller, UseFormRegister } from "react-hook-form";
import { RegisterForm, RegisterFormStep } from "../Onboarding/Onboarding";
import { montserrat } from "../../../../../components/fonts";
import { RadioCard } from "../../../../../components";

const goalsOptions = [
	{
		label: "Lose weight",
		value: "lose",
	},
	{
		label: "Mantain",
		value: "mantain",
	},
	{
		label: "Gain weight",
		value: "gain",
	},
	{
		label: "I'm not sure",
		value: "undefined",
	},
];

interface RegisterFormStepProps {
	register?: UseFormRegister<RegisterForm>;
	control?: Control<RegisterForm, any>;
}

export const GoalStep = (props: RegisterFormStepProps) => {
	const { register, control } = props;
	return (
		<div className={`flex-1 ${montserrat.className}`}>
			<p className='font-bold text-xl'>Objective</p>
			<p className='font-medium text-lg'>
				What is your <span className='text-primary'>goal</span>?
			</p>

			<div className='flex flex-col gap-2 mt-8'>
				<Controller
					name='objective'
					control={control}
					render={({ field }) => (
						<>
							{goalsOptions.map((goal) => (
								<RadioCard
									{...field}
									key={goal.value}
									ref={null}
									id={goal.value}
									value={goal.value}
									label={goal.label}
									height={24}
								></RadioCard>
							))}
						</>
					)}
				/>
				{/* 
            <div className='border border-gray-400 w-full h-24 flex items-center justify-center relative rounded-lg'>
                <input {...register('objective')}  className='absolute top-2 right-2' type="radio" name='objective' id='lose' value='lose'/>
                <label className='font-semibold text-xl text-center' htmlFor="lose">Lose weight</label>
            </div>

            <div className='border border-gray-400 w-full h-24 flex items-center justify-center relative rounded-lg'>
                <input {...register('objective')}  className='absolute top-2 right-2' type="radio" name='objective' id='mantain' value='mantain'/>
                <label className='font-semibold text-xl text-center' htmlFor="mantain">Mantain</label>
            </div>

            <div className='border border-gray-400 w-full h-24 flex items-center justify-center relative rounded-lg'>
                <input {...register('objective')}  className='absolute top-2 right-2' type="radio" name='objective' id='gain' value='gain'/>
                <label className='font-semibold text-xl text-center' htmlFor="gain">Gain weight</label>
            </div>

            <div className='border border-gray-400 w-full h-24 flex items-center justify-center relative rounded-lg'>
                <input {...register('objective')}  className='absolute top-2 right-2' type="radio" name='objective' id='undefined' value='undefined'/>
                <label className='font-semibold text-xl text-center' htmlFor="undefined">I&apos;m not sure</label>
            </div> */}
			</div>
		</div>
	);
};
