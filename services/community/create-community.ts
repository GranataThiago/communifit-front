import apiInstance from "../../app/api";
import { GetInvitationLinkResponse } from "../../interfaces/services/community/community-page";
import {
  CreateCommunity,
  CreateCommunityResponse,
} from "../../interfaces/services/community/create-community";

interface ICreateCommunity {
  token: string;
  newCommunity: CreateCommunity;
}

export const createCommunity = async ({
  token,
  newCommunity,
}: ICreateCommunity): Promise<CreateCommunityResponse> => {
  let community: CreateCommunityResponse = null;
  try {
    const response = await apiInstance.post("/communities", newCommunity, {
      headers: { token: token },
    });
    community = response.data;
  } catch (err) {
    console.log(err);
  }

  return community;
};

interface IGetInvitationLink {
  token: string;
  communityName: string;
}

export const getInvitationLink = async ({
  token,
  communityName,
}: IGetInvitationLink): Promise<GetInvitationLinkResponse> => {
  let invitationLink: GetInvitationLinkResponse = null;

  try {
    const response = await apiInstance.post(
      "/communities/invitation",
      { name: communityName },
      { headers: { token } },
    );
    invitationLink = response.data;
  } catch (err) {
    console.log(err);
  }

  return invitationLink;
};
