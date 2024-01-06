import { IExercise } from "../../../../interfaces/exercises"

interface IWorkoutExercises {
    exercise: IExercise | null
    selectedDay: string;
}

const WorkoutExercises = ({exercise = null, selectedDay}: IWorkoutExercises) => {
    return (
        exercise?(
           
                <li
                    className='border border-gray-300 rounded-md p-2 flex justify-between items-center'
                >
                    <p className='flex flex-col'>
                        {exercise.name}
                        <span>{exercise.quantity}</span>
                    </p>

                    <p>{exercise.weight}</p>
                </li>
            
        ):(<p> No workout.</p>)
    )
}

export default WorkoutExercises