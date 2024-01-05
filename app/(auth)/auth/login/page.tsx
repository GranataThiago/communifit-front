"use client";

import Link from "next/link";
import LoaderLogo from "../../../components/LoaderLogo";
import { LoginForm } from "./components/LoginForm";
import Logo from "../../../components/Company/Logo";
import React from "react";
import dynamic from "next/dynamic";
import { poppins } from "../../../components/fonts";
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
			className={`flex flex-col justify-around items-center w-full h-screen p-6 ${poppins.className}`}
		>
			<div className='text-center'>
				<Logo />
				<p className='text-2xl font-normal text-white tracking-tight'>Login</p>
			</div>

			{isLoading ? (
				<LoaderLogo />
			) : (
				<>
					<LoginForm />

					<SocialMediaForm />

					<p
						data-testid='text-footer'
						className='text-white font-extralight text-md tracking-[-0.0313rem] '
					>
						Don&apos;t have an account?
						<Link
							href={"/auth/register"}
							className='text-primary font-normal hover:text-white'
						>
							<b>&nbsp;&nbsp;Sign Up</b>
						</Link>
					</p>
				</>
			)}
		</section>
	);
};

export default LoginPage;
