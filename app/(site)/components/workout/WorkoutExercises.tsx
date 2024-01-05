import { IExercise } from "../../../../interfaces/exercises"

interface IWorkoutExercises {
    exercises: IExercise[]
    selectedDay: string;
}

const WorkoutExercises = ({exercises, selectedDay}: IWorkoutExercises) => {
    return (
        exercises.length>0?(
            <ul>
            {exercises.filter(ex => ex.day === selectedDay.toLowerCase()).map((ex: IExercise, index: number) => (
                <li
                    key={index}
                    className='border border-gray-300 rounded-md p-2 flex justify-between items-center'
                >
                    <p className='flex flex-col'>
                        {ex.name}
                        <span>{ex.quantity}</span>
                    </p>

                    <p>{ex.weight}</p>
                </li>
            ))}
        </ul>
        ):(<p> No workout.</p>)
    )
}

export default WorkoutExercises