import { cookies } from "next/headers";
import {  IGetClientsByTrainerFetch } from "../../interfaces/services/trainer/get-clients";
import { API_KEY, API_URL } from "../../utils";

  
interface IGetClientsByTrainer {
    userId: string;
}

export const getClientsByTrainer = async({userId}: IGetClientsByTrainer): Promise<IGetClientsByTrainerFetch | null> => {
    let clients: IGetClientsByTrainerFetch  | null = null;
    const cookieStore = cookies();
    const token = cookieStore.get('token')?.value;
    try{
        const request = await fetch(`${API_URL}/users/${userId}/clients`, {
            method: "GET",
            headers: {
              token: token as string,
              "api-key": API_KEY as string,
            },
            next: {
                revalidate: 0
            }
          });
        const data:IGetClientsByTrainerFetch = await request.json();
        clients = data;
    }catch(err){    
        console.log(err)
    }

    return clients;
}