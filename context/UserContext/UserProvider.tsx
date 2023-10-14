"use client";

import { ICreateUserResponse, LoginUserResponse } from "../../interfaces";
import React, { useEffect, useReducer } from "react";
import { RegisterUser, User } from "../../interfaces/user";
import { UserContext, userReducer } from ".";

import { createUserAndGetToken } from "../../services/users/register";
import { decryptUser } from "../../services/auth/decrypt";
import { loginUser } from "../../services/auth/login";
import { useCookies } from "react-cookie";

export interface UserState {
	token: string | null;
	user: User | null;
}

const USER_INITIAL_STATE: UserState = {
	token: null,
	user: null,
};

export default function UserProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [state, dispatch] = useReducer(userReducer, USER_INITIAL_STATE);
	const [cookies, setCookie, removeCookie] = useCookies(["token"]);

	useEffect(() => {
		decryptUserData();
	}, []);

	const register = async (user: RegisterUser) => {
		const { objective = null, ...userData } = user;
		const data: ICreateUserResponse = await createUserAndGetToken({
			user: userData,
		});
		if (!data || !data.token) return alert("Create user error");

		dispatch({
			type: "[USER] Login",
			payload: { token: data.token, user: { ...user, image: "asd" } },
		});
	};

	const login = async (
		email: string,
		password: string
	): Promise<LoginUserResponse> => {
		try {
			const data: LoginUserResponse | null = await loginUser({
				email,
				password,
			});

			if (!data || !data.token) {
				return null;
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

			dispatch({ type: "[USER] Login", payload: { user, token } });

			return data;
		} catch (err) {
			console.log(err);
			removeCookie("token");
			return null;
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
