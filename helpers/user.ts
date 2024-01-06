import { CommunityEssential } from "../interfaces";
import { API_KEY, API_URL } from "../utils";

export const getAuthenticatedUser = async(token: string) => {
    const requestDecrypt: any = await fetch(`${API_URL}/auth/decrypt`, {
        method: "GET",
        headers: {
          token: token as string,
          "api-key": API_KEY as string,
        },
      });
      const foundUserData = await requestDecrypt.json();
      
      let SAFE_USER_DATA: any = {
        _id: foundUserData.user._id,
        fullName: foundUserData.user.fullname,
        username: foundUserData.user.username,
        type: foundUserData.user.type,
        community: null
    
      }
    
      if (foundUserData.user.community) {
        const community: CommunityEssential = {
          name: foundUserData.user.community.name,
          displayname: foundUserData.user.community.displayname,
          description: foundUserData.user.community.description
        }
        SAFE_USER_DATA["community"] = community;
      }

      return SAFE_USER_DATA
}