"use client";

import { Controller, useForm } from "react-hook-form";
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
} from "../../../components/ui/form";
import React, { useEffect } from "react";
import {
	createCommunity,
	editCommunity,
} from "../../../../services/community/create-community";

import { AiFillCloseCircle } from "react-icons/ai";
import { Button } from "../../../components/ui/button";
import { CreateCommunity } from "../../../../interfaces/services/community/create-community";
import { ICommunity } from "../../../../interfaces";
import { Input } from "../../../components/ui/input";
import { montserrat } from "../../../components/fonts";
import { renderToast } from "../../../providers/ToasterProvider";
import { useCookies } from "react-cookie";
import { useUserContext } from "../../../../context/UserContext";

const CreateCommunityForm = ({
	isEdit,
	community,
}: {
	isEdit?: boolean;
	community?: ICommunity;
}) => {
	const [cookies] = useCookies(["token"]);
	const { user } = useUserContext();
	const { control, watch, setValue, formState, handleSubmit } =
		useForm<CreateCommunity>({
			defaultValues: {
				displayName: community?.displayname ?? "",
				name: community?.name ?? "",
				description: community?.description ?? "",
			},
		});

	const displayName = watch("displayName");

	useEffect(() => {
		if (!displayName || formState.touchedFields.displayName) return;
		setValue("name", displayName);
	}, [displayName, setValue]);

	const onCommunityCreated = async (formData: CreateCommunity) => {
		const newCommunity = { ...formData, adminId: user?._id };
		const communityData = isEdit
			? await editCommunity({ token: cookies.token, newCommunity })
			: await createCommunity({
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
	const handleDivClick = () => {
		const input = document.getElementById("url");
		if (input) {
			input.focus();
		}
	};
	return (
		<section>
			<form
				className={`flex flex-col mx-10 md:mx-20 justify-center gap-6 ${montserrat.className} text-white`}
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

				<FormField
					rules={{
						required: "The Name is required.",
					}}
					control={control}
					name='name'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Community URL</FormLabel>
							<FormControl>
								<div
									onClick={handleDivClick}
									role='input'
									className='flex bg-white text-black items-center rounded-md'
								>
									<p className='text-sm pl-2'>www.communifit.com/</p>
									<Input
										id='url'
										{...field}
										ref={null}
										variant='outlined'
										type='text'
										className='text-black border-0 overflow-hidden p-0 focus-visible:ring-offset-0 focus-visible:ring-0'
									/>
								</div>
							</FormControl>
						</FormItem>
					)}
				/>
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

				<Button
					variant='customize'
					className='bg-primary text-secondary py-3 text-md'
					type='submit'
				>
					{isEdit ? "Edit" : "Create"}
				</Button>
			</form>
		</section>
	);
};

export default CreateCommunityForm;
