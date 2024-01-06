'use client';
import { useState } from "react";
import { IUser } from "../../../../interfaces/user";
import WorkoutModal from "../../../components/modals/WorkoutModal"
import WeekDaysNav from "./WeekDaysNav"
import WorkoutExercises from "./WorkoutExercises"
import { IExercise } from "../../../../interfaces/exercises";

interface IWorkoutContainer {
    user: IUser
    exercise: IExercise | null
}

const WorkoutContainer = ({exercise}: IWorkoutContainer) => {

    return (
            <WorkoutExercises
                exercise={exercise}
            />
    )
}

export default WorkoutContainer