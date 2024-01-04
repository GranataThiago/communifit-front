import React from "react";
import "./globals.css";
import RootLayoutClientSide from "./RootLayoutClientSide";
interface LoggedLayout {
	children: React.ReactNode;
}

export default function RootLayout({ children }: LoggedLayout) {
	return (
		<html>
			<body className="bg-secondary-dark">
				<RootLayoutClientSide>
					{children}
				</RootLayoutClientSide>
			</body>
		</html>
	);
}
