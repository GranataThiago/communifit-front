import { IMinimumUserInfo } from "../../../../../interfaces/user";
import { NonCommunityMemberScreen } from "./NonCommunityMemberScreen";
import { NonCommunityTrainerScreen } from "./NonCommunityTrainerScreen";
import React from "react";
import { cookies } from "next/headers";
import { getAuthenticatedUser } from "../../../../../helpers";
import { redirect } from "next/navigation";

const NonCommunityScreen = async () => {
	const cookieStore = cookies();
	const user: IMinimumUserInfo = await getAuthenticatedUser(
		cookieStore.get("token")!.value
	);
	if (!user) redirect("/");

	return (
		<>
			{user && user.type === "trainer" ? (
				<NonCommunityTrainerScreen />
			) : (
				/*@ts-ignore @ts-expect-error Server Component */
				<NonCommunityMemberScreen community={user.community} />
			)}
		</>
	);
};

export default NonCommunityScreen;
