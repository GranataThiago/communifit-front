import {
	GetAllCommunities,
	GetCommunityPostsResponse,
	GetCommunityResponse,
	IGetAllCommunity,
	IGetCommunityFetch,
	IGetCommunityPostsFetch,
} from "../../interfaces/services/community/community-page";

import { ICommunity } from "../../interfaces";
import apiInstance from "../../app/api";

interface IGetCommunity {
	token: string;
	name: string;
}

export const getCommunities = async ({
	token,
}: {
	token: string;
}): Promise<ICommunity[] | null> => {
	let community: ICommunity[] | null = null;
	try {
		const response = await apiInstance.get<IGetAllCommunity>(
			`/communities/list`,
			{ headers: { token } }
		);
		community = response.data.communities;
	} catch (err) {
		console.log(err);
	}

	return community;
};

export const getCommunityData = async ({
	token,
	name,
}: IGetCommunity): Promise<GetCommunityResponse> => {
	let community: GetCommunityResponse = null;
	try {
		const response = await apiInstance.get<IGetCommunityFetch>(
			`/communities/${name}`,
			{ headers: { token } }
		);
		community = response.data;
	} catch (err) {
		console.log(err);
	}

	return community;
};

export const getCommunityPosts = async ({
	token,
	name,
}: IGetCommunity): Promise<GetCommunityPostsResponse> => {
	let posts: GetCommunityPostsResponse = null;
	try {
		const responsePosts = await apiInstance.get<IGetCommunityPostsFetch>(
			`/communities/${name}/posts?page=1`,
			{ headers: { token } }
		);
		posts = responsePosts.data;
	} catch (err) {
		console.log(err);
	}

	return posts;
};
