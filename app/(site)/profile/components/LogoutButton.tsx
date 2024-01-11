'use client'
import React from 'react'
import { Button } from '../../../components/ui/button'
import useLoader from '../../../hooks/loader/useLoader';
import logout from '../actions/logout';
import { LoaderSpinner } from '../../../components/LoaderSpinner';
import { cn } from '../../../lib/utils';

const LogoutButton = () => {

    const {isLoading, setIsLoading} = useLoader();

    const handleLogout = async() => {
        setIsLoading(true);
        await logout()
        setIsLoading(false);
    }

  return (
    <Button  disabled={isLoading} className={cn( 'bg-red-500 text-surface-light w-full flex-1 mt-10 mb-20' )} variant={'filled'} type="submit" onClick={handleLogout}>
    {
        isLoading
        ? 
        <>
            <span className="sr-only">Loggin out</span>
            <LoaderSpinner />
        </>
        : 'Logout'
    }
    </Button>
    
  )
}

export default LogoutButton