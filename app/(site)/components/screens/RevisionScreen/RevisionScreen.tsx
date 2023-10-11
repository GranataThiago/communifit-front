"use client";

import React, { ChangeEvent, useEffect } from "react";
import { montserrat } from "../../../../components/fonts";
import {
	Input,
	LabeledInput,
	LabeledTextarea,
} from "../../../../components/Input/Input";
import { Controller, useForm } from "react-hook-form";
import { Button } from "../../../../components/Button/Button";

type RevisionForm = {
	pics: File[];
	weight: string;
	observations: string;
};

export const RevisionScreen = () => {
	const {
		handleSubmit,
		formState: { errors },
		register,
		control,
		getValues,
		setValue,
		watch,
	} = useForm<RevisionForm>();

	const uploadedPics = watch("pics");
	console.log(uploadedPics);
	const onRevisionSent = (formValues: RevisionForm) => {
		// Handle Revision Logic
		console.log(formValues);
	};

	// => So we can correctly use the FileList object as an array. (by default we cannot use methods such as map or filter)
	const onImagesUploaded = (event: ChangeEvent<HTMLInputElement>) => {
		const { files } = event.target;
		if (!files) return;

		const length = files?.length || 0;
		const images: File[] = [];
		for (let i = 0; i < length; i++) {
			images.push(files[i]);
		}

		setValue("pics", images);
	};

	return (
		<main
			className={`bg-secondary flex flex-col gap-8 ${montserrat.className}`}
			data-testid='main'
		>
			<header className='flex justify-between p-6 pb-0'>
				<div className='greetings'>
					<p className='font-semibold text-lg'>
						Upload your progress for week 3
					</p>
				</div>
			</header>

			<form
				onSubmit={handleSubmit(onRevisionSent)}
				className='px-6 flex flex-col gap-4'
			>
				<div className='pics flex gap-2 flex-wrap'>
					<label
						className={`w-full h-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-md border-2 border-dashed`}
					>
						<span className='mt-auto mb-auto text-gray-300 text-center'>
							{uploadedPics?.length > 0
								? `${uploadedPics.length} pictures uploaded`
								: "Upload your photo..."}
						</span>
						<input
							{...register("pics")}
							onChange={onImagesUploaded}
							type='file'
							multiple
							className='w-100 h-100 opacity-0'
						/>
					</label>
					{/* TODO: Display uploaded pictures? */}
				</div>

				<Controller
					name='weight'
					control={control}
					defaultValue=''
					render={({ field }) => (
						<LabeledInput
							{...field}
							ref={null}
							label='Weight'
							variant='outlined'
							type='number'
						/>
					)}
				/>

				<Controller
					name='observations'
					control={control}
					defaultValue=''
					render={({ field }) => (
						<LabeledTextarea
							{...field}
							ref={null}
							label='Observations'
							variant='outlined'
						/>
					)}
				/>

				<Button className='mt-4' type='submit' variant='filled'>
					Sent
				</Button>
			</form>
		</main>
	);
};
