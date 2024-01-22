import React from "react";
import "./globals.css";

interface LoggedLayout {
	children: React.ReactNode;
}

export default function RootLayout({ children }: LoggedLayout) {
	return (
		<html>
			<body className="bg-secondary-dark">
				{children}
			</body>
		</html>
	);
}
