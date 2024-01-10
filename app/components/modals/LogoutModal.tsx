'use client'

import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "../ui/dialog";
import { LoaderSpinner } from '../LoaderSpinner'
import { Button } from '../ui/button'
import React from 'react'
import useLoader from '../../hooks/loader/useLoader'
import logout from '../../(site)/profile/actions/logout'
import { cn } from "../../lib/utils";
import { montserrat, poppins } from "../fonts";

const LogoutModal = () => {

    const {isLoading, setIsLoading} = useLoader();

    const handleLogout = async() => {
        setIsLoading(true);
        await logout()
        setIsLoading(false);
    }

  return (
    <Dialog>
        <DialogTrigger asChild>
            <Button className="mt-10 mb-20 bg-red-500 text-surface-light" variant={'filled'}>Logout</Button>
        </DialogTrigger>
        <DialogContent className={`sm:max-w-[425px] rounded-xl ${montserrat.className}`}>
            <DialogHeader className='text-surface-light'>
                <DialogTitle className={`text-3xl font-bold ${poppins.className}`}>Logout</DialogTitle>
                <DialogDescription className={`font-regular marker:text-lg text-surface-dark pt-8 pb-4 text-center`}>
                        You will be returned to the login screen.
                </DialogDescription>
            </DialogHeader>
            <DialogFooter className="flex-col sm:flex-col">
                <hr className="my-2 bg-secondary-light rounded-xl"/>
                <div className="flex flex-row gap-2">
                    <DialogClose className="flex-1 border border-surface-light rounded-xl">
                        Cancel
                    </DialogClose>
                    <Button  disabled={isLoading} className={cn( 'bg-red-500 text-surface-light w-auto flex-1' )} variant={'filled'} type="submit" onClick={handleLogout}>
                        {
                            isLoading
                            ? 
                            <>
                                <span className="sr-only">Loggin out</span>
                                <LoaderSpinner />
                            </>
                            : 'Yes'
                        }
                    </Button>
                </div>
            </DialogFooter>
        </DialogContent>
    </Dialog>
  )
}

export default LogoutModal