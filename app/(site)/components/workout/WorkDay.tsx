
import Link from 'next/link'
import React from 'react'
import { poppins } from '../../../components'
import WorkoutContainer from './WorkoutContainer'
import { Button } from '../../../components/ui/button'
import { IUser } from '../../../../interfaces/user'
import { IExercise } from '../../../../interfaces/exercises'

interface WorkDayProps{
    user: IUser;
    exercise: IExercise;
} 

const WorkDay = ({ user, exercise }: WorkDayProps) => {
  return (
    <>
        <h2 className={`${poppins.className} font-bold text-3xl text-surface-light`}>Today's work</h2>
        <div>
            <WorkoutContainer user={user} exercise={exercise} />
        </div>

        <Button>Show Workout</Button>
    </>
  )
}

export default WorkDay