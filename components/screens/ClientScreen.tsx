import Image from 'next/image'
import React from 'react'
import { Workout } from '../Workout'

export const ClientScreen = () => {
  return (
    <main className="bg-secondary flex flex-col gap-8">
        <header className="flex justify-between p-6">
            <div className="greetings">
                <p className="font-bold text-3xl">Hi Nacho,</p>
                <p className="font-semibold text-xl">Monday 12, December</p>
            </div>
            <Image className="rounded-full" src="https://pbs.twimg.com/profile_images/1610648722542661635/Pcps1_zG_400x400.jpg" alt="fortys" width={64} height={64}/>
        </header>

        <section className="workout flex flex-col gap-2 p-6">
            <p className="font-bold text-3xl">Your work for today</p>
            <div className="h-60 relative overflow-hidden before:w-full before:h-full before:absolute before:left-0 before:top-0 before:bg-gradient-to-t before:from-white before:pointer-events-none">
                <Workout></Workout>
            </div>

            <button className="bg-primary text-white font-bold rounded-lg py-2 w-32 mx-auto">Show +</button>
        </section>

        <section className="flex flex-col gap-4">
            <div className="ml-6">
                <p className="font-bold text-3xl">This week so far</p>
                <p className="font-semibold text-xl">Keep up the good work</p>
            </div>

            <div className="resume flex justify-between bg-primary text-secondary px-6 py-8 text-lg">
                <div className="flex flex-col items-center justify-center">
                    <p className="font-bold">3</p>
                    <p>sessions</p>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <p className="font-bold">+25%</p>
                    <p>kgs moved</p>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <p className="font-bold">-500g</p>
                    <p>lost</p>
                </div>
            </div>
        </section>

        <section className="chart p-6">
            <p className="text-3xl font-bold">Your Progress</p>
            <div className="border w-full h-96 mx-auto"></div>
        </section>
    </main>
  )
}
