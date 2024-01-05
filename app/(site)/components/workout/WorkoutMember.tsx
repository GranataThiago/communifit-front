import React from 'react'
import WorkoutContainer from './WorkoutContainer'
import { montserrat } from '../../../components'
import { IUser } from '../../../../interfaces/user'
import { getUserExercises } from '../../../../services/plan'

const WorkoutMember = async({user}: {user: IUser}) => {
  const exercises = await getUserExercises({userId: user._id!});
  return (
    <section className={`workout flex flex-col gap-2 pb-6 ${montserrat.className}`}>
        <WorkoutContainer user={user} exercises={exercises} />
    </section>
  )
}

export default WorkoutMember