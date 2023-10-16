"use client";

import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel } from "../../ui/form";
import React, { useState } from "react";

import { Exercise } from "../../../../interfaces/exercises";
import { Heading } from "../../Heading";
import { Input } from "../../ui/input";
import Modal from "../Modal";
import { useCallback } from "react";
import useWorkoutModal from "../../../hooks/modals/useWorkoutModal";

const WorkoutModal = () => {
	const workoutModal = useWorkoutModal();
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
		control,
		reset,
	} = useForm<Exercise>({
		defaultValues: {
			name: "",
			quantity: "",
			weight: "50lbs",
			observations: "",
		},
	});

	const onSubmit: SubmitHandler<Exercise> = (data) => {
		setIsLoading(true);
		workoutModal.exercise = { ...data };
		workoutModal.onClose();
		reset();
	};

	const toggle = useCallback(() => {
		workoutModal.onClose();
	}, [workoutModal]);

	const bodyContent = (
		<div className='flex flex-col gap-4'>
			<Heading title='Exercise Details' subtitle='' />

			<FormField
				rules={{
					required: "The name is required.",
				}}
				control={control}
				name='name'
				render={({ field }) => (
					<FormItem>
						<FormLabel>Name</FormLabel>
						<FormControl>
							<Input {...field} ref={null} variant='outlined' type='text' />
						</FormControl>
					</FormItem>
				)}
			/>
			<FormField
				rules={{
					required: "The quantity is required.",
				}}
				control={control}
				name='quantity'
				render={({ field }) => (
					<FormItem>
						<FormLabel>Sets/Reps</FormLabel>
						<FormControl>
							<Input {...field} ref={null} variant='outlined' type='text' />
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
		</div>
	);

	return (
		<Modal
			disabled={isLoading}
			isOpen={workoutModal.isOpen}
			title='Workout'
			actionLabel='Add'
			onClose={workoutModal.onClose}
			onSubmit={handleSubmit(onSubmit)}
			body={bodyContent}
		/>
	);
};

export default WorkoutModal;
