"use client";

import Link from "next/link";
import LoaderLogo from "../../../components/LoaderLogo";
import { LoginForm } from "./components/LoginForm";
import Logo from "../../../components/Company/Logo";
import React from "react";
import dynamic from "next/dynamic";
import { montserrat } from "../../../components/fonts";
import { useCookies } from "react-cookie";
import useLoader from "../../../hooks/loader/useLoader";
import { useRouter } from "next/navigation";

const SocialMediaForm = dynamic(() => import("../components/SocialMediaForm"));
const LoginPage = () => {
	const router = useRouter();
	const [cookies] = useCookies(["token"]);
	const isLoading = useLoader((state) => state.isLoading);

	if (cookies.token && cookies.token!.value) {
		router.replace("/");
	}

	return (
		<section
			className={`flex flex-col justify-around items-center w-full h-screen p-6 ${montserrat.className}`}
		>
			<div className='text-center'>
				<Logo />
				<p className='text-xl font-medium'>Login</p>
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
