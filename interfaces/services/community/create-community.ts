import { ICommunity } from "../../community";

export interface CreateCommunity {
  name?: string;
  displayName: string;
  description: string;
  adminId?: string;
}

export interface ICreateCommunityFetch {
  ok: boolean;
  community: ICommunity;
}

export type CreateCommunityResponse = null | ICreateCommunityFetch;
