import { IMinimumUserInfo } from "../../../../interfaces/user";
import { NonCommunityMemberScreen } from "../components/screens";
import React from "react";
import { cookies } from "next/headers";
import { getAuthenticatedUser } from "../../../../helpers";
import { redirect } from "next/navigation";

const CommunityPageMember = async () => {
	const cookieStore = cookies();
	const user: IMinimumUserInfo = await getAuthenticatedUser(
		cookieStore.get("token")!.value
	);
	if (!user) return redirect("/");
	if (user.type !== "member") return redirect("/community");
	return (
		<NonCommunityMemberScreen
			community={user.community ? user.community : null}
		/>
	);
};

export default CommunityPageMember;
