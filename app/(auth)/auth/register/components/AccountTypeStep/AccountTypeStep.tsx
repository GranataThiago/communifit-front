import { Controller } from "react-hook-form";
import Link from "next/link";
import { RadioCard } from "../../../../../components";
import React from "react";
import { RegisterFormStep } from "../Onboarding/Onboarding";
import { montserrat } from "../../../../../components/fonts";

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
						<>
							{accountTypeOptions.map((type) => (
								<RadioCard
									{...field}
									key={type.value}
									ref={null}
									id={type.value}
									value={type.value}
									label={type.label}
									height={60}
									name={`${type.value}`}
								/>
							))}
						</>
					)}
				/>

				{/* <div className='border border-gray-400 w-full h-40 flex items-center justify-center relative rounded-lg'>
              <input {...register('type')} className='accent-primary absolute top-2 right-2' type="radio" name='type' id='member' value='member'/>
              <label className='w-4/5 font-semibold text-xl text-center' htmlFor="member">I&apos;m a member, looking for a community.</label>
          </div>

          <div className='border border-gray-400 w-full h-40 flex items-center justify-center relative rounded-lg'>
              <input {...register('type')} className='accent-primary absolute top-2 right-2' type="radio" name='type' id='trainer' value='trainer'/>
              <label className='w-4/5 font-semibold text-xl text-center' htmlFor="trainer">I&apos;m a trainer, looking for members.</label>
          </div> */}
			</div>
		</div>
	);
};
