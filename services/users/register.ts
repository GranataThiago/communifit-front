import apiInstance from "../../app/api";
import { ICreateUserFetch, ICreateUserResponse } from "../../interfaces";
import { IRegisterUser } from "../../interfaces/user";

interface ICreateUser {
  user: IRegisterUser;
}

export const createUserAndGetToken = async ({
  user,
}: ICreateUser): Promise<ICreateUserResponse> => {
  let response: ICreateUserResponse = null;
  try {
    const apiResponse = await apiInstance.post<ICreateUserFetch>(
      `/users`,
      user,
    );

    if (apiResponse.data) response = apiResponse.data;
  } catch (err: any) {
    const error = err.response.data;
    return {
      ok: false,
      msg: error.msg,
      status_code: error.status_code,
      token: ''
    }
  }

  return response;
};
