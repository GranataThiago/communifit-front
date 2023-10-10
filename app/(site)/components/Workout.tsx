"use client"
import React, {
	LiHTMLAttributes,
	useEffect,
	useReducer,
	useState,
} from "react";
import useWorkoutModal from "../../hooks/modals/useWorkoutModal";
import { useUserContext } from "../../../context/UserContext";
import { Button, montserrat } from "../../components";

type WorkoutState = { [day: string]: Exercise[] };

const WEEK_DAYS = [
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
	"Sunday",
];

export const Workout = () => {
	const [day, setDay] = useState("Monday");
	const [exercises, setExercises] = useState<WorkoutState>({
		Monday: [],
		Tuesday: [],
		Wednesday: [],
		Thursday: [],
		Friday: [],
		Saturday: [],
		Sunday: [],
	});

	const { user } = useUserContext();
	const workoutModal = useWorkoutModal();

	useEffect(() => {
		if (!workoutModal.exercise) return;

		// Copy of state
		const updatedExercises = { ...exercises };

		// Get actually day
		const currentDayExercises = updatedExercises[day];

		// Add exercise into now
		updatedExercises[day] = [...currentDayExercises, workoutModal.exercise];

		// Update state
		setExercises(updatedExercises);
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
							day === weekDay ? "text-black" : "text-gray-300"
						}`}
					>
						{weekDay}
					</li>
				))}
			</ul>

			{
				user?.type == "trainer" && (
					<Button
						variant='filled'
						className='py-2 w-1/3 ml-auto'
						onClick={workoutModal.onOpen}
					>
						Add
					</Button>
				) /* TODO: Check if its owner or authorized trainer from community */
			}

			<ul>
				{exercises[day].map((ex, index) => (
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