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



export const verifyCode = async ({email, code}: {email: string, code: string[]}): Promise<IRecoverPasswordResponse> => {
  let response: IRecoverPasswordResponse = null;
  try {
   const apiResponse = await apiInstance.post<IRecoverPasswordFetch>(
      `/users/reset-password/${Number(code.join(""))}/verify`,
      {
        email,
      }
    );
    if (apiResponse.data) response = apiResponse.data; 
    console.log(response)
  } catch (error) {
    console.log(error);
  }

  return response;
};



export const changePassword = async ({email, code, password, confirmPassword}: {email: string, code: string[], password: string, confirmPassword:string}): Promise<IRecoverPasswordResponse> => {
  let response: IRecoverPasswordResponse = null;
  try {
   const apiResponse = await apiInstance.post<IRecoverPasswordFetch>(
      `/users/reset-password/${Number(code.join(""))}`,
      {
        email,
        password,
        confirmPassword
      }
    );
    if (apiResponse.data) response = apiResponse.data; 
    console.log(response)
  } catch (error) {
    console.log(error);
  }

  return response;
};
