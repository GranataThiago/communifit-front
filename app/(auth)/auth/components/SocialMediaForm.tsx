"use client";

import { FaSquareXTwitter } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import React from "react";
import axios from "axios";
import { useGoogleLogin } from "@react-oauth/google";
import { useRouter } from "next/navigation";

export const SocialMediaForm = () => {
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
		<div className='w-full mb-4 flex flex-col items-center'>
			<h5 className='text-center text-gray-400'>Or Log In with</h5>
			<div className='mt-4 flex cursor-pointer'>
				<button
					onClick={() => login()}
					className='h-[3.25rem] border border-gray-300 p-3 rounded-xl cursor-pointer flex gap-2 items-center justify-center'
				>
					<FcGoogle
						size='2rem'
						className='cursor-pointer'
						aria-label='Login with google'
					/>
				</button>
			</div>
		</div>
	);
};
