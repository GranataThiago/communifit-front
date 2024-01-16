"use server"

import { cookies } from "next/headers";
import { CreateUserReturn, ICreateUserResponse, LoginUserResponse } from "../../interfaces";
import { IRegisterUser } from "../../interfaces/user";
import { createUserAndGetToken } from "../users/register";

const registerUser = async (user: IRegisterUser): Promise<CreateUserReturn> => {
    try {
		const { objective = null, ...userData } = user;
		const data: ICreateUserResponse = await createUserAndGetToken({
			user: userData,
		});

		if (!data || !data.token){
			return {
				ok: false,
				msg: data?.msg || 'Oops something went wrong',
				status_code: data?.status_code || '500',
			};
		}

		cookies().set('token', data.token, {
			path: '/'
		})

		return { 
			ok: true,
			status_code: data.status_code,
			msg: data.msg
		};
    } catch (err) {
      return { ok: false, msg: err as string, status_code: '500' };
    }
};

export default registerUser;