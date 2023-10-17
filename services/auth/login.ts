import { LoginUserResponse } from "../../interfaces";
import apiInstance from "../../app/api";

interface ILoginUser {
	email: string;
	password: string;
}

export const loginUser = async ({
	email,
	password,
}: ILoginUser): Promise<LoginUserResponse> => {
	const { data } = await apiInstance.post(`/auth/login`, {
		email,
		password,
	});
	return data;
};

