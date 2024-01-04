import { CommunityEssential } from "./community";

export interface User {
  fullName: string;
  username: string;
  email: string;
  image?: string | null;
  type: UserTypes;
  community?: CommunityEssential;
  _id?: string;
}

export interface RegisterUser {
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
