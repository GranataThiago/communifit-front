"use client";

import { createContext, useContext } from "react";

import { CreateUserReturn, LoginUserResponse } from "../../interfaces";
import { IRegisterUser, IUser } from "../../interfaces/user";

interface ContextProps {
	token: string | null;
	user: IUser | null;
	register: (user: IRegisterUser) => Promise<CreateUserReturn>;
	login: (email: string, password: string) => Promise<LoginUserResponse>;
	decryptUserData: (token: string) => void;
	logout: () => boolean;
}

export const UserContext = createContext<ContextProps>({} as ContextProps);

export const useUserContext = () => useContext(UserContext);
