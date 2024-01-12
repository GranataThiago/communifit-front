"use client";

import React, { useEffect, useReducer } from "react";
import { UserContext, userReducer } from ".";

import { createUserAndGetToken } from "../../services/users/register";
import { CreateUserReturn, ICreateUserResponse, LoginUserResponse } from "../../interfaces";
import { decryptUser } from "../../services/auth/decrypt";
import { loginUser } from "../../services/auth/login";
import { useCookies } from "react-cookie";
import { useRouter } from "next/navigation";
import { IRegisterUser, IUser } from "../../interfaces/user";

export interface IUserState {
	token: string | null;
	user: IUser | null;
}

const USER_INITIAL_STATE: IUserState = {
	token: null,
	user: null,
};

export default function UserProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const router = useRouter();
	const [state, dispatch] = useReducer(userReducer, USER_INITIAL_STATE);
	const [cookies, setCookie, removeCookie] = useCookies(["token", "user"]);

	useEffect(() => {
		decryptUserData();
	}, []);

  const register = async (user: IRegisterUser): Promise<CreateUserReturn> => {
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

		setCookie("token", data.token, {
			path: "/",
		});

		const foundDecryptUser = await decryptUser({ token: data.token });
		setCookie('user', foundDecryptUser, {
					path: "/"
		})

		dispatch({
			type: "[USER] Login",
			payload: { token: data.token, user: { ...user, image: null } },
		});

		return { 
			ok: true,
			status_code: data.status_code,
			msg: data.msg
		};
    } catch (err) {
      return { ok: false, msg: err as string, status_code: '500' };
    }
  };

	const login = async (
		email: string,
		password: string
	): Promise<LoginUserResponse> => {
		try {
			const data: LoginUserResponse = await loginUser({
				email,
				password,
			});

			if (!data || !data.token) {
				return {
					ok: false,
				};
			}

			const { token } = data;

			setCookie("token", data.token, {
				path: "/",
			});

			const userData = await decryptUser({ token });
			let user = null;
			if (userData && userData.user) {
				user = userData.user;
			}
			
			setCookie('user', userData, {
				path: "/"
			})

			dispatch({ type: "[USER] Login", payload: { user, token } });

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

	const decryptUserData = async () => {
		try {
			const { token } = cookies;
			if (!token) return;

			const data = await decryptUser({ token });
			if (!data) return;

			dispatch({
				type: "[USER] Login",
				payload: { token, user: data.user },
			});
		} catch (err) {
			console.log(err);
			removeCookie("token");
			return;
		}
	};

	const logout = () => {
		try {
			dispatch({ type: "[USER] Logout" });
			removeCookie("token");
			removeCookie("user")
			router.push("/auth/login");
			return true;
		} catch (err) {
			return false;
		}
	};

	return (
		<UserContext.Provider
			value={{
				...state,
				login,
				register,
				decryptUserData,
				logout,
			}}
		>
			{children}
		</UserContext.Provider>
	);
}
