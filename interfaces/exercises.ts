export interface Exercise {
  name: string;
  quantity: string;
  weight: string;
  observations: string;
}

interface Workout {
  day: string;
  exercises: Exercise[];
}

export type WorkoutState = { [day: string]: Exercise[] };
