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

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export default function UserProvider ({ children }: { children: React.ReactNode }) {

    const [state, dispatch] = useReducer(userReducer, USER_INITIAL_STATE);

    const register = async(user: RegisterUser) => {
        try{
            const {objective, ...newUser} = user;

            const { data, status, request } = await axios.post(`${API_URL}/users`, newUser, { headers: {'api-key': API_KEY} });
            dispatch({
                type: '[USER] Login',
                payload: {...user, image: USER_INITIAL_STATE.user.image}
            });
        }catch(err){
            console.log(err)
        }
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