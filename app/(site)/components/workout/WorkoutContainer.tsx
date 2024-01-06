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

const WorkoutContainer = ({user, exercise}: IWorkoutContainer) => {
    const [day, setDay] = useState("monday");

    return (
        <>
            <WeekDaysNav day={day} onDayChanged={setDay} />

            {user?.type == "trainer" && <WorkoutModal />}

            <WorkoutExercises
                exercise={exercise}
                selectedDay={day}
            />
        </>
    )
}

export default WorkoutContainer