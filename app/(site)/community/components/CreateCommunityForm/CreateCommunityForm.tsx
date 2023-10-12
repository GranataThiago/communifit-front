"use client";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { LabeledInput, LabeledTextarea } from "../../../../components/Input";
import { Button } from "../../../../components/Button";
import apiInstance from "../../../../api";
import { useUserContext } from "../../../../../context/UserContext";
import { useRouter } from "next/navigation";
import { useCookies } from "react-cookie";

interface CreateCommunity {
	name?: string;
	displayName: string;
	description: string;
	adminId?: string;
}

const CreateCommunityForm = () => {
	const router = useRouter();
	const [cookies, setCookie, removeCookie] = useCookies(["token"]);
	const { user } = useUserContext();
	const [finalURL, setFinalURL] = useState("www.communifit.com/");
	const { register, control, watch, getValues, handleSubmit } =
		useForm<CreateCommunity>();

	const displayName = watch("displayName");

	useEffect(() => {
		if (!displayName) return;
	}, [displayName]);

	const onCommunityCreated = async (formData: CreateCommunity) => {
		const newCommunity = { ...formData, adminId: user?._id };
		const { data, status } = await apiInstance.post(
			"/communities",
			newCommunity,
			{ headers: { token: cookies.token } }
		);
		// if(succesful)
		router.push(formData.name as string);
	};

	return (
		<section>
			<form onSubmit={handleSubmit(onCommunityCreated)}>
				<Controller
					control={control}
					name='name'
					render={({ field }) => (
						<LabeledInput
							{...field}
							ref={null}
							label='Name'
							type='text'
							variant='outlined'
						></LabeledInput>
					)}
				/>

				<div className='flex items-center justify-center'>
					<div className='p-2 bg-gray-200 mt-6'>
						<p className='text-gray-700'>{finalURL}</p>
					</div>
					<Controller
						control={control}
						name='displayName'
						render={({ field }) => (
							<LabeledInput
								{...field}
								ref={null}
								label='URL'
								type='text'
								variant='outlined'
							></LabeledInput>
						)}
					/>
				</div>

				<Controller
					control={control}
					name='description'
					render={({ field }) => (
						<LabeledTextarea
							{...field}
							ref={null}
							label='Description'
							variant='outlined'
						></LabeledTextarea>
					)}
				/>

				<Button className='mt-2' variant='filled' type='submit'>
					Create
				</Button>
			</form>
		</section>
	);
};

export default CreateCommunityForm;
