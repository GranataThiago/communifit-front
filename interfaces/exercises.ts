export interface IExercise {
  name: string;
  quantity: string;
  weight: string;
  observations: string;
}

interface IWorkout {
  day: string;
  exercises: IExercise[];
}

export type WorkoutState = { [day: string]: IExercise[] };
