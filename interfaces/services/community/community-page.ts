import { ICommunities, ICommunity, IPost } from "../../community";

export interface IGetCommunityFetch {
	ok: boolean;
	community: ICommunity;
}

export type GetCommunityResponse = null | IGetCommunityFetch;

export interface IGetCommunityPostsFetch {
	ok: boolean;
	posts: IPost[] | [];
	totalPages: number;
	totalResults: number;
}

export type GetCommunityPostsResponse = null | IGetCommunityPostsFetch;

export interface IGetInvitationLinkFetch {
	ok: boolean;
	link: string;
}

export type GetInvitationLinkResponse = null | IGetInvitationLinkFetch;

export interface IGetAllCommunity {
	ok: boolean;
	communities: ICommunities[];
}

export type GetAllCommunities = null | IGetAllCommunity;
