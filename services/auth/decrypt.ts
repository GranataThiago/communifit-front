import apiInstance from "../../app/api";
import { DecryptUserResponse, IDecryptUserFetch } from "../../interfaces/services/auth/decrypt";

interface IDecryptUser {
    token: string;
}

export const decryptUser = async({token}: IDecryptUser):Promise<DecryptUserResponse> => {
    let user:DecryptUserResponse = null;
    try {
        const response = await apiInstance.get<IDecryptUserFetch>(`/auth/decrypt`, { headers: { token }});
        user = response.data;
    } catch (error) {
        console.log(error)
    }

    return user;
}