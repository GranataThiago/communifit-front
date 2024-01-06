import { IExercise } from "../../../../interfaces/exercises"

interface IWorkoutExercises {
    exercise: IExercise | null
}

const WorkoutExercises = ({ exercise = null }: IWorkoutExercises) => {
    exercise = null;
    const getContent = () => {
        if (exercise && Array.isArray(exercise)) { //No hay problema con esto. Siempre pero siempre algo va a tener.
            return (
                <div id="exercise" className="flex flex-wrap items-center gap-1">
                    {exercise[0].exercise}
                    <span>{exercise[0].quantity} x {exercise[0].weight}</span>
                </div>
            )
        } else {
            return (
                'No workout found.'
            )
        }
    }
    return (
        <p className='text-primary text-2xl font-medium flex justify-between '>
            {getContent()}
        </p>

    )
}

export default WorkoutExercises