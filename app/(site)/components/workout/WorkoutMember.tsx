import React from 'react'
import WorkoutContainer from './WorkoutContainer'
import { montserrat } from '../../../components'
import { IUser } from '../../../../interfaces/user'
import { getUserExercises } from '../../../../services/plan'

const WorkoutMember = async({user}: {user: IUser}) => {
  //Todo, traer la fecha del servidor y enviarla como param al endpoint. Esto nos va a salvar de usar un estado clientside. Enviarlo por el fetch como ?day=DIA. -> monday, tuesday, ...
  const exercise = await getUserExercises({userId: user?._id!, quantity: 1});
  return (
    <section className={`workout flex flex-col gap-2 pb-6 ${montserrat.className}`}>
        <WorkoutContainer user={user} exercise={exercise} />
    </section>
  )
}

export default WorkoutMember