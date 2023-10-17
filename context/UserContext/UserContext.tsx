"use client";

import { createContext, useContext } from "react";
import { RegisterUser, User } from "../../interfaces/user";
import { CreateUserReturn } from "../../interfaces";

interface ContextProps {
  token: string | null;
  user: User | null;
  register: (user: RegisterUser) => Promise<CreateUserReturn>;
  login: (email: string, password: string) => Promise<boolean>;
  decryptUserData: (token: string) => void;
  logout: () => boolean;
}

export const UserContext = createContext<ContextProps>({} as ContextProps);

export const useUserContext = () => useContext(UserContext);
