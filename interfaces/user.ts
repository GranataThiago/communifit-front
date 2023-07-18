import { Community } from "./community";

export interface User{
    fullname: string;
    username: string;
    email: string;
    image: string;
    type: UserTypes;
    community?: Community;
}

export interface RegisterUser{
    birthdate: Date;
    username: string;
    gender: string;
    password: string;
    type: UserTypes;
    fullname: string;
    email: string;
    objective?: string,
}

export type UserTypes = 'member'|'trainer';