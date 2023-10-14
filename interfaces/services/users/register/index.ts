export type ICreateUserResponse = null | ICreateUserFetch;

export interface ICreateUserFetch {
  ok: boolean;
  token: string;
}
