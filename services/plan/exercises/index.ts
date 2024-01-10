'use server'

import { API_KEY, API_URL } from "../../../utils";

import { IExercise } from "../../../interfaces/exercises";
import { cookies } from "next/headers";

interface IGetUserExercises {
	userId: number;
	quantity: number;
}

export const getUserExercises = async({userId, quantity}: IGetUserExercises) =>{
  
    let exercise: IExercise  | null = null;
    const cookieStore = cookies();
    const token = cookieStore.get('token')?.value;

    try {
        const foundData = await fetch(`${API_URL}/plans/exercises/${userId}?limit=${quantity}`, {
            method: "GET",
            headers: {
              token: token as string,
              "api-key": API_KEY as string,
            },
          });
        
          const data = await foundData.json();
          exercise = data.exercises;
    } catch (error) {
        
    }
    return exercise
}