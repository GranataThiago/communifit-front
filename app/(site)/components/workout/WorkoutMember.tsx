import React from 'react'
import { montserrat } from '../../../components'
import { IUser } from '../../../../interfaces/user'
import { getUserExercises } from '../../../../services/plan'
import RestDay from './RestDay'
import WorkDay from './WorkDay'

const WorkoutMember = async({user}: {user: IUser}) => {
  //Todo, traer la fecha del servidor y enviarla como param al endpoint. Esto nos va a salvar de usar un estado clientside. Enviarlo por el fetch como ?day=DIA. -> monday, tuesday, ...
  const exercise = await getUserExercises({userId: user?._id!, quantity: 1});
  return (
      <section className={`workout flex flex-col gap-4 ${montserrat.className}`}>
        {
          exercise && Array.isArray(exercise) && exercise.length > 0
          ? <WorkDay user={user} exercise={exercise}/>
          : <RestDay />
        }
        </section>

          
  )
}

export default WorkoutMember