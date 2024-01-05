import { IUser } from "../../../user";

export interface IDecryptUserFetch {
  ok: boolean;
  user: IUser;
}

export type DecryptUserResponse = null | IDecryptUserFetch;
