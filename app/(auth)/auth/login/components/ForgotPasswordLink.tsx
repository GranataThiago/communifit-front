import Link from "next/link";
import React from "react";

const ForgotPasswordLink: React.FC = () => {
	return (
		<div className='flex items-end justify-end'>
			<Link
				className='text-sm hover:text-primary font-extralight tracking-[-0.0256rem] leading-[1.375rem] text-white'
				href='/auth/forgot-password'
			>
				Forgot password?
			</Link>
		</div>
	);
};

export default ForgotPasswordLink;
