import {
  getCommunityData,
  getCommunityPosts,
} from "../../../../services/community/community-page";

import { CommunityScreen } from "../components/screens";
import { ICommunity } from "../../../../interfaces";
import { IMinimumUserInfo } from "../../../../interfaces/user";
import React from "react";
import { cookies } from "next/headers";
import { getAuthenticatedUser } from "../../../../helpers";
import { redirect } from "next/navigation";

interface CommunityPageParams {
  name: string;
}

interface CommunityPageProps {
  params: CommunityPageParams;
}

const getCommunity = async (
	name: string,
	token: string
): Promise<ICommunity | null> => {
	const communityData = await getCommunityData({ token, name });
	if (!communityData || !communityData.community) {
		return null;
	}

	const community = communityData.community;
	const postsData = await getCommunityPosts({ token, name });
	community.posts = postsData?.posts ? postsData.posts : [];

	return community;
};

export default async function CommunityPage({ params }: CommunityPageProps) {
	const { name } = params;
	const cookieStore = cookies();
	const token = cookieStore.get("token")!.value;
	const user: IMinimumUserInfo = await getAuthenticatedUser(token);
	const community: ICommunity | null = await getCommunity(name, token);
	if (!community) {
		redirect("/community");
	}

	return (
		/*@ts-ignore @ts-expect-error Server Component */
		<CommunityScreen user={user} community={community} />
	);
}
