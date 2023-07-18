"use client"
import React from 'react'
import { montserrat } from '../../components/fonts'
import { Button } from '../../components/Button';
import useWorkoutModal from '../../hooks/modals/useWorkoutModal';
import { useUserContext } from '../../../context/UserContext';

export const Workout = () => {

    const workoutModal = useWorkoutModal();
    const { user } = useUserContext();

    return (
        <section className={`workout flex flex-col gap-2 ${montserrat.className}`}>
            <ul className="flex gap-3 overflow-x-scroll no-scrollbar">
                <li className="font-normal text-black">Monday</li>
                <li className="font-normal text-gray-300">Tuesday</li>
                <li className="font-normal text-gray-300">Wednesday</li>
                <li className="font-normal text-gray-300">Thursday</li>
                <li className="font-normal text-gray-300">Friday</li>
                <li className="font-normal text-gray-300">Saturday</li>
                <li className="font-normal text-gray-300">Sunday</li>
            </ul>

            {user?.type == 'trainer' && <Button variant='filled' className='py-2 w-1/3 ml-auto' onClick={workoutModal.onOpen}>Add</Button> /* TODO: Check if its owner or authorized trainer from community */ } 

            <ul className="">
                <li className="border border-gray-300 rounded-md p-2 flex justify-between items-center">
                    <p className="flex flex-col">
                        Squat
                        <span>4x4</span>
                    </p>

                    <p>180lbs</p>
                </li>

            </ul>
        </section>
    )
}
