import { WorkoutState, Exercise } from "../../interfaces/exercises";
import { PlanState } from "./PlanProvider";

export type PlanActionType = { type: '[PLAN] Set', payload: WorkoutState } | { type: '[PLAN] Add Exercise', payload: {exercise: Exercise, day: string} }

export const planReducer = (state: PlanState, action: PlanActionType): PlanState => {
    switch(action.type){
      case '[PLAN] Set':
        return {...state, ...action.payload };
      case '[PLAN] Add Exercise':
        const newWorkout: WorkoutState = {...state.workout}
        const { exercise, day } = action.payload;
        newWorkout[day] = [...newWorkout[day], exercise]
        return {...state, workout: newWorkout}
      default: 
    return state;
  }
}