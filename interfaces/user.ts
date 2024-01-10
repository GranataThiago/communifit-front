import { CommunityEssential } from "./community";

export type UserTypes = "member" | "trainer" | null;

export interface IMinimumUserInfo {
	_id?: number;
	fullname: string;
	username: string;
	type: UserTypes;
	community?: CommunityEssential;
}

export interface IUser extends IMinimumUserInfo {
	email: string;
	image?: string | null;
}

export interface IRegisterUser {
  birthdate: Date;
  username: string;
  gender: string;
  password: string;
  type: UserTypes;
  fullname: string;
  email: string;
  objective?: string;
}

export interface ICardInfo {
  id: string;
  title: string;
  subtitle: string;
}