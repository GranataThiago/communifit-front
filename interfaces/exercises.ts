export interface IExercise {
  _id: string;
  name: string;
  quantity: string;
  weight: string;
  day: string;
  observations: string;
}

interface IWorkout {
  day: string;
  exercises: IExercise[];
}

export type WorkoutState = { [day: string]: IExercise[] };
