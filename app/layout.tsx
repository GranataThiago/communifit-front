import "./globals.css";

import React from "react";
import RootLayoutClientSide from "./RootLayoutClientSide";

interface LoggedLayout {
	children: React.ReactNode;
}

export default function RootLayout({ children }: LoggedLayout) {
	return (
		<html>
			<body className='bg-[#212121]'>
				<RootLayoutClientSide>{children}</RootLayoutClientSide>
			</body>
		</html>
	);
}
