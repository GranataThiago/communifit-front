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
	try {
		const response: LoginUserResponse = await apiInstance.post(`/auth/login`, {
			email,
			password,
		});
		console.log(response);
	} catch (error) {
		console.log(error);
	}
	return { ok: false, message: "" };
};
