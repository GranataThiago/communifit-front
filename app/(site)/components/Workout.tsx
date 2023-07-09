import React from 'react'
import { montserrat } from '../../components/fonts'

export const Workout = () => {
  return (
    <section className={`workout flex flex-col gap-2 ${montserrat.className}`}>
        <ul className="flex gap-3">
            <li className="font-normal text-black">Monday</li>
            <li className="font-normal text-gray-300">Tuesday</li>
            <li className="font-normal text-gray-300">Wednesday</li>
            <li className="font-normal text-gray-300">Thursday</li>
            <li className="font-normal text-gray-300">Friday</li>
            <li className="font-normal text-gray-300">Saturday</li>
            <li className="font-normal text-gray-300">Sunday</li>
        </ul>

        <ul className="">
            <li className="border border-gray-300 rounded-md p-2 flex justify-between items-center">
                <p className="flex flex-col">
                    Squat
                    <span>4x4</span>
                </p>

                <p>180lbs</p>
            </li>

            <li className="border border-gray-300 rounded-md p-2 flex justify-between items-center">
                <p className="flex flex-col">
                    DB Lunges
                    <span>3x10/12</span>
                </p>

                <p>45lbs</p>
            </li>

            <li className="border border-gray-300 rounded-md p-2 flex justify-between items-center">
                <p className="flex flex-col">
                    Hip Thrust
                    <span>3x12-15</span>
                </p>

                <p>200lbs</p>
            </li>

            <li className="border border-gray-300 rounded-md p-2 flex justify-between items-center">
                <p className="flex flex-col">
                    DB Romanian Deadlift
                    <span>4x10-12</span>
                </p>

                <p>45lbs</p>
            </li>
        </ul>
    </section>
  )
}
