import { WorkoutState, IExercise } from "../../interfaces/exercises";
import { IPlanState } from "./PlanProvider";

export type PlanActionType =
  | { type: "[PLAN] Set"; payload: WorkoutState }
  | {
      type: "[PLAN] Add Exercise";
      payload: { exercise: IExercise; day: string };
    };

export const planReducer = (
  state: IPlanState,
  action: PlanActionType,
): IPlanState => {
  switch (action.type) {
    case "[PLAN] Set":
      return { ...state, ...action.payload };
    case "[PLAN] Add Exercise":
      const newWorkout: WorkoutState = { ...state.workout };
      const { exercise, day } = action.payload;
      newWorkout[day] = [...newWorkout[day], exercise];
      return { ...state, workout: newWorkout };
    default:
      return state;
  }
};
