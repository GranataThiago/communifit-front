'use client'

import React, { FC, useReducer } from 'react'
import { UserContext, userReducer } from '.';
import { User } from '../../interfaces/user';

export interface UserState{
    isLogged: boolean;
    user: User
}

const USER_INITIAL_STATE: UserState = {
    isLogged: false,
    user: {
        fullName: 'Thiago Granata',
        email: 'granatathiago@gmail.com',
        image: 'https://www.tmgranata.com/assets/profile-picture.jfif'
    }
}

export default function UserProvider ({ children }: { children: React.ReactNode }) {

   const [state, dispatch] = useReducer(userReducer, USER_INITIAL_STATE);

   const register = (user: User) => {

    // Register Logic Here

    dispatch({
        type: '[USER] Login',
        payload: user
    });
   }

   const login = (user: User) => {

    // Login Logic Here

    dispatch({
        type: '[USER] Login',
        payload: user
    });
   }



   return (
       <UserContext.Provider value={{
        ...state,
        login,
        register
       }}>
           {children}
       </UserContext.Provider>
   )
}