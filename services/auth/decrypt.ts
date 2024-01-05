import apiInstance from "../../app/api";
import {
  DecryptUserResponse,
  IDecryptUserFetch,
} from "../../interfaces/services/auth/decrypt";

interface IDecryptUser {
  token: string;
}

export const decryptUser = async ({
  token,
}: IDecryptUser): Promise<DecryptUserResponse> => {
  let user: DecryptUserResponse = null;
  try {
    apiInstance.defaults.headers.common = { 'token': token };
    const response = await apiInstance.get<IDecryptUserFetch>(`/auth/decrypt`);
    user = response.data;
  } catch (error) {
    console.log(error);
  }

  return user;
};
