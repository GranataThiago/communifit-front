"use client";

import { Controller, useForm } from "react-hook-form";
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
} from "../../../components/ui/form";
import React, { useEffect } from "react";

import { AiFillCloseCircle } from "react-icons/ai";
import { Button } from "../../../components/ui/button";
import { CreateCommunity } from "../../../../interfaces/services/community/create-community";
import { Input } from "../../../components/ui/input";
import { createCommunity } from "../../../../services/community/create-community";
import { montserrat } from "../../../components/fonts";
import { renderToast } from "../../../providers/ToasterProvider";
import { useCookies } from "react-cookie";
import { useUserContext } from "../../../../context/UserContext";

const CreateCommunityForm = ({ isEdit }: { isEdit?: boolean }) => {
	const [cookies] = useCookies(["token"]);
	const { user } = useUserContext();
	const { control, watch, setValue, formState, handleSubmit } =
		useForm<CreateCommunity>();

	const displayName = watch("displayName");

	useEffect(() => {
		if (!displayName || formState.touchedFields.displayName) return;
		setValue("name", displayName);
	}, [displayName, setValue]);

	const onCommunityCreated = async (formData: CreateCommunity) => {
		const newCommunity = { ...formData, adminId: user?._id };
		const communityData = await createCommunity({
			token: cookies.token,
			newCommunity,
		});
		if (!communityData || !communityData.ok) {
			renderToast(
				"There has been an error while creating your community",
				<AiFillCloseCircle />
			);
			return;
		}

		// Backend converts the name to lowercase, so we should do the same
		// Ideally back would return the createdCommunity in the response object
		window.location.href = `/community/${formData.name?.toLowerCase()}`;
	};

	return (
		<section>
			<form
				className={`flex flex-col items-center justify-center gap-6 ${montserrat.className} text-white`}
				onSubmit={handleSubmit(onCommunityCreated)}
			>
				<h1 className='text-2xl font-bold mt-4'>
					<span className='text-primary'>{isEdit ? "Edit" : "Create"}</span>{" "}
					your community
				</h1>
				<FormField
					rules={{
						required: "The Community Name is required.",
					}}
					control={control}
					name='displayName'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Community Name</FormLabel>
							<FormControl>
								<Input
									{...field}
									ref={null}
									variant='outlined'
									type='text'
									className='text-black'
								/>
							</FormControl>
						</FormItem>
					)}
				/>

				<div className='flex flex-col'>
					<div className='flex items-center justify-center'>
						<FormItem>
							<FormLabel className='mb-2'>Community URL</FormLabel>
							<Input
								value={"www.communifit.com/"}
								ref={null}
								variant='outlined'
								type='text'
								className='text-black'
							/>
						</FormItem>

						<FormField
							rules={{
								required: "The Name is required.",
							}}
							control={control}
							name='name'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Name</FormLabel>
									<FormControl>
										<Input
											{...field}
											ref={null}
											variant='outlined'
											type='text'
											className='text-black'
										/>
									</FormControl>
								</FormItem>
							)}
						/>
					</div>
				</div>
				<FormField
					rules={{
						required: "The Description is required.",
					}}
					control={control}
					name='description'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Description</FormLabel>
							<FormControl>
								<Input
									{...field}
									ref={null}
									variant='outlined'
									type='text'
									className='text-black'
								/>
							</FormControl>
						</FormItem>
					)}
				/>

				<Button className='mt-2 w-48' variant='filled' type='submit'>
					{isEdit ? "Edit" : "Create"}
				</Button>
			</form>
		</section>
	);
};

export default CreateCommunityForm;
