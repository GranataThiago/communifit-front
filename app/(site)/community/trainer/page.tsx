import { IMinimumUserInfo } from "../../../../interfaces/user";
import { NonCommunityTrainerScreen } from "../components/screens";
import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const CommunityPageTrainer = async () => {
	const cookieStore = cookies();
	const user: IMinimumUserInfo = JSON.parse(cookieStore.get('user')!.value);
	if (!user) return redirect("/");
	if (user.type !== "trainer") return redirect("/community");
	if (user.community) return redirect(`/community/${user.community.name}`);
	return <NonCommunityTrainerScreen user={user} />;
};

export default CommunityPageTrainer;
