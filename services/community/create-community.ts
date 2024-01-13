import {
  CreateCommunity,
  UpsertCommunityResponse,
} from "../../interfaces/services/community/create-community";

import { GetInvitationLinkResponse } from "../../interfaces/services/community/community-page";
import apiInstance from "../../app/api";

interface IActionCommunity {
  token: string;
  community: CreateCommunity;
}



export const editCommunity = async ({
	token,
	community,
}: IActionCommunity): Promise<UpsertCommunityResponse> => {
	let updateCommunityResponse: UpsertCommunityResponse = null;
	try {
		const response = await apiInstance.put("/communities", community, {
			headers: { token: token },
		});
		updateCommunityResponse = response.data;
	} catch (err) {
		console.log(err);
	}

	return updateCommunityResponse;
};


export const createCommunity = async ({
  token,
  community,
}: IActionCommunity): Promise<UpsertCommunityResponse> => {
  let createCommunityResponse: UpsertCommunityResponse = null;
  try {
    const response = await apiInstance.post("/communities", community, {
      headers: { token: token },
    });
    createCommunityResponse = response.data;
  } catch (err) {
    console.log(err);
  }

  return createCommunityResponse;
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
