"use client";
import React from "react";
import "./globals.css";
import { UserProvider } from "../context/UserContext";
import { GoogleOAuthProvider } from "@react-oauth/google";
interface LoggedLayout {
	children: React.ReactNode;
}

export default function RootLayout({ children }: LoggedLayout) {
	return (
		<html>
			<body>
				<UserProvider>
					<GoogleOAuthProvider clientId='265206041548-8cklgf8qg18cm9s5hrii4fsr7oq20mo0.apps.googleusercontent.com'>
						{children}
					</GoogleOAuthProvider>
				</UserProvider>
			</body>
		</html>
	);
}
