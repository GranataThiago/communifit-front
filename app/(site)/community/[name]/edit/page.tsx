import CreateCommunityForm from "../../components/CreateCommunityForm";
import { IGetCommunityFetch } from "../../../../../interfaces/services/community/community-page";
import React from "react";
import { cookies } from "next/headers";
import { getCommunityData } from "../../../../../services/community/community-page";

const getCommunity = async ({
	token,
	name,
}: {
	token: string;
	name: string;
}): Promise<IGetCommunityFetch | null> => {
	try {
		const response = await getCommunityData({ token, name });
		if (response) {
			return response;
		}
		return null;
	} catch (error) {
		console.error(error);
		throw new Error("Error at getCommunity");
	}
};

const EditCommunityPage = async ({ params }: { params: { name: string } }) => {
	const { name } = params;
	const cookieStore = cookies();
	const token = cookieStore.get("token")!.value;
	const communityData: IGetCommunityFetch | null = await getCommunity({
		token,
		name,
	});
	return (
		<CreateCommunityForm isEdit={true} community={communityData?.community} />
	);
};

export default EditCommunityPage;
