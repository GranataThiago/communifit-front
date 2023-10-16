"use client";

import Link from "next/link";
import LoaderLogo from "../../../components/LoaderLogo/LoaderLogo";
import { LoginForm } from "./components/LoginForm";
import React from "react";
import dynamic from "next/dynamic";
import { montserrat } from "../../../components/fonts";
import useLoader from "../../../hooks/loader/useLoader";

const SocialMediaForm = dynamic(() => import("../components/SocialMediaForm"));
const LoginPage = () => {
	const isLoading = useLoader((state) => state.isLoading);

	return (
		<section
			className={`flex flex-col justify-around items-center w-full h-screen p-6 ${montserrat.className}`}
		>
			<div className='flex flex-col items-center gap-2 leading-[1.375rem]'>
				<h1 className='text-[2rem] font-bold'>
					Communi<span className='text-primary'>fit</span>.
				</h1>
				<h2 className='font-semibold text-[1.3125rem]'>Login</h2>
			</div>

			{isLoading ? (
				<LoaderLogo />
			) : (
				<>
					<LoginForm />

					<SocialMediaForm />

					<p
						data-testid='text-footer'
						className='text-[#9D9D9D] text-sm font-normal tracking-[-0.0255rem] leading-[1.375rem]'
					>
						Don&apos;t have an account?
						<Link href={"/auth/register"} className='text-black font-normal'>
							<b>&nbsp;Sign Up</b>
						</Link>
					</p>
				</>
			)}
		</section>
	);
};

export default LoginPage;
