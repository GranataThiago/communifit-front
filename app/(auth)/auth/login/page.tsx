import Link from "next/link";
import { LoginForm } from "./components/LoginForm";
import React from "react";
import { SocialMediaForm } from "../components/SocialMediaForm";
import { montserrat } from "../../../components/fonts";

const LoginPage = () => {
	return (
		<section
			className={`flex flex-col justify-around items-center w-full h-screen p-6 ${montserrat.className}`}
		>
			<div className='text-center'>
				<h1 className='text-4xl font-bold'>
					Communi<span className='text-primary'>fit</span>.
				</h1>
				<p className='text-xl font-medium mt-2'>Login</p>
			</div>

			<LoginForm />

			<SocialMediaForm />

			<p data-testid='text-footer'>
				Don&apos;t have an account yet?
				<Link href={"/auth/register"}>
					<b>&nbsp;Sign Up</b>
				</Link>
			</p>
		</section>
	);
};

export default LoginPage;
