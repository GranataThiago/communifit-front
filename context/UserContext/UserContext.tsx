'use client'

import { createContext, useContext } from 'react';
import { User } from '../../interfaces/user';

interface ContextProps{
    isLogged: boolean;
    user: User,
    register: (user: User) => void
    login: (user: User) => void
}

export const UserContext = createContext<ContextProps>({} as ContextProps);

export const useUserContext = () => useContext(UserContext);