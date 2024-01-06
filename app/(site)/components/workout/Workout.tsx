"use client";

import React, { useEffect, useState } from "react";

import { WEEK_DAYS } from "../../../../helpers/week-days";
import { montserrat } from "../../../components/fonts";
import { usePlanContext } from "../../../../context/CreatePlanContext/PlanContext";
import { useUserContext } from "../../../../context/UserContext";
import useWorkoutModal from "../../../hooks/modals/useWorkoutModal";
import WorkoutModal from "../../../components/modals/WorkoutModal";

const Workout = () => {
	const { user } = useUserContext();

	const [day, setDay] = useState("Monday");
	const { workout, addExerciseToPlan } = usePlanContext();
	const workoutModal = useWorkoutModal();

	useEffect(() => {
		if (!workoutModal.exercise) return;
		addExerciseToPlan(workoutModal.exercise, day);
	}, [workoutModal.exercise]);

	const onDayChanged = (selectedDay: string) => {
		setDay(selectedDay);
	};

	return (
		<section
			className={`workout flex flex-col gap-2 pb-6 ${montserrat.className}`}
		>
			<ul className='flex gap-3 overflow-x-scroll no-scrollbar'>
				{WEEK_DAYS.map((weekDay, index) => (
					<li
						key={index}
						onClick={() => onDayChanged(weekDay)}
						className={`font-normal ${
							day === weekDay ? "text-surface-light" : "text-gray-300"
						}`}
					>
						{weekDay}
					</li>
				))}
			</ul>

			{user?.type == "trainer" && <WorkoutModal />}

			<ul>
				{workout?.[day].map((ex, index) => (
					<li
						key={index}
						className='border border-gray-300 rounded-md p-2 flex justify-between items-center'
					>
						<p className='flex flex-col'>
							{ex.name}
							<span>{ex.quantity}</span>
						</p>

						<p>{ex.weight}</p>
					</li>
				))}
			</ul>
		</section>
	);
};

export default Workout;