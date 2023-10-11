import Image from 'next/image'
import React from 'react'
import { Workout } from "../Workout/Workout";
import { WorkoutActions } from "../WorkoutActions/WorkoutActions";
import { montserrat } from '../../../components/fonts';

export const PlanScreen = () => {

  return (
    <main className={`bg-secondary flex flex-col gap-8 ${montserrat.className}`}>
        <header className="flex justify-between p-6">
            <div className="greetings">
                <p className="font-bold text-3xl">Client Plan</p>
                <p className="font-semibold text-xl">Emanuel Pantone</p>
            </div>
            <Image className="rounded-full" src="https://i.pravatar.cc/300" alt="fortys" width={64} height={64}/>
        </header>

        <section className='grid grid-cols-2 grid-rows-1 gap-4 text-white font-bold px-6'>
            <div className='bg-primary flex flex-col items-center justify-center py-6 rounded-lg'>
                <p className=''>
                    18
                </p>
                <span>years old</span>
            </div>
            <div className='bg-primary  flex flex-col items-center justify-center py-6 rounded-lg'>
                <p className=''>
                    78kg
                </p>
                <span>weight</span>
            </div>
            <div className='bg-primary  flex flex-col items-center justify-center py-6 rounded-lg'>
                <p className=''>
                    Shred
                </p>
                <span>Objective</span>
            </div>

            <div className='bg-primary  flex flex-col items-center justify-center py-6 rounded-lg'>
                <p className=''>
                    More
                </p>
            </div>
        </section>

        <section className="flex flex-col gap-4">
            <div className="ml-6">
                <p className="font-bold text-3xl">Progress this week</p>
            </div>

            <div className="resume flex justify-between bg-primary text-secondary px-6 py-8 text-lg">
                <div className="flex flex-col items-center justify-center">
                    <p className="font-bold">2000</p>
                    <p>kcal average</p>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <p className="font-bold">200g</p>
                    <p>lost</p>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <p className="font-bold">4</p>
                    <p>sessions</p>
                </div>
            </div>
        </section>

        <section  className="p-6">
            <p className="font-bold text-3xl">Workout</p>
            <Workout />
        </section>

        <footer  className="p-6 mb-8">
            <WorkoutActions />
        </footer>
    </main>
  )
}
