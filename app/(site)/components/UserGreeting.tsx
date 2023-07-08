'use client'

import { format } from 'date-fns';
import React from 'react'
import { useUserContext } from '../../../context/UserContext';
import { ImageWithFallback } from '../../components/ImageWithFallback';

export const UserGreeting = () => {

  const { user } = useUserContext();

  return (
    <>
        <div className="greetings">
            <p className="font-bold text-3xl">Hi {user.fullName},</p>
            <p className="font-semibold text-xl">{format(new Date(), 'EEEE dd, MMMM')}</p>
        </div>
        <ImageWithFallback className="rounded-full" src={user.image} alt="fortys" width={64} height={64}/>
    </>
  )
}
