import apiInstance from "../../app/api";
import { Community } from "../../interfaces/community";
import { CreateCommunity, CreateCommunityResponse } from "../../interfaces/services/community/create-community";

interface ICreateCommunity{
    token: string,
    newCommunity: CreateCommunity
}

export const createCommunity = async({ token, newCommunity }: ICreateCommunity): Promise<CreateCommunityResponse> => {
    let community: CreateCommunityResponse = null;
    try{
        const response = await apiInstance.post('/communities', newCommunity, { headers: { token: token }})
        community = response.data;
    }catch(err){
        console.log(err)
    }
  
    return community
}
