import { ICommunity } from "../../community";

export interface UpsertCommunity {
	_id?: string;  //Needed for update.
	name?: string;
	displayName: string;
	description: string;
	adminId?: number;
}

export interface IUpsertCommunityFetch {
  ok: boolean;
  community: ICommunity;
}

export type UpsertCommunityResponse = null | IUpsertCommunityFetch;
