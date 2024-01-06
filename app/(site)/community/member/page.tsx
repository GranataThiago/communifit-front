import { ICommunity } from "../../../../interfaces";
import { IGetAllCommunity } from "../../../../interfaces/services/community/community-page";
import { IMinimumUserInfo } from "../../../../interfaces/user";
import { NonCommunityMemberScreen } from "../components/screens";
import React from "react";
import { cookies } from "next/headers";
import { getAuthenticatedUser } from "../../../../helpers";
import { getCommunities } from "../../../../services/community/community-page";
import { redirect } from "next/navigation";

const getListCommunities = async (
	token: string
): Promise<ICommunity[] | null> => {
	try {
		const response: ICommunity[] | null = await getCommunities({ token });

		if (!response) return null;

		return response;
	} catch (error) {
		console.error(error);
		return null;
	}
};

const CommunityPageMember = async () => {
	const cookieStore = cookies();
	const token = cookieStore.get("token")!.value;
	const user: IMinimumUserInfo = await getAuthenticatedUser(token);
	if (!user) return redirect("/");
	if (user.type !== "member") return redirect("/community");

	const listCommunities: ICommunity[] | null = await getListCommunities(token);

	return (
		<NonCommunityMemberScreen
			community={user.community ? user.community : null}
			communities={listCommunities}
		/>
	);
};

export default CommunityPageMember;
