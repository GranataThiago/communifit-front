export type ICreateUserResponse = null | ICreateUserFetch;

export type CreateUserReturn =
  | { ok: boolean }
  | { ok: boolean; error: string | unknown };

export interface ICreateUserFetch {
  ok: boolean;
  token: string;
}
