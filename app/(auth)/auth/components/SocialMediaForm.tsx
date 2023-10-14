import { FaSquareXTwitter } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import React from "react";

export const SocialMediaForm = () => {
	return (
		<div className='w-full mb-4'>
			<p className='text-center text-gray-400'>Or Login with</p>
			<ul className='mt-4 flex justify-evenly'>
				<li className='border border-gray-300 p-4 rounded-xl'>
					<FcGoogle size='2rem' />
				</li>
				<li className='border border-gray-300 p-4 rounded-xl'>
					<FaSquareXTwitter size='2rem' />
				</li>
			</ul>
		</div>
	);
};
