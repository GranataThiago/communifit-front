import apiInstance from "../../app/api";
import { ICreateUserFetch, ICreateUserResponse } from "../../interfaces";
import { RegisterUser } from "../../interfaces/user";

interface ICreateUser {
    user: RegisterUser;
}

export const createUserAndGetToken = async({user}:ICreateUser):Promise<ICreateUserResponse> => {
    let response: ICreateUserResponse = null; 
    try {
        const apiResponse = await apiInstance.post<ICreateUserFetch>(`/users`, user);
        if(apiResponse.data) response = apiResponse.data; 
        
    } catch (error) {
        console.log(error)
    }

    return response;
    
}