export interface ILoginUserFetch {
	ok: boolean;
	message?: string;
	token?: string;
}

export type LoginUserResponse = ILoginUserFetch | null;
