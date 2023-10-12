import apiInstance from "../../app/api";
import { IGetCommunityFetch, GetCommunityResponse, GetCommunityPostsResponse, IGetCommunityPostsFetch } from '../../interfaces/services/community/community-page';

interface IGetCommunity{
    token: string
    name: string
}

export const getCommunityData = async({ token, name }: IGetCommunity): Promise<GetCommunityResponse> => {
    let community: GetCommunityResponse = null;
    try{
        const response = await apiInstance.get<IGetCommunityFetch>(`/communities/${name}`, { headers: { token }});
        community = response.data;
    }catch(err){
        console.log(err)
    }
  
    return community
}

export const getCommunityPosts = async({ token, name }: IGetCommunity): Promise<GetCommunityPostsResponse> => {
    let posts: GetCommunityPostsResponse = null;
    try{
        const responsePosts = await apiInstance.get<IGetCommunityPostsFetch>(`/communities/${name}/posts?page=1`, { headers: { token }});
        posts = responsePosts.data;
    }catch(err){
        console.log(err)
    }
  
    return posts
}