'use server'
import { cookies } from "next/headers";
import { IExercise } from "../../../interfaces/exercises";
import { API_KEY, API_URL } from "../../../utils";

interface IGetUserExercises {
    userId: string;
}

export const getUserExercises = async({userId}: IGetUserExercises) =>{
  
    let exercises: IExercise[] = [];
    const cookieStore = cookies();
    const token = cookieStore.get('token')?.value;

    try {
        const foundData = await fetch(`${API_URL}/plans/exercises/${userId}`, {
            method: "GET",
            headers: {
              token: token as string,
              "api-key": API_KEY as string,
            },
          });
        
          const data = await foundData.json();
          exercises = data.exercises;
    } catch (error) {
        
    }
    return exercises
}