import { IMinimumUserInfo } from "../../../../interfaces/user";
import { NonCommunityTrainerScreen } from "../components/screens";
import React from "react";
import { cookies } from "next/headers";
import { getAuthenticatedUser } from "../../../../helpers";
import { redirect } from "next/navigation";

const CommunityPageTrainer = async () => {
	const cookieStore = cookies();
	const user: IMinimumUserInfo = await getAuthenticatedUser(
		cookieStore.get("token")!.value
	);
	if (!user) return redirect("/");
	if (user.type !== "trainer") return redirect("/community");
	if (user.community) return redirect(`/community/${user.community.name}`);
	return <NonCommunityTrainerScreen />;
};

export default CommunityPageTrainer;
