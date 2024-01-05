import { CommunityEssential } from "./community";

export interface IUser {
  fullName: string;
  username: string;
  email: string;
  image?: string | null;
  type: UserTypes;
  community?: CommunityEssential;
  _id?: string;
}

export interface IRegisterUser {
  birthdate: Date;
  username: string;
  gender: string;
  password: string;
  type: UserTypes;
  fullName: string;
  email: string;
  objective?: string;
}

export type UserTypes = "member" | "trainer" | null;
