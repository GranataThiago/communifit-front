import apiInstance from "../../app/api";
import { ILoginUserFetch, LoginUserResponse } from "../../interfaces";

interface ILoginUser {
  email: string;
  password: string;
}

export const loginUser = async ({
  email,
  password,
}: ILoginUser): Promise<LoginUserResponse> => {
  let user: LoginUserResponse = null;
  try {
    const response = await apiInstance.post<ILoginUserFetch>(`/auth/login`, {
      email,
      password,
    });
    user = response.data;
  } catch (error) {
    console.log(error);
  }

  return user;
};
