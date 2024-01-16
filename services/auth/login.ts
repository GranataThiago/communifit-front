"use server"
import { LoginUserResponse } from "../../interfaces";
import apiInstance from "../../app/api";
import { cookies } from "next/headers";
import { decryptUser } from "./decrypt";

interface ILoginUser {
	email: string;
	password: string;
}

const loginUser = async (
	email: string,
	password: string
): Promise<LoginUserResponse> => {
	try {
		const data: LoginUserResponse = await login({
			email,
			password,
		});

		if (!data || !data.token) {
			return {
				ok: false,
			};
		}

		const { token } = data;

		cookies().set('token', data.token, {
			path: '/'
		})

		const userData = await decryptUser({ token });
		let user = null;
		if (userData && userData.user) {
			user = userData.user;
		}
		
		cookies().set('user', JSON.stringify(userData), {
			path: '/'
		})

		return data;
	} catch (error: any) {
		if (error.response) {
			return {
				ok: false,
				message: error.response.data.message,
			};
		} else {
			return {
				ok: false,
				message: "An error has occurred, we apologize for any inconvenience.",
			};
		}
	}
};

const login = async ({
	email,
	password,
}: ILoginUser): Promise<LoginUserResponse> => {
	const { data } = await apiInstance.post(`/auth/login`, {
		email,
		password,
	});

	apiInstance.defaults.headers.common = { 'token': data.token };

	return data;
};

export default loginUser;