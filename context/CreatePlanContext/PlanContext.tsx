"use client";

import { createContext, useContext } from "react";
import { Exercise, WorkoutState } from "../../interfaces/exercises";

interface PlanContextProps {
  workout: WorkoutState | null;
  setWorkoutPlan: (workout: WorkoutState) => void;
  addExerciseToPlan: (exercise: Exercise, day: string) => void;
}

export const PlanContext = createContext<PlanContextProps>(
  {} as PlanContextProps,
);

export const usePlanContext = () => useContext(PlanContext);
