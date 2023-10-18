import Link from "next/link";
import React from "react";

const ForgotPasswordLink: React.FC = () => {
	return (
		<div className='flex items-end justify-end'>
			<Link
				className='text-sm font-normal tracking-[-0.0255rem] leading-[1.375rem]'
				href='/auth/forgot-password'
			>
				Forgot password?
			</Link>
		</div>
	);
};

export default ForgotPasswordLink;
