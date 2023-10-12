import React from "react";
import { cookies } from "next/headers";
import { Community } from "../../../../interfaces/community";
import apiInstance from "../../../api";
import CommunityScreen from "../components/screens/CommunityScreen";
import { NonCommunityScreen } from "../components/screens/NonCommunityScreen";

const getCommunity = async (): Promise<Community> => {
	const cookieStore = cookies();
	const {
		data: { community },
	} = await apiInstance.get("/communities/gorillas", {
		headers: { token: cookieStore.get("token")?.value },
	});
	const { data, request } = await apiInstance.get(
		"/communities/gorillas/posts?page=1",
		{ headers: { token: cookieStore.get("token")?.value } }
	);
	const { posts, totalPages, totalResults } = data;
	return {
		posts: [...posts],
		image: "",
		name: community.displayname,
		description: community.description,
		displayname: community.displayname,
	};
};

export default async function CommunityPage({ params, searchParams }: any) {
	const community: Community = await getCommunity();

	return (
		<>
			{community ? (
				<CommunityScreen {...community} />
			) : (
				//@ts-ignore @ts-expect-error Server Component
				<NonCommunityScreen />
			)}
		</>
	);
}
