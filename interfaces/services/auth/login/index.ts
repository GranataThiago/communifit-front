export interface ILoginUserFetch {
  ok: boolean;
  token: string;
}

export type LoginUserResponse = null | ILoginUserFetch;
