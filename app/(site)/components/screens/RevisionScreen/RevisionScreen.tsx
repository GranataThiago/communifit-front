"use client";

import { Controller, useForm } from "react-hook-form";
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
} from "../../../../components/ui/form";
import React, { ChangeEvent, useEffect } from "react";

import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { montserrat } from "../../../../components/fonts";

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

				<FormField
					rules={{
						required: "The weight is required.",
					}}
					control={control}
					name='weight'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Weight</FormLabel>
							<FormControl>
								<Input {...field} ref={null} variant='outlined' type='number' />
							</FormControl>
						</FormItem>
					)}
				/>
				<FormField
					rules={{
						required: "The observations is required.",
					}}
					control={control}
					name='observations'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Observations</FormLabel>
							<FormControl>
								<Input {...field} ref={null} variant='outlined' type='text' />
							</FormControl>
						</FormItem>
					)}
				/>

				<Button className='mt-4' type='submit' variant='filled'>
					Sent
				</Button>
			</form>
		</main>
	);
};
