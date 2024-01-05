'use client';
import { useState } from "react";
import { IUser } from "../../../../interfaces/user";
import WorkoutModal from "../../../components/modals/WorkoutModal"
import WeekDaysNav from "./WeekDaysNav"
import WorkoutExercises from "./WorkoutExercises"
import { IExercise } from "../../../../interfaces/exercises";

interface IWorkoutContainer {
    user: IUser
    exercises: IExercise[]
}

const WorkoutContainer = ({user, exercises}: IWorkoutContainer) => {
    const [day, setDay] = useState("monday");

    return (
        <>
            <WeekDaysNav day={day} onDayChanged={setDay} />

            {user?.type == "trainer" && <WorkoutModal />}

            <WorkoutExercises
                exercises={exercises}
                selectedDay={day}
            />
        </>
    )
}

export default WorkoutContainer