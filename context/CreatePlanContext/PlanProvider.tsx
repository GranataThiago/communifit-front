"use client";

import { useReducer } from "react";
import { PlanContext } from "./PlanContext";
import { planReducer } from "./planReducer";
import { IExercise, WorkoutState } from "../../interfaces/exercises";

export interface IPlanState {
  workout: WorkoutState | null;
}
const PLAN_INITIAL_STATE: IPlanState = {
  workout: {
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
    Sunday: [],
  },
};

export default function PlanProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(planReducer, PLAN_INITIAL_STATE);

  const setWorkoutPlan = (workout: WorkoutState) => {
    dispatch({ type: "[PLAN] Set", payload: workout });
  };

  const addExerciseToPlan = (exercise: IExercise, day: string) => {
    dispatch({ type: "[PLAN] Add Exercise", payload: { exercise, day } });
  };

  return (
    <PlanContext.Provider
      value={{
        ...state,
        setWorkoutPlan,
        addExerciseToPlan,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
}
