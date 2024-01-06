import { NonCommunityMemberScreen } from "./NonCommunityMemberScreen";
import { NonCommunityTrainerScreen } from "./NonCommunityTrainerScreen";
import React from "react";
import { cookies } from "next/headers";
import { getAuthenticatedUser } from "../../../../../helpers";
import { redirect } from "next/navigation";

const NonCommunityScreen = async () => {
	const cookieStore = cookies();
	const user = await getAuthenticatedUser(cookieStore.get("token")!.value);
	if (!user) redirect("/");

	return (
		<>
			{user?.type === "trainer" ? (
				<NonCommunityTrainerScreen />
			) : (
				/*@ts-ignore @ts-expect-error Server Component */
				<NonCommunityMemberScreen />
			)}
		</>
	);
};

export default NonCommunityScreen;
