import { ICommunities } from "../../interfaces";
import { getCommunities } from "./community-page";

export const getListedCommunities = async (
    token: string
  ): Promise<ICommunities[] | null> => {
    try {
      const response: ICommunities[] | null = await getCommunities({ token });
  
      if (!response) return null;
  
      return response;
    } catch (error) {
      console.error(error);
      return null;
    }
};