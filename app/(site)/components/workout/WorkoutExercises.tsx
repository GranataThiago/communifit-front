import { IExercise } from "../../../../interfaces/exercises"

interface IWorkoutExercises {
    exercise: IExercise | null
}

const WorkoutExercises = ({ exercise = null }: IWorkoutExercises) => {

    const getContent = () => {
        if (exercise) {
            return (
                <>
                    {exercise.name}
                    <span>{exercise.quantity} x {exercise.weight}</span>
                </>
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