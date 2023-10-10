import { Community } from "../../community";


export interface CreateCommunity{
    name?: string;
    displayName: string;
    description: string;
    adminId?: string;
}

export interface ICreateCommunityFetch {
    ok: boolean;
    community: Community
}

export type CreateCommunityResponse = null | ICreateCommunityFetch