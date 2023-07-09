'use client'

import React, { FC, useReducer } from 'react'
import { UserContext, userReducer } from '.';
import { RegisterUser, User } from '../../interfaces/user';
import axios from 'axios';

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
const API_URL = 'https://communifit-back.vercel.app/api/v1';

export default function UserProvider ({ children }: { children: React.ReactNode }) {

   const [state, dispatch] = useReducer(userReducer, USER_INITIAL_STATE);

   const register = async(user: RegisterUser) => {

    // Register Logic Here
    const { data } = await axios.post(`${API_URL}/users`, user, { headers: {'api-key': '123'} });
    console.log({data})

    dispatch({
        type: '[USER] Login',
        payload: user
    });
   }

   const login = async(email: string, password: string) => {

    // Login Logic Here
    const { data } = await axios.post(`${API_URL}/users`, { email, password });
    const { user } = data;
    
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