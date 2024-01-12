export type ICreateUserResponse = null | ICreateUserFetch;

export type CreateUserReturn = { ok: boolean; msg: string; status_code: string };

export interface ICreateUserFetch {
  ok: boolean;
  msg: string;
  status_code: string;
  token: string;
}
