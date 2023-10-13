import { User } from "../../../user";

export interface IDecryptUserFetch {
  ok: boolean;
  user: User;
}

export type DecryptUserResponse = null | IDecryptUserFetch;
