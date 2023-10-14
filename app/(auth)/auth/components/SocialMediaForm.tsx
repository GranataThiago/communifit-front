"use client";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
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
			<p className='text-center text-gray-400'>Or Login with</p>
			<ul className='mt-4 flex cursor-pointer'>
				<li
					onClick={() => login()}
					className='border border-gray-300 p-4 rounded-xl cursor-pointer flex gap-2 items-center justify-center'
				>
					<FcGoogle size='2rem' className='cursor-pointer' />
					Sign in with Google
				</li>
			</ul>
		</div>
	);
};
