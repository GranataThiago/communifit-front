'use client'

import React, { FC, useEffect, useReducer } from 'react'
import { UserContext, userReducer } from '.';
import { RegisterUser, User } from '../../interfaces/user';
import { useCookies } from 'react-cookie';
import apiInstance from '../../app/api';
import { addDays } from 'date-fns';

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
    const [cookies, setCookie, removeCookie] = useCookies(['token']);

    useEffect(() => {
        validateUser();
    }, [])

    const register = async(user: RegisterUser) => {
        try{
            const { objective, ...newUser } = user;
            const { data } = await apiInstance.post(`/users`, newUser);

            dispatch({ type: '[USER] Login', payload: {token: data, user: {...user, image: 'asd'}} });
        }catch(err){
            console.log(err)
            return;
        }
   }

   const login = async(email: string, password: string): Promise<boolean> => {
        try{
            const { data: { token } } = await apiInstance.post(`/auth/login`, { email, password });

            if(!token) return false;

            // localStorage.setItem('token', token);
            setCookie('token', token, {
                path: '/'
            });
            

            const { data: { user } } = await apiInstance.get(`/auth/decrypt`, { headers: { token }});

            dispatch({ type: '[USER] Login', payload: {user, token} });

            return true;
        }catch(err)
        {
            // localStorage.removeItem('token');
            removeCookie('token');
            return false;
        }
   }

   const validateUser = async() => {
        try{
            const { token } = cookies;

            if(!token) return;
        
            const { data } = await apiInstance.get(`/auth/decrypt`, { 
                headers: {
                    token
                }
            });
                
            dispatch({
                type: '[USER] Login',
                payload: { token, user: data.user }
            });
        }catch(err){
            console.log(err);
            // localStorage.removeItem('token');
            removeCookie('token');
            return;
        }
   }

   const logout = () => {
    dispatch({type: '[USER] Logout'});
   }

   return (
       <UserContext.Provider value={{
        ...state,
        login,
        register,
        validateUser,
        logout
       }}>
           {children}
       </UserContext.Provider>
   )
}