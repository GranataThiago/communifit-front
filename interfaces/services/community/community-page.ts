import { Community, Post } from "../../community";

export interface IGetCommunityFetch {
  ok: boolean;
  community: Community;
}

export type GetCommunityResponse = null | IGetCommunityFetch;

export interface IGetCommunityPostsFetch {
  ok: boolean;
  posts: Post[] | [];
  totalPages: number;
  totalResults: number;
}

export type GetCommunityPostsResponse = null | IGetCommunityPostsFetch;
