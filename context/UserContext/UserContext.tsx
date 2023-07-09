'use client'

import { createContext, useContext } from 'react';
import { RegisterUser, User } from '../../interfaces/user';

interface ContextProps{
    isLogged: boolean;
    user: User,
    register: (user: RegisterUser) => void
    login: (email: string, password: string) => void
}

export const UserContext = createContext<ContextProps>({} as ContextProps);

export const useUserContext = () => useContext(UserContext);