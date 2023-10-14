import apiInstance from "../../../app/api";
import { IRecoverPasswordFetch, IRecoverPasswordResponse } from "../../../interfaces/services/users/recoverPassword";


export const recoverPassword = async ({email}: {email: string}): Promise<IRecoverPasswordResponse> => {
  let response: IRecoverPasswordResponse = null;
  try {
    const apiResponse = await apiInstance.post<IRecoverPasswordFetch>(
      `/users/reset-password`,
      {
        email
      }
    );
    if (apiResponse.data) response = apiResponse.data;
  } catch (error) {
    console.log(error);
  }

  return response;
};
