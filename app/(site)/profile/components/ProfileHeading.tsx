"use client"
import React from 'react'
import { Button } from '../../../components'
import { BiLogOut } from 'react-icons/bi'
import { useUserContext } from '../../../../context/UserContext'

export const ProfileHeading = () => {

  const { user, logout } = useUserContext();

  const onLogout = () => {
    logout();
    window.location.assign('/auth/login');
  }

  return (
    <header className='flex justify-between p-6'>
      <div>
        <p className='font-semibold text-lg'>{user?.fullname}</p>
        <p>{user?.username}</p>
      </div>
      <Button
        variant='filled'
        className='bg-red-500 w-12 h-12'
        onClick={onLogout}
      >
        <BiLogOut size={24} className='ml-2'/>
      </Button>
    </header>
  )
}
