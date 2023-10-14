export interface ILoginUserFetch {
  ok: boolean;
  token: string;
}

export interface ILoginUserFetchFail {
	ok: boolean;
	message: string;
}

export type LoginUserResponse = ILoginUserFetchFail | ILoginUserFetch;
