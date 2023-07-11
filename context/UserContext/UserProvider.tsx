'use client'

import React, { FC, useEffect, useReducer } from 'react'
import { UserContext, userReducer } from '.';
import { RegisterUser, User } from '../../interfaces/user';
import instance from '../../app/api';

export interface UserState{
    token: string | null;
    user: User | null
}

const USER_INITIAL_STATE: UserState = {
    token: null,
    user: null,
}


export default function UserProvider ({ children }: { children: React.ReactNode }) {

    const [state, dispatch] = useReducer(userReducer, USER_INITIAL_STATE);

    useEffect(() => {
        validateUser();
    }, [])

    const register = async(user: RegisterUser) => {
        try{
            const { objective, ...newUser } = user;
            const { data } = await instance.post(`/users`, newUser);

            dispatch({ type: '[USER] Login', payload: {token: data, user: {...user, image: 'asd'}} });
        }catch(err){
            console.log(err)
        }
   }

   const login = async(email: string, password: string): Promise<boolean> => {
        try{
            const { data: { token } } = await instance.post(`/auth/login`, { email, password });

            if(!token) return false;

            localStorage.setItem('token', token);

            const { data: { user } } = await instance.get(`/auth/decrypt`, { headers: { token }});

            dispatch({ type: '[USER] Login', payload: {user, token} });

            return true;
        }catch(err)
        {
            console.log(err)
            return false;
        }
   }

   const validateUser = async() => {
    const token = localStorage.getItem('token');

    if(!token) return;

    const { data } = await instance.get(`/auth/decrypt`, { 
        headers: {
            token
        }
    });

    console.log(data)

    dispatch({
        type: '[USER] Login',
        payload: { token, user: data.user }
    });
   }

   return (
       <UserContext.Provider value={{
        ...state,
        login,
        register,
        validateUser
       }}>
           {children}
       </UserContext.Provider>
   )
}