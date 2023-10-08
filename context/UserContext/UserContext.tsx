'use client'

import { createContext, useContext } from 'react';
import { RegisterUser, User } from '../../interfaces/user';

interface ContextProps{
    token: string | null,
    user: User | null,
    register: (user: RegisterUser) => void
    login: (email: string, password: string) => Promise<boolean>,
    validateUser: (token: string) => void,
    updateUser: (updatedUser: User) => boolean,
    logout: () => boolean,
}

export const UserContext = createContext<ContextProps>({} as ContextProps);

export const useUserContext = () => useContext(UserContext);