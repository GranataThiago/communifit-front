"use client";

import { RegisterUser, User } from "../../interfaces/user";
import { createContext, useContext } from "react";

import { LoginUserResponse } from "../../interfaces";

interface ContextProps {
	token: string | null;
	user: User | null;
	register: (user: RegisterUser) => Promise<boolean | string>;
	login: (email: string, password: string) => Promise<LoginUserResponse>;
	decryptUserData: (token: string) => Promise<boolean | string>;
	logout: () => boolean;
}

export const UserContext = createContext<ContextProps>({} as ContextProps);

export const useUserContext = () => useContext(UserContext);
