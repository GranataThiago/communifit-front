import React from "react";
import { ClientScreen, TrainerScreen } from "./components/screens";


interface PageProps {
	roleMock?: "member" | "trainer";
}

export default function Page(props: PageProps) {
	const HARDCODED_ROLE: string = props.roleMock ?? "trainer";
	return (
		<>{HARDCODED_ROLE === "member" ? <ClientScreen /> : <TrainerScreen />}</>
	);
}
