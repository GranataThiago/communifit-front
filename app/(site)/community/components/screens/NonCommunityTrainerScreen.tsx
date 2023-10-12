"use client"

import React from 'react'
import { montserrat } from '../../../../components/fonts'
import { Button, Input } from '../../../../components'

export const NonCommunityTrainerScreen = () => {
  return (
    <section className={`flex flex-col justify-between items-center w-full p-12 ${montserrat.className}` }>
        <header className="grid place-items-center">
            <h1 className={`text-4xl font-bold mb-4 `}>Hello, Trainer</h1>
            <p className={`text-center`}>Looks like you dont belong to any community yet...</p>
        </header>
        <main className="mt-8 flex items-center justify-center flex-col">
            <p className={`font-semibold mb-2`}>Start by</p>
            <a href="/community/create" className="w-full">
                <Button variant='filled' type='button'>Create one</Button>
            </a>
            <div className="w-full flex items-center justify-center my-2">
                <hr className="w-full border-t border-gray-300"/>
                <p className="w-full text-center font-semibold px-1">or</p>
                <hr className="w-full border-t border-gray-300"/>
            </div>
            <div>
                <Input className="mb-2" name="code" type="text" variant="outlined" placeholder="Code..."/>
                <Button variant='filled' type='button'>Join with Code</Button>
            </div>
        </main>
    </section>
  )
}
