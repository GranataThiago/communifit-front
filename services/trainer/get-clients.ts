import apiInstance from "../../app/api";
import { GetClientsByTrainerResponse } from "../../interfaces/services/trainer/get-clients";

  
interface IGetClientsByTrainer {
    username: string;
}

export const getClientsByTrainer = async({username}: IGetClientsByTrainer): Promise<GetClientsByTrainerResponse> => {
    let clients: GetClientsByTrainerResponse = null;
    try{
        const response = await apiInstance.get(`/users/${username}`);
            clients = response.data.clients;
    }catch(err){    
        console.log(err)
    }

    return clients;
}