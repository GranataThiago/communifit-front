"use client";

import { Button } from "../../../components/ui/button";
import { FcGoogle } from "react-icons/fc";
import React from "react";
import axios from "axios";
import { useGoogleLogin } from "@react-oauth/google";
import { useRouter } from "next/navigation";

const SocialMediaForm = () => {
	const router = useRouter();
	const login = useGoogleLogin({
		onSuccess: async (tokenResponse) => {
			try {
				const res = await axios.get(
					"https://www.googleapis.com/oauth2/v3/userinfo",
					{
						headers: {
							Authorization: `Bearer ${tokenResponse.access_token}`,
						},
					}
				);
				if (res) {
					router.replace("/");
				}
			} catch (error) {
				console.log("error");
			}
		},

		onError: () => console.log("login failed"),
	});
	return (
		<section className='w-full mb-4 flex flex-col items-center'>
			<h2 className='text-center text-surface-dark'>Or Log In with</h2>
			<div className='mt-4 flex cursor-pointer'>
				<Button
					variant='customize'
					onClick={() => login()}
					className='h-[3.25rem] border border-surface-dark p-3 rounded-xl cursor-pointer flex gap-2 items-center justify-center'
					aria-label='Login with Google'
				>
					<FcGoogle size='2rem' className='cursor-pointer' aria-hidden={true} />
					<span className='sr-only'>Log In with Google</span>
				</Button>
			</div>
		</section>
	);
};
export default SocialMediaForm;